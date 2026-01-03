import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebDesign Pro - Professionelle Hjemmesider",
  description: "Vi laver og opgraderer hjemmesider for små og mellemstore virksomheder. Moderne design, hurtig levering, fair priser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
