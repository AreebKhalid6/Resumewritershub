"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  Award,
  Check,
  ChevronDown,
  FileText,
  KeyRound,
  MessageCircle,
  Users,
} from "lucide-react";
import {
  CONTAINER,
  PrimaryButton,
  SecondaryButton,
  StarRating,
} from "@/components/home/ui";
import { BenefitCards } from "@/components/home/BenefitCards";
import { ResumeCounter } from "@/components/home/ResumeCounter";
import { openLiveChat } from "@/components/livechat/LiveChat";
import {
  LeadFormModalHost,
  useLeadFormModal,
} from "@/components/shared/PageCtaButtons";
import { siteConfig } from "@/config/site";

const brandLogos = Array.from({ length: 10 }, (_, i) => ({
  src: `/logos/logoone${i + 1}.png`,
  alt: `Hiring partner logo ${i + 1}`,
}));

const inputClassName =
  "w-full rounded-lg border border-[#E7EAF4] bg-white px-4 py-3 text-[15px] leading-6 text-[#1E2532] outline-none transition-all placeholder:text-[#A5ACBD] focus:border-[#1A91F0] focus:ring-4 focus:ring-[#1A91F0]/12";

function formatUsPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// Small structural device: an eyebrow with a short accent rule, reused
// across every section so the page reads as one system rather than
// stacked blocks.
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center justify-center gap-2.5 text-[13px] font-semibold tracking-[0.14em] text-[#1A91F0] uppercase">
      <span className="h-px w-6 bg-[#1A91F0]/40" aria-hidden />
      {children}
      <span className="h-px w-6 bg-[#1A91F0]/40" aria-hidden />
    </p>
  );
}

const heroPerks = [
  "Certified Resume Experts",
  "ATS-Friendly Design",
  "Fast Turnaround Time",
  "100% Satisfaction Guarantee",
];

const sampleImages = [
  "/cv/five.svg",
  "/cv/four.svg",
  "/cv/two.svg",
  "/cv/one.svg",
];

const whyUs = [
  {
    title: "Career-Oriented Resume",
    description:
      "Every resume is tailored to your goals and industry, with the right keywords so recruiters actually see you.",
    icon: FileText,
    accent: "#1A91F0",
    soft: "#EAF6FF",
  },
  {
    title: "Keyword-Optimized Resumes",
    description:
      "We weave in role-specific keywords and structure so your resume clears ATS filters and stands out to hiring managers.",
    icon: KeyRound,
    accent: "#25B869",
    soft: "#E7F4ED",
  },
  {
    title: "Certified Resume Writers",
    description:
      "PARWCC-certified writers craft clear, compelling resumes that showcase your skills and achievements with confidence.",
    icon: Award,
    accent: "#5660E8",
    soft: "#F1F2FF",
  },
  {
    title: "Job Placement Support",
    description:
      "Beyond the resume, our team helps you stay on track with guidance and support throughout your job search.",
    icon: Users,
    accent: "#E6A817",
    soft: "#FFF8E6",
  },
];

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We gather all the necessary information, like your goals, experience, and skills, to ensure your resume accurately reflects your qualifications and aspirations.",
  },
  {
    number: "02",
    title: "Customized Resume Crafting",
    description:
      "Our expert writers then craft a personalized resume highlighting your strengths, achievements, and experiences clearly and concisely.",
  },
  {
    number: "03",
    title: "Review And Refinement",
    description:
      "After the initial draft is complete, we will send it to you for review, take your feedback, and incorporate it to ensure you are completely satisfied.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Finally, we deliver your resume in various formats, ensuring you have everything you need to apply for your desired positions confidently.",
  },
];

const reviews = [
  {
    text: `Within 10 days of using my new resume from ${siteConfig.name}, I had 4 interview calls lined up. The difference was night and day!`,
    name: "Sarah Mitchell",
    location: "USA",
  },
  {
    text: `${siteConfig.name} completely transformed how my experience was presented. I finally started getting responses from companies I had applied to for months.`,
    name: "David Collins",
    location: "USA",
  },
  {
    text: "Their team was responsive, professional, and really understood what recruiters look for. Highly recommended!",
    name: "Jessica Evans",
    location: "USA",
  },
];

const faqs = [
  {
    question: "What industries do you specialize in for resume writing services?",
    answer:
      "We specialize in crafting resumes for various industries, including IT, finance, healthcare, engineering, marketing, and more. Our team tailors each resume to match your chosen industry's specific requirements and expectations.",
  },
  {
    question: "Will my resume be ATS-friendly?",
    answer:
      "Yes. Every resume is built with ATS-friendly formatting, clean structure, and industry keywords so it can pass applicant tracking systems and reach hiring managers.",
  },
  {
    question: "What qualifications do your resume writers have?",
    answer:
      "Our writers are certified professionals with experience across industries. Many hold PARWCC credentials and understand what recruiters and ATS systems look for.",
  },
  {
    question: "What if I'm not satisfied with the final resume?",
    answer:
      "We offer revisions and a satisfaction-focused process so your resume reflects your goals. If something needs adjustment, our team works with you until you're happy with the result.",
  },
  {
    question: "Can I speak directly with the resume writer assigned to my project?",
    answer:
      "Yes. Depending on your package, you can consult with your assigned certified resume writer to share goals, feedback, and role preferences.",
  },
];

function ChatNowButton({
  onClick,
  className = "",
  light = false,
}: {
  onClick: () => void;
  className?: string;
  light?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-[50px] items-center justify-center gap-2 rounded-[6px] px-8 text-[15px] font-semibold tracking-[0.04em] uppercase shadow-sm transition-all active:scale-[0.98] ${
        light
          ? "bg-white text-[#282B8F] hover:bg-white/90"
          : "bg-[#1A91F0] text-white shadow-[0_10px_24px_-8px_rgba(26,145,240,0.6)] hover:bg-[#1580d8] hover:shadow-[0_12px_28px_-6px_rgba(26,145,240,0.7)]"
      } ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      Chat Now
    </button>
  );
}

function HeroLeadForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone,
          agreed: true,
          source: "landing-page",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Form submission failed");
      }

      router.push("/lp/thank-you");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[600px] rounded-2xl border border-[#EDF1F9] bg-white p-5 shadow-[0px_24px_56px_-12px_rgba(15,56,113,0.22)] sm:p-7 lg:mx-0 lg:justify-self-end"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#25B869]" aria-hidden />
        <p className="text-[13px] font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
          Free consultation
        </p>
      </div>
      <h2 className="mt-2 text-[24px] leading-8 font-semibold text-[#1E2532]">
        Get started today
      </h2>
      <p className="mt-2 text-[14px] leading-5 text-[#656E83]">
        Don&apos;t wait for opportunities to come to you—stand out and make them happen.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="lp-name" className="mb-1.5 block text-[13px] font-medium text-[#1E2532]">
            Name
          </label>
          <input
            id="lp-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="lp-email" className="mb-1.5 block text-[13px] font-medium text-[#1E2532]">
            Email
          </label>
          <input
            id="lp-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email address"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="lp-phone" className="mb-1.5 block text-[13px] font-medium text-[#1E2532]">
            Phone Number
          </label>
          <input
            id="lp-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(formatUsPhone(event.target.value))}
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Enter a US phone number, e.g. (555) 123-4567"
            placeholder="(555) 123-4567"
            className={inputClassName}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-[#E7EAF4] text-[#1A91F0] focus:ring-[#1A91F0]"
          />
          <span className="text-[13px] leading-5 text-[#656E83]">
            I agree to the{" "}
            <Link href="/privacy-policy" className="font-medium text-[#1A91F0] hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-service" className="font-medium text-[#1A91F0] hover:underline">
              Terms of Service
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-[50px] w-full items-center justify-center rounded-[6px] bg-[#1A91F0] px-3 text-[13px] font-semibold tracking-[0.04em] text-white uppercase shadow-[0_10px_24px_-8px_rgba(26,145,240,0.6)] transition-all hover:bg-[#1580d8] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:text-[15px]"
        >
          {isSubmitting ? "Sending…" : "Let’s Craft My Winning Resume"}
        </button>

        {error && (
          <p
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center text-[13px] text-red-700"
          >
            {error}
          </p>
        )}

        <p className="text-center text-[12px] leading-5 text-[#9AA2B5]">
          No spam. A resume expert will reach out within one business day.
        </p>
      </div>
    </form>
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#E7EAF4]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[15px] leading-6 transition-colors sm:text-[17px] sm:leading-7 ${
            isOpen ? "font-medium text-[#1A91F0]" : "text-[#1E2532]"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen ? "bg-[#1A91F0] text-white" : "bg-[#F1F4FA] text-[#656E83]"
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] leading-6 text-[#656E83]">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const leadForm = useLeadFormModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-x-clip bg-white">
      <LeadFormModalHost leadForm={leadForm} />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1F0078 0%, #016BFE 50%, #1A91F0 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/linebg.png')" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 -right-24 hidden h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl sm:block"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.75fr] lg:gap-12">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[13px] font-semibold text-white">
                Starting from $99
              </span>
              <h1 className="mt-4 text-[28px] leading-9 font-bold tracking-tight text-white sm:text-[42px] sm:leading-[50px] lg:text-[50px] lg:leading-[58px]">
                <span className="block">
                  Get A Professional Resume
                </span>
                <span className="block">Starting From $99</span>
              </h1>
              <p className="mt-4 text-[16px] leading-6 text-white/85 sm:mt-5 sm:text-[18px] sm:leading-7">
                Stand Out &amp; Get Hired Faster with Professional Resume Writing Services
              </p>
              <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                {heroPerks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-[14px] leading-5 text-white sm:text-[15px]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <StarRating rating={4.7} size={20} />
                <span className="text-[13px] leading-5 text-white/80 sm:text-[13.8px]">
                  4.7 out of 5 | 100+ reviews
                </span>
              </div>

              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                <PrimaryButton
                  onClick={leadForm.openLeadForm}
                  className="h-[50px] w-full px-8 font-semibold sm:w-auto sm:whitespace-nowrap"
                >
                  Get Started Now
                </PrimaryButton>
                <SecondaryButton
                  onClick={openLiveChat}
                  className="h-[50px] w-full gap-2 border-white/40 bg-white/10 px-8 font-semibold text-white hover:bg-white/20 sm:w-auto sm:whitespace-nowrap"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                  Chat with an Expert
                </SecondaryButton>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <HeroLeadForm />
            </div>
          </div>
        </div>
      </section>

      <div
        className={`${CONTAINER} mt-8 flex flex-wrap items-center justify-center gap-2 text-center sm:gap-3 lg:mt-10`}
      >
        <svg
          viewBox="0 0 44 44"
          aria-hidden
          className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
        >
          <rect width="44" height="44" rx="8" fill="#EAF6FF" />
          <path d="M12 28L22 14L32 28" fill="url(#lp-grad)" />
          <defs>
            <linearGradient id="lp-grad" x1="12" y1="14" x2="32" y2="28">
              <stop stopColor="#96D4FF" />
              <stop offset="1" stopColor="#B8E2FF" />
            </linearGradient>
          </defs>
        </svg>
        <ResumeCounter className="text-[30px] leading-9 text-[#1A91F0] sm:text-[42px] sm:leading-[46px] lg:text-[52px] lg:leading-[52px]" />
        <p className="text-[26px] leading-9 text-[#1E2532] sm:text-[38px] sm:leading-[46px] lg:text-[45.7px] lg:leading-[52px]">
          resumes created till now
        </p>
      </div>

      <BenefitCards />

    

      {/* Samples */}
      <section id="samples" className="scroll-mt-24 bg-[#F7F9FC] py-12 sm:py-20">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>ATS-Optimized Resumes</SectionEyebrow>
            <h2 className="mt-3 text-[28px] leading-9 font-semibold text-[#1E2532] sm:text-[40px] sm:leading-[48px]">
              ATS-Optimized Resumes Tailored by Experts
            </h2>
            <p className="mt-4 text-[15px] leading-6 text-[#656E83] sm:text-[16px] sm:leading-7">
              We have crafted +10,000 job-winning professional resumes. Check out our
              collection of ATS-optimized resumes designed to catch top employer&apos;s
              attention and land you interviews.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
            {sampleImages.map((src) => (
              <div
                key={src}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-[0px_8px_24px_-6px_rgba(15,56,113,0.14)] transition-transform hover:-translate-y-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="ATS-optimized resume sample"
                  className="h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why-us" className="scroll-mt-24 bg-[#1580D8] py-12 sm:py-20">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-3xl text-center [&>p:first-child]:text-white [&>p:first-child>span]:bg-white/40">
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2 className="mt-3 text-[28px] leading-9 font-normal text-white sm:text-[40px] sm:leading-[48px]">
              Our Resume Writing Expertise
            </h2>
            <p className="mt-4 text-[15px] leading-6 text-white/85 sm:text-[16px] sm:leading-7">
              Your resume is often the first impression employers get. We make sure
              it&apos;s clear, credible, and impossible to ignore.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {whyUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#E7EAF4] bg-white p-5 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[0px_16px_40px_-12px_rgba(15,56,113,0.16)] sm:p-8"
                >
                  <div
                    className="pointer-events-none absolute top-0 right-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full opacity-60 blur-2xl transition-opacity group-hover:opacity-100"
                    style={{ backgroundColor: item.soft }}
                    aria-hidden
                  />
                  <div className="relative flex items-start gap-3 sm:gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12"
                      style={{ backgroundColor: item.soft, color: item.accent }}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[12px] font-semibold tracking-[0.08em] uppercase"
                          style={{ color: item.accent }}
                        >
                          0{index + 1}
                        </span>
                        <span
                          className="h-px max-w-[48px] flex-1"
                          style={{ backgroundColor: `${item.accent}33` }}
                          aria-hidden
                        />
                      </div>
                      <h3 className="mt-2 text-[18px] leading-7 font-semibold text-[#1E2532] sm:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-6 text-[#656E83] sm:mt-2.5 sm:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <ChatNowButton
              onClick={leadForm.openLeadForm}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how-it-works" className="scroll-mt-24 py-12 sm:py-20">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>What We Offer</SectionEyebrow>
            <h2 className="mt-3 text-[28px] leading-9 font-semibold text-[#1E2532] sm:text-[40px] sm:leading-[48px]">
              Get Your Resume In 4 Easy Steps
            </h2>
            <p className="mt-4 text-[15px] leading-6 text-[#656E83] sm:text-[16px] sm:leading-7">
              Our resume writers ensure your resume captures the attention of employers,
              and our resume writing services maximize your chances of landing interviews.
            </p>
          </div>
          <div className="relative mt-8 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* connecting line, desktop only — encodes that these are ordered, not just grouped */}
            <div
              className="pointer-events-none absolute top-[38px] right-[12.5%] left-[12.5%] hidden h-px bg-[#E7EAF4] xl:block"
              aria-hidden
            />
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-[#E7EAF4] bg-white p-5 shadow-[0px_4px_16px_-8px_rgba(15,56,113,0.08)] sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A91F0] text-[15px] font-semibold text-white">
                  {step.number.replace("0", "")}
                </div>
                <h3 className="mt-4 text-[18px] leading-7 font-semibold text-[#1E2532] sm:text-[20px]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#656E83] sm:mt-3">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="pb-12 sm:pb-20">
        <div className={CONTAINER}>
          <div className="relative flex flex-col items-stretch gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#DCEFFF] px-5 py-8 sm:flex-row sm:items-center sm:gap-8 sm:rounded-3xl sm:px-12 sm:py-12">
            <div
              className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-[#1A91F0]/10 blur-2xl"
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="text-[24px] leading-8 font-semibold text-[#1E2532] sm:text-[36px] sm:leading-[44px]">
                Not Getting Interview Calls? Optimize Your Resume As Per ATS
              </h2>
              <p className="mt-3 text-[15px] leading-6 text-[#656E83] sm:mt-4 sm:text-[16px] sm:leading-7">
                Get in touch with our experts to get a free consultation.
              </p>
            </div>
            <div className="relative w-full shrink-0 sm:w-auto">
              <ChatNowButton
                onClick={leadForm.openLeadForm}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-24 bg-[#F7F9FC] py-12 sm:py-20">
        <div className={`${CONTAINER} text-center`}>
          <p className="text-[13px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase sm:text-[14px]">
            Client Feedback &amp; Reviews
          </p>
          <h2 className="mt-3 text-[28px] leading-9 text-[#1E2532] sm:text-[40px] sm:leading-[48px] lg:text-[45px] lg:leading-[52px]">
            What Our Clients Say
          </h2>
        </div>

        <div className={`${CONTAINER} mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3`}>
          {reviews.map((review) => (
            <div
              key={`${review.name}-${review.text.slice(0, 24)}`}
              className="flex flex-col rounded-2xl bg-white p-5 shadow-[0px_2px_8px_rgba(15,56,113,0.06)] sm:p-8"
            >
              <StarRating rating={5} size={20} />
              <p className="mt-4 flex-1 text-[15px] leading-6 text-[#1E2532] sm:text-[16px]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 sm:mt-6">
                <p className="text-[15px] leading-6 font-semibold text-[#1E2532] sm:text-[16px]">
                  {review.name}
                </p>
                <p className="text-[13px] leading-5 text-[#656E83] sm:text-[14px]">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 py-12 sm:py-20">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Common Questions</SectionEyebrow>
            <h2 className="mt-3 text-[28px] leading-9 font-semibold text-[#1E2532] sm:text-[40px] sm:leading-[48px]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#E7EAF4] bg-white px-4 sm:mt-10 sm:px-8">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}