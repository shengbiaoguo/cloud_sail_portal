import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const CAPABILITIES = [
  {
    title: "英文润色编辑",
    icon: "/home/hero_section/icons/english-editing.svg",
  },
  {
    title: "学术翻译",
    icon: "/home/hero_section/icons/academic-translation.svg",
  },
  {
    title: "查重降重",
    icon: "/home/hero_section/icons/plagiarism-reduction.svg",
  },
  {
    title: "一站式服务",
    icon: "/home/hero_section/icons/one-stop-service.svg",
  },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] py-16 md:py-24">
      <Image
        src="/home/hero_section/cta-background.png"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(242,247,255,0.97)_0%,rgba(238,245,255,0.9)_42%,rgba(232,241,255,0.42)_72%,rgba(230,239,255,0.25)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-[radial-gradient(circle_at_80%_35%,rgba(67,122,220,0.2)_0%,rgba(67,122,220,0)_68%)]" />
      <Container>
        <div className="relative z-[1] grid items-center gap-10 md:grid-cols-[0.92fr_1.08fr] md:gap-14">
          <div className="md:pr-8 lg:pr-12">
            <span className="inline-flex rounded-full border border-[#9ab8f2] bg-white/95 px-4 py-1.5 text-sm text-[#31599f]">
              面向国际期刊投稿场景的专业论文支持服务
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.14] tracking-tight text-[#132a53] md:text-6xl">
              为国际期刊投稿
              <br />
              提供专业论文支持服务
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#425a86] md:text-lg">
              围绕论文编辑、学术翻译、查重降重与投稿支持，我们提供更规范、更可追踪的一站式协作流程，帮助你更稳妥地推进投稿准备。
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-[var(--brand)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
              >
                立即咨询
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-[#8fb0ef] bg-white px-6 py-3 text-sm font-medium text-[#2150ae] transition-colors duration-300 hover:bg-[#edf4ff]"
              >
                查看服务项目
              </Link>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5771a0]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4a81e8]" />
                覆盖常见投稿准备环节
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4a81e8]" />
                面向国际期刊规范场景
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4a81e8]" />
                支持多学科论文服务需求
              </li>
            </ul>
          </div>

          <div className="relative min-h-[460px] [perspective:1200px] md:min-h-[540px]">
            <div className="absolute inset-x-1 top-0 origin-top-right rounded-2xl border border-[#d4e1f8] bg-white/92 p-3 shadow-[0_14px_28px_rgba(23,66,145,0.1)] md:inset-x-0 md:p-4 md:[transform:rotateX(6deg)_rotateY(-10deg)_translateZ(-8px)]">
              <Image
                src="/home/hero_section/research-article-panel.svg"
                alt="论文服务展示面板"
                width={620}
                height={420}
                className="h-auto w-full rounded-xl"
                priority
              />
            </div>

            <div className="absolute bottom-10 left-0 right-0 z-10 grid grid-cols-2 gap-3 md:bottom-24 md:grid-cols-4 md:[transform:rotateX(6deg)_rotateY(-10deg)_translateZ(20px)]">
              {CAPABILITIES.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col items-center rounded-xl border border-[#c9dafc] bg-white/96 p-4 text-center shadow-[0_6px_14px_rgba(19,58,132,0.06)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#dfeaff]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={30}
                      height={30}
                      className="brightness-[0.72] saturate-125 w-full"
                    />
                  </div>
                  <p className="text-sm font-semibold text-[#173a74]">{item.title}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
