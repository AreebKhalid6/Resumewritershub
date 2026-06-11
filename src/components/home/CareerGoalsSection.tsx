import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "./ui";

type GoalCard = {
  title: string;
  description: string;
  bg: string;
  bgImage: string;
  icon: string;
  height: number;
};
function CardArrow() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M7 17L17 12L7 7V10.5H3V13.5H7V17Z"
        fill="#0F141E"
      />
    </svg>
  );
}

const cards: GoalCard[] = [
  {
    title: "Find a Job That Fits You",
    description:
      "Discover roles that match your goals, strengths, and priorities. We recommend relevant opportunities and help you tailor your CV and cover letter for each role, so you can apply with confidence and stand out to employers.",
    bg: "#F7F9FB",
    bgImage: "/onebg.webp",
    icon: "/flyingresume.png",
    height: 312,
  },
  {
    title: "Take the Next Step in Your Career",
    description:
      "Turn ambition into progress. Prepare for promotion, strengthen your negotiation skills, and build a clear path towards your career goals with one-to-one coaching, AI-powered interview practice, and personalised support.",
    bg: "#9DA6FF",
    bgImage: "/twobg.webp",
    icon: "/Blog_Categories.webp",
    height: 398,
  },
  {
    title: "Make a Career Change with Confidence",
    description:
      "A career change is your chance to create a more rewarding working life. Using insights from more than 150 million career profiles, we help you explore your options, identify transferable skills, and build a practical plan for your next chapter.",
    bg: "#F4F6FA",
    bgImage: "/threebg.webp",
    icon: "/Image.webp",
    height: 497,
  },
];

function GoalCardLink({ card }: { card: GoalCard }) {
  return (
    <Link
      href="#"
      className="group relative block w-full shrink-0 overflow-hidden rounded-[32px] no-underline transition-transform duration-300 hover:-translate-y-1 sm:rounded-[48px] lg:w-[352px]"
      style={{
        backgroundColor: card.bg,
        backgroundImage: `url(${card.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: card.height,
      }}
    >
      <div className="absolute top-6 left-8 flex h-20 items-center">
        <Image
          src={card.icon}
          alt=""
          width={60}
          height={60}
          className="h-[7em] w-[7em] object-contain"
        />
      </div>

      <div className="absolute right-8 bottom-6 left-8">
        <div className="flex items-end justify-between gap-4 transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-[25.6px] leading-9 text-[#0F141E]">{card.title}</h3>
          <CardArrow />
        </div>

        <p className="absolute inset-0 flex items-end text-[19px] leading-[22px] text-[#0F141E] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {card.description}
        </p>
      </div>
    </Link>
  );
}

export function CareerGoalsSection() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className={CONTAINER}>
        <div className="flex flex-col justify-between gap-10 lg:min-h-[640px]">
          <div className="max-w-[585px]">
            <h2 className="text-[30px] leading-9 text-[#0F141E] sm:text-[36px] sm:leading-[46px] lg:text-[42.7px] lg:leading-[52px]">
              Build Your Career Around
              <br />
              Your Life
            </h2>
            <p className="mt-4 text-[16px] leading-6 text-[#0F141E] sm:text-[18px] sm:leading-7 lg:mt-6 lg:text-[19.5px]">
              Work is a big part of life. It should feel meaningful, rewarding,
              and aligned with where you want to go.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-8">
            {cards.map((card) => (
              <GoalCardLink key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
