import Link from "next/link";
import { MainNav } from "@/components/layout/main-nav";
import { Container } from "@/components/ui/container";

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-[var(--brand)]" fill="none">
      <path
        d="M16 6c-3.8-2.3-8.2-2.7-12-1.2v16.8c3.8-1.5 8.2-1 12 1.3 3.8-2.3 8.2-2.8 12-1.3V4.8c-3.8-1.5-8.2-1.1-12 1.2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M16 6v17" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-white/95 backdrop-blur">
      <Container className="flex min-h-[74px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <div>
            <p className="text-base font-semibold text-[#17345f]">学术论文服务</p>
            <p className="text-xs text-[#6882a9]">国际期刊论文支持平台</p>
          </div>
        </Link>
        <MainNav />
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/contact"
            className="rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-strong)]"
          >
            立即咨询
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-[#8fb0ef] px-4 py-2 text-sm font-medium text-[#2458b6] transition-colors hover:bg-[#eef5ff]"
          >
            提交需求
          </Link>
        </div>
      </Container>
    </header>
  );
}
