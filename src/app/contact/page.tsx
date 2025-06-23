import { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact - Iperhome",
  description:
    "Get in touch with Iperhome for inquiries, support, or feedback.",
};

export default function ContactPage() {
  return <Contact />;
}
