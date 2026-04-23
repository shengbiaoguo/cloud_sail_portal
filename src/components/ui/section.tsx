import { Container } from "@/components/ui/container";

type SectionProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-[var(--muted)] md:text-base">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
