import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkspaceSolution from "@/components/Workspace";

export const metadata: Metadata = {
  title: "Workspace Solutions - Iperhome",
  description:
    "Discover our workplace solutions for smart office automation and enhanced productivity.",
};

export default function WorkspaceSolutionsPage() {
  return (
    <>
      <Header />
      <WorkspaceSolution />
      <Footer />
    </>
  );
}
