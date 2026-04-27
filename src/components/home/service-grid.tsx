import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { HomeSectionTitle } from "@/components/home/home-section-title";

const SERVICES = [
  {
    title: "英文润色编辑服务",
    desc: "提升语法表达的准确性、流畅性与学术性，符合目标期刊语言规范。",
    icon: "/home/service_grid/english-editing.png",
  },
  {
    title: "学术翻译服务",
    desc: "专业学术领域团队，确保术语准确、逻辑连贯，符合学术表述规范。",
    icon: "/home/service_grid/academic-translation.png",
  },
  {
    title: "查重降重服务",
    desc: "结合语义重构策略，优化重复内容，在保证原意前提下提升原创度。",
    icon: "/home/service_grid/plagiarism-reduction.png",
  },
  {
    title: "发表一站式服务",
    desc: "从稿件准备、投稿材料、期刊匹配到流程辅导，协助高效推进投稿。",
    icon: "/home/service_grid/one-stop-service.png",
  },
];

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h10m0 0-3.5-3.5M14 10l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ServiceGrid() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <HomeSectionTitle
          title="核心服务覆盖论文准备与投稿关键环节"
          subtitle="围绕论文准备阶段的核心需求，提供专业、可靠的一站式支持服务。"
        />
        <div className="mt-10 text-center grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-[#dbe6f8] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9cef3] hover:shadow-[0_16px_32px_rgba(24,63,138,0.08)]"
            >
              <div className="flex h-40 items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={280}
                  height={180}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-7 text-[#1c3768]">
                {service.title}
              </h3>
              <p className="mt-3 min-h-24 text-sm leading-6 text-[var(--muted)]">{service.desc}</p>
              <Link
                href="/services"
                className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#93b3ee] px-4 py-2 text-sm font-medium text-[#1b50ae] transition-colors duration-300 hover:bg-[#edf4ff]"
              >
                了解详情
                <ArrowRightIcon />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
