import { Metadata } from "next";

import AudioVisualSolution from "@/components/sections/Audio-Visual";

export const metadata: Metadata = {
  title: "Audio Visual Solutions - Blinkav",
  description:
    "Explore our audio visual solutions for seamless integration and enhanced experiences.",
};

export default function AudioVisualSolutionsPage() {
  return <AudioVisualSolution />;
}
