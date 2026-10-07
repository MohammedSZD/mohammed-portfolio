import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  id,
  action,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  action?: ReactNode;
}) {
  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <p className="eyebrow mb-5 flex items-center gap-3">
          {index && <span className="text-accent">{index}</span>}
          <span aria-hidden className="h-px w-8 bg-line-strong" />
          {eyebrow}
        </p>
        <h2 id={id} className="h-section text-balance">
          {title}
        </h2>
      </div>
      {(intro || action) && (
        <div className="md:col-span-4 md:ps-6">
          {intro && <p className="text-muted text-pretty">{intro}</p>}
          {action && <div className="mt-4">{action}</div>}
        </div>
      )}
    </Reveal>
  );
}
