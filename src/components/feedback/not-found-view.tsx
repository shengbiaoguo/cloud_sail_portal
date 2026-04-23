import Link from "next/link";
import { Container } from "@/components/ui/container";

export function NotFoundView() {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm text-[var(--muted)]">404</p>
      <h1 className="mt-2 text-3xl font-semibold">页面不存在</h1>
      <p className="mt-3 text-[var(--muted)]">你访问的页面可能已被移动或删除。</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white"
      >
        返回首页
      </Link>
    </Container>
  );
}
