import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { PricingPage } from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Resume Writing Packages & Pricing",
  description:
    "Compare affordable resume writing packages starting from $110. Transparent pricing for ATS-friendly resumes, cover letters, and career documents.",
};

export default function Pricing() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <PricingPage />
        <Footer />
      </div>
    </div>
  );
}
