import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Features } from "@/components/features";
import { UseCases } from "@/components/use-cases";
import { CTASection } from "@/components/cta-section";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <UseCases />
      {/* <WhoIsThisFor /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
