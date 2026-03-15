import { useEffect, useState } from "react";
import { AnimatePresence, domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import { motionEase } from "../sections/motion";

function Navbar({ navItems, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerSurface = isScrolled || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <LazyMotion features={domMax} strict>
          <m.div
          layout
          className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-300 sm:px-5 ${
            headerSurface
              ? "border border-white/10 bg-slate-950/80 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl"
              : "border border-transparent bg-transparent shadow-none"
          }`}
          transition={reduceMotion ? undefined : { duration: 0.3, ease: motionEase }}
          >
            <m.a
            href="#hero"
            className="group flex items-center gap-3"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            >
              <m.span
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-teal-300 font-mono text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.25)]"
              whileHover={reduceMotion ? undefined : { scale: 1.05, rotate: -4 }}
            >
              DS
            </m.span>
            <span className="hidden text-sm font-medium tracking-[0.08em] text-slate-300 transition-colors duration-200 group-hover:text-white sm:inline-flex">
              Deepanshu Sharma
            </span>
            </m.a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <m.a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                      : "text-slate-400 hover:-translate-y-0.5 hover:bg-white/5 hover:text-white"
                  }`}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  {item.label}
                </m.a>
              );
            })}
          </nav>

            <m.button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-slate-200 transition-all duration-300 md:hidden ${
              headerSurface
                ? "border-white/10 bg-white/5 hover:bg-white/10"
                : "border-white/0 bg-white/[0.03] hover:bg-white/[0.08]"
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
            </m.button>
          </m.div>

        <AnimatePresence>
          {menuOpen ? (
            <m.nav
              id="mobile-navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.24, ease: motionEase }}
              className="mt-3 grid gap-2 rounded-[1.75rem] border border-white/10 bg-slate-950/92 p-3 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl md:hidden"
              aria-label="Mobile primary"
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;

                return (
                  <m.a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: index * 0.04, ease: motionEase }}
                    whileHover={reduceMotion ? undefined : { x: 4 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </m.a>
                );
              })}
            </m.nav>
          ) : null}
        </AnimatePresence>
        </LazyMotion>
      </div>
    </header>
  );
}

export default Navbar;
