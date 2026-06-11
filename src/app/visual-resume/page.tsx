import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { VisualResumePage } from "@/components/visual-resume/VisualResumePage";

export const metadata: Metadata = {
  title: "Visual & Video Resume Services",
  description:
    "Stand out with a custom visual or video resume from Resume Writers Hub. Capture hiring managers' attention beyond a traditional CV.",
};

export default function VisualResume() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <VisualResumePage />
        <Footer />
      </div>
    </div>
  );
}
