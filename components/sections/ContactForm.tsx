"use client";

import { useState } from "react";

type Fields = { name: string; email: string; subject: string; message: string };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Fields>>({});

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((p) => ({ ...p, [k]: e.target.value }));

  const validate = () => {
    const err: Partial<Fields> = {};
    if (!fields.name.trim()) err.name = "Required";
    if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email)) err.email = "Valid email required";
    if (!fields.message.trim()) err.message = "Required";
    return err;
  };

  const submit = () => {
    const err = validate();
    if (Object.keys(err).length) { setErrors(err); return; }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-[#161310] border border-[rgba(201,169,110,0.18)] rounded-[4px] p-10 text-center">
        <p className="font-playfair text-[2rem] text-[#c9a96e] font-normal mb-3">
          Thank you, {fields.name.split(" ")[0]}
        </p>
        <p className="font-dm text-[13px] text-[rgba(237,227,212,0.45)] leading-[1.8]">
          We&apos;ll be in touch soon.<br />See you at Moreno.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#161310] border border-[rgba(201,169,110,0.14)] rounded-[4px] p-7 md:p-8 flex flex-col gap-5">
      {(
        [
          { key: "name", label: "Your Name", type: "text", placeholder: "Ahmed or Sarah…" },
          { key: "email", label: "Email Address", type: "email", placeholder: "hello@example.com" },
          { key: "subject", label: "Subject", type: "text", placeholder: "Reservation, event…" },
        ] as const
      ).map((f) => (
        <div key={f.key}>
          <label className="font-dm text-[9px] tracking-[0.22em] uppercase text-[rgba(201,169,110,0.55)] block mb-1.5">
            {f.label}
          </label>
          <input
            type={f.type}
            value={fields[f.key]}
            onChange={set(f.key)}
            placeholder={f.placeholder}
            className={`w-full bg-[rgba(255,255,255,0.025)] border rounded-sm py-3 px-3.5 font-dm text-[13px] text-[#ede3d4] placeholder-[rgba(237,227,212,0.28)] outline-none transition-colors ${
              errors[f.key]
                ? "border-[rgba(201,169,110,0.6)]"
                : "border-[rgba(201,169,110,0.18)] focus:border-[rgba(201,169,110,0.5)]"
            }`}
          />
        </div>
      ))}

      <div>
        <label className="font-dm text-[9px] tracking-[0.22em] uppercase text-[rgba(201,169,110,0.55)] block mb-1.5">
          Message
        </label>
        <textarea
          rows={5}
          value={fields.message}
          onChange={set("message")}
          placeholder="Tell us how we can help…"
          className={`w-full bg-[rgba(255,255,255,0.025)] border rounded-sm py-3 px-3.5 font-dm text-[13px] text-[#ede3d4] placeholder-[rgba(237,227,212,0.28)] outline-none resize-y transition-colors ${
            errors.message
              ? "border-[rgba(201,169,110,0.6)]"
              : "border-[rgba(201,169,110,0.18)] focus:border-[rgba(201,169,110,0.5)]"
          }`}
        />
      </div>

      <button
        onClick={submit}
        className="w-full bg-[#c9a96e] text-[#0c0a08] font-dm text-[11px] tracking-[0.16em] uppercase font-medium py-3.5 rounded-sm hover:bg-[#e8c98a] active:scale-[0.99] transition-all duration-200 mt-1"
      >
        Send Message
      </button>
    </div>
  );
}
