import Image from "next/image";
import { CONTAINER } from "./ui";
import { PageCtaButtons } from "@/components/shared/PageCtaButtons";

export function FinalCtaSection() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className={CONTAINER}>
        <div className="flex flex-col gap-8 overflow-hidden rounded-3xl bg-[#EAF6FF] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="max-w-xl">
            <h2 className="text-[28px] leading-9 text-[#1E2532] sm:text-[38px] sm:leading-[46px] lg:text-[45.8px] lg:leading-[52px]">
              Create a Resume <br></br>That Gets Noticed
            </h2>
            <p className="mt-4 text-[16px] leading-6 text-[#1E2532] sm:text-[19px] sm:leading-7 lg:text-[21px]">
              Build a professional, ATS-friendly resume and<br className="hidden lg:block"></br> get hired now.
            </p>
            <PageCtaButtons
              className="mt-6 lg:mt-8"
              primaryLabel="Build My Resume"
              secondaryLabel="Talk to an Expert"
            />
          </div>
          <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[280px] lg:h-[333px] lg:w-[50%]">
            <Image
              src="/ctanew.png"
              alt="Create a resume that gets noticed"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
