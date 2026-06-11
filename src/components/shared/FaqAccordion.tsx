"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/config/faqs";

export function FaqAccordion({
  faqs,
  numbered = false,
}: {
  faqs: FaqItem[];
  numbered?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="border-t border-[#E7EAF4] first:border-t-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 text-[19px] leading-7 text-[#1E2532]">
                {numbered && (
                  <span className="font-semibold text-[#1A91F0]">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                )}
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#1A91F0] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>

            <div
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`text-[16px] leading-6 text-[#656E83] ${
                    numbered ? "pl-9" : ""
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
