import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Services", href: "/services" },
  { label: "Visual Resume", href: "/visual-resume" },
  { label: "Resume Samples", href: "/resume-samples" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
] as const;

export function Header() {
  return (
    <header className="relative flex h-20 min-w-[1440px] w-full items-center bg-white pr-8 pl-8">
      <Link href="/" className="relative z-10 shrink-0" aria-label={siteConfig.name}>
        <Image
          src="/logo.png"
          alt={siteConfig.name}
          width={220}
          height={60}
          className="h-[4em] w-auto"
          priority
        />
      </Link>

      <nav
        className="ml-auto flex h-20 items-center"
        aria-label="Main navigation"
      >
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex h-20 items-center px-4 text-[16px] leading-6 text-[#1E2532] no-underline"
          >
            {item.label}
          </Link>
        ))}

        <span className="mx-2 h-4 w-px shrink-0 bg-[#D9DEEB]" aria-hidden />

        <Link
          href="#"
          className="px-4 text-[16.6px] leading-6 text-[#1A91F0] no-underline"
        >
          Sign in
        </Link>

        <Link
          href="#"
          className="ml-4 flex h-[50px] w-[182.92px] items-center justify-center rounded-[4px] bg-[#1A91F0] text-[16.3px] leading-[22px] font-semibold text-white no-underline"
        >
          Create my resume
        </Link>
      </nav>
    </header>
  );
}
