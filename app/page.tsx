import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";
import SkillsExpertiseSection from "@/components/SkillsExpertiseSection";
import ProcessSection from "@/components/ProcessSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsExpertiseSection />
      <TechStackSection />
      <ProcessSection />
      <AboutSection />

      <Footer />
    </>
  );
}
