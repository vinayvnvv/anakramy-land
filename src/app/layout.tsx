import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components";

const exoFont = Exo_2({
  variable: "--font-body",
  subsets: ["latin"],
});

// Add the font file to the public directory and update the import path
// In your project, create a new directory named 'public' if it doesn't exist.
// Then, place the 'Conthrax.ttf' file inside the 'public/fonts' directory.
const audioWide = localFont({
  src: "./../../public/fonts/Conthrax.otf",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Anakramy Inc",
  description: "Empowering Businesses with Proactive, AI-Driven Cybersecurity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exoFont.variable} ${audioWide.variable} antialiased bg-black text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
