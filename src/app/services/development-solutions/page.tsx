import { Metadata } from "next";
import { DevelopmentSolution } from "@/components";

export const metadata: Metadata = {
  title: "Development Solutions",
  description:
    "Explore our innovative development solutions tailored for your business needs.",
};

export default function Page() {
  return <DevelopmentSolution />;
}
