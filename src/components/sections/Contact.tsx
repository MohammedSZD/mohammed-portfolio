import { MapPin } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ContactForm } from "./ContactForm";

export function Contact({ dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-surface/50 py-24 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="text-accent">07</span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            {dict.contact.eyebrow}
          </p>
          <h2 id="contact-title" className="display text-[clamp(2.6rem,1.4rem+5.5vw,6rem)] text-balance">
            {dict.contact.title}
          </h2>
          <p className="mt-8 max-w-[52ch] text-lg text-muted text-pretty">{dict.contact.intro}</p>
          <a
            href={`mailto:${profile.email}`}
            className="link mt-8 inline-block break-all font-serif text-[clamp(1.4rem,1rem+1.8vw,2.2rem)] hover:text-accent"
          >
            {profile.email}
          </a>
          <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2 text-muted hover:text-fg">
                <GithubIcon /> GitHub<span className="sr-only"> ({dict.a11y.external})</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2 text-muted hover:text-fg">
                <LinkedinIcon /> LinkedIn<span className="sr-only"> ({dict.a11y.external})</span>
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-muted">
              <MapPin size={15} aria-hidden /> {profile.location}
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5">
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <ContactForm
              email={profile.email}
              labels={{
                name: dict.contact.nameLabel,
                message: dict.contact.messageLabel,
                placeholder: dict.contact.messagePlaceholder,
                send: dict.contact.send,
                note: dict.contact.formNote,
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
