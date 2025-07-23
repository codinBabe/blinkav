import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layouts";

export const metadata: Metadata = {
  title: "Blinkav LTD",
  description:
    "Blinkav LTD - Your Trusted Partner in Home and Office Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body-font antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
