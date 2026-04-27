import { Container } from "@/components/ui/container";
import { HomeSectionTitle } from "@/components/home/home-section-title";

const TESTIMONIALS = [
  {
    quote: "润色后语言更地道，逻辑更清晰，编辑意见减少了很多。整体投稿准备效率明显提升。",
    name: "陈同学",
    role: "英文润色组稿 / 医学方向",
  },
  {
    quote: "学术翻译非常专业，术语准确，表达稳定。团队反馈及时，省去了大量沟通成本。",
    name: "李博士",
    role: "学术翻译 / 工科方向",
  },
  {
    quote: "从查重到投稿流程建议，一站式支持非常高效。流程清晰可控，结果也更有把握。",
    name: "王同学",
    role: "一站式服务 / 管理学方向",
  },
];

export function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <HomeSectionTitle
          title="来自用户的服务反馈"
          subtitle="来自不同学科与研究方向的作者对我们服务的真实评价。"
        />
        <div className="mt-9 overflow-x-auto pb-2">
          <div className="grid min-w-[920px] gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-[var(--line)] bg-white p-5"
              >
                <p className="text-sm leading-7 text-[var(--muted)]">“{item.quote}”</p>
                <p className="mt-5 text-base font-semibold text-[#1b3768]">{item.name}</p>
                <p className="mt-1 text-sm text-[#6178a1]">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
