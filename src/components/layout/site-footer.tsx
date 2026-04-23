import Link from "next/link";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-white/70">
      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-base font-semibold">Cloud Sail</p>
            <p className="mt-2 text-sm text-[var(--muted)]">企业官网前台 MVP 骨架</p>
          </div>
          <div className="text-sm text-[var(--muted)] md:text-right">
            <p>contact@cloudsail.com</p>
            <p className="mt-1">+86 400-000-0000</p>
            <p className="mt-1">
              <Link href="/contact" className="text-[var(--brand)] hover:underline">
                立即咨询
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
