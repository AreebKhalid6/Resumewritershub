import Link from "next/link";
import { CONTAINER } from "@/components/home/ui";
import { PageHero } from "@/components/shared/PageHero";
import { siteConfig } from "@/config/site";

type LegalSection = {
  title: string;
  content: React.ReactNode;
};

const sections: LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <>
        By accessing or using {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) website and services, you agree to be bound by these Terms of
        Service. If you do not agree to these terms, please do not use our website or
        services.
      </>
    ),
  },
  {
    title: "2. Services Description",
    content: (
      <>
        {siteConfig.name} provides professional resume writing, cover letter writing,
        LinkedIn profile optimization, and related career document services. We strive
        to deliver high-quality, customized documents based on the information you
        provide. Results may vary depending on individual circumstances, job market
        conditions, and application strategies.
      </>
    ),
  },
  {
    title: "3. User Responsibilities",
    content: (
      <>
        You agree to provide accurate, complete, and truthful information when using our
        services. You are responsible for reviewing all delivered documents and
        ensuring they accurately represent your qualifications before submitting them to
        employers or third parties.
      </>
    ),
  },
  {
    title: "4. Payment & Refunds",
    content: (
      <>
        All fees are due at the time of purchase unless otherwise agreed in writing.
        Refund requests are handled on a case-by-case basis. If you are unsatisfied with
        your order, please contact us within 7 days of delivery and we will work with
        you to resolve the issue, which may include revisions or a partial refund at our
        discretion.
      </>
    ),
  },
  {
    title: "5. Revisions",
    content: (
      <>
        Most packages include a specified number of revisions within a defined period
        after delivery. Additional revisions beyond the included amount may incur extra
        fees. Revision requests must be submitted through our official contact channels.
      </>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: (
      <>
        Upon full payment, you receive ownership of the final delivered documents for
        personal use. We retain the right to use anonymized content for internal quality
        improvement and training purposes. You may not resell, redistribute, or
        commercially exploit our templates, tools, or proprietary materials.
      </>
    ),
  },
  {
    title: "7. Limitation of Liability",
    content: (
      <>
        {siteConfig.name} is not responsible for hiring decisions made by employers.
        We do not guarantee employment, interviews, or specific outcomes. To the fullest
        extent permitted by law, our liability is limited to the amount you paid for the
        specific service in question.
      </>
    ),
  },
  {
    title: "8. Communications",
    content: (
      <>
        By submitting your contact information, you consent to receive communications
        related to your order, including calls and text messages from {siteConfig.name}.
        You may opt out of marketing communications at any time by contacting us.
      </>
    ),
  },
  {
    title: "9. Changes to Terms",
    content: (
      <>
        We may update these Terms of Service from time to time. Changes will be posted
        on this page with an updated effective date. Continued use of our services after
        changes constitutes acceptance of the revised terms.
      </>
    ),
  },
  {
    title: "10. Contact",
    content: (
      <>
        For questions about these Terms of Service, please{" "}
        <Link href="/contact-us" className="text-[#1A91F0] no-underline hover:underline">
          contact us
        </Link>{" "}
        or email us at{" "}
        <a
          href="mailto:info@resumewritershub.com"
          className="text-[#1A91F0] no-underline hover:underline"
        >
          info@resumewritershub.com
        </a>
        .
      </>
    ),
  },
];

export function TermsPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Please read these terms carefully before using ${siteConfig.name} services.`}
        showCtas
      />

      <section className="py-12 lg:py-20">
        <div className={CONTAINER}>
          <p className="mb-10 text-[14px] leading-5 text-[#828BA2]">
            Effective date: July 6, 2026
          </p>

          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[20px] leading-7 font-semibold text-[#1E2532] lg:text-[22px] lg:leading-8">
                  {section.title}
                </h2>
                <p className="mt-3 text-[16px] leading-7 text-[#656E83]">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
