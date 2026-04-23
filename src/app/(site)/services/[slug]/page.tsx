import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { getServiceBySlug, getServiceList } from "@/lib/api/services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const services = await getServiceList();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) {
    return { title: "服务不存在" };
  }
  return {
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.summary || "",
    keywords: service.seoKeywords || [],
  };
}

export const revalidate = 300;

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  return (
    <Section title={service.title} subtitle={service.summary || "服务详情"}>
      <article className="prose max-w-none">
        <p>{service.content || "这里将渲染服务正文内容。"}</p>
      </article>
    </Section>
  );
}
