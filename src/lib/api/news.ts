import { apiFetch } from "@/lib/api/client";
import { mapNewsItem } from "@/lib/mappers/content";
import { PaginatedResult, PaginationQuery } from "@/types/common";
import { NewsItem } from "@/types/content";

type NewsListResponse = {
  items: Record<string, unknown>[];
  total: number;
  page: number;
  page_size: number;
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

    return {
      items: (response.items ?? []).map(mapNewsItem),
      total: Number(response.total ?? 0),
      page: Number(response.page ?? query.page),
      pageSize: Number(response.page_size ?? query.pageSize),
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
