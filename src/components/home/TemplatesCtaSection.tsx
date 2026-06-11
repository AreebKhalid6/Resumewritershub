import Link from "next/link";
import { CONTAINER } from "./ui";

export function TemplatesCtaSection() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className={CONTAINER}>
        <div className="flex flex-col overflow-hidden rounded-3xl bg-[#F3F3F3] md:flex-row md:items-center">
          <div className="flex-1 px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
            <h2 className="text-[28px] leading-9 font-normal text-[#1E2532] sm:text-[38px] sm:leading-[46px] lg:text-[45px] lg:leading-[52px]">
              Stand Out with a Better Resume
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-6 text-[#5A6478] sm:text-[16px] sm:leading-7">
              Create a resume that looks professional, feels distinctive, and
              makes your strengths easy to see. Explore ATS-friendly templates
              designed to help you capture recruiters&apos; attention at first
              glance.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex h-[50px] items-center justify-center rounded-full bg-[#1A91F0] px-8 text-[16px] leading-[22px] font-semibold text-white no-underline hover:bg-[#1580d8]"
            >
              Explore Templates
            </Link>
          </div>

          <div className="relative h-[240px] w-full shrink-0 overflow-hidden sm:h-[320px] md:h-[420px] md:w-[48%]">
            <video
              src="/ctavideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute left-0 right-0 top-0 -bottom-3 block h-[calc(100%+12px)] w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
