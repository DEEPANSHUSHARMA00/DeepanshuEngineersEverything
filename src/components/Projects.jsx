import SectionShell from "./SectionShell";

function Projects({ items }) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Infrastructure experiments designed to expose how distributed platforms behave."
      description="A focused set of labs and systems exercises around messaging, observability, availability, and automation."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((project, index) => (
          <article
            key={project.title}
            className={`glass-card rounded-[1.75rem] p-6 sm:p-7 ${index === 0 ? "lg:col-span-2" : ""}`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">{project.tag}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
              </div>
              {project.metrics ? (
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">{project.summary}</p>

            {project.flow ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.flow.map((step, flowIndex) => (
                  <div key={step} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">{step}</span>
                    {flowIndex < project.flow.length - 1 ? <span className="text-cyan-300/70">→</span> : null}
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">Focus Areas</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {project.focus.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {project.learnings ? (
                  <>
                    <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">Key Learnings</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {project.learnings.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-400 sm:text-base">
                    {project.insight || "Practical experiments help convert theory into operational intuition."}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Projects;
