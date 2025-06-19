import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AudioVisualSolution from "@/components/Audio-Visual";

export const metadata: Metadata = {
  title: "Audio Visual Solutions - Iperhome",
  description:
    "Explore our audio visual solutions for seamless integration and enhanced experiences.",
};

export default function AudioVisualSolutionsPage() {
  return (
    <>
      <Header />
      <AudioVisualSolution />
      <Footer />
    </>
  );
}
