import Image from "next/image";
import { Container } from "@/components/ui/container";
import { HomeSectionTitle } from "@/components/home/home-section-title";

const ADVANTAGES = [
  {
    title: "聚焦国际期刊发表场景",
    desc: "深入理解目标期刊要求与审稿标准，更贴合投稿实际需求。",
    icon: "/home/value_props/icons/journal-focus.png",
  },
  {
    title: "多语服务灵活组合",
    desc: "根据稿件阶段与需求，灵活选择与组合各类学术支持服务。",
    icon: "/home/value_props/icons/flexible-combo.png",
  },
  {
    title: "重视学术表达规范",
    desc: "关注语言、逻辑与结构的规范性，提升稿件整体学术呈现。",
    icon: "/home/value_props/icons/academic-quality.png",
  },
  {
    title: "流程清晰，沟通高效",
    desc: "标准化流程与实时反馈机制，减少沟通成本与不确定性。",
    icon: "/home/value_props/icons/clear-process.png",
  },
  {
    title: "注重资料与稿件保密",
    desc: "严格保护论文、稿件与隐私信息，确保全程安全可控。",
    icon: "/home/value_props/icons/confidentiality.png",
  },
  {
    title: "更贴合国内使用习惯",
    desc: "以本地化沟通与服务节奏协作，更好支持阶段性推进。",
    icon: "/home/value_props/icons/local-friendly.png",
  },
];

export function ValueProps() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <Image
            src="/home/value_props/images/valueprops-illustration.png"
            alt="专业服务支持投稿准备"
            width={1122}
            height={1402}
            className="h-auto w-full max-w-[420px] self-center rounded-lg lg:w-90 lg:max-w-none lg:self-start lg:shrink-0"
          />

          <div className="min-w-0 flex-1">
            <HomeSectionTitle
              title="以专业服务支持更高质量的投稿准备"
              subtitle="我们注重学术规范与服务体验，助力作者更自信地推进国际期刊投稿。"
              centered={false}
            />
            <ul className="mt-6 grid gap-4 sm:mt-7 md:grid-cols-2 md:gap-5">
              {ADVANTAGES.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-[var(--line)] bg-white p-3 sm:p-4"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="h-12 w-12 shrink-0 sm:h-[60px] sm:w-[60px]"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-[#1b3768] sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-[var(--muted)] sm:mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
