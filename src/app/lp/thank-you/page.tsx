import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Your Message Has Been Sent",
  description: `Thank you for reaching out to ${siteConfig.name}. We have successfully received your message.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function LpThankYouPage() {
  return (
    <main
      className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 py-16"
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
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-[#1F0078]/40 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-white/20 bg-white px-6 py-12 text-center shadow-[0px_24px_64px_-12px_rgba(15,56,113,0.35)] sm:px-10 sm:py-14">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#25B869]/15 ring-8 ring-[#25B869]/10 sm:h-20 sm:w-20">
          <CheckCircle2
            className="h-9 w-9 text-[#25B869] sm:h-10 sm:w-10"
            strokeWidth={1.75}
            aria-hidden
          />
        </div>

        <h1 className="text-[28px] leading-9 font-bold tracking-tight text-[#1E2532] sm:text-[36px] sm:leading-[44px]">
          Your Message Has Been Sent!
        </h1>

        <p className="mt-4 text-[15px] leading-7 text-[#656E83] sm:mt-5 sm:text-[17px]">
          Thank you for reaching out to {siteConfig.name}! We have successfully
          received your message and our team is eager to assist you.
        </p>

        <Link
          href="/lp"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-[#1A91F0] px-8 text-[15px] font-semibold text-white no-underline shadow-[0_12px_28px_-8px_rgba(26,145,240,0.55)] transition-all hover:bg-[#1580d8] hover:shadow-[0_14px_32px_-8px_rgba(26,145,240,0.65)] sm:mt-10"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
