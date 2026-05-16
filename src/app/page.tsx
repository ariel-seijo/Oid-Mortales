import Navbar from "@/app/_components/landing/navbar";
import HeroSection from "@/app/_components/landing/hero-section";
import MethodologySection from "@/app/_components/landing/methodology-section";
import PathSelectionSection from "@/app/_components/landing/path-selection-section";
import AboutSection from "@/app/_components/landing/about-section";
import Footer from "@/app/_components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <MethodologySection />
        <PathSelectionSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
