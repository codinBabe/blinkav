import { Metadata } from "next";
import { WorkspaceSolution } from "@/components";

export const metadata: Metadata = {
  title: "Workspace Solutions - Blinkav",
  description:
    "Discover our workplace solutions for smart office automation and enhanced productivity.",
};

export default function Page() {
  return <WorkspaceSolution />;
}
