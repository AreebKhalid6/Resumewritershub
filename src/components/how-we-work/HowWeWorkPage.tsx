"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, ChevronRight, FileText, Mail, MessageCircle, UserRound, type LucideIcon } from "lucide-react";
import { CONTAINER, PrimaryButton, StarRating } from "@/components/home/ui";
import { TemplatesSection } from "@/components/home/TemplatesSection";
import {
  GetStartedButton,
  LeadFormModalHost,
  PageCtaButtons,
  useLeadFormModal,
} from "@/components/shared/PageCtaButtons";

const whyPoints = [
  "Experienced & skilled writers",
  "Job portal profile assistance",
  "Detailed career consultations",
  "Keyword optimization for better visibility",
  "Exclusive industry tools and resources",
  "Six months of post-order support",
  "Award-winning resume writing agency in the USA",
];

const services: {
  title: string;
  description: string;
  bg: string;
  accent: string;
  icon: LucideIcon;
  href: string;
}[] = [
  {
    title: "Resume writing services",
    description:
      "A tailored resume highlighting key skills and achievements for a strong first impression with employers.",
    bg: "#EAF6FF",
    accent: "#1A91F0",
    icon: FileText,
    href: "/services/resume-writing-services",
  },
  {
    title: "LinkedIn profile makeover",
    description:
      "An optimized LinkedIn profile designed to enhance online presence and attract professional opportunities.",
    bg: "#F1F2FF",
    accent: "#5660E8",
    icon: UserRound,
    href: "/services/linkedin-profile-writing",
  },
  {
    title: "Cover letter writing service",
    description:
      "A personalized cover letter emphasizing unique value and suitability for specific roles.",
    bg: "#E7F4ED",
    accent: "#25B869",
    icon: Mail,
    href: "/services/cover-letter-writing-service",
  },
];

const reviews = [
  {
    text: "My previous resume wasn't getting much attention, even though I had the right experience. The new version highlighted my achievements clearly and positioned me as a stronger candidate. Soon after updating my applications, I began receiving more interview invitations.",
    name: "Sarah M.",
    role: "Healthcare Administration",
  },
  {
    text: "The consultation was detailed and personalized. My writer understood the roles I was targeting and transformed my experience into a professional resume that accurately reflected my skills and career goals.",
    name: "Daniel C.",
    role: "Information Technology & Cybersecurity",
  },
  {
    text: "My resume was outdated and difficult to read. The team reorganized everything, strengthened the language and created a modern document that represents my experience professionally.",
    name: "Robert A.",
    role: "Engineering & Manufacturing",
  },
];

const faqs = [
  {
    question: "How long does it take to receive my resume?",
    answer:
      "Typically, you'll receive your first draft within 24-48 hours after providing the necessary information. We also offer expedited services for urgent needs.",
  },
  {
    question: "What is the difference between a CV and a resume?",
    answer:
      "A resume is a concise, one- to two-page summary of your skills, experience, and achievements tailored to a specific job. A CV is typically longer and provides a more detailed overview of your academic and professional background. CVs are commonly used for academic, research, medical, and some international applications, while most employers in the US and Canada expect a resume.",
  },
  {
    question: "How do I choose the right resume template?",
    answer:
      "Choose a clean, professional, and ATS-friendly template that suits your industry. Creative roles may allow for more visual design, while corporate, healthcare, technology, and finance positions usually benefit from simple, well-organized layouts. Our templates are designed to be easy to read, compatible with applicant tracking systems, and appealing to recruiters.",
  },
  {
    question: "What does an ATS-friendly resume mean?",
    answer:
      "An ATS-friendly resume is formatted so that applicant tracking systems can read and process it accurately. It uses standard section headings, clear formatting, readable fonts, relevant keywords, and a logical structure. It also avoids elements such as complex tables, graphics, images, and unusual layouts that may interfere with resume scanning.",
  },
  {
    question: "How far back should my resume go?",
    answer:
      "In most cases, your resume should cover the last 10 to 15 years of relevant work experience. Older positions can be shortened or removed unless they directly support the role you are pursuing. Focus on your most recent accomplishments and the experience that best demonstrates your current qualifications.",
  },
  {
    question: "Should I create a different resume for every job application?",
    answer:
      "Yes. Tailoring your resume to each position can significantly improve your chances of getting noticed. Update your professional summary, skills, and experience bullet points to reflect the requirements and language used in the job description, while keeping all information accurate. Our tools make it easy to customize your resume without starting from scratch.",
  },
  {
    question: "Do I need a cover letter with my resume?",
    answer:
      "Always include a cover letter when the job posting requires one. Even when it is optional, a well-written cover letter can help you stand out by explaining your interest in the role, highlighting relevant qualifications, and showing why you are a strong fit. We also offer cover letter writing services that complement your resume.",
  },
  {
    question: "Is professional resume writing worth the cost?",
    answer:
      "Professional resume writing can be a valuable investment if you are struggling to secure interviews, changing careers, returning to the workforce, or applying for senior-level positions. An experienced writer can help identify your strongest achievements, incorporate relevant keywords, and present your experience in a clear and compelling way.",
  },
];

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="border-t border-[#E7EAF4] first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3 text-[17px] leading-6 text-[#1E2532] lg:text-[19px] lg:leading-7">
          <span className="font-semibold text-[#1A91F0]">{number}.</span>
          {faq.question}
        </span>
        <span
          className={`shrink-0 text-2xl leading-none text-[#1A91F0] transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ${
          isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pl-9 text-[16px] leading-6 text-[#656E83]">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function HowWeWorkPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const leadForm = useLeadFormModal();

  return (
    <main className="w-full bg-white">
      <LeadFormModalHost leadForm={leadForm} />
      {/* Hero */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bgimage.png')" }}
          aria-hidden
        />
        <div className={`relative z-10 ${CONTAINER} flex flex-col items-center gap-8 lg:flex-row lg:gap-12`}>
          <div className="w-full shrink-0 lg:w-[48%]">
            <h1 className="text-[32px] leading-10 text-[#1E2532] lg:text-[52px] lg:leading-[60px]">
              Resumes Designed to Deliver Results
            </h1>
            <p className="mt-6 text-[18px] leading-7 text-[#656E83]">
              We transform your experience, skills, and achievements into a
              compelling career story that captures recruiters&apos; attention
              and positions you as a strong candidate.
            </p>
            <PageCtaButtons
              className="mt-8"
              leadForm={leadForm}
              primaryLabel="Get My Resume"
              secondaryLabel="Chat with an Expert"
            />
          </div>
          <div className="relative h-[280px] w-full overflow-hidden rounded-3xl sm:h-[360px] lg:h-[460px] lg:flex-1">
            <Image
              src="/howitwork.png"
              alt="Professional resumes"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* Why hire */}
      <section className="py-12 lg:py-20">
        <div className={`${CONTAINER} flex flex-col items-center gap-8 lg:flex-row lg:gap-12`}>
          <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF6FF] to-[#C3E5FE] sm:h-[360px] lg:h-[420px] lg:w-[42%]">
            <Image
              src="/cv/eleven.png"
              alt="Resume sample"
              fill
              className="object-contain p-8"
            />
          </div>
          <div className="w-full flex-1">
            <h2 className="text-[28px] leading-9 text-[#1E2532] lg:text-[36px] lg:leading-[44px]">
              Why Choose Resume Writers Hub?
            </h2>
            <ul className="mt-8 space-y-4">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25B869]/15">
                    <Check className="h-4 w-4 text-[#25B869]" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-[17px] leading-6 text-[#1E2532]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GetStartedButton leadForm={leadForm} />
            </div>
          </div>
        </div>
      </section>

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

      {/* What we offer */}
      <section className="py-12 lg:py-20">
        <div className={`${CONTAINER}`}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
              What We Offer
            </p>
            <h2 className="mt-3 text-[28px] leading-9 text-[#1E2532] lg:text-[45px] lg:leading-[52px]">
              Our resume writing services
            </h2>
            <p className="mt-4 text-[18px] leading-7 text-[#656E83]">
              Discover the range of professional services we offer to support
              your career goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
              <div
                key={service.title}
                className="flex min-h-[280px] flex-col rounded-2xl p-8"
                style={{ backgroundColor: service.bg }}
              >
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${service.accent}20` }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: service.accent }}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <h3 className="text-[22px] leading-7 text-[#1E2532]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[16px] leading-6 text-[#656E83]">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1 text-[16px] leading-6 font-medium text-[#1A91F0] no-underline hover:underline"
                >
                  Learn more
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </Link>
              </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryButton href="/services" className="h-[50px] px-8 font-semibold">
              View more
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-8">
        <div className={CONTAINER}>
          <div className="flex flex-col items-stretch gap-6 rounded-3xl bg-[#1A91F0] px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:py-10">
            <h2 className="text-[24px] leading-8 font-semibold text-white lg:text-[32px] lg:leading-10">
              Make your resume now, and get hired sooner!
            </h2>
            <a
              href="/contact-us"
              className="inline-flex h-[50px] w-full shrink-0 items-center justify-center gap-2 rounded-[4px] bg-white px-8 text-[16px] leading-[22px] font-semibold text-[#1A91F0] no-underline hover:bg-white/90 lg:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#F7F9FC] py-12 lg:py-20">
        <div className={`${CONTAINER} text-center`}>
          <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
            Client Feedback &amp; Reviews
          </p>
          <h2 className="mt-3 text-[28px] leading-9 text-[#1E2532] lg:text-[45px] lg:leading-[52px]">
            What Our Clients Say
          </h2>
        </div>

        <div className={`${CONTAINER} mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}>
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-[0px_2px_8px_rgba(15,56,113,0.06)]"
            >
              <StarRating rating={5} size={20} />
              <p className="mt-4 flex-1 text-[16px] leading-6 text-[#1E2532]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-[16px] leading-6 font-semibold text-[#1E2532]">
                  {review.name}
                </p>
                <p className="text-[14px] leading-5 text-[#656E83]">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Critique CTA */}
      <section className="py-12 lg:py-20">
        <div className={CONTAINER}>
          <div className="flex flex-col items-stretch gap-8 overflow-hidden rounded-3xl bg-[#EAF6FF] px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-16">
            <div className="max-w-2xl">
              <h2 className="text-[28px] leading-9 text-[#1E2532] lg:text-[40px] lg:leading-[48px]">
                Don&apos;t Miss Out on Your Next Career Opportunity!
              </h2>
              <p className="mt-4 text-[18px] leading-7 text-[#656E83]">
                Your next job could be one application away. Make sure your
                resume presents your experience, skills, and achievements with
                the clarity and impact employers expect.
              </p>
              <div className="mt-8">
                <PrimaryButton
                  onClick={leadForm.openLeadForm}
                  className="h-[50px] px-8 font-semibold"
                >
                  Discover More
                </PrimaryButton>
              </div>
            </div>
            <div className="relative hidden h-[280px] w-[420px] shrink-0 overflow-hidden rounded-2xl lg:block">
              <Image
                src="/ctanew.png"
                alt="Career opportunity"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 lg:py-20">
        <div className={CONTAINER}>
          <div className="text-center">
            <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
              Common Questions
            </p>
            <h2 className="mt-3 text-[28px] leading-9 text-[#1E2532] lg:text-[45px] lg:leading-[52px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* End CTA */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bgimage.png')" }}
          aria-hidden
        />
        <div className={`relative z-10 ${CONTAINER} text-center`}>
          <h2 className="text-[28px] leading-9 text-[#1E2532] lg:text-[45px] lg:leading-[52px]">
            Create a Resume That Gets Noticed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-7 text-[#656E83]">
            Build a professional, ATS-friendly resume and get hired now.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <PageCtaButtons
              centered
              leadForm={leadForm}
              primaryLabel="Build My Resume"
              secondaryLabel="Talk to an Expert"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
