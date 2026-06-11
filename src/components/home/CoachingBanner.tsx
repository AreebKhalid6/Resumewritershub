import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "./ui";

export function CoachingBanner() {
  return (
    <section className="bg-white py-8">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-5 rounded-2xl bg-[#EAF6FF] px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <Image
            src="/cta.png"
            alt="Career coaching"
            width={180}
            height={77}
            className="h-[77px] w-[180px] shrink-0 rounded-lg object-cover"
          />
          <div className="flex-1 md:px-8">
            <h3 className="text-[22px] leading-8 text-[#1E2532] sm:text-[27.2px] sm:leading-9">
              Need some advice?
            </h3>
            <p className="mt-1 text-[15px] leading-6 text-[#1E2532] sm:text-[16.3px]">
              98% of our coaching clients receive a job offer within 4 weeks.
            </p>
          </div>
          <Link
            href="#"
            className="flex h-[50px] w-full shrink-0 items-center justify-center rounded-[4px] bg-[#1A91F0] text-[16.7px] leading-[22px] font-semibold text-white no-underline hover:bg-[#1580d8] md:w-[167px]"
          >
            Find your coach
          </Link>
        </div>
      </div>
    </section>
  );
}
