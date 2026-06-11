import Image from "next/image";
import { GetStartedButton } from "@/components/shared/PageCtaButtons";
import { CONTAINER } from "./ui";

function GradientBlob() {
  return (
    <div
      className="pointer-events-none absolute top-1/2 right-[-120px] h-[880px] w-[880px] -translate-y-1/2 opacity-[0.76]"
      aria-hidden
    >
      <div className="absolute inset-[15.73%] blur-[69px]">
        <div className="absolute top-0 left-0 h-1/2 w-1/2 bg-gradient-to-br from-white to-[#EAF6FF]" />
        <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-gradient-to-bl from-white to-[#D6EDFF]" />
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-gradient-to-tr from-white to-[#C3E5FE]" />
        <div className="absolute right-0 bottom-0 h-1/2 w-1/2 bg-gradient-to-tl from-white to-[#1A91F0]/25" />
      </div>
    </div>
  );
}

export function ReadyToResumeSection() {
  return (
    <section className="bg-white py-10 lg:py-[72px]">
      <div className={CONTAINER}>
        <div className="relative overflow-hidden rounded-3xl border-2 border-white/30 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.06),0px_12px_28px_-2px_rgba(0,0,0,0.1)] lg:h-[480px]">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #EAF6FF 45%, rgba(26, 145, 240, 0.12) 100%)",
            }}
            aria-hidden
          />

          <div className="relative flex h-full flex-col lg:flex-row">
            <div className="flex w-full shrink-0 flex-col justify-center px-6 pt-10 sm:px-8 lg:w-[48%] lg:pt-0">
              <h2 className="text-[28px] leading-9 font-normal text-[#1E2532] sm:text-[38px] sm:leading-[46px] lg:text-[45px] lg:leading-[52px]">
                Ready to Take the <br />Next Step  
               
                in Your Career?
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-6 tracking-[0.16px] text-[#656E83] sm:text-[16px] sm:leading-[26px] lg:mt-6">
                Your resume is often your first opportunity to make an
                impression. Make sure it represents your experience, strengths,
                and potential at their best.
              </p>
              <GetStartedButton
                className="mt-8 h-[50px] w-fit px-8"
                label="Start Your Resume Today"
              />
            </div>

            <div className="relative mt-8 h-[260px] min-w-0 flex-1 overflow-hidden sm:h-[340px] lg:mt-0 lg:h-auto">
              <GradientBlob />

              <div className="absolute inset-0 flex items-end justify-end pr-4 sm:pr-8">
                <Image
                  src="/groupresume.png"
                  alt="Resume templates preview"
                  width={520}
                  height={480}
                  className="max-h-full w-auto object-contain object-bottom object-right lg:max-h-[440px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
