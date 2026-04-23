import type { Metadata } from "next";
import Link from "next/link";
import { getServiceList } from "@/lib/api/services";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "服务",
  description: "查看 Cloud Sail 提供的服务能力。",
};

export const revalidate = 300;

export default async function ServicesPage() {
  const services = await getServiceList();

  return (
    <Section title="服务列表" subtitle="按业务目标选择适合的服务组合。">
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} className="rounded-xl border border-[var(--line)] bg-white p-5">
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{service.summary || "暂无简介"}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-block text-sm text-[var(--brand)]"
            >
              查看详情
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
