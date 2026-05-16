import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://luisalbertocolon.com"; // ← change to your real domain after Vercel deploys

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luis Alberto Colón — Software Developer & IT Professional",
    template: "%s | Luis Alberto Colón",
  },
  description:
    "Software developer and IT professional specializing in cloud security, automation, blockchain, and MSP tooling. Founder of NodeLink Technologies. Open to junior developer, cloud, and cybersecurity roles.",
  keywords: [
    "Luis Alberto Colón",
    "Software Developer",
    "Junior Developer",
    "IT Professional",
    "Cloud Engineer",
    "Cybersecurity",
    "AWS",
    "Next.js",
    "Blockchain",
    "Solidity",
    "MSP",
    "Tampa Florida",
  ],
  authors: [{ name: "Luis Alberto Colón" }],
  creator: "Luis Alberto Colón",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Luis Alberto Colón — Software Developer & IT Professional",
    description:
      "I build practical software for security, automation, and cloud infrastructure. Open to junior developer, cloud, and cybersecurity roles.",
    siteName: "Luis Alberto Colón",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Alberto Colón — Software Developer & IT Professional",
    description:
      "I build practical software for security, automation, and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
