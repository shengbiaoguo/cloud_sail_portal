import Image from "next/image";
import { Container } from "@/components/ui/container";
import { HomeSectionTitle } from "@/components/home/home-section-title";

const ITEMS = [
  {
    title: "注重信息保密",
    desc: "严格的保密流程与权限管理，保障作者信息与稿件内容不被泄露。",
    icon: "/home/quality_assurance/icon_lock_60x60.png",
  },
  {
    title: "关注表达质量",
    desc: "专业团队把控语言、逻辑与结构，确保表达准确、清晰、符合学术规范。",
    icon: "/home/quality_assurance/icon_badge_60x60.png",
  },
  {
    title: "沟通流程清晰",
    desc: "明确的沟通节点与反馈机制，及时响应作者疑问，服务过程透明。",
    icon: "/home/quality_assurance/icon_chat_60x60.png",
  },
  {
    title: "服务贴近真实需求",
    desc: "结合作者研究方向与投稿目标，提供更有针对性的支持与建议。",
    icon: "/home/quality_assurance/icon_target_60x60.png",
  },
];

export function QualityAssurance() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <HomeSectionTitle
          title="重视质量、规范与服务体验"
          subtitle="我们在细节上持续优化，只为提供更值得信赖的服务。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ITEMS.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#dbe7ff] bg-white p-5">
              <div className="flex items-start gap-4">
                <Image src={item.icon} alt={item.title} width={60} height={60} />
                <div>
                  <h3 className="text-lg font-semibold text-[#1f3c71]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
