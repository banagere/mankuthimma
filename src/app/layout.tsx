import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import logo from "../../public/apple-touch-icon.png";
import site from "@/components/site";
import Search from "@/components/search";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col scroll-smooth selection:bg-black selection:text-white">
        <header>
          <div className="flex items-center justify-between p-5 mx-auto max-w-7xl">
            <Link href="/" className="transition-opacity duration-500 hover:opacity-80">
              <Image
                src={logo}
                alt={"Kagga Logo"}
                width={50}
                height={50}
                priority
              />
            </Link>
            <Search />
          </div>
        </header>

        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: site.name,
    template: "%s",
  },
  description: site.description,
  keywords: "DV Gundappa, Kagga, Kannada",
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.website,
    siteName: site.name,
    images: [
      {
        url: `${site.website}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: site.name,
    card: "summary_large_image",
    images: `${site.website}/opengraph-image.jpg`,
    site: site.website,
    description: site.description,
  },
  icons: {
    shortcut: `${site.website}/favicon.ico`,
  },
};
