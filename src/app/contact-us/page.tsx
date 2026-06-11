import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Our Resume Experts",
  description:
    "Talk to Resume Writers Hub experts about your resume, cover letter, or LinkedIn profile. Call or message us—we're ready to help your career.",
};

export default function ContactUs() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}
