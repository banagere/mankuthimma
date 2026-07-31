import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Next.js inlines hydration/flight scripts and Tailwind injects inline styles,
// so 'unsafe-inline' is required for both. Dev additionally needs 'unsafe-eval'
// for HMR. Vercel Analytics and Speed Insights are served same-origin in
// production and from va.vercel-scripts.com in their debug builds.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Every feature this site does not use, denied for everyone including itself.
// A reader of poems needs none of them, so the allowlist is empty rather than
// self — that way an injected script cannot reach them either. browsing-topics
// additionally opts out of Topics-based ad interest inference.
const permissionsPolicy = [
  "accelerometer=()",
  "autoplay=()",
  "browsing-topics=()",
  "camera=()",
  "display-capture=()",
  "encrypted-media=()",
  "fullscreen=()",
  "geolocation=()",
  "gyroscope=()",
  "magnetometer=()",
  "microphone=()",
  "midi=()",
  "payment=()",
  "usb=()",
  "xr-spatial-tracking=()",
].join(", ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Redundant with the CSP's frame-ancestors for modern browsers, kept for the
  // ones that never implemented it.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: permissionsPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },

  // Severs the reference a cross-origin opener would otherwise keep to this
  // window, which is what closes the tabnabbing and cross-window scripting
  // paths that CSP does not cover.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Refuses to be embedded as a subresource by another origin. Together with
  // frame-ancestors this covers both the document and its assets.
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  // Asks the browser for a dedicated agent cluster, so this origin does not
  // share a process with same-site documents it does not control.
  { key: "Origin-Agent-Cluster", value: "?1" },
  // Stops legacy Flash and Acrobat cross-domain policy files from being honored
  // anywhere on the origin.
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  // No speculative DNS lookups for links in the verse text — the poems are
  // static and prefetching leaks the visitor's IP to whatever a link points at.
  { key: "X-DNS-Prefetch-Control", value: "off" },
  // The 945 verses should remain indexable and findable — deliberately not
  // noindex — but not scraped into a training corpus. These directives are
  // honored voluntarily; they state intent, they do not enforce it.
  { key: "X-Robots-Tag", value: "noai, noimageai" },
];

const nextConfig: NextConfig = {
  images: {},
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
