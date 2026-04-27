import Link from "next/link";
import { Container } from "@/components/ui/container";

const SERVICE_LINKS = [
  { href: "/services", label: "英文润色编辑服务" },
  { href: "/services", label: "学术翻译服务" },
  { href: "/services", label: "查重降重服务" },
  { href: "/services", label: "发表一站式服务" },
];

const CONTENT_LINKS = [
  { href: "/cases", label: "发表案例" },
  { href: "/news", label: "新闻资讯" },
  { href: "/news", label: "投稿指南" },
  { href: "/contact", label: "学术资源" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1d3f73] bg-[linear-gradient(180deg,#0f2a53_0%,#0b2141_100%)] text-[#dce8ff]">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white">学术论文服务</p>
            <p className="mt-3 text-sm leading-7 text-[#b6c7e6]">
              专注于国际期刊投稿场景的专业论文支持服务，助力作者更自信地面向国际学术期刊。
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">服务项目</p>
            <ul className="mt-3 space-y-2 text-sm text-[#c4d4ef]">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">案例与资讯</p>
            <ul className="mt-3 space-y-2 text-sm text-[#c4d4ef]">
              {CONTENT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">联系方式</p>
            <ul className="mt-3 space-y-2 text-sm text-[#c4d4ef]">
              <li>400-123-4567</li>
              <li>service@uslvifvn.com</li>
              <li>北京市海淀区中关村南大街5号</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-5 text-xs text-[#99afd5]">
          © 2024 学术论文服务平台 版权所有 | 京ICP备12345678号-1 | 京公网安备11010802012345号
        </div>
      </Container>
    </footer>
  );
}
