import { FormEvent, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "@/contexts/LanguageContext";

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tierName: string;
  tierPrice: string;
}

const RegistrationDialog = ({ open, onOpenChange, tierName, tierPrice }: RegistrationDialogProps) => {
  const [personType, setPersonType] = useState<"individual" | "company">("company");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { t } = useLanguage();

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    companyAddress: "",
    cityPostal: "",
    companyOIB: "",
    position: "",
    email: "",
    phone: "",
    promoCode: "",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const lines = [
      `${t("reg.mailTicket")}: ${tierName} (${tierPrice})`,
      `${t("reg.mailType")}: ${personType === "individual" ? t("reg.individual") : t("reg.company")}`,
      "",
      `${t("reg.fullName").replace(" *", "")}: ${form.fullName}`,
      `${t("reg.companyName").replace(" *", "")}: ${form.companyName}`,
    ];

    if (personType === "company") {
      lines.push(`${t("reg.companyAddress").replace(" *", "")}: ${form.companyAddress}`);
      lines.push(`${t("reg.cityPostal").replace(" *", "")}: ${form.cityPostal}`);
      lines.push(`${t("reg.companyOIB").replace(" *", "")}: ${form.companyOIB}`);
    }

    lines.push(`${t("reg.position").replace(" *", "")}: ${form.position}`);
    lines.push(`E-mail: ${form.email}`);
    lines.push(`${t("reg.phone").replace(" *", "")}: ${form.phone}`);
    if (form.promoCode) lines.push(`${t("reg.promoCode")}: ${form.promoCode}`);

    const subject = encodeURIComponent(`${t("reg.mailSubjectPrefix")} - ${tierName} - ${form.fullName}`);
    const body = encodeURIComponent(lines.join("\n"));

    window.open(`mailto:horizons@peopleandculture.hr?subject=${subject}&body=${body}`, "_self");

    setIsSubmitting(false);
    onOpenChange(false);
    setShowSuccessDialog(true);
    setForm({
      fullName: "",
      companyName: "",
      companyAddress: "",
      cityPostal: "",
      companyOIB: "",
      position: "",
      email: "",
      phone: "",
      promoCode: "",
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">{t("reg.title")}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {t("reg.desc")}
              <br />
              {t("reg.descNote")}
            </DialogDescription>
          </DialogHeader>

          <div className="mb-2 px-1">
            <span className="text-sm font-semibold text-foreground">
              {t("reg.ticket")}: <span className="text-accent">{tierName}</span> — {tierPrice}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label className="font-semibold">{t("reg.selectType")}</Label>
              <RadioGroup
                value={personType}
                onValueChange={(v) => setPersonType(v as "individual" | "company")}
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="company" id="company" />
                  <Label htmlFor="company" className="cursor-pointer font-normal">{t("reg.company")}</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="individual" id="individual" />
                  <Label htmlFor="individual" className="cursor-pointer font-normal">{t("reg.individual")}</Label>
                </div>
              </RadioGroup>
            </div>

            {personType === "individual" && (
              <>
                <Field label={t("reg.fullName")} value={form.fullName} onChange={(v) => update("fullName", v)} required />
                <Field label={t("reg.email")} value={form.email} onChange={(v) => update("email", v)} required type="email" />
                <Field label={t("reg.phone")} value={form.phone} onChange={(v) => update("phone", v)} required type="tel" />
                <Field label={t("reg.companyNameIndividual")} value={form.companyName} onChange={(v) => update("companyName", v)} required />
                <Field label={t("reg.position")} value={form.position} onChange={(v) => update("position", v)} required />
                <Field label={t("reg.promoCode")} value={form.promoCode} onChange={(v) => update("promoCode", v)} />
              </>
            )}

            {personType === "company" && (
              <>
                <div className="pt-2 border-t border-border">
                  <Label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t("reg.personalData")}
                  </Label>
                </div>
                <Field label={t("reg.fullName")} value={form.fullName} onChange={(v) => update("fullName", v)} required />
                <Field label={t("reg.email")} value={form.email} onChange={(v) => update("email", v)} required type="email" />
                <Field label={t("reg.phone")} value={form.phone} onChange={(v) => update("phone", v)} required type="tel" />
                <Field label={t("reg.position")} value={form.position} onChange={(v) => update("position", v)} required />
                <Field label={t("reg.promoCode")} value={form.promoCode} onChange={(v) => update("promoCode", v)} />

                <div className="pt-2 border-t border-border">
                  <Label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t("reg.companyData")}
                  </Label>
                </div>
                <Field label={t("reg.companyName")} value={form.companyName} onChange={(v) => update("companyName", v)} required />
                <Field label={t("reg.companyAddress")} value={form.companyAddress} onChange={(v) => update("companyAddress", v)} required />
                <Field label={t("reg.cityPostal")} value={form.cityPostal} onChange={(v) => update("cityPostal", v)} required />
                <Field label={t("reg.companyOIB")} value={form.companyOIB} onChange={(v) => update("companyOIB", v)} required />
              </>
            )}

            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold">{t("reg.note")}</span> {t("reg.disclaimer")}
            </p>

            <Button type="submit" className="w-full py-6 text-base" disabled={isSubmitting}>
              {isSubmitting ? t("reg.submitting") : t("reg.submit")}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("reg.toastTitle")}</AlertDialogTitle>
            <AlertDialogDescription>{t("reg.toastDesc")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>{t("cookie.accept")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const Field = ({
  label,
  value,
  onChange,
  required = false,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) => (
  <div className="space-y-1.5">
    <Label className="text-sm">{label}</Label>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="bg-background"
    />
  </div>
);

export default RegistrationDialog;
