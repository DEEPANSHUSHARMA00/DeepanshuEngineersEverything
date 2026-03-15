import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../sections/Reveal";
import { heroItem, motionEase, staggerContainer } from "../sections/motion";

const buttonStyles = {
  primary:
    "bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 text-slate-950 shadow-[0_18px_50px_rgba(45,212,191,0.24)] hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(34,211,238,0.28)]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10",
};

function Hero({ hero }) {
  const technologies = hero.rotatingTechnologies ?? [];
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!technologies.length) {
      return undefined;
    }

    if (reduceMotion) {
      setTypedText(technologies[technologyIndex] ?? "");
      return undefined;
    }

    const currentTechnology = technologies[technologyIndex];
    const isComplete = typedText === currentTechnology;
    const isCleared = typedText === "";
    let timeoutId;

    if (!isDeleting && isComplete) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1350);
    } else if (isDeleting && isCleared) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setTechnologyIndex((currentIndex) => (currentIndex + 1) % technologies.length);
      }, 220);
    } else {
      timeoutId = setTimeout(() => {
        const nextLength = typedText.length + (isDeleting ? -1 : 1);
        setTypedText(currentTechnology.slice(0, nextLength));
      }, isDeleting ? 55 : 95);
    }

    return () => clearTimeout(timeoutId);
  }, [isDeleting, reduceMotion, technologies, technologyIndex, typedText]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex min-h-screen w-screen scroll-mt-28 items-center justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(2,6,23,1)_0%,rgba(6,14,28,1)_40%,rgba(4,12,24,1)_100%)]"
    >
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-45" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.12),transparent_24%)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-cyan-400/12 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -22, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[16%] right-[10%] h-56 w-56 rounded-full bg-teal-300/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, 20, 0], opacity: [0.1, 0.16, 0.1] }}
        transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Reveal className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-32 text-center sm:px-8 sm:pb-20 sm:pt-36 lg:px-10">
        <motion.div
          className="flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={heroItem}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.34em] text-cyan-300 shadow-[0_12px_30px_rgba(2,6,23,0.28)]"
          >
            {hero.title}
          </motion.div>

          <div className="mt-8 max-w-5xl">
            <motion.h1
              id="hero-title"
              className="text-balance text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl lg:text-[6.8rem]"
              variants={staggerContainer}
            >
              {hero.name.split(" ").map((word) => (
                <motion.span
                  key={word}
                  variants={heroItem}
                  className="mr-[0.25em] inline-block last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            variants={heroItem}
            className="mt-8 max-w-3xl text-balance text-lg leading-8 text-slate-300 sm:text-2xl sm:leading-10"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-8 inline-flex min-h-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-sm text-slate-300 shadow-[0_16px_50px_rgba(2,6,23,0.34)] sm:px-6 sm:text-base"
          >
            <span className="text-slate-500">Exploring</span>
            <motion.span
              aria-hidden="true"
              className="ml-3 text-left text-cyan-300"
              key={typedText}
              initial={reduceMotion ? false : { opacity: 0.35 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18, ease: motionEase }}
            >
              {typedText}
            </motion.span>
            <motion.span
              aria-hidden="true"
              className="ml-1 inline-block h-5 w-px bg-cyan-300"
              animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
              transition={reduceMotion ? undefined : { duration: 1.05, repeat: Infinity, ease: "linear" }}
            />
            <span className="sr-only">Technologies: {technologies.join(", ")}</span>
          </motion.div>

          <motion.div variants={heroItem} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {hero.actions.map((action) => (
              <motion.a
                key={action.label}
                href={action.href}
                className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition duration-200 ${buttonStyles[action.variant]}`}
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.015 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              >
                {action.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={heroItem} className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.26em] text-slate-500 sm:text-sm">
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-slate-400"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.55 + index * 0.06, ease: motionEase }}
                whileHover={reduceMotion ? undefined : { y: -3, borderColor: "rgba(103,232,249,0.22)" }}
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </Reveal>
    </section>
  );
}

export default Hero;
