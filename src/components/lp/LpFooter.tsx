"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { openLiveChat } from "@/components/livechat/LiveChat";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "X", href: "#", icon: "x" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  const className = "h-5 w-5 fill-current";

  switch (icon) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M14 8H16.5V5H14C11.5 5 10 6.7 10 9V11H8V14H10V21H13V14H15.5L16 11H13V9.3C13 8.6 13.2 8 14 8Z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M17.5 3H20.5L14.3 10.1L21.5 21H15.8L11.4 14.7L6.2 21H3.2L9.8 13.4L3 3H8.8L12.8 8.7L17.5 3ZM16.5 19.1H18.2L7.6 4.8H5.8L16.5 19.1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7C3 4.8 4.8 3 7 3ZM12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8ZM12 10.2C13.2 10.2 14 11 14 12.2C14 13.4 13.2 14.2 12 14.2C10.8 14.2 10 13.4 10 12.2C10 11 10.8 10.2 12 10.2ZM16.5 7.2C16.1 7.2 15.8 7.5 15.8 7.9C15.8 8.3 16.1 8.6 16.5 8.6C16.9 8.6 17.2 8.3 17.2 7.9C17.2 7.5 16.9 7.2 16.5 7.2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M6.5 8.5H3.5V20.5H6.5V8.5ZM5 3.5C4.17 3.5 3.5 4.17 3.5 5C3.5 5.83 4.17 6.5 5 6.5C5.83 6.5 6.5 5.83 6.5 5C6.5 4.17 5.83 3.5 5 3.5ZM9.5 8.5H12.3V9.8C12.7 9.1 13.7 8.2 15.2 8.2C18.3 8.2 20.5 10.3 20.5 14.5V20.5H17.5V15C17.5 13.2 16.8 12 15.3 12C14.1 12 13.5 12.7 13.2 13.4C13.1 13.7 13 14.1 13 14.5V20.5H10V8.5H9.5Z" />
        </svg>
      );
  }
}

export function LpFooter() {
  return (
    <footer className="relative mt-16 bg-[#1A91F0] text-white sm:mt-20">
      {/* Floating CTA bar */}
      <div className="absolute inset-x-0 top-0 z-10 -translate-y-1/2 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-stretch gap-4 rounded-2xl bg-[#0F141E] px-5 py-5 shadow-[0_16px_40px_-12px_rgba(15,56,113,0.35)] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-6">
          <p className="text-center text-[16px] leading-6 font-semibold text-white sm:text-left sm:text-[18px] sm:leading-7 lg:text-[20px]">
            Transform Your Career Today with Expert Resume Writing Services.
          </p>
          <button
            type="button"
            onClick={openLiveChat}
            className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-5 text-[13px] font-semibold tracking-[0.04em] text-[#0F141E] uppercase transition-colors hover:bg-[#F7F9FC] sm:h-12 sm:px-6 sm:text-[14px]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
            Chat Now
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1100px] px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12 lg:px-8 lg:pt-28">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <Link
            href="/lp"
            className="shrink-0"
            aria-label={siteConfig.name}
          >
            <Image
              src="/newupdatelogo.png"
              alt={siteConfig.name}
              width={220}
              height={60}
              className="h-12 w-auto object-contain brightness-0 invert sm:h-14"
            />
          </Link>
          <p className="max-w-md text-center text-[14px] leading-6 text-white/90 sm:text-right sm:text-[15px] sm:leading-7">
            {siteConfig.name} is your trusted partner in creating ATS-optimized,
            job-winning resumes tailored to your career goals.
          </p>
        </div>

        <div className="my-8 h-px w-full bg-white/30 sm:my-10" aria-hidden />

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="text-[13px] leading-5 text-white/85 sm:text-[14px]">
            Copyright {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white transition-opacity hover:opacity-75"
              >
                <SocialIcon icon={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
