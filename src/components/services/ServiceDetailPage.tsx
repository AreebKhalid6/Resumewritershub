"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, MessageCircle, PenLine, Search, ShieldCheck } from "lucide-react";
import {
  CONTAINER,
  StarRating,
} from "@/components/home/ui";
import { TemplatesSection } from "@/components/home/TemplatesSection";
import {
  GetResumeButton,
  LeadFormModalHost,
  PageCtaButtons,
  useLeadFormModal,
} from "@/components/shared/PageCtaButtons";
import type { ServiceContent } from "@/config/services";
import {
  serviceFaqs,
  serviceReviews,
  whyHirePoints,
} from "@/config/services";

const benefitIcons = [PenLine, Search, ShieldCheck];

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

export function ServiceDetailPage({ service }: { service: ServiceContent }) {
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
          <div className="w-full shrink-0 lg:w-[50%]">
            <h1 className="text-[32px] leading-10 text-[#1E2532] lg:text-[48px] lg:leading-[56px]">
              {service.heroTitle}
            </h1>
            <p className="mt-6 text-[18px] leading-7 text-[#656E83]">
              {service.heroDescription}
            </p>
            <PageCtaButtons
              className="mt-8"
              leadForm={leadForm}
              primaryLabel={service.heroPrimaryLabel ?? "Get Started Now"}
              secondaryLabel={service.heroSecondaryLabel ?? "Chat Now"}
            />
          </div>
          <div className="relative h-[240px] w-full overflow-hidden rounded-3xl sm:h-[300px] lg:h-[360px] lg:flex-1">
            <Image
              src={
                service.slug === "linkedin-profile-writing"
                  ? "/herolinkdein.webp"
                  : "/groupresume.png"
              }
              alt={service.title}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* Upgrade section */}
      <section className="py-12 lg:py-20">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[28px] leading-9 text-[#1E2532] lg:text-[40px] lg:leading-[48px]">
              {service.upgradeTitle}
            </h2>
            <p className="mt-6 text-[18px] leading-7 text-[#656E83]">
              {service.upgradeDescription}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, i) => {
              const Icon = benefitIcons[i] ?? PenLine;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl bg-[#F7F9FC] p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A91F0]/10">
                    <Icon className="h-6 w-6 text-[#1A91F0]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-[22px] leading-7 text-[#1E2532]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-6 text-[#656E83]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-8">
        <div className={CONTAINER}>
          <div className="flex flex-col items-stretch gap-6 rounded-3xl bg-[#1A91F0] px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:py-10">
            <h2 className="text-[24px] leading-8 font-semibold text-white lg:text-[32px] lg:leading-10">
              {service.midCtaTitle}
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
              {whyHirePoints.map((point) => (
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

      <TemplatesSection
        title={
          service.slug === "linkedin-profile-writing" ? (
            "Our winning LinkedIn profile samples"
          ) : (
            <>
              Professional Resume Templates
              <br />
              Designed to Get You Hired
            </>
          )
        }
        description={
          service.slug === "linkedin-profile-writing"
            ? "Explore a variety of LinkedIn profile samples that have helped job seekers land their dream positions."
            : "Explore our collection of ATS-friendly resume templates, created using insights from more than 10,000 job-winning resumes."
        }
        images={
          service.slug === "linkedin-profile-writing"
            ? [
                "/linkdein1.webp",
                "/linkdein2.webp",
                "/linkdein3.png",
                "/linkdein4.webp",
              ]
            : undefined
        }
        imageAlt={
          service.slug === "linkedin-profile-writing"
            ? "LinkedIn profile sample"
            : undefined
        }
      />

      {/* Reviews */}
      <section className="py-12 lg:py-20">
        <div className={`${CONTAINER} text-center`}>
          <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
            Client Feedback &amp; Reviews
          </p>
          <h2 className="mt-3 text-[28px] leading-9 text-[#1E2532] lg:text-[45px] lg:leading-[52px]">
            What Our Clients Say
          </h2>
        </div>

        <div className={`${CONTAINER} mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}>
          {serviceReviews.map((review) => (
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

      {/* Ready CTA */}
      <section className="bg-[#F7F9FC] py-12 lg:py-20">
        <div className={CONTAINER}>
          <div className="flex flex-col items-stretch gap-8 overflow-hidden rounded-3xl bg-[#EAF6FF] px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-16">
            <div className="max-w-2xl">
              <h2 className="text-[28px] leading-9 text-[#1E2532] lg:text-[40px] lg:leading-[48px]">
                {service.readyCtaTitle.split("\n").map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-4 text-[18px] leading-7 text-[#656E83]">
                {service.readyCtaDescription}
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={leadForm.openLeadForm}
                  className="inline-flex h-[50px] items-center justify-center rounded-[4px] bg-[#1A91F0] px-8 text-[16px] leading-[22px] font-semibold tracking-[0.04em] text-white uppercase hover:bg-[#1580d8]"
                >
                  Get Started Now
                </button>
              </div>
            </div>
            <div className="relative hidden h-[280px] w-[420px] shrink-0 overflow-hidden rounded-2xl lg:block">
              <Image
                src="/ctanew.png"
                alt={service.readyCtaTitle.replace("\n", " ")}
                fill
                className="object-cover object-center"
              />
            </div>
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
            {serviceFaqs.map((faq, index) => (
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
              {service.finalCtaTitle}
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
