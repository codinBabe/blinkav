import { Metadata } from "next";
import { SecuritySolution } from "@/components";

export const metadata: Metadata = {
  title: "Security Solutions - Blinkav",
  description:
    "Explore our security solutions for comprehensive protection and peace of mind.",
};

export default function Page() {
  return <SecuritySolution />;
}
