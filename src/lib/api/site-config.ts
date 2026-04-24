import { apiFetch } from "@/lib/api/client";
import { mapSiteConfig } from "@/lib/mappers/content";
import { SiteConfig } from "@/types/content";

type SiteConfigResponse = {
  list?: Array<{ config_key: string; config_value: string }>;
  items?: Array<{ config_key: string; config_value: string }>;
};

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const response = await apiFetch<SiteConfigResponse>("/site-config", {
      revalidate: 3600,
      tags: ["site-config"],
    });
    return mapSiteConfig(response.list ?? response.items ?? []);
  } catch {
    return {};
  }
}
