"use client";

import Image from "next/image";
import { Check, Play } from "lucide-react";
import { CONTAINER } from "@/components/home/ui";
import {
  GetResumeButton,
  LeadFormModalHost,
  PageCtaButtons,
  useLeadFormModal,
} from "@/components/shared/PageCtaButtons";
import { whyHirePoints } from "@/config/services";

const videoResumeSteps = [
  {
    number: "01",
    title: "Crafting a catchy script",
    description:
      "Our resume experts will create a catchy script based on the detailed brief you submit. This script is designed to highlight your strengths, skills, and experiences in a way that grabs the employer's attention. The goal is to make a great first impression and set you apart from other candidates.",
  },
  {
    number: "02",
    title: "Recording your video",
    description:
      "Using the script provided, you will record your video resume. We'll guide you on how to present yourself effectively. It's important to practice beforehand to ensure your delivery is confident and clear. This step helps showcase your personality and communication skills to potential employers.",
  },
  {
    number: "03",
    title: "Perfecting and submitting your video",
    description:
      "After recording, review your video and re-record it as needed until you are satisfied with the result. The beauty of a video resume is that you can perfect it before submission. Once you are happy with your recording, submit the final video to us. We ensure it is polished and professional.",
  },
];

const interactiveResumeSteps = [
  {
    number: "01",
    title: "Consultation and information gathering",
    description:
      "We begin by learning about your career goals, professional background, and the industry you're targeting. This initial consultation helps us gather the necessary information to create a resume tailored to your specific needs and aspirations.",
  },
  {
    number: "02",
    title: "Visual design and content creation",
    description:
      "Our skilled designers and writers craft a visually appealing resume that stands out. We use engaging elements such as charts, graphs, and infographics to effectively present your skills and achievements, ensuring your resume captures the attention of employers.",
  },
  {
    number: "03",
    title: "Review and finalization",
    description:
      "We work closely with you to review the draft of your visual resume. Your feedback is important to us, and we make revisions as needed to ensure the final product accurately represents your skills and experience. Once finalized, you'll have a professional resume ready to impress potential employers.",
  },
];

function WhyHireSection({
  leadForm,
}: {
  leadForm: ReturnType<typeof useLeadFormModal>;
}) {
  return (
    <section className="py-12 lg:py-20">
      <div className={`${CONTAINER} flex flex-col items-center gap-8 lg:flex-row lg:gap-12`}>
        <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF6FF] to-[#C3E5FE] lg:h-[420px] lg:w-[42%]">
          <Image
            src="/cv/eleven.png"
            alt="Resume sample"
            fill
            className="object-contain p-8"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[30px] leading-[38px] text-[#1E2532] lg:text-[36px] lg:leading-[44px]">
            Why hire Resume Writers Hub resume writing services?
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
          <PageCtaButtons className="mt-8" leadForm={leadForm} />
        </div>
      </div>
    </section>
  );
}

function ProcessSteps({
  title,
  description,
  steps,
  bg = "white",
}: {
  title: string;
  description: string;
  steps: { number: string; title: string; description: string }[];
  bg?: "white" | "gray";
}) {
  return (
    <section className={bg === "gray" ? "bg-[#F7F9FC] py-12 lg:py-20" : "py-12 lg:py-20"}>
      <div className={CONTAINER}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[32px] leading-10 text-[#1E2532] lg:text-[40px] lg:leading-[48px]">{title}</h2>
          <p className="mt-4 text-[18px] leading-7 text-[#656E83]">{description}</p>
        </div>

        <div className="mt-10 space-y-0 lg:mt-14">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex gap-4 lg:gap-10 ${
                index !== steps.length - 1 ? "pb-12" : ""
              }`}
            >
              <div className="flex w-14 shrink-0 flex-col items-center lg:w-[72px]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A91F0] text-[20px] font-semibold text-white">
                  {step.number}
                </span>
                {index !== steps.length - 1 && (
                  <div className="mt-3 w-px flex-1 bg-[#D9DEEB]" aria-hidden />
                )}
              </div>
              <div className="flex-1 pb-2 pt-2">
                <h3 className="text-[24px] leading-8 text-[#1E2532]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-3xl text-[16px] leading-7 text-[#656E83]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaptureHumanTouchCta({
  leadForm,
  variant = "light",
}: {
  leadForm: ReturnType<typeof useLeadFormModal>;
  variant?: "light" | "dark";
}) {
  return (
    <section className="py-8">
      <div className={CONTAINER}>
        <div
          className={`flex flex-col items-stretch justify-between gap-6 overflow-hidden rounded-3xl px-6 py-8 lg:flex-row lg:items-center lg:gap-8 lg:px-12 lg:py-10 ${
            variant === "dark"
              ? "bg-[#1A91F0]"
              : "bg-gradient-to-r from-[#EAF6FF] to-[#C3E5FE]"
          }`}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${
                variant === "dark" ? "bg-white/20" : "bg-white/80"
              }`}
            >
              <Play
                className={`h-8 w-8 ${
                  variant === "dark" ? "text-white" : "text-[#1A91F0]"
                }`}
                fill="currentColor"
                aria-hidden
              />
            </div>
            <h2
              className={`text-[26px] leading-8 font-semibold lg:text-[32px] lg:leading-10 ${
                variant === "dark" ? "text-white" : "text-[#1E2532]"
              }`}
            >
              Capture the Human Touch
            </h2>
          </div>
          {variant === "dark" ? (
            <button
              type="button"
              onClick={leadForm.openLeadForm}
              className="inline-flex h-[50px] w-full shrink-0 items-center justify-center rounded-[4px] bg-white px-8 text-[16px] leading-[22px] font-semibold text-[#1A91F0] hover:bg-white/90 lg:w-auto"
            >
              Get Started Now
            </button>
          ) : (
            <GetResumeButton
              leadForm={leadForm}
              className="h-[50px] w-full shrink-0 px-8 font-semibold lg:w-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export function VisualResumePage() {
  const leadForm = useLeadFormModal();

  return (
    <main className="bg-white">
      <LeadFormModalHost leadForm={leadForm} />
      {/* Video Resume Hero */}
      <section className="bg-[#EFF2F9] py-12 lg:py-20">
        <div className={`${CONTAINER} flex flex-col items-center gap-8 lg:flex-row lg:gap-12`}>
          <div className="w-full shrink-0 lg:w-[50%]">
            <h1 className="text-[36px] leading-[44px] text-[#1E2532] lg:text-[48px] lg:leading-[56px]">
              Shine brighter than other applicants with a video resume
            </h1>
            <p className="mt-6 text-[18px] leading-7 text-[#656E83]">
              Capture the attention of hiring managers with a video resume. We
              help you create a memorable and engaging video that differentiates
              you from other candidates.
            </p>
            <PageCtaButtons className="mt-8" leadForm={leadForm} />
          </div>
          <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-[#1E2532] lg:h-[380px] lg:flex-1">
            <video
              src="/ctavideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2532]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Why video resumes better */}
      <section className="py-12 lg:py-20">
        <div className={`${CONTAINER} flex flex-col items-center gap-8 lg:flex-row lg:gap-12`}>
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-3xl lg:h-[400px] lg:w-[45%]">
            <Image
              src="/card_adv1.svg"
              alt="Video resume benefits"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[32px] leading-10 text-[#1E2532] lg:text-[40px] lg:leading-[48px]">
              Why are video resumes better?
            </h2>
            <p className="mt-6 text-[18px] leading-7 text-[#656E83]">
              Video resumes are better because they let employers see your
              personality and communication skills right away. They show how you
              can fit into their company culture and highlight your strengths
              visually. With 89% of employers saying they would watch a video
              resume, you stand out more compared to traditional paper resumes,
              which often go unread.
            </p>
            <div className="mt-8">
              <GetResumeButton leadForm={leadForm} />
            </div>
          </div>
        </div>
      </section>

      <CaptureHumanTouchCta leadForm={leadForm} />

      <WhyHireSection leadForm={leadForm} />

      <ProcessSteps
        title="How we make your video resume"
        description="We expertly transform your skills and achievements into a compelling video narrative that captures attention and impresses employers."
        steps={videoResumeSteps}
        bg="gray"
      />

      {/* Interactive Resume Hero */}
      <section className="bg-[#EFF2F9] py-12 lg:py-20">
        <div className={`${CONTAINER} flex flex-col items-center gap-8 lg:flex-row lg:gap-12`}>
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-3xl bg-white shadow-[0px_12px_32px_-4px_rgba(15,56,113,0.12)] lg:h-[400px] lg:w-[45%]">
            <Image
              src="/cv/four.svg"
              alt="Interactive resume preview"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[36px] leading-[44px] text-[#1E2532] lg:text-[48px] lg:leading-[56px]">
              Stand out with an engaging interactive resume
            </h2>
            <p className="mt-6 text-[18px] leading-7 text-[#656E83]">
              Recruiters retain visuals more than text. We create a resume that
              reflects your professional experience in an eye-catching visual
              layout, ensuring you stand out in the market.
            </p>
            <PageCtaButtons className="mt-8" leadForm={leadForm} />
          </div>
        </div>
      </section>

      {/* When to use visual resume */}
      <section className="py-12 lg:py-20">
        <div className={`${CONTAINER} flex flex-col items-center gap-8 lg:flex-row lg:gap-12`}>
          <div className="flex-1">
            <h2 className="text-[32px] leading-10 text-[#1E2532] lg:text-[40px] lg:leading-[48px]">
              When should you use a visual resume?
            </h2>
            <p className="mt-6 text-[18px] leading-7 text-[#656E83]">
              When aiming to stand out in competitive job markets, a visual
              resume is ideal. It&apos;s especially effective in creative fields
              such as design, marketing, and media, where showcasing your skills
              with engaging visuals and infographics can set you apart.
              Recruiters respond better to visual information, making your resume
              memorable and increasing your chances of landing interviews. Our
              service ensures your resume is eye-catching and professional,
              tailored to impress employers looking for innovative candidates.
            </p>
            <div className="mt-8">
              <GetResumeButton leadForm={leadForm} />
            </div>
          </div>
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F1F2FF] to-[#EAF6FF] lg:h-[400px] lg:w-[45%]">
            <Image
              src="/cv/one.svg"
              alt="Visual resume sample"
              fill
              className="object-cover object-top p-6"
              unoptimized
            />
          </div>
        </div>
      </section>

      <CaptureHumanTouchCta leadForm={leadForm} variant="dark" />

      <WhyHireSection leadForm={leadForm} />

      <ProcessSteps
        title="How we make your interactive resume"
        description="Our approach combines strategic content placement with interactive features to impress employers."
        steps={interactiveResumeSteps}
      />

      {/* Final CTA */}
      <section className="py-12 lg:py-20">
        <div className={CONTAINER}>
          <div className="flex flex-col items-stretch justify-between gap-8 rounded-3xl bg-[#282B8F] px-6 py-10 lg:flex-row lg:items-center lg:px-12 lg:py-14">
            <div>
              <h2 className="text-[30px] leading-[38px] text-white lg:text-[36px] lg:leading-[44px]">
                Ready to stand out with a visual resume?
              </h2>
              <p className="mt-3 text-[18px] leading-7 text-white/80">
                Let our experts help you create a video or interactive resume
                that captures attention and lands interviews.
              </p>
            </div>
            <PageCtaButtons leadForm={leadForm} />
          </div>
        </div>
      </section>
    </main>
  );
}
