import Link from "next/link";
import { CONTAINER } from "@/components/home/ui";
import { PageHero } from "@/components/shared/PageHero";
import { siteConfig } from "@/config/site";

type PolicySection = {
  title: string;
  content: React.ReactNode;
};

const sections: PolicySection[] = [
  {
    title: "1. Introduction",
    content: (
      <>
        {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
        your privacy and is committed to protecting your personal information. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your data
        when you visit our website or use our services.
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        We may collect personal information you provide directly, including your name,
        email address, phone number, employment history, education, career goals, and
        any documents you upload such as resumes or cover letters. We also collect
        technical data automatically, including IP address, browser type, device
        information, and usage data through cookies and similar technologies.
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        We use your information to provide and improve our resume writing services,
        communicate with you about your orders, respond to inquiries, process payments,
        send service-related updates, and comply with legal obligations. With your
        consent, we may also send promotional communications about our services.
      </>
    ),
  },
  {
    title: "4. Information Sharing",
    content: (
      <>
        We do not sell your personal information. We may share data with trusted service
        providers who assist us in operating our website, processing payments, or
        delivering services — subject to confidentiality agreements. We may also disclose
        information when required by law or to protect our rights and safety.
      </>
    ),
  },
  {
    title: "5. Data Security",
    content: (
      <>
        We implement reasonable administrative, technical, and physical safeguards to
        protect your personal information. However, no method of transmission over the
        internet is 100% secure, and we cannot guarantee absolute security.
      </>
    ),
  },
  {
    title: "6. Data Retention",
    content: (
      <>
        We retain your personal information for as long as necessary to fulfill the
        purposes outlined in this policy, comply with legal obligations, resolve
        disputes, and enforce our agreements. You may request deletion of your data
        subject to applicable legal requirements.
      </>
    ),
  },
  {
    title: "7. Your Rights",
    content: (
      <>
        Depending on your location, you may have the right to access, correct, delete, or
        restrict the processing of your personal data. You may also opt out of marketing
        communications at any time. To exercise your rights, please contact us using the
        details below.
      </>
    ),
  },
  {
    title: "8. Cookies",
    content: (
      <>
        Our website uses cookies and similar tracking technologies to enhance your
        experience, analyze site traffic, and understand user behavior. You can manage
        cookie preferences through your browser settings, though disabling cookies may
        affect site functionality.
      </>
    ),
  },
  {
    title: "9. Third-Party Links",
    content: (
      <>
        Our website may contain links to third-party websites. We are not responsible for
        the privacy practices or content of those sites. We encourage you to review their
        privacy policies before providing any personal information.
      </>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <>
        Our services are not directed to individuals under the age of 16. We do not
        knowingly collect personal information from children. If you believe we have
        collected data from a child, please contact us immediately.
      </>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <>
        We may update this Privacy Policy from time to time. Changes will be posted on
        this page with a revised effective date. We encourage you to review this policy
        periodically.
      </>
    ),
  },
  {
    title: "12. Contact Us",
    content: (
      <>
        If you have questions about this Privacy Policy or our data practices, please{" "}
        <Link href="/contact-us" className="text-[#1A91F0] no-underline hover:underline">
          contact us
        </Link>{" "}
        or email{" "}
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

export function PrivacyPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Learn how ${siteConfig.name} collects, uses, and protects your personal information.`}
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
