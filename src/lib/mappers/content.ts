import { CaseStudyItem, NewsItem, ServiceItem, SiteConfig } from "@/types/content";

type RawSeo = {
  seo_title?: string;
  seo_keywords?: string | string[];
  seo_description?: string;
};

function normalizeSeoKeywords(value?: string | string[]) {
  if (!value) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return value
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}

export function mapServiceItem(raw: Record<string, unknown>): ServiceItem {
  const seo = raw as RawSeo;
  return {
    id: Number(raw.id),
    title: String(raw.title ?? ""),
    slug: String(raw.slug ?? ""),
    summary: raw.summary ? String(raw.summary) : undefined,
    coverImage: raw.cover_image ? String(raw.cover_image) : undefined,
    content: raw.content ? String(raw.content) : undefined,
    seoTitle: seo.seo_title,
    seoDescription: seo.seo_description,
    seoKeywords: normalizeSeoKeywords(seo.seo_keywords),
  };
}

export function mapCaseStudyItem(raw: Record<string, unknown>): CaseStudyItem {
  const seo = raw as RawSeo;
  return {
    id: Number(raw.id),
    title: String(raw.title ?? ""),
    slug: String(raw.slug ?? ""),
    summary: raw.summary ? String(raw.summary) : undefined,
    coverImage: raw.cover_image ? String(raw.cover_image) : undefined,
    content: raw.content ? String(raw.content) : undefined,
    clientName: raw.client_name ? String(raw.client_name) : undefined,
    industry: raw.industry ? String(raw.industry) : undefined,
    projectDate: raw.project_date ? String(raw.project_date) : undefined,
    seoTitle: seo.seo_title,
    seoDescription: seo.seo_description,
    seoKeywords: normalizeSeoKeywords(seo.seo_keywords),
  };
}

export function mapNewsItem(raw: Record<string, unknown>): NewsItem {
  const seo = raw as RawSeo;
  return {
    id: Number(raw.id),
    title: String(raw.title ?? ""),
    slug: String(raw.slug ?? ""),
    summary: raw.summary ? String(raw.summary) : undefined,
    coverImage: raw.cover_image ? String(raw.cover_image) : undefined,
    content: raw.content ? String(raw.content) : undefined,
    status: raw.status ? String(raw.status) : undefined,
    publishedAt: raw.published_at ? String(raw.published_at) : undefined,
    seoTitle: seo.seo_title,
    seoDescription: seo.seo_description,
    seoKeywords: normalizeSeoKeywords(seo.seo_keywords),
  };
}

export function mapSiteConfig(
  raw: Array<{ config_key: string; config_value: string }>,
): SiteConfig {
  const result: SiteConfig = {};
  for (const item of raw) {
    const key = item.config_key;
    const value = item.config_value;
    switch (key) {
      case "site_name":
        result.siteName = value;
        break;
      case "site_logo":
        result.siteLogo = value;
        break;
      case "contact_phone":
        result.contactPhone = value;
        break;
      case "contact_email":
        result.contactEmail = value;
        break;
      case "company_address":
        result.companyAddress = value;
        break;
      case "icp_text":
        result.icpText = value;
        break;
      case "footer_text":
        result.footerText = value;
        break;
      case "home_banner":
        result.homeBanner = value;
        break;
      default:
        break;
    }
  }
  return result;
}
