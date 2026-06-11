import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { HowWeWorkPage } from "@/components/how-we-work/HowWeWorkPage";

export const metadata: Metadata = {
  title: "How Our Resume Writing Process Works",
  description:
    "See how Resume Writers Hub turns your experience into an ATS-optimized resume—expert writers, fast turnaround, and a simple step-by-step process.",
};

export default function HowWeWork() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <HowWeWorkPage />
        <Footer />
      </div>
    </div>
  );
}
