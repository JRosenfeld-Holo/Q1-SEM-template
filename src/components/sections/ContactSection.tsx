"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const PORTAL_ID = "49396559";
const FORM_ID = "5eaff5cf-059f-4b6f-8eaa-385e4d6abc29";
const SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

const TRUST_POINTS = [
  "Immediately book a meeting with a connectivity specialist",
  "No long-term contracts required",
  "Free developer SIMs to test with",
];

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-medium text-white/70 tracking-wide"
        style={{ fontFamily: "var(--font-inter-var)" }}
      >
        {label}{required && <span className="text-brand-lime ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.14] text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-lime/50 focus:bg-white/[0.08] transition-all duration-200"
        style={{ fontFamily: "var(--font-inter-var)" }}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-medium text-white/70 tracking-wide"
        style={{ fontFamily: "var(--font-inter-var)" }}
      >
        {label}{required && <span className="text-brand-lime ml-0.5">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.14] text-sm focus:outline-none focus:border-brand-lime/50 focus:bg-white/[0.08] transition-all duration-200 cursor-pointer appearance-none"
        style={{
          fontFamily: "var(--font-inter-var)",
          color: value ? "#ffffff" : "rgba(255,255,255,0.25)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
        }}
      >
        <option value="" disabled style={{ background: "#12121a", color: "rgba(255,255,255,0.4)" }}>Select…</option>
        {options.map((o) => (
          <option key={o} value={o} style={{ background: "#12121a", color: "#ffffff" }}>{o}</option>
        ))}
      </select>
    </div>
  );
}

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  company: string;
  jobtitle: string;
  phone: string;
  num_employees: string;
  how_did_you_hear_about_us: string;
  message: string;
};

const EMPTY: FormData = {
  firstname: "", lastname: "", email: "", company: "",
  jobtitle: "", phone: "", num_employees: "", how_did_you_hear_about_us: "", message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const fields = (Object.keys(form) as (keyof FormData)[])
      .filter((k) => form[k])
      .map((k) => ({ name: k, value: form[k] }));

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: typeof window !== "undefined" ? window.location.href : "",
            pageName: "Hologram SEM Landing Page",
          },
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(EMPTY);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left: copy — 2 cols */}
          <FadeIn className="lg:col-span-2 flex flex-col gap-6 lg:sticky lg:top-28">
            <p
              className="text-xs text-brand-lime tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-messina-var)" }}
            >
              Contact sales
            </p>
            <h2
              className="font-medium text-4xl md:text-5xl text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-roobert-var)" }}
            >
              Talk to an IoT expert.
            </h2>
            <p
              className="text-white/50 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              Tell us about your deployment. We&apos;ll match you with the
              right connectivity plan and get you up and running fast.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="6" stroke="#bffd11" strokeWidth="1.2"/>
                      <path d="M4.5 7L6.5 9L9.5 5" stroke="#bffd11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm text-white/55" style={{ fontFamily: "var(--font-inter-var)" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right: form — 3 cols */}
          <FadeIn delay={0.08} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-8 md:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12L10 17L19 7" stroke="#bffd11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg mb-1" style={{ fontFamily: "var(--font-roobert-var)" }}>
                      We&apos;ll be in touch soon.
                    </p>
                    <p className="text-white/45 text-sm" style={{ fontFamily: "var(--font-inter-var)" }}>
                      Expect a response within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="First name" name="firstname" placeholder="Jane" required value={form.firstname} onChange={set("firstname")} />
                    <InputField label="Last name" name="lastname" placeholder="Smith" required value={form.lastname} onChange={set("lastname")} />
                  </div>

                  {/* Email + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Work email" name="email" type="email" placeholder="jane@company.com" required value={form.email} onChange={set("email")} />
                    <InputField label="Company" name="company" placeholder="Acme Corp" required value={form.company} onChange={set("company")} />
                  </div>

                  {/* Title + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Job title" name="jobtitle" placeholder="Head of Engineering" value={form.jobtitle} onChange={set("jobtitle")} />
                    <InputField label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={set("phone")} />
                  </div>

                  {/* Device count + How did you hear */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SelectField
                      label="Estimated device count"
                      name="num_employees"
                      required
                      value={form.num_employees}
                      onChange={set("num_employees")}
                      options={["1–100", "100–1,000", "1,000–10,000", "10,000–100,000", "100,000+"]}
                    />
                    <SelectField
                      label="How did you hear about us?"
                      name="how_did_you_hear_about_us"
                      value={form.how_did_you_hear_about_us}
                      onChange={set("how_did_you_hear_about_us")}
                      options={["Google", "LLM (Claude/ChatGPT/Gemini)", "Reddit", "LinkedIn", "Event", "Word of Mouth"]}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium text-white/70 tracking-wide"
                      style={{ fontFamily: "var(--font-inter-var)" }}
                    >
                      Tell us about your use case
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Describe your deployment, industry, or connectivity challenge…"
                      value={form.message}
                      onChange={set("message")}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.14] text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-lime/50 focus:bg-white/[0.08] transition-all duration-200 resize-none"
                      style={{ fontFamily: "var(--font-inter-var)" }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm" style={{ fontFamily: "var(--font-inter-var)" }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-1 w-full inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-brand-lime text-black font-semibold text-sm cursor-pointer hover:shadow-lime-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: "var(--font-inter-var)" }}
                  >
                    {status === "submitting" ? "Sending…" : "Talk to an IoT expert"}
                  </button>

                  <p className="text-xs text-white/25 text-center" style={{ fontFamily: "var(--font-inter-var)" }}>
                    By submitting, you agree to Hologram&apos;s{" "}
                    <a href="https://www.hologram.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-lime/70 transition-colors underline underline-offset-2">
                      Privacy Policy
                    </a>.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

