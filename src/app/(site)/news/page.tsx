import { NewsListContent } from "./page/[page]/page";

type NewsIndexPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function NewsIndexPage({ searchParams }: NewsIndexPageProps) {
  const { category } = await searchParams;
  return <NewsListContent pageNumber={1} category={category} />;
}
