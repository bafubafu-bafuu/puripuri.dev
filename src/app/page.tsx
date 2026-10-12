import AboutSection from "../components/portfolio/about-section";
import ContactSection from "../components/portfolio/contact-section";
import HobbiesSection from "../components/portfolio/hobbies-section";
import ProjectsSection from "../components/portfolio/projects-section";
import SectionRevealObserver from "../components/portfolio/section-reveal-observer";
import SkillsSection from "../components/portfolio/skills-section";
import SiteFooter from "../components/portfolio/site-footer";
import SiteHeader from "../components/portfolio/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="portfolio">
        <SectionRevealObserver />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <HobbiesSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}
