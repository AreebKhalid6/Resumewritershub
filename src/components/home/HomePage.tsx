import { BenefitCards } from "./BenefitCards";
import { CareerGoalsSection } from "./CareerGoalsSection";
import { CoachingBanner } from "./CoachingBanner";
import { CompanyLogos } from "./CompanyLogos";
import { FaqSection } from "./FaqSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { HeroSection } from "./HeroSection";
import { ReadyToResumeSection } from "./ReadyToResumeSection";
import { ReviewsSection } from "./ReviewsSection";
import { ServicesSection } from "./ServicesSection";
import { TemplatesSection } from "./TemplatesSection";
import { TemplatesCtaSection } from "./TemplatesCtaSection";

export function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <BenefitCards />
      <CareerGoalsSection />
      <CompanyLogos />
      <CoachingBanner />
      <TemplatesSection
        title={
          <>
            Professional Resume Templates
            <br />
            Designed to Get You Hired
          </>
        }
        description="Explore our collection of ATS-friendly resume templates, created using insights from more than 10,000 job-winning resumes."
      />
      <TemplatesCtaSection />
      <ServicesSection />
      <ReviewsSection />
      <ReadyToResumeSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
