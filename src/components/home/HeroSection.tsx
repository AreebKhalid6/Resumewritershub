import Image from "next/image";
import { CONTAINER, StarRating } from "./ui";
import { HomeHeroCta } from "./HomeHeroCta";
import { ResumeCounter } from "./ResumeCounter";

export function HeroSection() {
  return (
    <section className="bg-white px-4 pt-2 pb-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto overflow-hidden rounded-[24px] bg-[#F7F9FC]">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cta-footer-bgd.png')" }}
          aria-hidden
        />
        <div className={`relative z-10 ${CONTAINER} flex flex-col items-center gap-10 py-10 lg:flex-row lg:gap-12 lg:py-16`}>
          <div className="w-full lg:w-[500px] lg:shrink-0">
            <h1 className="text-[32px] leading-10 font-normal text-[#1E2532] sm:text-[42px] sm:leading-[50px] lg:text-[52px] lg:leading-[60px]">
              <span className="text-[#1A91F0]">Applying Everywhere</span> but
              Hearing Nothing Back?
            </h1>
            <p className="mt-6 text-[16.3px] leading-6 text-[#1E2532]">
              Your experience may not be the problem. Your resume could be
              underselling itself. We turn overlooked resumes into powerful
              career stories that grab attention, pass ATS filters, and give
              employers a reason to call.
            </p>
            <HomeHeroCta />
            <div className="mt-6 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                <circle cx="10" cy="10" r="8" fill="#25B869" />
                <path
                  d="M7 10L9 12L13 8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[16.2px] leading-6 text-[#1E2532]">90%</span>
              <span className="text-[14.1px] leading-5 text-[#828BA2]">
                more likely to land the job
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={4.7} size={24} />
              <span className="text-[13.8px] leading-5 text-[#828BA2]">
                4.7 out of 5 | 100+ reviews
              </span>
            </div>
          </div>

          <div className="flex w-full flex-1 justify-center">
            <Image
              src="/homeimage.avif"
              alt="Resume builder preview"
              width={726}
              height={534}
              className="h-auto w-full max-w-[726px] object-contain lg:h-[534px] lg:w-[726px]"
              priority
            />
          </div>
        </div>
      </div>

      <div className={`${CONTAINER} mt-8 flex flex-wrap items-center justify-center gap-2 text-center sm:gap-3 lg:mt-10`}>
        <svg
          viewBox="0 0 44 44"
          aria-hidden
          className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
        >
          <rect width="44" height="44" rx="8" fill="#EAF6FF" />
          <path d="M12 28L22 14L32 28" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="12" y1="14" x2="32" y2="28">
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
    </section>
  );
}
