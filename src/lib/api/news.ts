import { apiFetch } from "@/lib/api/client";
import { mapNewsItem } from "@/lib/mappers/content";
import { PaginatedResult, PaginationQuery } from "@/types/common";
import { NewsItem } from "@/types/content";

type NewsListResponse = {
  list?: Record<string, unknown>[];
  pagination?: {
    page?: number;
    pageSize?: number;
    total?: number;
  };
  items?: Record<string, unknown>[];
  total?: number;
  page?: number;
  page_size?: number;
};

export async function getNewsList(query: PaginationQuery): Promise<PaginatedResult<NewsItem>> {
  try {
    const response = await apiFetch<NewsListResponse>("/news", {
      searchParams: {
        page: query.page,
        pageSize: query.pageSize,
      },
      revalidate: 120,
      tags: ["news"],
    });

    const page = Number(response.pagination?.page ?? response.page ?? query.page);
    const pageSize = Number(response.pagination?.pageSize ?? response.page_size ?? query.pageSize);
    const total = Number(response.pagination?.total ?? response.total ?? 0);
    const list = response.list ?? response.items ?? [];

    return {
      items: list.map(mapNewsItem),
      total,
      page,
      pageSize,
    };
  } catch {
    return {
      items: [],
      total: 0,
      page: query.page,
      pageSize: query.pageSize,
    };
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const response = await apiFetch<Record<string, unknown>>(`/news/${slug}`, {
      revalidate: 120,
      tags: [`news:${slug}`],
    });
    return mapNewsItem(response);
  } catch {
    return null;
  }
}
