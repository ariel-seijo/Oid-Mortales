import Navbar from "@/app/_components/landing/navbar";
import HeroSection from "@/app/_components/landing/hero-section";
import FiguresSection from "@/app/_components/landing/figures-section";
import MethodologySection from "@/app/_components/landing/methodology-section";
import PillarsSection from "@/app/_components/landing/pillars-section";
import AboutSection from "@/app/_components/landing/about-section";
import Footer from "@/app/_components/landing/footer";
import FlagSeparator from "@/app/_components/landing/flag-separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FlagSeparator />
        <FiguresSection />
        <FlagSeparator />
        <MethodologySection />
        <FlagSeparator />
        <PillarsSection />
        <FlagSeparator />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
