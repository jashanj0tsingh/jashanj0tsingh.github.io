import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const firaCode = localFont({ src: "./FiraCode-VF.ttf" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jashanjotsingh.com"),
  title: "Jashan Singh | Software Engineer",
  description: "Personal portfolio of Jashan Singh",
  openGraph: {
    title: "Jashan Singh | Software Engineer",
    description: "Personal portfolio of Jashan Singh",
    url: "https://www.jashanjotsingh.com",
    siteName: "Jashanjot Singh",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
