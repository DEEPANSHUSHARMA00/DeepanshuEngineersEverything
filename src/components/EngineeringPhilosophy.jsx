import SectionShell from "./SectionShell";

function EngineeringPhilosophy({ content }) {
  return (
    <SectionShell
      id="philosophy"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="glass-card rounded-[1.75rem] p-6 sm:p-7">
          <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[1.75rem] p-6 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">Learning Workflow</p>
          <ol className="mt-6 space-y-4">
            {content.workflow.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-sm text-cyan-300">
                  {index + 1}
                </span>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {step}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}

export default EngineeringPhilosophy;
