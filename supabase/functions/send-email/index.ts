import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

interface Recipient {
  email: string;
  name?: string;
}

interface Attachment {
  name: string;
  contentType: string;
  contentBytes: string; // base64
}

interface EmailPayload {
  to: string | string[] | Recipient | Recipient[];
  subject: string;
  html: string;
  cc?: string | string[] | Recipient | Recipient[];
  bcc?: string | string[] | Recipient | Recipient[];
  replyTo?: string | string[] | Recipient | Recipient[];
  attachments?: Attachment[];
}

const TENANT_ID = Deno.env.get("MS_TENANT_ID");
const CLIENT_ID = Deno.env.get("MS_CLIENT_ID");
const CLIENT_SECRET = Deno.env.get("MS_CLIENT_SECRET");
const SENDER = Deno.env.get("MS_SENDER");

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.token;
  }

  const tokenUrl = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
  const body = new URLSearchParams({
    client_id: CLIENT_ID!,
    client_secret: CLIENT_SECRET!,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      `Token request failed (${res.status}): ${data.error_description ?? data.error ?? JSON.stringify(data)}`,
    );
  }

  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return cachedToken.token;
}

function toRecipients(input?: EmailPayload["to"]) {
  if (!input) return [];
  const arr = Array.isArray(input) ? input : [input];
  return arr.map((r) => {
    if (typeof r === "string") return { emailAddress: { address: r } };
    return { emailAddress: { address: r.email, name: r.name } };
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET || !SENDER) {
      return new Response(
        JSON.stringify({
          error:
            "Server is missing one or more required env vars: MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MS_SENDER",
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const payload = (await req.json()) as EmailPayload;

    if (!payload.to || !payload.subject || !payload.html) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: to, subject, html" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const token = await getAccessToken();

    const message: Record<string, unknown> = {
      subject: payload.subject,
      body: { contentType: "HTML", content: payload.html },
      toRecipients: toRecipients(payload.to),
    };

    if (payload.cc) message.ccRecipients = toRecipients(payload.cc);
    if (payload.bcc) message.bccRecipients = toRecipients(payload.bcc);
    if (payload.replyTo) message.replyTo = toRecipients(payload.replyTo);

    if (payload.attachments?.length) {
      message.attachments = payload.attachments.map((a) => ({
        "@odata.type": "#microsoft.graph.fileAttachment",
        name: a.name,
        contentType: a.contentType,
        contentBytes: a.contentBytes,
      }));
    }

    const sendUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(SENDER)}/sendMail`;
    const graphRes = await fetch(sendUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, saveToSentItems: true }),
    });

    if (graphRes.status === 202) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const errText = await graphRes.text();
    let errJson: unknown;
    try {
      errJson = JSON.parse(errText);
    } catch {
      errJson = errText;
    }

    console.error("Graph sendMail failed:", graphRes.status, errJson);
    return new Response(
      JSON.stringify({
        error: "Microsoft Graph sendMail failed",
        status: graphRes.status,
        details: errJson,
      }),
      { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("send-email error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
