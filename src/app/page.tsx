import { CookieBanner } from "@/components/cookies/CookieBanner";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { HomePage } from "@/components/home/HomePage";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#EFF2F9]">
      <Header />
      <div className="overflow-x-clip">
        <HomePage />
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
}
