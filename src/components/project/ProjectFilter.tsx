"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Search } from "lucide-react";

export interface FilterItem {
  slug: string;
  featured: boolean;
  categories: string[];
  searchText: string;
  node: ReactNode;
}

export interface FilterLabels {
  label: string;
  search: string;
  searchPlaceholder: string;
  results: string;
  result: string;
  none: string;
  reset: string;
  chips: { id: string; label: string }[];
}

/**
 * All cards are rendered on the server (so they are crawlable); this component only hides
 * the ones that don't match the active filter / search.
 */
export function ProjectFilter({ items, labels }: { items: FilterItem[]; labels: FilterLabels }) {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return new Set(
      items
        .filter((i) => (active === "all" ? true : active === "featured" ? i.featured : i.categories.includes(active)))
        .filter((i) => !q || i.searchText.includes(q))
        .map((i) => i.slug),
    );
  }, [items, active, query]);

  const count = visible.size;

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label={labels.label} className="flex flex-wrap gap-2">
          {labels.chips.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={active === c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === c.id ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-fg hover:text-fg"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="relative md:w-72">
          <label htmlFor="project-search" className="sr-only">
            {labels.search}
          </label>
          <Search size={16} aria-hidden className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-subtle" />
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full rounded-full border border-line bg-surface py-2.5 pe-4 ps-10 text-sm outline-none transition-colors placeholder:text-subtle focus:border-accent"
          />
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {count} {count === 1 ? labels.result : labels.results}
      </p>

      <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {items.map((i) => (
          <li key={i.slug} hidden={!visible.has(i.slug)}>
            {i.node}
          </li>
        ))}
      </ul>

      {count === 0 && (
        <div className="rounded-xl border border-dashed border-line-strong p-10 text-center">
          <p className="text-muted">{labels.none}</p>
          <button
            type="button"
            onClick={() => {
              setActive("all");
              setQuery("");
            }}
            className="btn mt-5"
          >
            {labels.reset}
          </button>
        </div>
      )}
    </div>
  );
}
