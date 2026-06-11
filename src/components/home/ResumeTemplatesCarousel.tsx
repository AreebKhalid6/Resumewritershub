"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Template = {
  image: string;
  users?: string;
};

const defaultTemplates: Template[] = [
  { image: "/cv/one.svg" },
  { image: "/cv/two.svg" },
  { image: "/cv/three.svg" },
  { image: "/cv/four.svg", },
  { image: "/cv/five.svg" },
  { image: "/cv/sic.svg" },
  { image: "/cv/seven.svg" },
  { image: "/cv/eight.svg" },
  { image: "/cv/nine.svg" },
  { image: "/cv/ten.svg" },
  { image: "/cv/eleven.png" },
  { image: "/cv/12.png" },
];

const DEFAULT_INDEX = 3;
const AUTOPLAY_MS = 5000;

const CENTER_W = 330;
const SIDE_W = 270;

const themeStyles = {
  dark: {
    userCount: "text-white/75",
    navButton: "text-[#282B8F]",
    dotActive: "bg-white",
    dotInactive: "bg-white/35 hover:bg-white/60",
  },
  light: {
    userCount: "text-[#656E83]",
    navButton: "text-[#1A91F0]",
    dotActive: "bg-[#1A91F0]",
    dotInactive: "bg-[#1A91F0]/25 hover:bg-[#1A91F0]/45",
  },
} as const;

function TemplateCard({
  image,
  isCenter,
  alt = "Resume template",
}: {
  image: string;
  isCenter: boolean;
  alt?: string;
}) {
  const isSvg = image.endsWith(".svg");

  const sizeClasses = isCenter
    ? "w-[230px] h-[328px] sm:w-[280px] sm:h-[400px] lg:w-[330px] lg:h-[470px] scale-100 opacity-100"
    : "w-[180px] h-[260px] sm:w-[230px] sm:h-[332px] lg:w-[270px] lg:h-[390px] scale-[0.94] opacity-85";

  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-white shadow-[0px_12px_32px_-4px_rgba(0,0,0,0.2),0px_4px_12px_-2px_rgba(0,0,0,0.12)] will-change-[width,height,transform,opacity] transition-[width,height,transform,opacity,box-shadow] duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${sizeClasses}`}
    >
      {isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          sizes={isCenter ? `${CENTER_W}px` : `${SIDE_W}px`}
        />
      )}

      {isCenter && (
        <>
          <div className="absolute inset-0 bg-[#0F141E]/0 transition-colors duration-300 group-hover:bg-[#0F141E]/10" />
          <Link
            href="#"
            className="absolute top-1/2 left-1/2 z-10 flex h-[46px] w-[167px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4px] bg-[#1A91F0] text-[15.1px] font-medium text-white no-underline opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 hover:bg-[#1580d8]"
          >
            Use this template
          </Link>
        </>
      )}
    </div>
  );
}

export function ResumeTemplatesCarousel({
  theme = "dark",
  images,
  imageAlt = "Resume template",
}: {
  theme?: "dark" | "light";
  images?: string[];
  imageAlt?: string;
}) {
  const templates: Template[] = images
    ? images.map((image) => ({ image }))
    : defaultTemplates;
  const total = templates.length;
  const [activeIndex, setActiveIndex] = useState(
    Math.min(DEFAULT_INDEX, Math.max(0, total - 1)),
  );
  const [isPaused, setIsPaused] = useState(false);
  const styles = themeStyles[theme];

  useEffect(() => {
    if (isPaused || total === 0) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [isPaused, total]);

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const goNext = () => setActiveIndex((i) => (i + 1) % total);

  const getIndex = (offset: number) => (activeIndex + offset + total) % total;

  const active = templates[activeIndex];

  return (
    <div
      className="relative mt-8 w-full sm:mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        type="button"
        onClick={goPrev}
        className={`absolute top-[58%] left-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl leading-none shadow-lg transition-transform hover:scale-105 hover:bg-white/90 active:scale-95 sm:left-6 sm:h-12 sm:w-12 lg:left-10 ${styles.navButton}`}
        aria-label="Previous template"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={goNext}
        className={`absolute top-[58%] right-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl leading-none shadow-lg transition-transform hover:scale-105 hover:bg-white/90 active:scale-95 sm:right-6 sm:h-12 sm:w-12 lg:right-10 ${styles.navButton}`}
        aria-label="Next template"
      >
        ›
      </button>

      <div className="w-full overflow-hidden px-4 sm:px-12 lg:px-24">
        {active.users && (
          <div className="mb-6 text-center">
            <p className={`text-[13px] leading-4 ${styles.userCount}`}>
              {active.users}
            </p>
          </div>
        )}

        <div
          className={`flex h-[350px] w-full items-end justify-center gap-3 sm:h-[420px] sm:gap-5 lg:h-[490px] lg:gap-7 ${active.users ? "" : "mt-6"
            }`}
        >
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((offset) => {
            const idx = getIndex(offset);
            const template = templates[idx];
            const isCenter = offset === 0;

            return isCenter ? (
              <div key={`${idx}-${offset}`} className="shrink-0">
                <TemplateCard
                  image={template.image}
                  isCenter
                  alt={imageAlt}
                />
              </div>
            ) : (
              <button
                key={`${idx}-${offset}`}
                type="button"
                onClick={() => goTo(idx)}
                className={`shrink-0 cursor-pointer border-0 bg-transparent p-0 hover:opacity-90 ${Math.abs(offset) === 4
                    ? "hidden 2xl:block"
                    : Math.abs(offset) === 3
                      ? "hidden xl:block"
                      : Math.abs(offset) === 2
                        ? "hidden lg:block"
                        : ""
                  }`}
                aria-label={`View ${imageAlt.toLowerCase()}`}
              >
                <TemplateCard
                  image={template.image}
                  isCenter={false}
                  alt={imageAlt}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 px-4 sm:mt-10">
        {templates.map((template, index) => (
          <button
            key={`${template.image}-${index}`}
            type="button"
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                ? `w-6 ${styles.dotActive}`
                : `w-2 ${styles.dotInactive}`
              }`}
            aria-label={`Go to ${imageAlt.toLowerCase()} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
