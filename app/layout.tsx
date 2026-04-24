import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { LenisProvider } from "@/components/interactive/lenis-provider";
import { CustomCursor } from "@/components/interactive/custom-cursor";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Alpgiray Celik — AI Engineer",
  description:
    "Computer Science student at TUM building AI systems. Full-stack engineer focused on agent pipelines, RAG, and products that ship.",
  metadataBase: new URL("https://alpgiray.dev"),
  openGraph: {
    title: "Alpgiray Celik — AI Engineer",
    description: "Computer Science student at TUM building AI systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <LenisProvider>
          <CustomCursor />
          <Nav />
          <div id="top" />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
