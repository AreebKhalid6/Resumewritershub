import Link from "next/link";
import {
  ArrowLeftRight,
  Briefcase,
  ChevronRight,
  FileText,
  GraduationCap,
  Mail,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, PrimaryButton } from "./ui";

const services: {
  title: string;
  description: string;
  bg: string;
  accent: string;
  icon: LucideIcon;
  href: string;
}[] = [
  {
    title: "Resume Writing Services",
    description:
      "A tailored resume that highlights your skills, experience, and achievements.",
    bg: "#EAF6FF",
    accent: "#1A91F0",
    icon: FileText,
    href: "/services/resume-writing-services",
  },
  {
    title: "Cover Letter Writing Service",
    description:
      "A personalized cover letter that communicates your unique value and suitability for target roles.",
    bg: "#E7F4ED",
    accent: "#25B869",
    icon: Mail,
    href: "/services/cover-letter-writing-service",
  },
  {
    title: "LinkedIn Profile Writing",
    description:
      "An optimized LinkedIn profile designed to enhance online presence and attract recruiters.",
    bg: "#F1F2FF",
    accent: "#5660E8",
    icon: UserRound,
    href: "/services/linkedin-profile-writing",
  },
  {
    title: "Career Switch Resume Writing",
    description:
      "A strategic resume that reframes your experience and transferable skills for a successful career transition.",
    bg: "#FFF8E6",
    accent: "#E6A817",
    icon: ArrowLeftRight,
    href: "/services/career-switch-resume-writing",
  },
  {
    title: "Student Resume Writing",
    description:
      "A polished student resume that showcases education, projects, and potential to help you land internships and entry-level roles.",
    bg: "#FFEBE4",
    accent: "#F68559",
    icon: GraduationCap,
    href: "/services/student-resume-writing",
  },
  {
    title: "Executive Resume Writing",
    description:
      "A leadership-focused resume that highlights impact, strategy, and senior-level achievements for executive and C-suite opportunities.",
    bg: "#EFF2F9",
    accent: "#1E2532",
    icon: Briefcase,
    href: "/services/executive-resume-writing",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className={CONTAINER}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[14px] leading-5 font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
            What We Offer
          </p>
          <h2 className="mt-3 text-[28px] leading-9 text-[#1E2532] sm:text-[38px] sm:leading-[46px] lg:text-[45px] lg:leading-[52px]">
            Our Resume Writing Services
          </h2>
          <p className="mt-4 text-[15px] leading-6 text-[#656E83] sm:text-[18px] sm:leading-7">
            Discover the range of professional services we offer to support your
            career goals.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-[0px_8px_24px_rgba(15,56,113,0.08)] sm:min-h-[320px] sm:p-8"
                style={{ backgroundColor: service.bg }}
              >
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${service.accent}20` }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: service.accent }}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>

                <h3 className="text-[24px] leading-8 text-[#1E2532]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[16px] leading-6 text-[#656E83]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1 text-[16px] leading-6 font-medium text-[#1A91F0] no-underline hover:underline"
                >
                  Learn more
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryButton className="h-[50px] px-8 font-semibold">
            View more
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
