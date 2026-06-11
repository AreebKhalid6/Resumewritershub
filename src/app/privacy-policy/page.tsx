import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { PrivacyPage } from "@/components/legal/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Resume Writers Hub collects, uses, and protects your personal information when you use our resume writing services.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <PrivacyPage />
        <Footer />
      </div>
    </div>
  );
}
