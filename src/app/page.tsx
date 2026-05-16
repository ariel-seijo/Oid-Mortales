import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MethodologySection from "@/components/methodology-section";
import PathSelectionSection from "@/components/path-selection-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

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
