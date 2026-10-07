import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container-x py-40">
      <p className="eyebrow mb-4">404</p>
      <h1 className="h-section mb-6">Page not found</h1>
      <p className="mb-8 text-muted">That page doesn&apos;t exist — it may have moved.</p>
      <Link href="/" className="btn btn-primary">Back to home</Link>
    </div>
  );
}
