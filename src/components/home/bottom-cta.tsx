import Link from "next/link";
import { Container } from "@/components/ui/container";

export function BottomCta() {
  return (
    <section className="pb-16 pt-4 md:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[#2964d4] bg-[linear-gradient(110deg,#0f3f9f_0%,#145ed2_50%,#1c71e0_100%)] px-8 py-10 text-center">
          <div className="pointer-events-none absolute left-[-120px] top-[-100px] h-72 w-72 rounded-full bg-[radial-gradient(circle,#70a3ff_0%,rgba(112,163,255,0)_68%)] opacity-35" />
          <div className="pointer-events-none absolute bottom-[-140px] right-[-100px] h-80 w-80 rounded-full bg-[radial-gradient(circle,#7daeff_0%,rgba(125,174,255,0)_72%)] opacity-35" />
          <h2 className="relative text-2xl font-semibold text-white md:text-3xl">
            如果你正在准备国际期刊投稿，欢迎与我们进一步沟通
          </h2>
          <p className="relative mt-3 text-sm text-blue-100 md:text-base">
            根据你的论文需求与当前阶段，匹配更合适的服务方向与处理建议。
          </p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-[#ff9f3a] px-6 py-3 text-sm font-medium text-[#27365b] transition-transform hover:-translate-y-0.5"
            >
              立即咨询
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/60 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              提交服务需求
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
