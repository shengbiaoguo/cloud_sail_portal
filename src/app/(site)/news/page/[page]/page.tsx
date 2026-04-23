import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { getNewsList } from "@/lib/api/news";
import { formatDate } from "@/lib/utils/date";

type NewsPageProps = {
  params: Promise<{ page: string }>;
};

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `新闻动态 - 第 ${page} 页`,
    description: "Cloud Sail 新闻动态与行业观察。",
  };
}

export default async function NewsListPage({ params }: NewsPageProps) {
  const { page } = await params;
  const pageNumber = Number(page);
  if (Number.isNaN(pageNumber) || pageNumber <= 0) {
    notFound();
  }

  const response = await getNewsList({ page: pageNumber, pageSize: 10 });
  const totalPages = Math.max(1, Math.ceil(response.total / response.pageSize));

  if (pageNumber > totalPages) {
    notFound();
  }

  return (
    <Section title="新闻动态" subtitle={`第 ${pageNumber} 页 / 共 ${totalPages} 页`}>
      <div className="grid gap-4">
        {response.items.map((item) => (
          <article key={item.id} className="rounded-xl border border-[var(--line)] bg-white p-5">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-1 text-xs text-[var(--muted)]">{formatDate(item.publishedAt)}</p>
            <p className="mt-3 text-sm text-[var(--muted)]">{item.summary || "暂无摘要"}</p>
            <Link
              href={`/news/${item.slug}`}
              className="mt-4 inline-block text-sm text-[var(--brand)]"
            >
              阅读全文
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4 text-sm">
        {pageNumber > 1 ? (
          <Link href={`/news/page/${pageNumber - 1}`} className="text-[var(--brand)]">
            上一页
          </Link>
        ) : (
          <span className="text-[var(--muted)]">上一页</span>
        )}
        {pageNumber < totalPages ? (
          <Link href={`/news/page/${pageNumber + 1}`} className="text-[var(--brand)]">
            下一页
          </Link>
        ) : (
          <span className="text-[var(--muted)]">下一页</span>
        )}
      </div>
    </Section>
  );
}
