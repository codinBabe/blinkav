import { ServiceClient } from "@/components";
import { servicePages } from "@/lib";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const pageData = servicePages.find((page) => page.slug === slug);

  if (!pageData) return notFound();

  return <ServiceClient {...pageData} />;
}

export async function generateStaticParams() {
  return servicePages.map((page) => ({
    slug: page.slug,
  }));
}
