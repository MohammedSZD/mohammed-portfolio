export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li dir="auto" className="rounded-md border border-line px-2.5 py-1 font-mono text-[0.72rem] text-muted">{children}</li>
  );
}

export function TagList({ items, className = "" }: { items: string[]; className?: string }) {
  if (!items.length) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((i) => (
        <Tag key={i}>{i}</Tag>
      ))}
    </ul>
  );
}
