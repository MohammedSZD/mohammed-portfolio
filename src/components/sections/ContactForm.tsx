"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * No backend: composes a mailto: link. To upgrade later, replace `onSubmit`
 * with a POST to a provider (Formspree, Resend route handler, …).
 */
export function ContactForm({
  email,
  labels,
}: {
  email: string;
  labels: { name: string; message: string; placeholder: string; send: string; note: string; subject: string };
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${labels.subject}${name ? ` — ${name}` : ""}`;
    const body = `${message}${name ? `\n\n— ${name}` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-base outline-none transition-colors placeholder:text-subtle focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="c-name" className="eyebrow mb-2 block">
          {labels.name}
        </label>
        <input id="c-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="c-message" className="eyebrow mb-2 block">
          {labels.message}
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={labels.placeholder}
          className={`${field} resize-y`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary">
          {labels.send} <ArrowUpRight size={16} className="arrow" aria-hidden />
        </button>
        <p className="max-w-[34ch] text-xs text-subtle">{labels.note}</p>
      </div>
    </form>
  );
}
