import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/lead-form";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "联系我们",
  description: "获取 Cloud Sail 联系方式并提交咨询需求。",
};

export const revalidate = 3600;

export default function ContactPage() {
  return (
    <>
      <Section title="联系方式" subtitle="欢迎通过以下方式联系。">
        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p>电话：+86 400-000-0000</p>
          <p>邮箱：contact@cloudsail.com</p>
          <p>地址：上海市浦东新区（示例）</p>
        </div>
      </Section>
      <Section title="地图位置">
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-[var(--line)] bg-white">
          <span className="text-sm text-[var(--muted)]">地图占位（后续接入地图 SDK）</span>
        </div>
      </Section>
      <Section title="咨询表单">
        <div className="max-w-xl">
          <LeadForm sourcePage="/contact" />
        </div>
      </Section>
    </>
  );
}
