import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";

function RoleFit({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="role-fit" eyebrow={content.eyebrow} title={content.title} description={content.description}>
      <LazyMotion features={domMax} strict>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[1.55rem] border border-white/10 bg-slate-950/70 p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">Best-Fit Roles</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {content.roles.map((role, index) => (
                <m.span
                  key={role}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm leading-6 text-slate-200"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.28, delay: index * 0.04, ease: motionEase }}
                >
                  {role}
                </m.span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.55rem] border border-cyan-300/15 bg-cyan-300/[0.04] p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">Positioning</p>
            <ul className="mt-5 flex flex-col gap-4">
              {content.strengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LazyMotion>
    </SectionShell>
  );
}

export default RoleFit;
