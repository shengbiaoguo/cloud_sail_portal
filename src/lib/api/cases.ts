import { apiFetch } from "@/lib/api/client";
import { mapCaseStudyItem } from "@/lib/mappers/content";
import { CaseStudyItem } from "@/types/content";

export async function getCaseList(): Promise<CaseStudyItem[]> {
  try {
    const response = await apiFetch<{ items: Record<string, unknown>[] }>("/cases", {
      revalidate: 300,
      tags: ["cases"],
    });
    return (response.items ?? []).map(mapCaseStudyItem);
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
