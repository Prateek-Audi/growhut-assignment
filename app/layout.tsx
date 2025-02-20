import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GrowHut",
  description: "Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
