import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const TENANT_ID = Deno.env.get("MS_TENANT_ID");
const CLIENT_ID = Deno.env.get("MS_CLIENT_ID");
const CLIENT_SECRET = Deno.env.get("MS_CLIENT_SECRET");
const SENDER = Deno.env.get("MS_SENDER");

async function getAccessToken(): Promise<string> {
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
  if (!res.ok) throw new Error(`Token failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET || !SENDER) {
      throw new Error("Missing MS_* env vars");
    }

    const now = new Date().toISOString();
    const tier = "Blind bird";
    const price = "€249,00";

    const rows: Array<[string, string]> = [
      ["Test timestamp (UTC)", now],
      ["Kotizacija", `${tier} (${price})`],
      ["Tip", "Pravna osoba"],
      ["Ime i prezime", "DAILY TEST - Automatska provjera"],
      ["Pozicija", "Test"],
      ["E-mail", "test@peopleandculture.hr"],
      ["Telefon", "+385 00 000 0000"],
      ["Naziv tvrtke", "TEST d.o.o."],
      ["Adresa tvrtke", "Testna ulica 1"],
      ["Grad i poštanski broj", "10000 Zagreb"],
      ["OIB", "00000000000"],
    ];

    const tableRows = rows
      .map(
        ([l, v]) =>
          `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;white-space:nowrap;">${l}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${v}</td></tr>`,
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111;">
        <div style="background:#fef3c7;border:1px solid #f59e0b;padding:12px 16px;border-radius:8px;margin-bottom:16px;">
          <strong>[DAILY TEST]</strong> Ovo je automatska dnevna provjera dolaska prijava za kotizacije. Ako vidiš ovu poruku, sustav prijava radi ispravno.
        </div>
        <h2 style="margin:0 0 16px;">[DAILY TEST] Nova prijava - ${tier}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:640px;font-size:14px;">
          ${tableRows}
        </table>
      </div>`;

    const token = await getAccessToken();
    const sendUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(SENDER!)}/sendMail`;

    const message = {
      subject: `[DAILY TEST] Provjera prijava - ${now.slice(0, 10)}`,
      body: { contentType: "HTML", content: html },
      toRecipients: [{ emailAddress: { address: "test@peopleandculture.hr" } }],
    };

    const graphRes = await fetch(sendUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ message, saveToSentItems: true }),
    });

    if (graphRes.status !== 202) {
      const errText = await graphRes.text();
      throw new Error(`Graph sendMail failed (${graphRes.status}): ${errText}`);
    }

    return new Response(JSON.stringify({ success: true, sentAt: now }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("daily-test-registration error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
