import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ResumeSamplesPage } from "@/components/resume-samples/ResumeSamplesPage";

export const metadata: Metadata = {
  title: "Free Professional Resume Samples",
  description:
    "Browse free professional resume examples and writing guides by industry and role. Get inspired, then let our experts craft yours.",
};

export default function ResumeSamples() {
  return (
    <div className="flex min-h-full flex-col bg-[#0C1020]">
      <Header />
      <div className="w-full min-w-0">
        <ResumeSamplesPage />
        <Footer />
      </div>
    </div>
  );
}
