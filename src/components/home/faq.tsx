import { Container } from "@/components/ui/container";
import { HomeSectionTitle } from "@/components/home/home-section-title";

const FAQS = [
  {
    q: "你们主要提供哪些论文服务？",
    a: "我们主要提供英文润色编辑、学术翻译、查重降重、投稿辅助等论文支持服务，可按需求灵活组合。",
  },
  {
    q: "服务流程一般是怎样的？",
    a: "提交需求后，我们会进行需求评估并确认方案，随后执行服务并在约定时间交付成果。",
  },
  {
    q: "适合哪些类型的论文需求？",
    a: "适合期刊投稿准备阶段的多类需求，包括语言优化、结构梳理、重复率优化与投稿材料准备。",
  },
  {
    q: "是否支持多学科论文服务？",
    a: "支持。我们会根据学科方向匹配更适合的服务协作方式，保证表达准确度与学术规范。",
  },
  {
    q: "如何提交论文需求？",
    a: "你可以通过页面中的咨询入口提交需求信息，我们会在约定时间内与你联系并确认细节。",
  },
  {
    q: "如何与团队进一步沟通？",
    a: "确认需求后会建立统一沟通方式，围绕进度、反馈与交付节点进行清晰协作。",
  },
];

export function Faq() {
  return (
    <section className="pb-14 pt-6 md:pb-20 md:pt-10">
      <Container>
        <HomeSectionTitle
          title="常见问题"
          subtitle="以下是作者们经常关注的问题，如有其他疑问欢迎联系我们。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="rounded-xl border border-[var(--line)] bg-white p-5 open:border-[#9ab8f2] open:[&_summary_.faq-plus]:hidden open:[&_summary_.faq-minus]:inline-flex"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 pr-2 text-base font-medium text-[#1d3b6e]">
                <span className="faq-plus mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#b3c9f2] text-sm leading-none text-[#2f5fb4]">
                  +
                </span>
                <span className="faq-minus mt-0.5 hidden h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#b3c9f2] text-sm leading-none text-[#2f5fb4]">
                  -
                </span>
                <span>{item.q}</span>
              </summary>
              <p className="mt-3 pl-8 text-sm leading-6 text-[var(--muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
