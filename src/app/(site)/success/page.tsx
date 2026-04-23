import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function SubmitSuccessPage() {
  return (
    <Container className="py-20 text-center">
      <h1 className="text-3xl font-semibold">提交成功</h1>
      <p className="mt-3 text-[var(--muted)]">感谢你的咨询，我们会尽快联系你。</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white"
      >
        返回首页
      </Link>
    </Container>
  );
}
