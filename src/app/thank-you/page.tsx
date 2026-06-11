import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ThankYouPage } from "@/components/thank-you/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You for Contacting Us",
  description:
    "Thanks for reaching out to Resume Writers Hub. Our team has received your request and will get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYou() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <ThankYouPage />
        <Footer />
      </div>
    </div>
  );
}
