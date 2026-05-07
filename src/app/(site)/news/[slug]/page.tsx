import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getNewsBySlug } from "@/lib/api/news";
import { formatDate } from "@/lib/utils/date";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function sanitizeNewsHtml(html?: string): string {
  if (!html) {
    return "";
  }

  // Basic server-side hardening while preserving rich-text tags and styles.
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "")
    .replace(/\sjavascript:/gi, "");
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
    <section className="py-12 md:py-16">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-semibold text-[#101828]">{news.title}</h1>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#667085]">
          <span>{formatDate(news.publishedAt)}</span>
          {news.categoryLabel ? <span>分类：{news.categoryLabel}</span> : null}
          <span>浏览：{news.viewCount ?? 0}</span>
        </div>

        {news.tags && news.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-[#eef4ff] px-2 py-1 text-xs text-[#175cd3]">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <article className="prose mt-8 max-w-none rich_text_container">
          {news.content ? (
            <div dangerouslySetInnerHTML={{ __html: sanitizeNewsHtml(news.content) }} />
          ) : (
            <p>暂无正文内容。</p>
          )}
        </article>
      </Container>
    </section>
  );
}
