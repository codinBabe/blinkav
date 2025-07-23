import { Metadata } from "next";
import { Contact } from "@/components";

export const metadata: Metadata = {
  title: "Contact - Blinkav LTD",
  description:
    "Get in touch with Blinkav LTD for inquiries, support, or feedback.",
};

export default function ContactPage() {
  return <Contact />;
}
