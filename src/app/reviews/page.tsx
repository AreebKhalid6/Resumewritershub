import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ReviewsPage } from "@/components/reviews/ReviewsPage";

export const metadata: Metadata = {
  title: "Customer Reviews & Ratings",
  description:
    "Read verified Trustpilot reviews from Resume Writers Hub clients. Rated 4.7/5 by thousands of job seekers who landed more interviews.",
};

export default function Reviews() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="w-full min-w-0">
        <ReviewsPage />
        <Footer />
      </div>
    </div>
  );
}
