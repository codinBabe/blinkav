import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SecuritySolution from "@/components/Security";

export const metadata: Metadata = {
  title: "Security Solutions - Iperhome",
  description:
    "Explore our security solutions for comprehensive protection and peace of mind.",
};

export default function SecuritySolutionsPage() {
  return (
    <>
      <Header />
      <SecuritySolution />
      <Footer />
    </>
  );
}
