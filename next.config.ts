import type { NextConfig } from "next";

/**
 * English is the default locale and lives at the site root ("/", "/projects/...").
 * Other locales are prefixed ("/tr/...").  Internally every page lives under
 * `app/[locale]`, so English URLs are rewritten to `/en/...` and the explicit
 * `/en/...` form is redirected to the clean URL (single canonical URL per page).
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/en" },
        { source: "/projects", destination: "/en/projects" },
        { source: "/resume", destination: "/en/resume" },
        { source: "/projects/:slug", destination: "/en/projects/:slug" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
