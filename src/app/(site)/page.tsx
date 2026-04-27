import { BottomCta } from "@/components/home/bottom-cta";
import { Faq } from "@/components/home/faq";
import { HomeHero } from "@/components/home/hero";
import { PainPoints } from "@/components/home/pain-points";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { QualityAssurance } from "@/components/home/quality-assurance";
import { ServiceGrid } from "@/components/home/service-grid";
import { Testimonials } from "@/components/home/testimonials";
import { ValueProps } from "@/components/home/value-props";

export const revalidate = 300;

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PainPoints />
      <ServiceGrid />
      <ValueProps />
      <ProcessTimeline />
      <QualityAssurance />
      <Testimonials />
      <Faq />
      <BottomCta />
    </>
  );
}
