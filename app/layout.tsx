import type React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Helvetica", "Arial", "sans-serif"], // fallback fonts
});

export const metadata: Metadata = {
  title:
    "HF Electromechanical Engineering PLC - Engineering the Future of Infrastructure",
  description:
    "Leading engineering and industrial manufacturing firm specializing in electromechanical installations, HVAC systems, and electrical infrastructure components in Ethiopia.",
  keywords:
    "electromechanical engineering, HVAC systems, electrical infrastructure, manufacturing, Ethiopia, Addis Ababa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
