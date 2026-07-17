import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://john-armillo.vercel.app/'),
  
  title: "John Lester Armillo | AI Automation Specialist",
  description:
    "AI Automation Specialist specializing in GoHighLevel, n8n, Zapier, CRM Automation, AI Workflows and API Integrations.",
  keywords: [
    "AI Automation",
    "GoHighLevel",
    "n8n",
    "Zapier",
    "Workflow Automation",
    "CRM Automation",
    "OpenAI",
    "Gemini",
    "API Integrations",
  ],
  authors: [{ name: "John Lester Armillo" }],
  openGraph: {
    title: "John Lester Armillo | AI Automation Specialist",
    description:
      "AI Automation Specialist specializing in GoHighLevel, n8n, Zapier, CRM Automation, AI Workflows and API Integrations.",
      images: ["/branding/og-image.png"],
    type: "website",
    siteName: "John Lester Armillo",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Lester Armillo | AI Automation Specialist",
    description:
      "AI Automation Specialist specializing in GoHighLevel, n8n, Zapier, CRM Automation, AI Workflows and API Integrations.",
  },
  icons: {
    icon: "/branding/favicon.ico",
    shortcut: "/branding/favicon.ico",
    apple: "/branding/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
