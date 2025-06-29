import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "Blinkav Ltd",
  description: "Home Automation and Security Solutions",
  icons: {
    icon: "/images/logo-blue.png", // your PNG favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/images/logo-blue.png" />
      <body className="body-font antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
