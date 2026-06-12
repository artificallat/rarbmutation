import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const RECIPIENTS = ["rpell@rarbmutation.org"];

const BodySchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  dob: z.string().min(1).max(20),
  email: z.string().trim().email().max(255),
});

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const d = parsed.data;

    const subject = `Spendenbestätigung – ${d.firstName} ${d.lastName}`;
    const rows: Array<[string, string]> = [
      ["Vorname", d.firstName],
      ["Nachname", d.lastName],
      ["Geburtsdatum", d.dob],
      ["E-Mail", d.email],
    ];

    const html = `
      <div style="font-family: Arial, sans-serif; color:#0f172a;">
        <h2 style="color:#0c2340;">Neue Spendenbestätigungs-Anfrage</h2>
        <table style="border-collapse:collapse;">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 12px;border:1px solid #e2e8f0;font-weight:bold;">${esc(k)}</td><td style="padding:6px 12px;border:1px solid #e2e8f0;">${esc(v)}</td></tr>`,
            )
            .join("")}
        </table>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Cure MCOPS12 <onboarding@resend.dev>",
        to: RECIPIENTS,
        reply_to: d.email,
        subject,
        html,
      }),
    });

    const resendBody = await resendRes.json().catch(() => ({}));
    if (!resendRes.ok) {
      console.error("Resend error", resendRes.status, resendBody);
      return new Response(
        JSON.stringify({ error: "Email send failed", details: resendBody }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ ok: true, id: resendBody?.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
