import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joshardals",
  description: "I don't know what to put here yet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
