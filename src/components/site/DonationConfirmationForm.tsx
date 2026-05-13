import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { de as deLocale, enUS } from "date-fns/locale";
import { CalendarIcon, CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import type { Lang } from "@/content/site";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

const schema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  dob: z.date({ required_error: "required" }),
  street: z.string().trim().min(1).max(200),
  postalCode: z.string().trim().min(1).max(20),
  city: z.string().trim().min(1).max(100),
  country: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  amount: z.coerce.number().positive().max(1_000_000),
  donationDate: z.date({ required_error: "required" }),
  method: z.enum(["bank_transfer", "gofundme", "paypal", "other"]),
});

type Values = z.infer<typeof schema>;

export function DonationConfirmationForm({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const [submitted, setSubmitted] = React.useState(false);
  const locale = de ? deLocale : enUS;

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "", lastName: "", street: "", postalCode: "",
      city: "", country: de ? "Österreich" : "Austria", email: "",
      amount: undefined as unknown as number, method: undefined as unknown as Values["method"],
    },
  });

  const t = de
    ? {
        firstName: "Vorname", lastName: "Nachname", dob: "Geburtsdatum",
        street: "Straße und Hausnummer", postalCode: "Postleitzahl", city: "Ort",
        country: "Land", email: "E-Mail-Adresse",
        amount: "Spendenbetrag (€)", donationDate: "Spendendatum",
        method: "Zahlungsart", pickDate: "Datum wählen", pickMethod: "Bitte auswählen",
        m: { bank_transfer: "Banküberweisung", gofundme: "GoFundMe", paypal: "PayPal", other: "Sonstige" },
        submit: "Daten absenden",
        sending: "Wird gesendet…",
        required: "Pflichtfeld",
        invalidEmail: "Ungültige E-Mail-Adresse",
        invalidAmount: "Bitte einen gültigen Betrag eingeben",
        success: "Vielen Dank! Wir haben Ihre Daten erhalten und senden Ihnen die Spendenbestätigung innerhalb von 14 Tagen.",
        error: "Übermittlung fehlgeschlagen. Bitte später erneut versuchen oder per E-Mail kontaktieren.",
      }
    : {
        firstName: "First name", lastName: "Last name", dob: "Date of birth",
        street: "Street address", postalCode: "Postal code", city: "City",
        country: "Country", email: "Email address",
        amount: "Donation amount (€)", donationDate: "Donation date",
        method: "Donation method", pickDate: "Pick a date", pickMethod: "Select an option",
        m: { bank_transfer: "Bank Transfer", gofundme: "GoFundMe", paypal: "PayPal", other: "Other" },
        submit: "Submit Donation Details",
        sending: "Sending…",
        required: "Required",
        invalidEmail: "Invalid email address",
        invalidAmount: "Please enter a valid amount",
        success: "Thank you! We have received your details and will send your donation confirmation within 14 days.",
        error: "Submission failed. Please try again later or contact us by email.",
      };

  async function onSubmit(values: Values) {
    const payload = {
      ...values,
      dob: format(values.dob, "yyyy-MM-dd"),
      donationDate: format(values.donationDate, "yyyy-MM-dd"),
      method: t.m[values.method],
      _subject: `Spendenbestätigung – ${values.firstName} ${values.lastName}`,
    };
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
      toast.success(t.success);
    } catch {
      // mailto fallback so the donor never loses their data
      const body =
        `${t.firstName}: ${values.firstName}\n${t.lastName}: ${values.lastName}\n` +
        `${t.dob}: ${format(values.dob, "yyyy-MM-dd")}\n` +
        `${t.street}: ${values.street}\n${t.postalCode}: ${values.postalCode}\n` +
        `${t.city}: ${values.city}\n${t.country}: ${values.country}\n` +
        `${t.email}: ${values.email}\n${t.amount}: ${values.amount}\n` +
        `${t.donationDate}: ${format(values.donationDate, "yyyy-MM-dd")}\n` +
        `${t.method}: ${t.m[values.method]}`;
      window.location.href =
        `mailto:rpell@rarbmutation.org?subject=${encodeURIComponent("Spendenbestätigung – " + values.firstName + " " + values.lastName)}&body=${encodeURIComponent(body)}`;
      toast.error(t.error);
    }
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-3xl border border-border p-10 sm:p-12 shadow-[var(--shadow-card)] text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-teal/10 text-teal flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mt-5">
          {de ? "Daten erhalten" : "Details received"}
        </h3>
        <p className="mt-3 text-foreground/80 leading-relaxed max-w-xl mx-auto">{t.success}</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-3xl border border-border p-8 sm:p-10 shadow-[var(--shadow-card)]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <FormField control={form.control} name="firstName" render={({ field }) => (
              <FormItem>
                <FormLabel>{t.firstName} <span className="text-destructive">*</span></FormLabel>
                <FormControl><Input className="h-12" autoComplete="given-name" {...field} /></FormControl>
                <FormMessage>{form.formState.errors.firstName ? t.required : null}</FormMessage>
              </FormItem>
            )} />
            <FormField control={form.control} name="lastName" render={({ field }) => (
              <FormItem>
                <FormLabel>{t.lastName} <span className="text-destructive">*</span></FormLabel>
                <FormControl><Input className="h-12" autoComplete="family-name" {...field} /></FormControl>
                <FormMessage>{form.formState.errors.lastName ? t.required : null}</FormMessage>
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="dob" render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{t.dob} <span className="text-destructive">*</span></FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button type="button" variant="outline"
                      className={cn("h-12 w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? format(field.value, "PPP", { locale }) : <span>{t.pickDate}</span>}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={field.value} onSelect={field.onChange}
                    captionLayout="dropdown-buttons" fromYear={1920} toYear={new Date().getFullYear()}
                    disabled={(d) => d > new Date() || d < new Date("1900-01-01")}
                    initialFocus className={cn("p-3 pointer-events-auto")} />
                </PopoverContent>
              </Popover>
              <FormMessage>{form.formState.errors.dob ? t.required : null}</FormMessage>
            </FormItem>
          )} />

          <FormField control={form.control} name="street" render={({ field }) => (
            <FormItem>
              <FormLabel>{t.street} <span className="text-destructive">*</span></FormLabel>
              <FormControl><Input className="h-12" autoComplete="street-address" {...field} /></FormControl>
              <FormMessage>{form.formState.errors.street ? t.required : null}</FormMessage>
            </FormItem>
          )} />

          <div className="grid sm:grid-cols-3 gap-5">
            <FormField control={form.control} name="postalCode" render={({ field }) => (
              <FormItem>
                <FormLabel>{t.postalCode} <span className="text-destructive">*</span></FormLabel>
                <FormControl><Input className="h-12" autoComplete="postal-code" {...field} /></FormControl>
                <FormMessage>{form.formState.errors.postalCode ? t.required : null}</FormMessage>
              </FormItem>
            )} />
            <FormField control={form.control} name="city" render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>{t.city} <span className="text-destructive">*</span></FormLabel>
                <FormControl><Input className="h-12" autoComplete="address-level2" {...field} /></FormControl>
                <FormMessage>{form.formState.errors.city ? t.required : null}</FormMessage>
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="country" render={({ field }) => (
            <FormItem>
              <FormLabel>{t.country} <span className="text-destructive">*</span></FormLabel>
              <FormControl><Input className="h-12" autoComplete="country-name" {...field} /></FormControl>
              <FormMessage>{form.formState.errors.country ? t.required : null}</FormMessage>
            </FormItem>
          )} />

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>{t.email} <span className="text-destructive">*</span></FormLabel>
              <FormControl><Input type="email" inputMode="email" className="h-12" autoComplete="email" {...field} /></FormControl>
              <FormMessage>{form.formState.errors.email ? t.invalidEmail : null}</FormMessage>
            </FormItem>
          )} />

          <div className="grid sm:grid-cols-2 gap-5">
            <FormField control={form.control} name="amount" render={({ field }) => (
              <FormItem>
                <FormLabel>{t.amount} <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input type="number" inputMode="decimal" min={1} step="0.01" className="h-12"
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.valueAsNumber)} />
                </FormControl>
                <FormMessage>{form.formState.errors.amount ? t.invalidAmount : null}</FormMessage>
              </FormItem>
            )} />

            <FormField control={form.control} name="donationDate" render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{t.donationDate} <span className="text-destructive">*</span></FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button type="button" variant="outline"
                        className={cn("h-12 w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, "PPP", { locale }) : <span>{t.pickDate}</span>}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={field.value} onSelect={field.onChange}
                      disabled={(d) => d > new Date() || d < new Date("2020-01-01")}
                      initialFocus className={cn("p-3 pointer-events-auto")} />
                  </PopoverContent>
                </Popover>
                <FormMessage>{form.formState.errors.donationDate ? t.required : null}</FormMessage>
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="method" render={({ field }) => (
            <FormItem>
              <FormLabel>{t.method} <span className="text-destructive">*</span></FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12"><SelectValue placeholder={t.pickMethod} /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="bank_transfer">{t.m.bank_transfer}</SelectItem>
                  <SelectItem value="gofundme">{t.m.gofundme}</SelectItem>
                  <SelectItem value="paypal">{t.m.paypal}</SelectItem>
                  <SelectItem value="other">{t.m.other}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage>{form.formState.errors.method ? t.required : null}</FormMessage>
            </FormItem>
          )} />

          <Button type="submit" disabled={form.formState.isSubmitting}
            className="w-full sm:w-auto h-12 px-8 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition shadow-md">
            <Send className="w-4 h-4 mr-2" />
            {form.formState.isSubmitting ? t.sending : t.submit}
          </Button>
        </form>
      </Form>
    </div>
  );
}
