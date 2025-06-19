import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResidentialSolution from "@/components/Residential";

export const metadata: Metadata = {
  title: "Residential Solutions - Iperhome",
  description:
    "Discover our residential solutions for smart home automation and energy efficiency.",
};

export default function ResidentialSolutionsPage() {
  return (
    <>
      <Header />
      <ResidentialSolution />
      <Footer />
    </>
  );
}
