import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务项目" },
  { href: "/cases", label: "发表案例" },
  { href: "/news", label: "新闻资讯" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
];

export function MainNav() {
  return (
    <nav aria-label="主导航" className="hidden items-center gap-6 text-sm md:flex">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-[#2f4b79] transition-colors duration-300 hover:text-[var(--brand)]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
