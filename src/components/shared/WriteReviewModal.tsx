"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { X } from "lucide-react";

const inputClassName =
  "w-full rounded-lg border border-[#E7EAF4] bg-white px-4 py-3 text-[16px] leading-6 text-[#1E2532] outline-none transition-colors placeholder:text-[#828BA2] focus:border-[#1A91F0] focus:ring-2 focus:ring-[#1A91F0]/15";

type WriteReviewModalProps = {
  open: boolean;
  onClose: () => void;
};

function StarPicker({
  rating,
  onChange,
}: {
  rating: number;
  onChange: (rating: number) => void;
}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const value = index + 1;
        const filled = value <= rating;

        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className="rounded p-1 transition-transform hover:scale-110"
            aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
          >
            <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden>
              <path
                d="M16 2.5L19.5 12H29.5L21.5 18L24.5 28L16 22L7.5 28L10.5 18L2.5 12H12.5L16 2.5Z"
                fill={filled ? "#00B67A" : "#D9DEEB"}
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

export function WriteReviewModal({ open, onClose }: WriteReviewModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setRating(5);
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[#1E2532]/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative z-10 w-full max-w-[520px] rounded-3xl bg-white p-8 shadow-[0px_16px_48px_rgba(15,56,113,0.18)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-[#656E83] transition-colors hover:bg-[#F7F9FC] hover:text-[#1E2532]"
          aria-label="Close"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        {submitted ? (
          <div className="pr-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00B67A]/15">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12.5L10 17.5L19 7.5"
                  stroke="#00B67A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 id={titleId} className="text-[28px] leading-9 font-bold text-[#1E2532]">
              Thank you!
            </h2>
            <p id={descriptionId} className="mt-3 text-[16px] leading-6 text-[#656E83]">
              Your review has been submitted. We appreciate your feedback.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex h-[50px] w-full items-center justify-center rounded-[4px] bg-[#1A91F0] px-6 text-[16px] leading-6 font-semibold text-white hover:bg-[#1580d8]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="pr-8 text-[28px] leading-9 font-bold text-[#1E2532]">
              Write a Review
            </h2>
            <p id={descriptionId} className="mt-2 text-[16px] leading-6 text-[#656E83]">
              Share your experience with Resume Writers Hub.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="review-name"
                  className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]"
                >
                  Your name
                </label>
                <input
                  id="review-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className={inputClassName}
                />
              </div>

              <div>
                <p className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]">
                  Your rating
                </p>
                <input type="hidden" name="rating" value={rating} />
                <StarPicker rating={rating} onChange={setRating} />
              </div>

              <div>
                <label
                  htmlFor="review-title"
                  className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]"
                >
                  Review title
                </label>
                <input
                  id="review-title"
                  name="title"
                  type="text"
                  required
                  placeholder="Summarize your experience"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="review-text"
                  className="mb-2 block text-[14px] leading-5 font-medium text-[#1E2532]"
                >
                  Your review
                </label>
                <textarea
                  id="review-text"
                  name="review"
                  required
                  rows={4}
                  placeholder="Tell us about your experience..."
                  className={`${inputClassName} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-[50px] w-full items-center justify-center rounded-[4px] bg-[#1A91F0] px-6 text-[16px] leading-6 font-semibold text-white hover:bg-[#1580d8]"
              >
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
