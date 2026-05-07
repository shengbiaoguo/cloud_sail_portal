import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getNewsPortal, NewsCategoryFilter } from "@/lib/api/news";
import { formatDate } from "@/lib/utils/date";
import { BottomCta } from "@/components/home/bottom-cta";

type NewsPageProps = {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `新闻中心 - 第${page}页`,
    description: "聚焦国际期刊动态、写作技巧与学术服务洞察。",
  };
}

function normalizeCategory(input?: string): NewsCategoryFilter {
  if (!input || input === "all") {
    return "all";
  }
  return input as NewsCategoryFilter;
}

function buildNewsListHref(page: number, category?: string): string {
  const basePath = page <= 1 ? "/news" : `/news/page/${page}`;
  return category ? `${basePath}?category=${category}` : basePath;
}

export async function NewsListContent({
  pageNumber,
  category,
}: {
  pageNumber: number;
  category?: string;
}) {
  if (Number.isNaN(pageNumber) || pageNumber <= 0) {
    notFound();
  }

  const activeCategory = normalizeCategory(category);
  const portal = await getNewsPortal({ page: pageNumber, pageSize: 9, category: activeCategory });
  const totalPages = Math.max(1, Math.ceil(portal.pagination.total / portal.pagination.pageSize));
  if (pageNumber > totalPages) {
    notFound();
  }

  return (
    <>
      <section className="pb-12">
        <div
          className="py-14 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(233, 237, 245, 0.65), rgba(233, 237, 245, 0.65)), url('/news/news_banner_bg.jpg')",
          }}
        >
          <Container>
            <h1 className="text-4xl font-semibold tracking-tight text-[#101828]">新闻中心</h1>
            <p className="mt-4 text-sm text-[#344054] md:text-base">
              聚焦国际期刊出版动态、学术写作技巧与行业趋势，助力科研成果高效发表
            </p>
          </Container>
        </div>

        <Container className="mt-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                {portal.tabs.map((tab) => {
                  const active = (activeCategory === "all" ? "all" : activeCategory) === tab.key;
                  const href =
                    tab.key === "all"
                      ? buildNewsListHref(pageNumber)
                      : buildNewsListHref(pageNumber, tab.key);
                  return (
                    <Link
                      key={tab.key}
                      href={href}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        active
                          ? "border-[#1559d6] bg-[#1559d6] text-white"
                          : "border-[#e5e7eb] bg-white text-[#344054] hover:border-[#1559d6] hover:text-[#1559d6]"
                      }`}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {portal.list.map((item) => (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-xl border border-[#e4e7ec] bg-white shadow-sm"
                  >
                    <Link href={`/news/${item.slug}`} className="block">
                      <div className="relative h-44 bg-[#d0d5dd]">
                        {item.coverImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.coverImage}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        ) : null}
                        <span className="absolute left-2 top-2 rounded bg-[#1559d6] px-2 py-1 text-xs text-white">
                          {item.categoryLabel || "新闻"}
                        </span>
                      </div>
                      <div className="p-4">
                        <h2 className="line-clamp-2 text-lg font-semibold text-[#101828]">
                          {item.title}
                        </h2>
                        <p className="mt-2 line-clamp-2 text-sm text-[#667085]">
                          {item.summary || "暂无摘要"}
                        </p>
                        <div className="mt-3 flex items-center justify-between text-xs text-[#98a2b3]">
                          <span>{formatDate(item.publishedAt)}</span>
                          <span>浏览 {item.viewCount ?? 0}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2">
                <Link
                  href={pageNumber > 1 ? buildNewsListHref(pageNumber - 1, category) : "#"}
                  className={`rounded border px-3 py-1 text-sm ${
                    pageNumber > 1
                      ? "border-[#d0d5dd] text-[#344054]"
                      : "pointer-events-none border-[#eaecf0] text-[#98a2b3]"
                  }`}
                >
                  上一页
                </Link>
                {Array.from({ length: totalPages })
                  .slice(Math.max(0, pageNumber - 3), pageNumber + 2)
                  .map((_, index) => {
                    const p = Math.max(1, pageNumber - 2) + index;
                    if (p > totalPages) {
                      return null;
                    }
                    const href = buildNewsListHref(p, category);
                    return (
                      <Link
                        key={p}
                        href={href}
                        className={`rounded border px-3 py-1 text-sm ${
                          p === pageNumber
                            ? "border-[#1559d6] bg-[#1559d6] text-white"
                            : "border-[#d0d5dd] text-[#344054]"
                        }`}
                      >
                        {p}
                      </Link>
                    );
                  })}
                <Link
                  href={pageNumber < totalPages ? buildNewsListHref(pageNumber + 1, category) : "#"}
                  className={`rounded border px-3 py-1 text-sm ${
                    pageNumber < totalPages
                      ? "border-[#d0d5dd] text-[#344054]"
                      : "pointer-events-none border-[#eaecf0] text-[#98a2b3]"
                  }`}
                >
                  下一页
                </Link>
              </div>
            </div>

            <aside className="space-y-6">
              <section className="rounded-xl border border-[#eaecf0] bg-white p-5">
                <h3 className="border-l-4 border-[#1559d6] pl-3 text-lg font-semibold text-[#101828]">
                  热门话题
                </h3>
                <ol className="mt-4 space-y-3">
                  {portal.hotTopics.map((topic, index) => (
                    <li key={topic.id} className="flex items-center justify-between gap-3 text-sm">
                      <Link
                        href={`/news/${topic.slug}`}
                        className="text-[#344054] hover:text-[#1559d6]"
                      >
                        {index + 1}. {topic.title}
                      </Link>
                      <span className="text-xs text-[#98a2b3]">浏览 {topic.viewCount}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-xl border border-[#eaecf0] bg-white p-5">
                <h3 className="border-l-4 border-[#1559d6] pl-3 text-lg font-semibold text-[#101828]">
                  标签云
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {portal.tagCloud.map((tag) => (
                    <span
                      key={tag.name}
                      className="rounded-md bg-[#f2f4f7] px-2 py-1 text-xs text-[#344054]"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </Container>
      </section>
      <BottomCta />
    </>
  );
}

export default async function NewsListPage({ params, searchParams }: NewsPageProps) {
  const { page } = await params;
  const { category } = await searchParams;
  const pageNumber = Number(page);

  if (pageNumber === 1) {
    redirect(buildNewsListHref(1, category));
  }

  return <NewsListContent pageNumber={pageNumber} category={category} />;
}
