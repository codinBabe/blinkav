import { Metadata } from "next";
import { Contact } from "@/components";

export const metadata: Metadata = {
  title: "Contact - Blinkav Ltd",
  description:
    "Get in touch with Blinkav Ltd for inquiries, support, or feedback.",
};

export default function ContactPage() {
  return <Contact />;
}
