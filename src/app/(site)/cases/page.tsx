import type { Metadata } from "next";
import Link from "next/link";
import { getCaseList } from "@/lib/api/cases";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "案例",
  description: "查看 Cloud Sail 项目案例与行业实践。",
};

export const revalidate = 300;

export default async function CasesPage() {
  const cases = await getCaseList();

  return (
    <Section title="案例列表" subtitle="来自真实业务场景的项目实践。">
      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((item) => (
          <article key={item.id} className="rounded-xl border border-[var(--line)] bg-white p-5">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.summary || "暂无简介"}</p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              {item.clientName || "客户待补充"} · {item.industry || "行业待补充"}
            </p>
            <Link href={`/cases/${item.slug}`} className="mt-4 inline-block text-sm text-[var(--brand)]">
              查看详情
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
