import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./utils/themeContext";

// Import layout components
import { AnimatedBackground, MobileNav } from "./components";

// Import section components
import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "./components/sections";

// ==================== MAIN PORTFOLIO ====================
const PortfolioContent = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [aboutData, setAboutData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [contactData, setContactData] = useState(null);

  // Fetch all data on mount
  useEffect(() => {
    Promise.all([
      fetch("/data/about.json").then((r) => r.json()),
      fetch("/data/projects.json").then((r) => r.json()),
      fetch("/data/skills.json").then((r) => r.json()),
      fetch("/data/contact.json").then((r) => r.json()),
    ]).then(([about, projects, skills, contact]) => {
      setAboutData(about);
      setProjectsData(projects);
      setSkillsData(skills);
      setContactData(contact);
    });
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section helper
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedBackground>
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        scrollTo={scrollTo}
        setMobileNavOpen={setMobileNavOpen}
      />

      {/* Mobile Navigation Menu */}
      <MobileNav
        isOpen={mobileNavOpen}
        setIsOpen={setMobileNavOpen}
        scrollTo={scrollTo}
        activeSection={activeSection}
      />

      {/* Page Sections */}
      <HeroSection scrollTo={scrollTo} />
      <AboutSection aboutData={aboutData} />
      <ProjectsSection projectsData={projectsData} />
      <SkillsSection skillsData={skillsData} />
      <ContactSection contactData={contactData} />
      <Footer />
    </AnimatedBackground>
  );
};

// App wrapper with Theme Provider
function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
