import { apiFetch } from "@/lib/api/client";
import { mapServiceItem } from "@/lib/mappers/content";
import { ServiceItem } from "@/types/content";

export async function getServiceList(): Promise<ServiceItem[]> {
  try {
    const response = await apiFetch<{ items: Record<string, unknown>[] }>("/services", {
      revalidate: 300,
      tags: ["services"],
    });
    return (response.items ?? []).map(mapServiceItem);
  } catch {
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | null> {
  try {
    const response = await apiFetch<Record<string, unknown>>(`/services/${slug}`, {
      revalidate: 300,
      tags: [`service:${slug}`],
    });
    return mapServiceItem(response);
  } catch {
    return null;
  }
}
