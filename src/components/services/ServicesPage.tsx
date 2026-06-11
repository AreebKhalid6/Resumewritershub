"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";
import { CONTAINER, PrimaryButton, StarRating } from "@/components/home/ui";
import {
  GetResumeButton,
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

const sampleImages = ["/cv/one.svg", "/cv/two.svg", "/cv/three.svg"];

const reviews = [
  {
    text: "ResumeWritersHub completely transformed my job search. My new resume got me three interviews within the first two weeks, including one at Google. I can't recommend their professional resume writing services enough!",
    name: "Jessica M.",
    role: "Marketing Specialist",
  },
  {
    text: "As a recent graduate, I had no idea how to create a resume that would stand out. ResumeWritersHub crafted an ATS-optimized resume that helped me land a position at Amazon within a month.",
    name: "Daniel P.",
    role: "Software Engineer",
  },
  {
    text: "I was aiming for a career switch after 10 years in finance. Thanks to ResumeWritersHub, my new resume highlighted my transferable skills perfectly. I'm now working at Microsoft.",
    name: "Michael R.",
    role: "Data Analyst",
  },
];

const faqs = [
  {
    question: "How long does it take to receive my resume?",
    answer:
      "Typically, you'll receive your first draft within 24-48 hours after providing the necessary information. We also offer expedited services for urgent needs.",
  },
  {
    question: "Do you provide cover letter writing services as well?",
    answer:
      "Yes. We offer personalized cover letter writing that complements your resume and is tailored to the specific roles you're applying for.",
  },
  {
    question: "Is my personal information kept confidential?",
    answer:
      "Absolutely. We treat all your information as strictly confidential and never share your data with third parties without your consent.",
  },
  {
    question: "Can you help me update my existing resume?",
    answer:
      "Of course. Share your current resume and our writers will refine and optimize it to highlight your strengths and pass ATS systems.",
  },
  {
    question: "Can I speak directly with the writer working on my resume?",
    answer:
      "Yes. We offer detailed consultations so you can communicate directly with your writer and ensure your resume reflects your goals.",
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

export function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const leadForm = useLeadFormModal();

  return (
    <main className="w-full bg-white">
      <LeadFormModalHost leadForm={leadForm} />
      {/* Hero */}
      <section className="bg-[#EFF2F9] py-12 lg:py-20">
        <div className={`${CONTAINER} flex flex-col items-center gap-8 lg:flex-row lg:gap-12`}>
          <div className="w-full shrink-0 lg:w-[50%]">
            <h1 className="text-[32px] leading-10 text-[#1E2532] lg:text-[48px] lg:leading-[56px]">
              Get a Resume That Gets You Hired!
            </h1>
            <p className="mt-6 text-[18px] leading-7 text-[#656E83]">
              Your resume isn&apos;t just a document—it&apos;s your first
              impression. At Resume Writers Hub, we transform your career story
              into a powerful, interview-winning tool. Our certified writers
              create tailored, ATS-friendly, and keyword-optimized resumes that
              help you stand out and secure the opportunities you deserve.
            </p>
            <PageCtaButtons className="mt-8" leadForm={leadForm} />
          </div>
          <div className="relative h-[240px] w-full overflow-hidden rounded-3xl sm:h-[300px] lg:h-[360px] lg:flex-1">
            <Image
              src="/groupresume.png"
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
              Why hire Resume Writers Hub resume writing services?
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
              <GetResumeButton leadForm={leadForm} />
            </div>
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
            <button
              type="button"
              onClick={leadForm.openLeadForm}
              className="inline-flex h-[50px] w-full shrink-0 items-center justify-center rounded-[4px] bg-white px-8 text-[16px] leading-[22px] font-semibold text-[#1A91F0] no-underline hover:bg-white/90 lg:w-auto"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Resume samples */}
      <section className="bg-[#F7F9FC] py-12 lg:py-20">
        <div className={`${CONTAINER} text-center`}>
          <h2 className="text-[28px] leading-9 text-[#1E2532] lg:text-[45px] lg:leading-[52px]">
            Our winning resume samples
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-7 text-[#656E83]">
            Explore a variety of resumes that have helped clients achieve career
            success.
          </p>
        </div>

        <div className={`${CONTAINER} mt-12 flex flex-wrap items-end justify-center gap-6 lg:gap-8`}>
          {sampleImages.map((src, i) => (
            <div
              key={src}
              className={`relative w-full max-w-[300px] overflow-hidden rounded-xl bg-white shadow-[0px_12px_32px_-4px_rgba(15,56,113,0.18)] sm:w-[300px] ${
                i === 1 ? "h-[460px]" : "h-[420px]"
              }`}
            >
              <Image
                src={src}
                alt="Resume sample"
                fill
                className="object-cover object-top"
                unoptimized={src.endsWith(".svg")}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 lg:py-20">
        <div className={`${CONTAINER} text-center`}>
          <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
            Client Feedback &amp; Reviews
          </p>
          <h2 className="mt-3 text-[28px] leading-9 text-[#1E2532] lg:text-[45px] lg:leading-[52px]">
            Clients Love Our Resume
          </h2>
        </div>

        <div className={`${CONTAINER} mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}>
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl bg-[#F7F9FC] p-8"
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
      <section className="bg-[#F7F9FC] py-12 lg:py-20">
        <div className={CONTAINER}>
          <div className="flex flex-col items-stretch gap-8 overflow-hidden rounded-3xl bg-[#EAF6FF] px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-16">
            <div className="max-w-2xl">
              <h2 className="text-[28px] leading-9 text-[#1E2532] lg:text-[40px] lg:leading-[48px]">
                Don&apos;t miss out on your next career opportunity!
              </h2>
              <p className="mt-4 text-[18px] leading-7 text-[#656E83]">
                Upload your resume to our website and a certified professional
                resume writer from our team will get back to you within 24 hours
                with a full resume critique.
              </p>
              <div className="mt-8">
                <PrimaryButton
                  onClick={leadForm.openLeadForm}
                  className="h-[50px] px-8 font-semibold"
                >
                  Discover more
                </PrimaryButton>
              </div>
            </div>
            <div className="hidden h-[220px] w-[280px] shrink-0 rounded-2xl bg-gradient-to-br from-[#96D4FF] via-[#B8E2FF] to-[#53A3FA] lg:block" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-20">
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

      {/* Final CTA */}
      <section className="py-12 lg:py-20">
        <div className={CONTAINER}>
          <div className="rounded-3xl bg-[#282B8F] px-6 py-10 text-center sm:px-8 lg:px-12 lg:py-16">
            <h2 className="text-[28px] leading-9 text-white lg:text-[45px] lg:leading-[52px]">
              Ready to Jump-Start Your Career
            </h2>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={leadForm.openLeadForm}
                className="inline-flex h-[52px] w-full items-center justify-center rounded-[4px] bg-white px-10 text-[16px] leading-[22px] font-semibold tracking-[0.04em] text-[#282B8F] uppercase hover:bg-white/90 sm:w-auto"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
