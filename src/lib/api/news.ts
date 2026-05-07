import { apiFetch } from "@/lib/api/client";
import { mapNewsItem } from "@/lib/mappers/content";
import { PaginatedResult, PaginationQuery } from "@/types/common";
import { NewsItem } from "@/types/content";

export const CATEGORY_LABEL_MAP = {
  industry_news: "行业资讯",
  writing_tips: "写作技巧",
  journal_submission: "期刊投稿",
  academic_service: "学术服务",
  research_integrity: "科研诚信",
} as const;

export type NewsCategoryValue = keyof typeof CATEGORY_LABEL_MAP;
export type NewsCategoryFilter = NewsCategoryValue | "all";

type NewsListResponse = {
  list?: Record<string, unknown>[];
  pagination?: {
    page?: number;
    pageSize?: number;
    total?: number;
  };
};

type PortalResponse = NewsListResponse & {
  tabs?: Array<{ key: string; label: string }>;
  hotTopics?: Array<{ id: number; slug: string; title: string; viewCount: number }>;
  tagCloud?: Array<{ name: string; count: number }>;
};

export type NewsPortalData = {
  tabs: Array<{ key: string; label: string }>;
  list: NewsItem[];
  pagination: { page: number; pageSize: number; total: number };
  hotTopics: Array<{ id: number; slug: string; title: string; viewCount: number }>;
  tagCloud: Array<{ name: string; count: number }>;
};

function normalizePaginatedNews(
  response: NewsListResponse,
  query: PaginationQuery,
): PaginatedResult<NewsItem> {
  const page = Number(response.pagination?.page ?? query.page);
  const pageSize = Number(response.pagination?.pageSize ?? query.pageSize);
  const total = Number(response.pagination?.total ?? 0);
  const list = response.list ?? [];
  return {
    items: list.map(mapNewsItem),
    total,
    page,
    pageSize,
  };
}

export async function getNewsList(
  query: PaginationQuery & { category?: NewsCategoryFilter; keyword?: string },
): Promise<PaginatedResult<NewsItem>> {
  try {
    const response = await apiFetch<NewsListResponse>("/api/web/news", {
      searchParams: {
        page: query.page,
        pageSize: query.pageSize,
        category: query.category && query.category !== "all" ? query.category : undefined,
        keyword: query.keyword?.trim() || undefined,
      },
      revalidate: 120,
      tags: ["news"],
    });

    return normalizePaginatedNews(response, query);
  } catch {
    return {
      items: [],
      total: 0,
      page: query.page,
      pageSize: query.pageSize,
    };
  }
}

export async function getNewsPortal(
  query: PaginationQuery & { category?: NewsCategoryFilter; keyword?: string },
): Promise<NewsPortalData> {
  try {
    const response = await apiFetch<PortalResponse>("/api/web/news/portal", {
      searchParams: {
        page: query.page,
        pageSize: query.pageSize,
        category: query.category && query.category !== "all" ? query.category : undefined,
        keyword: query.keyword?.trim() || undefined,
      },
      revalidate: 120,
      tags: ["news", "news-portal"],
    });

    const paginated = normalizePaginatedNews(response, query);
    return {
      tabs:
        response.tabs && response.tabs.length > 0
          ? response.tabs
          : [
              { key: "all", label: "全部资讯" },
              ...Object.entries(CATEGORY_LABEL_MAP).map(([key, label]) => ({ key, label })),
            ],
      list: paginated.items,
      pagination: {
        page: paginated.page,
        pageSize: paginated.pageSize,
        total: paginated.total,
      },
      hotTopics: response.hotTopics ?? [],
      tagCloud: response.tagCloud ?? [],
    };
  } catch {
    return {
      tabs: [
        { key: "all", label: "全部资讯" },
        ...Object.entries(CATEGORY_LABEL_MAP).map(([key, label]) => ({ key, label })),
      ],
      list: [],
      pagination: { page: query.page, pageSize: query.pageSize, total: 0 },
      hotTopics: [],
      tagCloud: [],
    };
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const response = await apiFetch<NewsItem>(`/api/web/news/${slug}`, {
      revalidate: 120,
      tags: [`news:${slug}`],
    });
    return response;
  } catch {
    return null;
  }
}
