"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useState, type FormEvent } from "react";
import { X } from "lucide-react";

const inputClassName =
  "w-full rounded-lg border border-[#E7EAF4] bg-white px-4 py-3 text-[16px] leading-6 text-[#1E2532] outline-none transition-all duration-150 placeholder:text-[#A5ACBD] focus:border-[#1A91F0] focus:ring-4 focus:ring-[#1A91F0]/12 hover:border-[#C7CEDE]";

function formatUsPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

type LeadFormModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function LeadFormModal({
  open,
  onClose,
  title = "Ready to Jump-Start Your Career",
  description = "Share your details and our experts will get back to you shortly.",
  imageSrc = "/modalpopup.png",
  imageAlt = "Professional resume writing",
}: LeadFormModalProps) {
  const router = useRouter();
  const titleId = useId();
  const descriptionId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    setAgreed(false);
    setPhone("");
    setError("");

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    // trigger enter animation on next frame
    const raf = requestAnimationFrame(() => setIsVisible(true));

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      cancelAnimationFrame(raf);
      setIsVisible(false);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone,
          agreed: true,
          source: "lead-modal",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Form submission failed");
      }

      onClose();
      router.push("/thank-you");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className={`absolute inset-0 bg-[#0E1420]/55 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close modal"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={`relative z-10 flex max-h-[calc(100dvh-2rem)] w-full max-w-[920px] flex-col overflow-hidden rounded-3xl bg-white shadow-[0px_24px_64px_-12px_rgba(15,56,113,0.28)] transition-all duration-300 ease-out sm:flex-row lg:max-h-[92vh] ${
          isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.97] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#656E83] shadow-sm ring-1 ring-black/5 transition-all hover:bg-white hover:text-[#1E2532] hover:shadow-md"
          aria-label="Close"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        {/* Image side — hidden on small screens to keep the form the focus */}
        <div className="relative hidden shrink-0 bg-gradient-to-br from-[#1A91F0] to-[#0F6FCC] sm:block sm:w-[42%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(min-width: 640px) 386px, 0px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1420]/35 via-transparent to-transparent" />
        </div>

        <div className="flex w-full flex-col justify-center overflow-y-auto p-5 sm:w-[58%] sm:p-10">
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-[#EAF4FE] px-3 py-1 text-[12px] font-semibold tracking-wide text-[#1A91F0] uppercase">
            Free consultation
          </span>

          <h2 id={titleId} className="pr-6 text-[26px] leading-[1.15] font-bold text-[#1E2532] sm:text-[28px] sm:leading-9">
            {title}
          </h2>
          <p id={descriptionId} className="mt-2 text-[15px] leading-6 text-[#656E83] sm:text-[16px]">
            {description}
          </p>

          <form className="mt-7 space-y-4 sm:mt-8 sm:space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="lead-name"
                className="mb-1.5 block text-[13px] leading-5 font-medium text-[#1E2532]"
              >
                Name
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="lead-email"
                className="mb-1.5 block text-[13px] leading-5 font-medium text-[#1E2532]"
              >
                Email
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Your email address"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="lead-phone"
                className="mb-1.5 block text-[13px] leading-5 font-medium text-[#1E2532]"
              >
                Phone number
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                value={phone}
                onChange={(event) => setPhone(formatUsPhone(event.target.value))}
                pattern="\(\d{3}\) \d{3}-\d{4}"
                title="Enter a US phone number, e.g. (555) 123-4567"
                placeholder="(555) 123-4567"
                className={inputClassName}
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-[#E7EAF4] text-[#1A91F0] focus:ring-[#1A91F0]"
              />
              <span className="text-[13px] leading-5 text-[#656E83] sm:text-[14px]">
                I agree to the{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="font-medium text-[#1A91F0] underline-offset-2 hover:underline"
                  onClick={(event) => event.stopPropagation()}
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms-of-service"
                  target="_blank"
                  className="font-medium text-[#1A91F0] underline-offset-2 hover:underline"
                  onClick={(event) => event.stopPropagation()}
                >
                  Terms of Service
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-[#1A91F0] px-6 text-[16px] leading-6 font-semibold text-white shadow-[0_8px_20px_-6px_rgba(26,145,240,0.55)] transition-all hover:bg-[#1580d8] hover:shadow-[0_10px_24px_-6px_rgba(26,145,240,0.65)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending…
                </>
              ) : (
                "Submit"
              )}
            </button>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center text-[13px] text-red-700"
              >
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}