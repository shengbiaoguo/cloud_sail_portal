import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { getNewsBySlug, getNewsList } from "@/lib/api/news";
import { formatDate } from "@/lib/utils/date";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const response = await getNewsList({ page: 1, pageSize: 100 });
  return response.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  if (!news) {
    return { title: "新闻不存在" };
  }
  return {
    title: news.seoTitle || news.title,
    description: news.seoDescription || news.summary || "",
    keywords: news.seoKeywords || [],
  };
}

export const revalidate = 120;

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  if (!news) {
    notFound();
  }

  return (
    <Section title={news.title} subtitle={news.summary || "新闻详情"}>
      <p className="text-xs text-[var(--muted)]">发布时间：{formatDate(news.publishedAt)}</p>
      <article className="prose mt-4 max-w-none">
        <p>{news.content || "这里将渲染新闻正文内容。"}</p>
      </article>
    </Section>
  );
}
