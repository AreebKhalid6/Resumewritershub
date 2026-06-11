import type { Metadata } from "next";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { LpFooter } from "@/components/lp/LpFooter";
import { LpHeader } from "@/components/lp/LpHeader";
import { LandingPage } from "@/components/lp/LandingPage";

export const metadata: Metadata = {
  title: "Professional Resume Writing Services Starting at $99",
  description:
    "Get an ATS-optimized, professionally written resume from certified writers starting at $99. Fast turnaround, free consultation, and a resume built to land more interviews.",
  openGraph: {
    title: "Professional Resume Writing Services Starting at $99",
    description:
      "Get an ATS-optimized, professionally written resume from certified writers starting at $99. Fast turnaround, free consultation, and a resume built to land more interviews.",
    url: "/lp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Resume Writing Services Starting at $99",
    description:
      "Get an ATS-optimized, professionally written resume from certified writers starting at $99. Fast turnaround, free consultation, and a resume built to land more interviews.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/lp",
  },
};

export default function LpPage() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <LpHeader />
      <div className="overflow-x-clip">
        <LandingPage />
        <LpFooter />
      </div>
      <CookieBanner />
    </div>
  );
}
