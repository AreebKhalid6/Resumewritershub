import Image from "next/image";
import Link from "next/link";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

type FooterLink = { label: string; href: string };

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterSection[] = [
  {
    title: "Services",
    links: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Services", href: "/services" },
      { label: "Visual Resume", href: "/visual-resume" },
      { label: "Resume Samples", href: "/resume-samples" },
      { label: "Pricing", href: "/pricing" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "FAQ", href: "/faq" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "TikTok", href: "#", icon: "tiktok" },
] as const;

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 text-[13px] leading-5 font-semibold tracking-[1.8px] text-[#656E83] uppercase">
      {children}
    </h3>
  );
}

function FooterLinkItem({ label, href }: FooterLink) {
  return (
    <Link
      href={href}
      className="block text-[15px] leading-6 text-white capitalize no-underline hover:text-[#A0D6FA] sm:text-[16.5px]"
    >
      {label}
    </Link>
  );
}

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  const className = "h-6 w-6 fill-white";

  switch (icon) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M6.5 8.5H3.5V20.5H6.5V8.5ZM5 3.5C4.17 3.5 3.5 4.17 3.5 5C3.5 5.83 4.17 6.5 5 6.5C5.83 6.5 6.5 5.83 6.5 5C6.5 4.17 5.83 3.5 5 3.5ZM9.5 8.5H12.3V9.8C12.7 9.1 13.7 8.2 15.2 8.2C18.3 8.2 20.5 10.3 20.5 14.5V20.5H17.5V15C17.5 13.2 16.8 12 15.3 12C14.1 12 13.5 12.7 13.2 13.4C13.1 13.7 13 14.1 13 14.5V20.5H10V8.5H9.5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7C3 4.8 4.8 3 7 3ZM12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8ZM12 10.2C13.2 10.2 14 11 14 12.2C14 13.4 13.2 14.2 12 14.2C10.8 14.2 10 13.4 10 12.2C10 11 10.8 10.2 12 10.2ZM16.5 7.2C16.1 7.2 15.8 7.5 15.8 7.9C15.8 8.3 16.1 8.6 16.5 8.6C16.9 8.6 17.2 8.3 17.2 7.9C17.2 7.5 16.9 7.2 16.5 7.2Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M14 8H16.5V5H14C11.5 5 10 6.7 10 9V11H8V14H10V21H13V14H15.5L16 11H13V9.3C13 8.6 13.2 8 14 8Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M16.5 5.5C15.4 4.3 14.8 3.2 14.6 2H12V16.2C12 17.9 10.7 19.2 9 19.2C7.3 19.2 6 17.9 6 16.2C6 14.5 7.3 13.2 9 13.2C9.3 13.2 9.6 13.3 9.9 13.3V10.8C9.6 10.7 9.3 10.7 9 10.7C5.7 10.7 3 13.4 3 16.7C3 20 5.7 22.7 9 22.7C12.3 22.7 15 20 15 16.7V10.5C16.1 11.3 17.5 11.8 19 11.8V9.3C17.8 9.3 16.7 8.7 16.5 7.5V5.5Z" />
        </svg>
      );
  }
}

export function Footer() {
  const servicesColumn = footerColumns[0];
  const pagesColumn = footerColumns[1];
  const supportColumn = footerColumns[2];

  return (
    <footer className="bg-[#0F141E] text-white">
      <div className="mx-auto w-full px-4 pt-12 pb-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,270px)_1fr_1fr_1fr] lg:gap-x-16 xl:gap-x-[120px]">
          <Link
            href="/"
            className="block w-fit max-w-[220px] sm:col-span-2 sm:max-w-[260px] lg:col-span-1 lg:max-w-[320px]"
            aria-label={siteConfig.name}
          >
            <Image
              src="/newupdatelogo.png"
              alt={siteConfig.name}
              width={300}
              height={80}
              className="h-10 w-auto object-contain brightness-0 invert sm:h-12 lg:h-20"
            />
          </Link>

          <div>
            <FooterHeading>{servicesColumn.title}</FooterHeading>
            <ul className="space-y-3">
              {servicesColumn.links.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>{pagesColumn.title}</FooterHeading>
            <ul className="space-y-3">
              {pagesColumn.links.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>{supportColumn.title}</FooterHeading>
            <ul className="space-y-3">
              {supportColumn.links.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem {...link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:mt-12 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-[1fr_1fr_auto_auto] lg:items-start lg:gap-x-16 lg:border-0 lg:pt-0">
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <p className="mt-3 text-[15px] leading-6 text-[#828BA2] sm:text-[16.9px]">
              Speak with a certified resume writer today.
            </p>
            <Link
              href={siteConfig.phoneHref}
              className="mt-2 inline-block text-[15px] leading-6 text-white no-underline hover:text-[#A0D6FA] sm:text-[16.9px]"
            >
              {siteConfig.phone}
            </Link>
          </div>

          <div>
            <FooterHeading>Join us on social media</FooterHeading>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E2532] no-underline transition-colors hover:bg-[#2a3347]"
                >
                  <SocialIcon icon={social.icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src="/new.webp"
              alt="CPRW Certified Professional Resume Writer"
              width={180}
              height={124}
              className="h-auto w-[120px] object-contain"
            />
          </div>

          <p className="text-[13px] leading-5 text-[#656E83] sm:self-end sm:text-[14.1px] lg:text-right">
            Copyright {new Date().getFullYear()} - {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
