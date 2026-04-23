import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解 Cloud Sail 的公司介绍、团队理念与发展历程。",
};

export const revalidate = 3600;

export default function AboutPage() {
  return (
    <>
      <Section title="公司介绍">
        <p className="text-[var(--muted)]">这里用于展示公司简介、核心能力与业务覆盖范围。</p>
      </Section>
      <Section title="团队与理念">
        <p className="text-[var(--muted)]">这里用于展示团队文化、愿景与价值观。</p>
      </Section>
      <Section title="发展历程">
        <p className="text-[var(--muted)]">这里用于展示企业里程碑时间线。</p>
      </Section>
      <Section title="联系方式">
        <p className="text-[var(--muted)]">电话、邮箱、地址等站点配置可从 API 注入。</p>
      </Section>
    </>
  );
}
