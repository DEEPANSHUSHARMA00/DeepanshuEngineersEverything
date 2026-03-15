import SectionShell from "./SectionShell";

function Experience({ content }) {
  return (
    <SectionShell
      id="experience"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="glass-card rounded-[1.75rem] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">Role</p>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{content.role}</h3>
            <p className="max-w-md text-base leading-8 text-slate-400">{content.summary}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">Core Activities</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                {content.activities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">Technology Exposure</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                {content.exposure.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-dashed border-cyan-300/20 bg-cyan-300/[0.04] p-5 text-sm leading-7 text-slate-300 sm:text-base">
          {content.takeaway}
        </div>
      </div>
    </SectionShell>
  );
}

export default Experience;
