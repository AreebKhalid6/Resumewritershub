"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { openLiveChat } from "@/components/livechat/LiveChat";
import { siteConfig } from "@/config/site";

const lpNavLinks = [
  { label: "Home", href: "/lp" },
  { label: "Resumes", href: "#samples" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
] as const;

export function LpHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    closeMobile();

    if (!href.startsWith("#")) {
      if (href === "/lp") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/lp");
      }
      return;
    }

    event.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        scrolled
          ? "border-b border-[#E7EAF4]/80 bg-white/90 shadow-[0px_2px_16px_rgba(23,68,130,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div
        className={`relative mx-auto flex w-full items-center px-4 transition-all duration-300 ease-out sm:px-6 lg:px-8 ${
          scrolled ? "h-16 lg:h-[72px]" : "h-[68px] lg:h-20"
        }`}
      >
        <Link
          href="/lp"
          className="relative z-10 shrink-0"
          aria-label={siteConfig.name}
          onClick={closeMobile}
        >
          <Image
            src="/newupdatelogo.png"
            alt={siteConfig.name}
            width={200}
            height={54}
            className={`w-auto object-contain transition-all duration-300 ease-out ${
              scrolled ? "h-9 sm:h-10 lg:h-11" : "h-10 sm:h-11 lg:h-12"
            }`}
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex"
          aria-label="Landing page navigation"
        >
          {lpNavLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="flex h-10 items-center px-3 text-[15px] leading-6 font-medium text-[#1E2532] no-underline transition-colors duration-200 hover:text-[#1A91F0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-[#1A91F0] bg-white text-[#1A91F0] no-underline transition-colors hover:bg-[#1A91F0]/5 sm:w-auto sm:gap-1.5 sm:px-3.5"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="hidden text-[13px] leading-5 font-semibold sm:inline">
              {siteConfig.phone}
            </span>
          </a>

          <button
            type="button"
            onClick={openLiveChat}
            className="hidden h-9 cursor-pointer items-center justify-center gap-1.5 rounded-[4px] bg-[#1A91F0] px-3.5 text-[13px] leading-5 font-semibold text-white transition-colors hover:bg-[#1580d8] md:flex"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Chat with us
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-[#E7EAF4] text-[#1E2532] transition-colors hover:bg-[#F7F9FC] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="lp-mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        id="lp-mobile-nav"
        className={`border-t border-[#E7EAF4] bg-white lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-h-[calc(100dvh-68px)] w-full overflow-y-auto px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex flex-col" aria-label="Landing page mobile navigation">
            {lpNavLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="border-b border-[#E7EAF4] py-3.5 text-[16px] leading-6 font-medium text-[#1E2532] no-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex h-11 items-center justify-center gap-2 rounded-[4px] border border-[#1A91F0] text-[15px] font-semibold text-[#1A91F0] no-underline"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phone}
            </a>
            <button
              type="button"
              onClick={() => {
                closeMobile();
                openLiveChat();
              }}
              className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[4px] bg-[#1A91F0] text-[15px] font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat with us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
