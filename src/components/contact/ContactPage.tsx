"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Clock, Mail, Phone, type LucideIcon } from "lucide-react";

import { CONTAINER } from "@/components/home/ui";
import { PageCtaButtons } from "@/components/shared/PageCtaButtons";
import { siteConfig } from "@/config/site";

const contactEmail = "info@resumewritershub.com";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "#",
    icon: "twitter",
  },
  {
    label: "Instagram",
    href: "#",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "#",
    icon: "facebook",
  },
] as const;

function SocialIcon({
  icon,
}: {
  icon: (typeof socialLinks)[number]["icon"];
}) {
  const className = "h-5 w-5 fill-current";

  switch (icon) {
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-hidden
        >
          <path d="M6.5 8.5H3.5V20.5H6.5V8.5ZM5 3.5C4.17 3.5 3.5 4.17 3.5 5C3.5 5.83 4.17 6.5 5 6.5C5.83 6.5 6.5 5.83 6.5 5C6.5 4.17 5.83 3.5 5 3.5ZM9.5 8.5H12.3V9.8C12.7 9.1 13.7 8.2 15.2 8.2C18.3 8.2 20.5 10.3 20.5 14.5V20.5H17.5V15C17.5 13.2 16.8 12 15.3 12C14.1 12 13.5 12.7 13.2 13.4C13.1 13.7 13 14.1 13 14.5V20.5H10V8.5H9.5Z" />
        </svg>
      );

    case "twitter":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-hidden
        >
          <path d="M4 4L10.5 12.8L4 20H6.5L11.8 14.2L16.2 20H20L13.2 11L19.5 4H17L12.2 9.6L8.2 4H4Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-hidden
        >
          <path d="M7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7C3 4.8 4.8 3 7 3ZM12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8ZM12 10.2C13.2 10.2 14 11 14 12.2C14 13.4 13.2 14.2 12 14.2C10.8 14.2 10 13.4 10 12.2C10 11 10.8 10.2 12 10.2ZM16.5 7.2C16.1 7.2 15.8 7.5 15.8 7.9C15.8 8.3 16.1 8.6 16.5 8.6C16.9 8.6 17.2 8.3 17.2 7.9C17.2 7.5 16.9 7.2 16.5 7.2Z" />
        </svg>
      );

    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-hidden
        >
          <path d="M14 8H16.5V5H14C11.5 5 10 6.7 10 9V11H8V14H10V21H13V14H15.5L16 11H13V9.3C13 8.6 13.2 8 14 8Z" />
        </svg>
      );
  }
}

const inputClassName =
  "w-full rounded-lg border border-[#E7EAF4] bg-white px-4 py-3 text-[16px] leading-6 text-[#1E2532] outline-none transition-colors placeholder:text-[#828BA2] focus:border-[#1A91F0] focus:ring-2 focus:ring-[#1A91F0]/15";

const US_PHONE_PATTERN = /^\(\d{3}\) \d{3}-\d{4}$/;

function formatUsPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function ContactInfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#E7EAF4] bg-[#F7F9FC] p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A91F0]/10">
        <Icon
          className="h-6 w-6 text-[#1A91F0]"
          aria-hidden
        />
      </div>

      <h3 className="text-[20px] leading-7 font-semibold text-[#1E2532]">
        {title}
      </h3>

      <div className="mt-2 text-[16px] leading-6 text-[#656E83]">
        {children}
      </div>
    </div>
  );
}

type FormStatus = {
  type: "success" | "error";
  message: string;
};

export function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] =
    useState<FormStatus | null>(null);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phoneValue = phone.trim();

    if (phoneValue && !US_PHONE_PATTERN.test(phoneValue)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid US phone number, e.g. (555) 123-4567",
      });
      return;
    }

    setLoading(true);
    setFormStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: phoneValue || undefined,
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          agreed,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Form submission failed",
        );
      }

      setFormStatus({
        type: "success",
        message:
          result.message ||
          "Your message has been sent successfully.",
      });

      form.reset();
      setPhone("");
      setAgreed(false);
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-white">
      {/* Hero section */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bgimage.png')",
          }}
          aria-hidden
        />

        <div
          className={`relative z-10 ${CONTAINER} max-w-4xl text-center`}
        >
          <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
            Contact Us
          </p>

          <h1 className="mt-3 text-[32px] leading-10 text-[#1E2532] lg:text-[52px] lg:leading-[60px]">
            Let&apos;s Connect
          </h1>

          <p className="mt-6 text-[16px] leading-7 text-[#656E83] lg:text-[18px]">
            We&apos;re here to help you take the next step in
            your career. Whether you have questions about our
            resume writing services, need professional resume
            help, or want to discuss your career goals, our team
            is ready to assist you.
          </p>

          <PageCtaButtons
            className="mt-8"
            centered
          />
        </div>
      </section>

      {/* Contact info and form section */}
      <section className="py-12 lg:py-20">
        <div className={CONTAINER}>
          <h2 className="text-center text-[24px] leading-8 text-[#1E2532] lg:text-[32px] lg:leading-10">
            We&apos;d love to hear from you!
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr]">
            {/* Contact information */}
            <div className="space-y-6">
              <ContactInfoCard
                icon={Mail}
                title="Email Support"
              >
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[#1A91F0] no-underline hover:underline"
                >
                  {contactEmail}
                </a>
              </ContactInfoCard>

              <ContactInfoCard
                icon={Phone}
                title="Let's Talk"
              >
                <a
                  href={siteConfig.phoneHref}
                  className="text-[#1A91F0] no-underline hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </ContactInfoCard>

              <ContactInfoCard
                icon={Clock}
                title="Office Hour"
              >
                <p>Mon - Fri</p>

                <p className="font-medium text-[#1E2532]">
                  9 am to 5 pm
                </p>
              </ContactInfoCard>
            </div>

            {/* Contact form */}
            <div className="rounded-3xl border border-[#E7EAF4] bg-white p-6 shadow-[0px_2px_16px_rgba(15,56,113,0.06)] sm:p-10">
              <h3 className="text-[22px] leading-8 text-[#1E2532] lg:text-[28px] lg:leading-9">
                Send us a message
              </h3>

              <p className="mt-2 text-[16px] leading-6 text-[#656E83]">
                Fill out the form below and our team will get
                back to you shortly.
              </p>

              <form
                className="mt-8 space-y-5"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(event) =>
                        setPhone(formatUsPhone(event.target.value))
                      }
                      pattern="\(\d{3}\) \d{3}-\d{4}"
                      title="Enter a US phone number, e.g. (555) 123-4567"
                      placeholder="(555) 123-4567"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={200}
                    placeholder="How can we help?"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    placeholder="Tell us about your career goals or questions..."
                    className={`${inputClassName} resize-none`}
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={agreed}
                    onChange={(event) =>
                      setAgreed(event.target.checked)
                    }
                    className="mt-1 h-4 w-4 shrink-0 rounded border-[#E7EAF4] text-[#1A91F0] focus:ring-[#1A91F0]"
                  />

                  <span className="text-[14px] leading-5 text-[#656E83]">
                    I agree to receive calls and text messages
                    from Resume Writers Hub
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-[50px] w-full items-center justify-center rounded-[4px] bg-[#1A91F0] px-8 text-[16px] leading-[22px] font-semibold text-white transition-colors hover:bg-[#1580d8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {formStatus && (
                  <div
                    role="alert"
                    className={`rounded-lg border px-4 py-3 text-center text-[14px] leading-5 ${
                      formStatus.type === "success"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="pb-12 lg:pb-20">
        <div className={CONTAINER}>
          <div className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-[#EAF6FF] px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-16">
            <div className="max-w-2xl">
              <h2 className="text-[28px] leading-9 text-[#1E2532] lg:text-[40px] lg:leading-[48px]">
                Don&apos;t miss out on your next career
                opportunity!
              </h2>

              <p className="mt-4 text-[16px] leading-7 text-[#656E83] lg:text-[18px]">
                Stand out from the competition with a
                professionally crafted resume that highlights
                your unique qualifications. Contact our team now.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex h-[50px] w-full items-center justify-center rounded-[4px] bg-[#1A91F0] px-8 text-[16px] leading-[22px] font-semibold text-white no-underline hover:bg-[#1580d8] sm:w-auto"
                >
                  Call Us Now
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex h-[50px] w-full items-center justify-center rounded-[4px] bg-[#1A91F0]/10 px-8 text-[16px] leading-[22px] font-semibold text-[#1A91F0] no-underline hover:bg-[#1A91F0]/20 sm:w-auto"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="relative hidden h-[280px] w-[420px] shrink-0 overflow-hidden rounded-2xl lg:block">
              <Image
                src="/ctanew.png"
                alt="Career opportunity"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social media section */}
      <section className="border-t border-[#E7EAF4] bg-[#F7F9FC] py-12 lg:py-16">
        <div className={`${CONTAINER} text-center`}>
          <h2 className="text-[22px] leading-8 text-[#1E2532] lg:text-[28px] lg:leading-9">
            Follow Our Social Media
          </h2>

          <p className="mt-2 text-[16px] leading-6 text-[#656E83]">
            Stay updated with resume tips, career advice, and
            success stories from {siteConfig.name}.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1A91F0] shadow-[0px_2px_8px_rgba(15,56,113,0.08)] no-underline transition-colors hover:bg-[#1A91F0] hover:text-white"
              >
                <SocialIcon icon={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}