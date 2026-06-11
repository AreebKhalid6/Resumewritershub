import Link from "next/link";
import { CONTAINER } from "@/components/home/ui";
import { PageCtaButtons } from "@/components/shared/PageCtaButtons";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { allFaqs, serviceFaqs, generalFaqs } from "@/config/faqs";

export function FaqPage() {
  return (
    <main className="w-full bg-white">
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our resume writing services, templates, and career tools."
        showCtas
      />

      <section className="py-12 lg:py-20">
        <div className={CONTAINER}>
          <div className="mb-16">
            <p className="text-center text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
              Our Services
            </p>
            <h2 className="mt-3 text-center text-[24px] leading-8 text-[#1E2532] lg:text-[32px] lg:leading-10">
              Resume Writing &amp; Support
            </h2>
            <div className="mt-10">
              <FaqAccordion faqs={serviceFaqs} numbered />
            </div>
          </div>

          <div>
            <p className="text-center text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
              General
            </p>
            <h2 className="mt-3 text-center text-[24px] leading-8 text-[#1E2532] lg:text-[32px] lg:leading-10">
              Resume Tips &amp; Best Practices
            </h2>
            <div className="mt-10">
              <FaqAccordion faqs={generalFaqs} />
            </div>
          </div>

          <p className="mt-12 text-center text-[16px] leading-6 text-[#656E83]">
            Still have questions?{" "}
            <Link href="/contact-us" className="text-[#1A91F0] no-underline hover:underline">
              Contact our team
            </Link>{" "}
            — we&apos;re happy to help.
          </p>
        </div>
      </section>

      <section className="border-t border-[#E7EAF4] bg-[#F7F9FC] py-12 lg:py-16">
        <div className={`${CONTAINER} text-center`}>
          <h2 className="text-[22px] leading-8 text-[#1E2532] lg:text-[28px] lg:leading-9">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[16px] leading-6 text-[#656E83]">
            Browse all {allFaqs.length} questions above or reach out for personalized
            resume writing assistance.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <PageCtaButtons centered />
          </div>
        </div>
      </section>
    </main>
  );
}
