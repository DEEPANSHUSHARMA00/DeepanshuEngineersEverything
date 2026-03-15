import SectionShell from "./SectionShell";

function Skills({ groups }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Tooling and systems knowledge shaped by backend and infrastructure work."
      description="A blend of production backend work, distributed systems study, and infrastructure experimentation."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <div key={group.category} className="glass-card rounded-[1.5rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">{group.category}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="list-none rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default Skills;
