import type { ProjectStatus } from "@/lib/types";
import type { Dictionary } from "@/i18n/dictionaries";

const dot: Record<ProjectStatus, string> = {
  production: "bg-emerald-500",
  "client-work": "bg-sky-500",
  "in-development": "bg-amber-500",
  concept: "bg-violet-400",
  experiment: "bg-fuchsia-400",
  personal: "bg-teal-400",
};

export function StatusBadge({ status, dict }: { status: ProjectStatus; dict: Dictionary }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${dot[status]}`} />
      {dict.status[status]}
    </span>
  );
}
