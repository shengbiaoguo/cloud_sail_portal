import Image from "next/image";
import { Container } from "@/components/ui/container";
import { HomeSectionTitle } from "@/components/home/home-section-title";

const PROCESS_STEPS = [
  {
    index: "01",
    title: "提交需求",
    desc: "填写需求表单，提交稿件与基础信息，说明服务需求。",
    icon: "/home/process_timeline/step_1.png",
  },
  {
    index: "02",
    title: "需求评估",
    desc: "分析稿件情况，确认服务方案，明确交付节点与周期。",
    icon: "/home/process_timeline/step_2.png",
  },
  {
    index: "03",
    title: "执行服务",
    desc: "匹配专业团队，按方案执行，过程沟通、细节跟进。",
    icon: "/home/process_timeline/step_3.png",
  },
  {
    index: "04",
    title: "结果交付",
    desc: "完成成果交付与反馈，提供后续说明与建议支持。",
    icon: "/home/process_timeline/step_4.png",
  },
];

function StepArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[var(--brand)]/65" fill="none">
      <path d="M5 12h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ProcessTimeline() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <HomeSectionTitle
          title="清晰流程，让服务推进更高效"
          subtitle="标准化服务流程，确保每个环节透明可控，让你更安心。"
        />

        <ol className="mt-10 grid gap-4 md:grid-cols-4 md:gap-3">
          {PROCESS_STEPS.map((step, index) => (
            <li
              key={step.index}
              className="relative rounded-xl border border-[#d7e4f9] bg-white p-4 md:border-0 md:bg-transparent md:p-0"
            >
              <div className="relative mb-4 md:mb-5">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[var(--brand)] px-2 text-xs font-semibold text-white shadow-[0_4px_10px_rgba(23,87,191,0.28)]">
                  {step.index}
                </span>
                {index !== PROCESS_STEPS.length - 1 ? (
                  <>
                    <span className="absolute left-11 right-6 top-1/2 hidden h-px -translate-y-1/2 bg-[linear-gradient(90deg,#83a8ec_0%,#c8daf9_100%)] md:block" />
                    <span className="absolute right-1 top-1/2 hidden -translate-y-1/2 md:block">
                      <StepArrow />
                    </span>
                  </>
                ) : null}
              </div>

              <div className="rounded-xl bg-white pr-4 md:min-h-[132px]">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#edf3ff]">
                    <Image src={step.icon} alt={step.title} width={36} height={36} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-7 text-[#203b6d] md:text-[26px] md:leading-8">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.desc}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
