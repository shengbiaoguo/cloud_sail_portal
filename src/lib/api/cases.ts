import { apiFetch } from "@/lib/api/client";
import { mapCaseStudyItem } from "@/lib/mappers/content";
import { CaseStudyItem } from "@/types/content";

type CaseListResponse = {
  list?: Record<string, unknown>[];
  items?: Record<string, unknown>[];
};

export async function getCaseList(): Promise<CaseStudyItem[]> {
  try {
    const response = await apiFetch<CaseListResponse>("/cases", {
      revalidate: 300,
      tags: ["cases"],
    });
    return (response.list ?? response.items ?? []).map(mapCaseStudyItem);
  } catch {
    return [];
  }
}

export async function getCaseBySlug(slug: string): Promise<CaseStudyItem | null> {
  try {
    const response = await apiFetch<Record<string, unknown>>(`/cases/${slug}`, {
      revalidate: 300,
      tags: [`case:${slug}`],
    });
    return mapCaseStudyItem(response);
  } catch {
    return null;
  }
}
