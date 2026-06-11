"use client";

import { useState } from "react";
import { CONTAINER, SectionTitle, StarRating } from "./ui";

const reviews = [
  {
    title: "My resume finally feels focused",
    text: "Before working with the team, my resume felt outdated and unfocused. The new version clearly presented my achievements, and I started receiving more interview invitations.",
    author: "Emily Carter, Marketing Manager • recently",
  },
  {
    title: "Simple and professional process",
    text: "The process was simple, professional, and well-organized. My writer understood my career goals and created a resume that finally sounded like me.",
    author: "Michael Thompson, Senior Operations Manager • 6 hours ago",
  },
  {
    title: "I feel more confident applying",
    text: "My LinkedIn profile and resume now feel consistent and much more professional. I feel more confident applying for leadership roles.",
    author: "Jessica Reynolds, Finance Executive • 1 day ago",
  },
  {
    title: "Worth every penny",
    text: "The final resume was polished, clear, and tailored to the roles I was targeting. I felt much more confident applying, and the quality was far better than anything I could have written on my own.",
    author: "Lauren Mitchell, Human Resources Specialist • 2 days ago",
  },
  {
    title: "I started getting more responses",
    text: "My old resume was not getting much attention. After the rewrite, I began receiving more responses from recruiters and finally secured several interviews.",
    author: "James Walker, Project Manager • 4 days ago",
  },
];

const VISIBLE_COUNT = 3;

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(0, reviews.length - VISIBLE_COUNT);
  const progress = maxIndex === 0 ? 100 : ((activeIndex + 1) / (maxIndex + 1)) * 100;

  const goPrev = () => setActiveIndex((index) => Math.max(0, index - 1));
  const goNext = () => setActiveIndex((index) => Math.min(maxIndex, index + 1));

  const visibleReviews = reviews.slice(activeIndex, activeIndex + VISIBLE_COUNT);

  return (
    <section className="bg-[#F7F9FC] py-12 lg:py-20">
      <div className={CONTAINER}>
        <SectionTitle>95% Of Customers Recommend Us</SectionTitle>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-[200px_1fr] lg:gap-12">
          <div className="text-center">
            <p className="text-[24.1px] leading-[30px] text-[#1E2532]">4.7 out of 5</p>
            <div className="mt-2 flex justify-center">
              <StarRating rating={4.7} size={32} />
            </div>
            <p className="mt-4 text-sm font-semibold text-[#1E2532]">Trustpilot</p>
            <p className="mt-1 text-[12.1px] leading-4 text-[#656E83]">
              based on 100+ reviews
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {visibleReviews.map((review) => (
                <div key={review.title}>
                  <StarRating rating={5} size={20} />
                  <h3 className="mt-2 text-[19.9px] leading-7 font-semibold text-[#1E2532]">
                    {review.title}
                  </h3>
                  <p className="mt-2 text-[16.3px] leading-6 text-[#1E2532]">
                    {review.text}
                  </p>
                  <p className="mt-3 text-[12px] leading-4 text-[#656E83]">
                    {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7EAF4] text-[#828BA2] transition-opacity disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#d8dce8]"
            aria-label="Previous reviews"
          >
            ‹
          </button>
          <div className="h-0.5 w-48 rounded bg-[#E7EAF4]">
            <div
              className="h-full rounded bg-[#1A91F0] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button
            type="button"
            onClick={goNext}
            disabled={activeIndex === maxIndex}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7EAF4] text-[#828BA2] transition-opacity disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#d8dce8]"
            aria-label="Next reviews"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
