import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorksSection from "@/components/sections/WorksSection";
import CareerSection from "@/components/sections/CareerSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="border-t border-[#27272a]/50">
          <AboutSection />
        </div>
        <div className="border-t border-[#27272a]/50">
          <SkillsSection />
        </div>
        <div className="border-t border-[#27272a]/50">
          <WorksSection />
        </div>
        <div className="border-t border-[#27272a]/50">
          <CareerSection />
        </div>
        <div className="border-t border-[#27272a]/50">
          <HobbiesSection />
        </div>
        <div className="border-t border-[#27272a]/50">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
