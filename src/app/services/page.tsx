import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Resume Writing & Career Services",
  description:
    "Explore professional resume writing, cover letters, LinkedIn optimization, executive & student resumes from certified writers at Resume Writers Hub.",
};

export default function Services() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <ServicesPage />
        <Footer />
      </div>
    </div>
  );
}
