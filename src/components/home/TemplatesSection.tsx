"use client";

import type { ReactNode } from "react";
import { CONTAINER } from "./ui";
import { ResumeTemplatesCarousel } from "./ResumeTemplatesCarousel";

type TemplatesSectionProps = {
  title?: ReactNode;
  description?: string;
  images?: string[];
  imageAlt?: string;
};

export function TemplatesSection({
  title = "Professionally Designed Resume Templates",
  description = "100+ free templates with dozens of different themes and formats.",
  images,
  imageAlt,
}: TemplatesSectionProps) {
  return (
    <section className="mt-10 overflow-hidden rounded-t-[32px] rounded-b-[32px] bg-[#282B8F] py-12 sm:rounded-t-[48px] sm:rounded-b-[48px] sm:py-16 lg:py-20">
      <div className={CONTAINER}>
        <h2 className="text-center text-[28px] leading-9 font-normal text-white sm:text-[38px] sm:leading-[46px] lg:text-[45px] lg:leading-[52px]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-6 text-white/85 sm:text-[18px] sm:leading-7">
          {description}
        </p>
      </div>

      <ResumeTemplatesCarousel
        theme="dark"
        images={images}
        imageAlt={imageAlt}
      />
    </section>
  );
}
