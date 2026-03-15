import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";

function Experience({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="experience"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <LazyMotion features={domMax} strict>
        <div className="flex flex-col gap-8">
          {content.roles.map((job, index) => (
            <m.article
              key={index}
              className="group relative rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:bg-white/[0.04] sm:p-8"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: motionEase }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-lg text-cyan-300">{job.company}</p>
                </div>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-sm text-slate-300">
                  {job.period}
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {job.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span className="text-sm leading-7 sm:text-base">{task}</span>
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>
      </LazyMotion>
    </SectionShell>
  );
}

export default Experience;
