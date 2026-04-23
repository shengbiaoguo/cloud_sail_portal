import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const revalidate = 300;

export default function HomePage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="rounded-2xl border border-[var(--line)] bg-white p-8 md:p-12">
            <p className="text-sm text-[var(--brand)]">企业数字化增长伙伴</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              为企业官网和营销增长提供可交付的一体化方案
            </h1>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              当前为 MVP 骨架，后续可直接对接 CMS 与 API 服务端，快速进入内容填充与联调阶段。
            </p>
          </div>
        </Container>
      </section>

      <Section title="公司简介" subtitle="可维护、可扩展、可持续交付的官网体系。">
        <p className="text-[var(--muted)]">这里将渲染公司介绍信息与品牌价值描述。</p>
      </Section>

      <Section title="核心服务">
        <p className="text-[var(--muted)]">这里将渲染服务模块推荐内容。</p>
      </Section>

      <Section title="案例展示">
        <p className="text-[var(--muted)]">这里将渲染精选案例卡片。</p>
      </Section>

      <Section title="新闻动态">
        <p className="text-[var(--muted)]">这里将渲染最新新闻列表。</p>
      </Section>

      <Section title="联系我们" subtitle="提交需求，我们会在 1 个工作日内联系你。">
        <div className="max-w-xl">
          <LeadForm sourcePage="/" />
        </div>
      </Section>
    </>
  );
}
