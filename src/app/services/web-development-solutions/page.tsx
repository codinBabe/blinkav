import { Metadata } from "next";
import {WebSolution} from "@/components";

export const metadata: Metadata = {
  title: "Web Development Solutions - Blinkav",
  description:
    "Explore our comprehensive web development solutions designed to elevate your online presence. From custom websites to e-commerce platforms, we provide tailored services to meet your business needs.",
};

export default function WebSolutionPage() {
    return <WebSolution />;
}
