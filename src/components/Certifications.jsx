import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";

function Certifications({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="certifications"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <LazyMotion features={domMax} strict>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <m.div
              key={index}
              className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]"
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: motionEase }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-900/30 text-cyan-300">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm font-medium leading-6 text-slate-200">{item}</span>
            </m.div>
          ))}
        </div>
      </LazyMotion>
    </SectionShell>
  );
}

export default Certifications;