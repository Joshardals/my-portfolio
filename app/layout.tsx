import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joshardals | Full-Stack Developer",
  description:
    "I build modern, scalable web applications with clean architecture and seamless user experiences. Passionate about solving real-world problems through code.",
  keywords: [
    "Joshardals",
    "Joshua Bamidele",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Node.js",
    "Prisma",
    "Supabase",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Joshua Bamidele", url: "https://joshardals.vercel.app" }],
  creator: "Joshardals",
  openGraph: {
    title: "Joshardals | Full-Stack Developer",
    description:
      "Full-stack developer building scalable, user-focused web apps with Next.js, React, and Node.js.",
    url: "https://joshardals.vercel.app",
    siteName: "Joshardals",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Joshardals Portfolio",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Joshardals | Full-Stack Developer",
  //   description:
  //     "I build scalable, user-focused web apps using modern web technologies.",
  //   creator: "@joshardals",
  //   images: ["/og-image.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable}`}>{children}</body>
    </html>
  );
}
