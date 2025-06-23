import { Metadata } from "next";

import ResidentialSolution from "@/components/sections/Residential";

export const metadata: Metadata = {
  title: "Residential Solutions - Iperhome",
  description:
    "Discover our residential solutions for smart home automation and energy efficiency.",
};

export default function ResidentialSolutionsPage() {
  return <ResidentialSolution />;
}
