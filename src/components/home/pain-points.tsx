import Image from "next/image";
import { Container } from "@/components/ui/container";
import { HomeSectionTitle } from "@/components/home/home-section-title";

const PAIN_POINTS = [
  {
    title: "英文表达不够自然",
    desc: "语言表达不够地道，句式结构与学术语气不符，影响论文专业度。",
    icon: "/home/pain_points/english-expression.svg",
  },
  {
    title: "学术翻译不够规范",
    desc: "专业术语翻译不准确，语义偏移与段内衔接不清晰。",
    icon: "/home/pain_points/translation-quality.svg",
  },
  {
    title: "重复率优化压力大",
    desc: "重写策略难，难以兼顾语义完整与学术严谨性。",
    icon: "/home/pain_points/plagiarism-pressure.svg",
  },
  {
    title: "投稿流程不够清晰",
    desc: "投稿目标、材料组织和时间节奏缺乏明确路径。",
    icon: "/home/pain_points/submission-process.svg",
  },
  {
    title: "时间紧，修改成本高",
    desc: "返修周期紧张，反复调整导致沟通与执行成本上升。",
    icon: "/home/pain_points/time-pressure.svg",
  },
  {
    title: "缺少专业外部支持",
    desc: "缺乏可靠的学术协作资源，难以形成系统化解决方案。",
    icon: "/home/pain_points/external-support.svg",
  },
];

export function PainPoints() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <HomeSectionTitle
          title="你是否也在面对这些论文投稿难题？"
          subtitle="语言表达、翻译质量、重复率优化、投稿准备等问题，常常影响论文质量与投稿效率。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PAIN_POINTS.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[var(--line)] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(22,58,126,0.08)]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#edf3ff]">
                  <Image src={item.icon} alt={item.title} width={44} height={44} />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-[#1d3562]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
