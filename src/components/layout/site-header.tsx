import Link from "next/link";
import { MainNav } from "@/components/layout/main-nav";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[rgba(246,247,244,0.92)] backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Cloud Sail
        </Link>
        <MainNav />
      </Container>
    </header>
  );
}
