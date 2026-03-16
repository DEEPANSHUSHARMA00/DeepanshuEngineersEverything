import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";
import TechnologyBadge from "./TechnologyBadge";

const iconMap = {
  Backend: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 7.5h16M4 12h10M4 16.5h16M16 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Streaming: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 8c2.5 0 2.5 3 5 3s2.5-3 5-3 2.5 3 5 3M4 16c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Infrastructure: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M6 10.5 12 7l6 3.5M6 13.5 12 17l6-3.5M12 7v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Cloud: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M8.5 18.5h8a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.3 9.4 4.2 4.2 0 0 0 8.5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function Skills({ groups }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Core technologies organized around backend, streaming, infrastructure, and cloud."
      description="A modern stack centered on real-time systems, service development, and production-oriented engineering."
    >
      <LazyMotion features={domMax} strict>
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <m.article
            key={group.category}
            className="group relative rounded-[1.8rem] p-px transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(2,6,23,0.42)]"
            style={{ backgroundImage: group.accent }}
            whileHover={reduceMotion ? undefined : { y: -10, scale: 1.01 }}
            transition={{ duration: 0.28, ease: motionEase }}
            >
              <div className="h-full rounded-[calc(1.8rem-1px)] bg-slate-950/88 p-6 backdrop-blur-xl sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">
                    {group.category}
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
                    {group.description}
                  </p>
                </div>

                <m.span
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-300 transition duration-300 group-hover:bg-white/[0.08]"
                  whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -4 }}
                  transition={{ duration: 0.24, ease: motionEase }}
                >
                  {iconMap[group.category]}
                </m.span>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <m.li
                    key={item}
                    className="list-none"
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                  >
                    <TechnologyBadge
                      label={item}
                      className="w-full justify-start rounded-[1.1rem] px-4 py-3 text-slate-200 group-hover:border-white/15 group-hover:bg-white/[0.06]"
                    />
                  </m.li>
                ))}
              </ul>
            </div>
            </m.article>
          ))}
        </div>
      </LazyMotion>
    </SectionShell>
  );
}

export default Skills;
