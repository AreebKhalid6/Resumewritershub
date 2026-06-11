import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { TermsPage } from "@/components/legal/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service governing Resume Writers Hub resume writing, career documents, and related professional services.",
};

export default function TermsOfService() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <TermsPage />
        <Footer />
      </div>
    </div>
  );
}
