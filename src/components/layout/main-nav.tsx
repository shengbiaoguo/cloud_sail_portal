import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/services", label: "服务" },
  { href: "/cases", label: "案例" },
  { href: "/news", label: "新闻" },
  { href: "/contact", label: "联系我们" },
];

export function MainNav() {
  return (
    <nav aria-label="主导航" className="flex flex-wrap items-center gap-4 text-sm">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-colors hover:text-[var(--brand)]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
