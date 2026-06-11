"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTAINER } from "./ui";

const faqs = [
  {
    question: "How long does it take to receive my resume?",
    answer:
      "Typically, you'll receive your first draft within 24-48 hours after providing the necessary information. We also offer expedited services for urgent needs.",
  },
  {
    question: "What is the difference between a CV and a resume?",
    answer:
      "A resume is a concise, one- to two-page summary of your skills, experience, and achievements tailored to a specific job. A CV is typically longer and provides a more detailed overview of your academic and professional background. CVs are commonly used for academic, research, medical, and some international applications, while most employers in the US and Canada expect a resume.",
  },
  {
    question: "How do I choose the right resume template?",
    answer:
      "Choose a clean, professional, and ATS-friendly template that suits your industry. Creative roles may allow for more visual design, while corporate, healthcare, technology, and finance positions usually benefit from simple, well-organized layouts. Our templates are designed to be easy to read, compatible with applicant tracking systems, and appealing to recruiters.",
  },
  {
    question: "What does an ATS-friendly resume mean?",
    answer:
      "An ATS-friendly resume is formatted so applicant tracking systems can read and process it accurately. It uses standard section headings, clear formatting, readable fonts, relevant keywords, and a logical structure. It also avoids elements such as complex tables, graphics, images, and unusual layouts that may interfere with resume scanning.",
  },
  {
    question: "How far back should my resume go?",
    answer:
      "In most cases, your resume should cover the last 10 to 15 years of relevant work experience. Older positions can be shortened or removed unless they directly support the role you are pursuing. Focus on your most recent accomplishments and the experience that best demonstrates your current qualifications.",
  },
  {
    question: "Should I create a different resume for every job application?",
    answer:
      "Yes. Tailoring your resume to each position can significantly improve your chances of getting noticed. Update your professional summary, skills, and experience bullet points to reflect the requirements and language used in the job description, while keeping all information accurate. Our tools make it easy to customize your resume without starting from scratch.",
  },
  {
    question: "Do I need a cover letter with my resume?",
    answer:
      "Always include a cover letter when the job posting requires one. Even when it is optional, a well-written cover letter can help you stand out by explaining your interest in the role, highlighting relevant qualifications, and showing why you are a strong fit. We also offer cover letter writing services that complement your resume.",
  },
  {
    question: "Is professional resume writing worth the cost?",
    answer:
      "Professional resume writing can be a valuable investment if you are struggling to secure interviews, changing careers, returning to the workforce, or applying for senior-level positions. An experienced writer can help identify your strongest achievements, incorporate relevant keywords, and present your experience in a clear and compelling way.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className={CONTAINER}>
        <h2 className="text-center text-[28px] leading-9 text-[#1E2532] sm:text-[38px] sm:leading-[46px] lg:text-[45px] lg:leading-[52px]">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-8 max-w-3xl lg:mt-10">
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
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] leading-6 text-[#1E2532] sm:text-[19px] sm:leading-7">
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
                    <p className="text-[16px] leading-6 text-[#656E83]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[14px] leading-5 text-[#828BA2]">
          Can&apos;t find what you need?{" "}
          <a href="/faq" className="text-[#1A91F0] no-underline hover:underline">
            View our FAQ page
          </a>
        </p>
      </div>
    </section>
  );
}
