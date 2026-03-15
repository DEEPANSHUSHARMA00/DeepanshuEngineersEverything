import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EngineeringPhilosophy from "./components/EngineeringPhilosophy";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  about,
  contact,
  experience,
  footer,
  hero,
  navItems,
  philosophy,
  projects,
  skills,
} from "./data/portfolio";

const sectionIds = navItems.map((item) => item.id);

function App() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(167,139,250,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <Navbar navItems={navItems} activeSection={activeSection} />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <Hero hero={hero} />
        <About content={about} />
        <EngineeringPhilosophy content={philosophy} />
        <Projects items={projects} />
        <Skills groups={skills} />
        <Experience content={experience} />
        <Contact content={contact} />
      </main>

      <Footer content={footer} />
    </div>
  );
}

export default App;
