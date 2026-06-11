import { CONTAINER } from "@/components/home/ui";
import { PageCtaButtons } from "./PageCtaButtons";

export function PageHero({
  eyebrow,
  title,
  description,
  showCtas = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  showCtas?: boolean;
}) {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bgimage.png')" }}
        aria-hidden
      />
      <div className={`relative z-10 ${CONTAINER} max-w-4xl text-center`}>
        {eyebrow && (
          <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
            {eyebrow}
          </p>
        )}
        <h1
          className={`text-[32px] leading-10 text-[#1E2532] lg:text-[52px] lg:leading-[60px] ${
            eyebrow ? "mt-3" : ""
          }`}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-[16px] leading-7 text-[#656E83] lg:text-[18px]">
            {description}
          </p>
        )}
        {showCtas && <PageCtaButtons className="mt-8" centered />}
      </div>
    </section>
  );
}
