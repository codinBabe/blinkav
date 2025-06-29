import { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact - Blinkav",
  description:
    "Get in touch with Blinkav for inquiries, support, or feedback.",
};

export default function ContactPage() {
  return <Contact />;
}
