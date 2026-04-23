import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { getCaseBySlug, getCaseList } from "@/lib/api/cases";

type CaseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const cases = await getCaseList();
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseItem = await getCaseBySlug(slug);
  if (!caseItem) {
    return { title: "案例不存在" };
  }
  return {
    title: caseItem.seoTitle || caseItem.title,
    description: caseItem.seoDescription || caseItem.summary || "",
    keywords: caseItem.seoKeywords || [],
  };
}

export const revalidate = 300;

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { slug } = await params;
  const caseItem = await getCaseBySlug(slug);
  if (!caseItem) {
    notFound();
  }

  return (
    <Section title={caseItem.title} subtitle={caseItem.summary || "案例详情"}>
      <p className="text-sm text-[var(--muted)]">
        客户：{caseItem.clientName || "待补充"} | 行业：{caseItem.industry || "待补充"} | 项目日期：
        {caseItem.projectDate || "待补充"}
      </p>
      <article className="prose mt-4 max-w-none">
        <p>{caseItem.content || "这里将渲染案例正文内容。"}</p>
      </article>
    </Section>
  );
}
