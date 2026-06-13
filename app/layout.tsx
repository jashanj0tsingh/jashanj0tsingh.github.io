import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const firaCode = localFont({ src: "./FiraCode-VF.ttf" });

export const metadata: Metadata = {
  title: "Jashan Singh | Software Engineer",
  description: "Personal portfolio of Jashan Singh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaCode.className}>
      <body>{children}</body>
    </html>
  );
}
