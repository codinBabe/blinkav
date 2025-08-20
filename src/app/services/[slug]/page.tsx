import { ServiceClient } from "@/components";
import { servicePages } from "@/lib";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const pageData = servicePages.find((page) => page.slug === slug);

  if (!pageData) return notFound();

  return <ServiceClient {...pageData} />;
}

export async function generateStaticParams() {
  return [
    { slug: "residential-solutions" },
    { slug: "audio-visual-solutions" },
    { slug: "security-solutions" },
    { slug: "workspace-solutions" },
    { slug: "development-solutions" },
  ];
}

export const revalidate = 0;
