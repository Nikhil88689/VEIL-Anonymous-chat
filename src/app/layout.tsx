import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

import { AppProviders } from "@/components/providers/app-providers";

const title = "VEIL — Speak Freely. Connect Deeply. Remain Unknown.";
const description = "An anonymous social space for honest conversations and unexpected connection.";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: { default: title, template: "%s · VEIL" },
  description,
  applicationName: "VEIL",
  icons: { icon: "/veil-mark.svg" },
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "VEIL",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07070B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
