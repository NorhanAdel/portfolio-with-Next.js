import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection"
import ExperienceSection from "./components/ExperienceSection"
import StatsSection from "./components/StatsSection";
export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <StatsSection/>
      <ContactSection />
      
      <Footer />
    </>
  );
}