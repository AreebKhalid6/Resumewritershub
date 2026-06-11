import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug, serviceSlugs } from "@/config/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <ServiceDetailPage service={service} />
        <Footer />
      </div>
    </div>
  );
}
