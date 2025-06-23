import { Metadata } from "next";
import WorkspaceSolution from "@/components/sections/workspace";

export const metadata: Metadata = {
  title: "Workspace Solutions - Iperhome",
  description:
    "Discover our workplace solutions for smart office automation and enhanced productivity.",
};

export default function WorkspaceSolutionsPage() {
  return <WorkspaceSolution />;
}
