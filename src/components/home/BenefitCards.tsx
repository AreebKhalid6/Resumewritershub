import Image from "next/image";
import { CONTAINER } from "./ui";

const benefits = [
  {
    title: "Tailored for you",
    description:
      "Every resume is personalized to your role, industry, and career goals.",
    icon: "/icons/one.png",
  },
  {
    title: "Expert writers",
    description:
      "Certified professionals craft your resume to highlight what employers want to see.",
    icon: "/icons/two.png",
  },
  {
    title: "ATS-optimized",
    description:
      "Your resume is built to be 100% ATS compliant, so recruiters actually see you.",
    icon: "/icons/three.png",
  },
  {
    title: "More interviews",
    description:
      "A compelling resume helps you stand out and land more callbacks from employers.",
    icon: "/icons/four.png",
  },
];

export function BenefitCards() {
  return (
    <section className="bg-white py-8">
      <div className={`${CONTAINER} grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4`}>
        {benefits.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-[#F7F9FC] p-6"
          >
            <Image
              src={item.icon}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <h3 className="mt-3 text-[20.4px] leading-7 text-[#1E2532]">
              {item.title}
            </h3>
            <p className="mt-2 text-[13.9px] leading-5 text-[#828BA2]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
