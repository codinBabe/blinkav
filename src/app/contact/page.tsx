import { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact Us | Iperhome",
  description:
    "Get in touch with Iperhome for inquiries, support, or feedback.",
};

export default function ContactPage() {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
