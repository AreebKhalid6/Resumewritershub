import { CheckCircle2 } from "lucide-react";
import { CONTAINER } from "@/components/home/ui";
import { PageCtaButtons } from "@/components/shared/PageCtaButtons";

export function ThankYouPage() {
  return (
    <main className="w-full bg-white">
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bgimage.png')" }}
          aria-hidden
        />
        <div className={`relative z-10 ${CONTAINER} max-w-3xl text-center`}>
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#25B869]/15">
            <CheckCircle2 className="h-10 w-10 text-[#25B869]" strokeWidth={1.75} aria-hidden />
          </div>

          <h1 className="text-[32px] leading-10 font-bold text-[#1E2532] lg:text-[48px] lg:leading-[56px]">
            Thank you!
          </h1>
          <p className="mt-6 text-[16px] leading-7 text-[#656E83] lg:text-[18px]">
            We&apos;ve received your details. Our resume writing experts will
            contact you shortly to help jump-start your career.
          </p>

          <PageCtaButtons className="mt-10" centered />
        </div>
      </section>
    </main>
  );
}
