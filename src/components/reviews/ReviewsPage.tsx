"use client";

import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  CONTAINER,
  StarRating,
} from "@/components/home/ui";
import { PageCtaButtons } from "@/components/shared/PageCtaButtons";
import { WriteReviewModal } from "@/components/shared/WriteReviewModal";
import {
  trustpilotReviews,
  trustpilotStats,
  type TrustpilotReview,
} from "@/config/reviews";

function TrustpilotLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
          fill="#00B67A"
        />
      </svg>
      <span className="text-[20px] font-semibold tracking-tight text-[#191919]">
        Trustpilot
      </span>
    </div>
  );
}

function RatingBar({ stars, percent }: { stars: number; percent: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-12 text-right text-[14px] text-[#656E83]">
        {stars} star
      </span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E7EAF4]">
        <div
          className="h-full rounded-full bg-[#00B67A] transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="w-10 text-right text-[14px] text-[#656E83]">
        {percent}%
      </span>
    </div>
  );
}

function ReviewCard({ review }: { review: TrustpilotReview }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#E7EAF4] bg-white p-6 shadow-[0px_2px_8px_rgba(15,56,113,0.04)] transition-shadow hover:shadow-[0px_8px_24px_rgba(15,56,113,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <StarRating rating={review.rating} size={20} />
        {review.verified && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#00B67A]/10 px-2.5 py-1 text-[11px] font-medium text-[#00B67A]">
            <CheckCircle2 className="h-3 w-3" aria-hidden />
            Verified
          </span>
        )}
      </div>

      <h3 className="mt-3 text-[18px] leading-7 font-semibold text-[#1E2532]">
        {review.title}
      </h3>
      <p className="mt-2 flex-1 text-[15px] leading-6 text-[#656E83]">
        {review.text}
      </p>

      <div className="mt-5 border-t border-[#E7EAF4] pt-4">
        <p className="text-[15px] font-medium text-[#1E2532]">{review.author}</p>
        <p className="mt-0.5 text-[13px] text-[#828BA2]">{review.date}</p>
      </div>
    </article>
  );
}

const PAGE_SIZE = 6;

export function ReviewsPage() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [filter, setFilter] = useState<"all" | 5 | 4>("all");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const filteredReviews = useMemo(() => {
    if (filter === "all") return trustpilotReviews;
    return trustpilotReviews.filter((r) => r.rating === filter);
  }, [filter]);

  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  return (
    <main className="w-full bg-white">
      <WriteReviewModal
        open={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
      {/* Hero */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bgimage.png')" }}
          aria-hidden
        />
        <div className={`relative z-10 ${CONTAINER} text-center`}>
          <TrustpilotLogo className="justify-center" />
          <h1 className="mt-6 text-[32px] leading-10 text-[#1E2532] lg:text-[48px] lg:leading-[56px]">
            What our customers say
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#656E83] lg:text-[18px]">
            {trustpilotStats.recommendPercent}% of customers recommend us. Read
            real reviews from job seekers who trusted us with their careers.
          </p>
          <PageCtaButtons className="mt-8" centered />
        </div>
      </section>

      {/* Trustpilot summary */}
      <section className="py-12 lg:py-16">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 gap-10 rounded-3xl border border-[#E7EAF4] bg-white p-6 shadow-[0px_4px_20px_rgba(15,56,113,0.06)] sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="text-center">
              <p className="text-[48px] leading-none font-semibold text-[#1E2532] lg:text-[56px]">
                {trustpilotStats.score}
              </p>
              <p className="mt-2 text-[18px] text-[#656E83]">out of 5</p>
              <div className="mt-4 flex justify-center">
                <StarRating rating={trustpilotStats.score} size={36} />
              </div>
              <p className="mt-4 text-[16px] font-semibold text-[#00B67A]">
                {trustpilotStats.label}
              </p>
              <p className="mt-2 text-[14px] text-[#656E83]">
                Based on{" "}
                <span className="font-medium text-[#1E2532]">
                  {trustpilotStats.totalReviews}
                </span>{" "}
                reviews
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#00B67A]/10 px-4 py-2">
                <TrustpilotLogo />
              </div>
            </div>

            <div className="space-y-3">
              <p className="mb-5 text-[16px] font-semibold text-[#1E2532]">
                Rating breakdown
              </p>
              {trustpilotStats.distribution.map((item) => (
                <RatingBar
                  key={item.stars}
                  stars={item.stars}
                  percent={item.percent}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-[#F7F9FC] py-12 lg:py-16">
        <div className={CONTAINER}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[24px] leading-8 text-[#1E2532] lg:text-[32px] lg:leading-10">
              All reviews
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {(["all", 5, 4] as const).map((option) => (
                <button
                  key={String(option)}
                  type="button"
                  onClick={() => {
                    setFilter(option);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                    filter === option
                      ? "bg-[#1A91F0] text-white"
                      : "bg-white text-[#656E83] hover:bg-[#E7EAF4]"
                  }`}
                >
                  {option === "all" ? "All" : `${option} stars`}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {visibleReviews.length === 0 && (
            <p className="py-16 text-center text-[16px] text-[#656E83]">
              No reviews found for this filter.
            </p>
          )}

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex h-[50px] w-full items-center justify-center rounded-[4px] border border-[#1A91F0] bg-white px-8 text-[16px] font-semibold text-[#1A91F0] transition-colors hover:bg-[#1A91F0]/5 sm:w-auto"
              >
                Load more reviews
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trustpilot CTA banner */}
      <section className="py-12 lg:py-16">
        <div className={CONTAINER}>
          <div className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-[#00B67A] px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-14">
            <div>
              <TrustpilotLogo className="[&_span]:text-white [&_path]:fill-white" />
              <h2 className="mt-4 text-[24px] leading-8 text-white lg:text-[36px] lg:leading-[44px]">
                Join thousands of satisfied customers
              </h2>
              <p className="mt-3 max-w-xl text-[16px] leading-7 text-white/90 lg:text-[17px]">
                {trustpilotStats.recommendPercent}% of our customers recommend
                us on Trustpilot. Start your journey to a better resume today.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex h-[52px] w-full shrink-0 items-center justify-center rounded-[4px] bg-white px-10 text-[16px] font-semibold text-[#00B67A] hover:bg-white/90 lg:w-auto"
            >
              Write a Review
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
