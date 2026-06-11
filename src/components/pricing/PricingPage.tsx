import { Check, MessageCircle, Phone } from "lucide-react";
import { CONTAINER } from "@/components/home/ui";
import { GetResumeButton, PageCtaButtons } from "@/components/shared/PageCtaButtons";
import { siteConfig } from "@/config/site";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  oldPrice: string;
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Entry Level Resume",
    tagline: "Make a lasting impression for your first job",
    price: "$110",
    oldPrice: "$150",
    features: [
      "Entry Level Professionally Written Resume",
      "1-on-1 Consultation with a Certified Professional Resume Writer",
      "48-72 Hours Turnaround Time (TAT)",
      "Money-Back Guarantee",
      "ATS Compatibility: Over 90% Success Rate",
      "ATS Testing Included",
      "Multiple Template Design Options",
      "Unlimited Revisions",
      "Universal Formatting",
      "Final Files in PDF & Word Formats",
      "Rush Service Available (24 Hours)",
    ],
  },
  {
    name: "Professional Level Resume",
    tagline: "Beat the competition with a professional resume",
    price: "$150",
    oldPrice: "$200",
    features: [
      "Professionally Written Resume",
      "1-on-1 Consultation with a Certified Professional Resume Writer",
      "48-72 Hours Turnaround Time (TAT)",
      "Money-Back Guarantee",
      "ATS Compatibility: Over 90% Success Rate",
      "ATS Testing Included",
      "Multiple Template Design Options",
      "Unlimited Revisions",
      "Universal Formatting",
      "Final Files in PDF & Word Formats",
      "Rush Service Available (24 Hours)",
    ],
  },
  {
    name: "Professional Level Bundle",
    tagline: "Beat the competition with a professional resume",
    price: "$230",
    oldPrice: "$399",
    featured: true,
    features: [
      "Professionally Written Resume",
      "Cover Letter",
      "1-on-1 Consultation with a Certified Professional Resume Writer",
      "48-72 Hours Turnaround Time (TAT)",
      "Money-Back Guarantee",
      "ATS Compatibility: Over 90% Success Rate",
      "ATS Testing Included",
      "Multiple Template Design Options",
      "Unlimited Revisions",
      "Universal Formatting",
      "Final Files in PDF & Word Formats",
      "Rush Service Available (24 Hours)",
    ],
  },
  {
    name: "Corporate Level Bundle",
    tagline: "Set a distinguished tone for a class-apart impression",
    price: "$399",
    oldPrice: "$600",
    features: [
      "Corporate Level Professionally Written Resume",
      "LinkedIn Profile Creation & Optimization",
      "Cover Letter",
      "1-on-1 Consultation with a Certified Professional Resume Writer",
      "48-72 Hours Turnaround Time (TAT)",
      "Money-Back Guarantee",
      "ATS Compatibility: Over 90% Success Rate",
      "ATS Testing Included",
      "Custom Design Template",
      "Unlimited Revisions",
      "Universal Formatting",
      "Final Files in PDF & Word Formats",
      "Rush Service Available (24 Hours)",
    ],
  },
  {
    name: "Executive Level Bundle",
    tagline: "Set a distinguished tone for a class-apart impression",
    price: "$499",
    oldPrice: "$700",
    features: [
      "Executive Level Professionally Written Resume",
      "LinkedIn Profile Creation & Optimization",
      "Cover Letter",
      "5 Job Posting on Indeed, Glassdoor, USA Jobs & ZipRecruiter etc.",
      "1-on-1 Consultation with a Certified Professional Resume Writer",
      "48-72 Hours Turnaround Time (TAT)",
      "Money-Back Guarantee",
      "ATS Compatibility: Over 90% Success Rate",
      "ATS Testing Included",
      "Custom Design Template",
      "Unlimited Revisions",
      "Universal Formatting",
      "Final Files in PDF & Word Formats",
      "Rush Service Available (24 Hours)",
    ],
  },
  {
    name: "Web Based Portfolio",
    tagline: "Set a distinguished tone for a class-apart impression",
    price: "$599",
    oldPrice: "$800",
    features: [
      "Professionally Written Content",
      "Custom Resume Card with QR Code",
      "Live Online Portfolio",
      "Custom Interactive Design",
      "Comprehensive Presentation",
      "Dedicated Account Manager",
      "Organic Testimonials",
      "Achievements Showcasing",
      "Worldwide Accessibility",
      "Cross-Browser Compatible",
      "Contact Form Integration",
      "Custom Color Schemes",
      "LinkedIn Profiles Integration",
      "Visibility in Search Engines",
      "Turnaround: 5 Business Days",
    ],
  },
  {
    name: "LinkedIn Profiles",
    tagline: "Set a distinguished tone for a class-apart impression",
    price: "$199",
    oldPrice: "$349",
    features: [
      "Profile Optimization",
      "Custom Headline & Summary",
      "Experience & Skills Enhancement",
      "Professional Profile & Cover Photos",
      "48-72 Hours Turnaround Time (TAT)",
      "Optimization of Your Profile to Improve Ranking in LinkedIn and Google Search Results",
      "Profile Performance and Visibility Metrics to Track Improvements",
      "Optional: PDF Guide with Tips on Maintaining and Updating Your LinkedIn Profile (Additional Cost May Apply)",
    ],
  },
  {
    name: "Cover Letter",
    tagline: "Win the HR personal before the resume consideration",
    price: "$90",
    oldPrice: "$199",
    features: [
      "Custom Cover Letter",
      "Targeted Content",
      "Company Research",
      "Professional Formatting",
      "Unlimited Revisions",
      "ATS Optimization",
      "Final Cover Letter in PDF and Word Formats",
    ],
  },
  {
    name: "Job Postings",
    tagline: "Boost your chances of getting hired instantly",
    price: "$199",
    oldPrice: "$299",
    features: [
      "Job Post Creation",
      "Targeted Job Listings",
      "10 Job Postings on Indeed, Glassdoor, USA Jobs & ZipRecruiter etc.",
      "Custom Job Alerts",
      "Job Application Tracking",
      "Resume and Cover Letter Integration",
      "Profile Optimization",
      "ATS Compatibility Posts",
      "Optional: Additional Job Posting Services or Reposting on New Platforms (Additional Cost May Apply)",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-[0px_12px_28px_-4px_rgba(15,56,113,0.16)] ${
        plan.featured
          ? "border-[#1A91F0] bg-[#EAF6FF] shadow-[0px_8px_24px_rgba(26,145,240,0.14)]"
          : "border-[#E7EAF4] bg-white"
      }`}
    >
      {plan.featured && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-[#1A91F0] px-3 py-1 text-[12px] leading-4 font-semibold tracking-[0.04em] text-white uppercase">
          Most Popular
        </span>
      )}

      <h3 className="text-[24px] leading-8 text-[#1E2532]">{plan.name}</h3>
      <p className="mt-2 text-[15px] leading-6 text-[#656E83]">{plan.tagline}</p>

      <div className="mt-6 flex items-end gap-3">
        <span className="text-[44px] leading-none font-semibold text-[#1A91F0]">
          {plan.price}
        </span>
        <span className="mb-1 text-[20px] leading-none text-[#A0A8BC] line-through">
          {plan.oldPrice}
        </span>
      </div>

      <div className="mt-6 border-t border-[#E7EAF4] pt-6">
        <p className="text-[13px] leading-5 font-semibold tracking-[0.06em] text-[#828BA2] uppercase">
          Features
        </p>
        <ul className="mt-4 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25B869]/15">
                <Check className="h-3.5 w-3.5 text-[#25B869]" strokeWidth={3} aria-hidden />
              </span>
              <span className="text-[14.5px] leading-5 text-[#1E2532]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <GetResumeButton className="h-[50px] w-full font-semibold" />
        <div className="mt-4 flex items-center justify-center gap-4 text-[14px] leading-5 text-[#656E83]">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[#1A91F0] no-underline hover:underline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Live Chat
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phone}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PricingPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bgimage.png')" }}
          aria-hidden
        />
        <div className={`relative z-10 ${CONTAINER} text-center`}>
          <h1 className="mx-auto max-w-3xl text-[32px] leading-10 text-[#1E2532] lg:text-[48px] lg:leading-[56px]">
            Cost-effective packages that fit every budget
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-[#656E83] lg:text-[18px]">
            Looking for quality services at a reasonable price? Our budget-friendly
            packages are designed to meet your needs without compromising on
            quality.
          </p>
          <PageCtaButtons className="mt-8" centered />
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 lg:py-20">
        <div className={`${CONTAINER}`}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
              Choose Package
            </p>
            <h2 className="mt-3 text-[28px] leading-9 text-[#1E2532] lg:text-[45px] lg:leading-[52px]">
              Affordable Pricing plans
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-[#656E83] lg:text-[18px]">
              No matter your budget, we have a package for you. Our affordable
              solutions ensure you get the services you need at prices you can
              afford.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-12 lg:pb-20">
        <div className={CONTAINER}>
          <div className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-[#282B8F] px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:py-14">
            <h2 className="text-[24px] leading-8 text-white lg:text-[36px] lg:leading-[44px]">
              Have Questions? Our Team is Ready to Assist
            </h2>
            <a
              href="#"
              className="inline-flex h-[52px] w-full shrink-0 items-center justify-center rounded-[4px] bg-white px-10 text-[16px] leading-[22px] font-semibold text-[#282B8F] no-underline hover:bg-white/90 lg:w-auto"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
