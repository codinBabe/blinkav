import { Metadata } from "next";

import SecuritySolution from "@/components/sections/Security";

export const metadata: Metadata = {
  title: "Security Solutions - Blinkav",
  description:
    "Explore our security solutions for comprehensive protection and peace of mind.",
};

export default function SecuritySolutionsPage() {
  return <SecuritySolution />;
}
