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
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import type { Lang } from "@/content/site";

const schema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  dob: z.date({ required_error: "required" }),
  email: z.string().trim().email().max(255),
});

type Values = z.infer<typeof schema>;

export function DonationConfirmationForm({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const [submitted, setSubmitted] = React.useState(false);
  const locale = de ? deLocale : enUS;

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { firstName: "", lastName: "", email: "" },
  });

  const t = de
    ? {
        firstName: "Vorname", lastName: "Nachname", dob: "Geburtsdatum",
        email: "E-Mail-Adresse (für Rückfragen)",
        nameHint: "(beides wie auf dem Meldezettel vermerkt)",
        pickDate: "Datum wählen",
        submit: "Daten absenden",
        sending: "Wird gesendet…",
        required: "Pflichtfeld",
        invalidEmail: "Ungültige E-Mail-Adresse",
        success: "Vielen Dank! Wir haben Ihre Daten erhalten und senden Ihnen die Spendenbestätigung innerhalb von 14 Tagen.",
        error: "Übermittlung fehlgeschlagen. Bitte später erneut versuchen oder per E-Mail kontaktieren.",
      }
    : {
        firstName: "First name", lastName: "Last name", dob: "Date of birth",
        email: "Email address (for any queries)",
        nameHint: "(both as registered on your Meldezettel)",
        pickDate: "Pick a date",
        submit: "Submit Donation Details",
        sending: "Sending…",
        required: "Required",
        invalidEmail: "Invalid email address",
        success: "Thank you! We have received your details and will send your donation confirmation within 14 days.",
        error: "Submission failed. Please try again later or contact us by email.",
      };

  async function onSubmit(values: Values) {
    const payload = {
      ...values,
      dob: format(values.dob, "yyyy-MM-dd"),
    };
    try {
      const { data, error } = await supabase.functions.invoke("send-donation-confirmation", {
        body: payload,
      });
      if (error || (data && (data as { error?: unknown }).error)) {
        throw new Error(error?.message || "send failed");
      }
      setSubmitted(true);
      toast.success(t.success);
    } catch {
      const body =
        `${t.firstName}: ${values.firstName}\n${t.lastName}: ${values.lastName}\n` +
        `${t.dob}: ${format(values.dob, "yyyy-MM-dd")}\n` +
        `${t.email}: ${values.email}`;
      window.location.href =
        `mailto:rpell@rarbmutation.org,epell@rarbmutation.org?subject=${encodeURIComponent("Spendenbestätigung – " + values.firstName + " " + values.lastName)}&body=${encodeURIComponent(body)}`;
      toast.error(t.error);
    }
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-[var(--shadow-card)] text-center">
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
    <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-[var(--shadow-card)]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
          <p className="text-xs text-foreground/70 -mt-2">{t.nameHint}</p>

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

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>{t.email} <span className="text-destructive">*</span></FormLabel>
              <FormControl><Input type="email" inputMode="email" className="h-12" autoComplete="email" {...field} /></FormControl>
              <FormMessage>{form.formState.errors.email ? t.invalidEmail : null}</FormMessage>
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
