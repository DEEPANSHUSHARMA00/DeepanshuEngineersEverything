import { useState } from "react";
import { AnimatePresence, domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";

function Projects({ items }) {
  const [openCards, setOpenCards] = useState(() =>
    items.reduce((accumulator, project, index) => {
      accumulator[project.title] = index === 0;
      return accumulator;
    }, {})
  );
  const reduceMotion = useReducedMotion();

  const toggleCard = (title) => {
    setOpenCards((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="A project showcase built around infrastructure experiments and backend systems."
      description="Each project focuses on behavior under load, failure, replication, orchestration, or service communication."
    >
      <LazyMotion features={domMax} strict>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((project) => {
            const projectId = project.title.replace(/\s+/g, "-").toLowerCase();

            return (
              <m.article
              key={project.title}
              aria-labelledby={`${projectId}-title`}
              className="group relative rounded-[1.85rem] p-px transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(2,6,23,0.48)]"
              style={{ backgroundImage: project.borderGradient }}
              whileHover={reduceMotion ? undefined : { y: -10, scale: 1.01 }}
              transition={{ duration: 0.28, ease: motionEase }}
              >
                <div className="h-full rounded-[calc(1.85rem-1px)] bg-slate-950/90 p-6 backdrop-blur-xl sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">
                      Project Showcase
                    </p>
                    <h3 id={`${projectId}-title`} className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>

                  <m.button
                    type="button"
                    className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                    onClick={() => toggleCard(project.title)}
                    aria-expanded={openCards[project.title]}
                    aria-controls={`${projectId}-details`}
                    aria-label={`${openCards[project.title] ? "Hide" : "Show"} details for ${project.title}`}
                    whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  >
                    {openCards[project.title] ? "Hide" : "Details"}
                  </m.button>
                </div>

                <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{project.description}</p>

                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-[0.34em] text-slate-500">
                    Technologies Used
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {project.technologies.map((technology) => (
                      <m.span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-slate-300 transition group-hover:border-white/15 group-hover:bg-white/[0.06]"
                        whileHover={reduceMotion ? undefined : { y: -3 }}
                      >
                        {technology}
                      </m.span>
                    ))}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {openCards[project.title] ? (
                    <m.div
                      key="details"
                      id={`${projectId}-details`}
                      initial={reduceMotion ? false : { height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.32, ease: motionEase }}
                      className="overflow-hidden"
                      >
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                        <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">
                          Expandable Details
                        </p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                          {project.details.map((detail, index) => (
                            <m.li
                              key={detail}
                              className="flex gap-3"
                              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.22, delay: index * 0.04, ease: motionEase }}
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                              <span>{detail}</span>
                            </m.li>
                          ))}
                        </ul>
                      </div>
                    </m.div>
                  ) : null}
                </AnimatePresence>
              </div>
              </m.article>
            );
          })}
        </div>
      </LazyMotion>
    </SectionShell>
  );
}

export default Projects;
