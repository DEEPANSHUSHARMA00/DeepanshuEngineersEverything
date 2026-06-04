import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import Reveal from "../sections/Reveal";
import { motionEase } from "../sections/motion";

function MetricsStrip({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal
      as="section"
      aria-label={content.label}
      className="rounded-[2rem] border border-white/10 bg-slate-950/72 p-5 shadow-[0_24px_90px_rgba(2,6,23,0.38)] backdrop-blur-xl sm:p-6"
    >
      <LazyMotion features={domMax} strict>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((metric, index) => (
            <m.div
              key={metric.label}
              className="rounded-[1.45rem] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.055]"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.07, ease: motionEase }}
            >
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{metric.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
                {metric.label}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{metric.detail}</p>
            </m.div>
          ))}
        </div>
      </LazyMotion>
    </Reveal>
  );
}

export default MetricsStrip;
