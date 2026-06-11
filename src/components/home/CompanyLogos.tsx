import Image from "next/image";
import { CONTAINER } from "./ui";

const logos = Array.from({ length: 10 }, (_, i) => ({
  src: `/logos/logoone${i + 1}.png`,
  alt: `Hiring partner logo ${i + 1}`,
}));

function LogoSlide({ duplicateKey }: { duplicateKey: string }) {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={`${duplicateKey}-${logo.src}`}
          className="flex h-28 w-[180px] shrink-0 items-center justify-center px-5"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={180}
            height={112}
            className="h-28 w-auto max-w-[160px] object-contain"
          />
        </div>
      ))}
    </>
  );
}

export function CompanyLogos() {
  return (
    <section className="bg-white py-12">
      <div className={CONTAINER}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
          <p className="shrink-0 text-[15px] leading-6 text-[#1E2532] sm:text-[16.9px] lg:w-[200px]">
            Our candidates have been hired at:
          </p>

          <div className="relative w-full flex-1 overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent" />

            <div className="logo-carousel-track flex w-max items-center">
              <LogoSlide duplicateKey="set-1" />
              <LogoSlide duplicateKey="set-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
