import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";
import TechnologyBadge from "./TechnologyBadge";

function StreamingArchitecture({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="architecture"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <LazyMotion features={domMax} strict>
        <div className="grid gap-4 lg:grid-cols-5">
          {content.stages.map((stage, index) => (
            <m.article
              key={stage.label}
              className="relative rounded-[1.55rem] border border-white/10 bg-slate-950/72 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/82"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.07, ease: motionEase }}
            >
              {index < content.stages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 hidden h-px w-6 bg-cyan-300/35 lg:block"
                />
              ) : null}
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-cyan-300">
                  {stage.eyebrow}
                </p>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] font-mono text-xs text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{stage.label}</h3>
              <p className="mt-4 min-h-28 text-sm leading-7 text-slate-400">{stage.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {stage.technologies.map((technology) => (
                  <TechnologyBadge key={technology} label={technology} className="text-[0.72rem]" />
                ))}
              </div>
            </m.article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.55rem] border border-cyan-300/15 bg-cyan-300/[0.04] p-5 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">Design Principles</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {content.principles.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </LazyMotion>
    </SectionShell>
  );
}

export default StreamingArchitecture;
