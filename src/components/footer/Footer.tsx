import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type FooterLink = { label: string; href: string };

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterSection[] = [
  {
    title: "Resume",
    links: [
      { label: "AI Resume builder", href: "#" },
      { label: "ATS Scorer", href: "#" },
      { label: "Resume examples", href: "#" },
      { label: "Resume templates", href: "#" },
    ],
  },
  {
    title: "Cover Letter",
    links: [
      { label: "Cover Letter Examples", href: "#" },
      { label: "Cover Letter Templates", href: "#" },
    ],
  },
  {
    title: "Our Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Pricing", href: "/pricing" },
      { label: "Updates", href: "#" },
      { label: "Sponsorship Program", href: "#" },
      { label: "Media Kit", href: "#" },
      { label: "Affiliates", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Right of Withdrawal", href: "#" },
      { label: "Do not sell, do not share", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Pinterest", href: "#", icon: "pinterest" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "TikTok", href: "#", icon: "tiktok" },
  { label: "Spotify", href: "#", icon: "spotify" },
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
      className="block text-[16.5px] leading-6 text-white capitalize no-underline hover:text-[#A0D6FA]"
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
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M4 4L10.5 12.8L4 20H6.5L11.8 14.2L16.2 20H20L13.2 11L19.5 4H17L12.2 9.6L8.2 4H4Z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M12 3C7.03 3 3 7.03 3 12C3 15.8 5.2 19 8.4 20.5C8.3 19.6 8.2 18.1 8.5 17C8.8 15.9 10.1 11.6 10.1 11.6C10.1 11.6 9.8 11 9.8 10.1C9.8 8.6 10.7 7.5 11.8 7.5C12.7 7.5 13.2 8.2 13.2 9.1C13.2 10.1 12.5 11.5 12.1 12.8C11.8 13.8 12.5 14.7 13.5 14.7C15.3 14.7 16.7 12.8 16.7 10.1C16.7 7.8 15 6 12.2 6C9 6 7.1 8.4 7.1 10.9C7.1 11.9 7.5 12.9 8.1 13.5C8.2 13.6 8.2 13.7 8.2 13.9C8.1 14.3 8 14.8 8 15C7.9 15.3 7.7 15.4 7.4 15.3C6.1 14.8 5.3 12.8 5.3 10.8C5.3 7.2 8 3.8 12.5 3.8C16.1 3.8 18.8 6.4 18.8 10C18.8 13.5 16.6 16.3 13.7 16.3C12.6 16.3 11.6 15.7 11.2 15L10.5 18C10.1 19.5 9.1 21.2 8.4 22.3C9.5 22.7 10.7 23 12 23C16.97 23 21 18.97 21 14C21 9.03 16.97 5 12 5V3Z" />
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
    case "spotify":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM17.2 16.8C17 17 16.7 17.1 16.4 17C13.8 15.8 10.7 15.5 7.2 16.3C6.9 16.4 6.6 16.2 6.5 15.9C6.4 15.6 6.6 15.3 6.9 15.2C10.7 14.3 14.1 14.7 17 16C17.3 16.1 17.4 16.5 17.2 16.8ZM18.5 14.2C18.2 14.5 17.8 14.6 17.5 14.4C14.5 12.9 10.2 12.5 6.4 13.5C6 13.6 5.7 13.4 5.6 13C5.5 12.6 5.7 12.3 6.1 12.2C10.3 11.1 15 11.6 18.4 13.3C18.8 13.5 18.9 13.9 18.5 14.2ZM18.7 11.2C15 9.4 9.5 9.2 6.1 10.1C5.6 10.2 5.2 9.9 5.1 9.5C5 9.1 5.3 8.7 5.7 8.6C9.5 7.6 15.5 7.8 19.8 9.9C20.2 10.1 20.3 10.6 20.1 11C19.9 11.3 19.4 11.4 18.7 11.2Z" />
        </svg>
      );
  }
}

function PrivacyChoicesIcon() {
  return (
    <svg
      width="30"
      height="14"
      viewBox="0 0 29.19 13.62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      <rect x="0.39" y="0" width="28.41" height="13.62" rx="6.81" fill="#0066FF" />
      <rect x="2.05" y="1.17" width="11.05" height="11.28" rx="5.64" fill="#FFFFFF" />
      <path
        d="M19.5 4.5L22 7L19.5 9.5"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9.5 4.5L7 7L9.5 9.5"
        stroke="#0066FF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer() {
  const resumeColumn = footerColumns.slice(0, 2);
  const companyColumn = footerColumns[2];
  const supportColumn = footerColumns[3];

  return (
    <footer className="min-h-[582px] bg-[#0F141E] text-white">
      <div className="mx-auto min-w-[1440px] px-8 pt-20 pb-12">
        <div className="grid grid-cols-[125px_1fr_1fr_1fr] gap-x-[228px]">
          <Link href="/" className="block h-10 w-[270px] shrink-0" aria-label={siteConfig.name}>
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={300}
              height={300}
              className="h-auto w-auto object-cover brightness-0 invert"
            />
          </Link>

          <div className="space-y-9">
            {resumeColumn.map((section) => (
              <div key={section.title}>
                <FooterHeading>{section.title}</FooterHeading>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <FooterLinkItem {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <FooterHeading>{companyColumn.title}</FooterHeading>
            <ul className="space-y-3">
              {companyColumn.links.map((link) => (
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
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[16.6px] leading-6 text-white capitalize no-underline hover:text-[#A0D6FA]"
                >
                  Your privacy choices
                  <PrivacyChoicesIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[60px] grid grid-cols-[1fr_1fr_auto_auto] items-start gap-x-16">
          <div>
            <FooterHeading>Select your country</FooterHeading>
            <div className="mt-3 flex items-center gap-3">
              <span className="inline-block h-3.5 w-5 bg-[#828BA2]" aria-hidden />
              <span className="text-[16.9px] leading-6 text-white">International</span>
            </div>
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

          <div className="flex h-[60px] w-[84px] items-center justify-center rounded-lg border border-[#656E83]/40 bg-[#1E2532] text-[11px] leading-4 text-[#656E83]">
           
            <Image src="/CPRW.WEBP" alt="App Store" width={84} height={60} />
          </div>

          <p className="self-end text-[14.1px] leading-5 text-[#656E83]">
            Copyright {new Date().getFullYear()} - {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
