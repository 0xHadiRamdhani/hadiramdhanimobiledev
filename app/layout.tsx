import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hadi Ramdhani | Mobile & Frontend Developer",
  description: "Portfolio of Hadi Ramdhani, an Aspiring Mobile & Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-cyber-black text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
