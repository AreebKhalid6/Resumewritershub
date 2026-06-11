import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { FaqPage } from "@/components/faq/FaqPage";

export const metadata: Metadata = {
  title: "Resume Writing FAQs",
  description:
    "Answers to common questions about our resume writing services, turnaround times, revisions, ATS optimization, pricing, and what to expect.",
};

export default function Faq() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <FaqPage />
        <Footer />
      </div>
    </div>
  );
}
