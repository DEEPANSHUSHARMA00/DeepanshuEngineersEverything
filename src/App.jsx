import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  about,
  clients,
  contact,
  experience,
  footer,
  hero,
  navItems,
  certifications,
  philosophy,
  projects,
  skills,
} from "./assets/portfolioContent";
import { pageTransition } from "./sections/motion";
import useActiveSection from "./sections/useActiveSection";
import bgVideo from "./assets/network-nodes.mp4";

function App() {
  const activeSection = useActiveSection(navItems);
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="relative min-h-screen text-slate-100"
        initial="initial"
        animate="animate"
        variants={pageTransition}
      >
        <a
          href="#content"
          className="sr-only z-[60] rounded-full bg-slate-900 px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {reduceMotion ? null : (
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-screen"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        )}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(167,139,250,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.14),transparent_28%)]"
          animate={{
            opacity: [0.8, 1, 0.85],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />

        <Navbar navItems={navItems} activeSection={activeSection} />

        <motion.main
          id="content"
          className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-0 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <Hero hero={hero} />
          <Clients content={clients} />
          <About content={about} />
          <Philosophy content={philosophy} />
          <Projects items={projects} />
          <Skills groups={skills} />
          <Experience content={experience} />
          <Certifications content={certifications} />
          <Contact content={contact} />
        </motion.main>

        <Footer content={footer} />
      </motion.div>
    </MotionConfig>
  );
}

export default App;
