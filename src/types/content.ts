export type SeoFields = {
  seoTitle?: string;
  seoKeywords?: string[];
  seoDescription?: string;
};

export type ServiceItem = SeoFields & {
  id: number;
  title: string;
  slug: string;
  summary?: string;
  coverImage?: string;
  content?: string;
};

export type CaseStudyItem = SeoFields & {
  id: number;
  title: string;
  slug: string;
  summary?: string;
  coverImage?: string;
  content?: string;
  clientName?: string;
  industry?: string;
  projectDate?: string;
};

export type NewsItem = SeoFields & {
  id: number;
  title: string;
  slug: string;
  summary?: string;
  coverImage?: string;
  content?: string;
  status?: string;
  publishedAt?: string;
};

export type SiteConfig = {
  siteName?: string;
  siteLogo?: string;
  contactPhone?: string;
  contactEmail?: string;
  companyAddress?: string;
  icpText?: string;
  footerText?: string;
  homeBanner?: string;
};

export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  sourcePage: string;
  message?: string;
};
