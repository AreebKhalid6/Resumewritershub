import Image from "next/image";
import { CONTAINER } from "@/components/home/ui";
import { PageCtaButtons } from "@/components/shared/PageCtaButtons";

const templateImages = Array.from(
  { length: 40 },
  (_, index) => `/template/${index + 1}.jpg`,
);

function ExampleCard({ imageSrc }: { imageSrc: string }) {
  return (
    <a
      href="#"
      className="block rounded-xl bg-[#F7F9FC] p-5 no-underline transition-shadow hover:shadow-[0px_8px_20px_-4px_rgba(15,56,113,0.12)]"
    >
      <div className="relative h-[464px] overflow-hidden rounded-md bg-white shadow-[0px_2px_8px_rgba(15,56,113,0.08)]">
        <Image
          src={imageSrc}
          alt="Resume template sample"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1440px) 33vw, 400px"
        />
      </div>
    </a>
  );
}

export function ResumeSamplesPage() {
  return (
    <main className="bg-white pb-16 lg:pb-24">
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bgimage.png')" }}
          aria-hidden
        />
        <div className={`relative z-10 ${CONTAINER}`}>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-12">
            <h1 className="max-w-xl text-[38px] leading-[46px] text-[#0F141E] lg:text-[55px] lg:leading-[64px]">
              Professional resume examples and writing guides
            </h1>
            <p className="mt-2 max-w-md text-[19.7px] leading-7 text-[#0F141E]">
              Get inspired with our free resume samples. With our expert guides and
              resume builder you can create a beautiful resume in minutes. Easily
              access a library of resume templates.
            </p>
          </div>
          <PageCtaButtons className="mt-10" />
        </div>
      </section>

      <div className={`${CONTAINER} pt-8`}>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templateImages.map((imageSrc) => (
            <ExampleCard key={imageSrc} imageSrc={imageSrc} />
          ))}
        </div>
      </div>
    </main>
  );
}
