import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";
import SkillsExpertiseSection from "@/components/SkillsExpertiseSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsExpertiseSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
