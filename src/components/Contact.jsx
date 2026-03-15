import SectionShell from "./SectionShell";

function Contact({ content }) {
  return (
    <SectionShell
      id="contact"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <div className="glass-card rounded-[1.75rem] p-6 sm:p-7">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">{content.message}</p>
          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">Reach Out</p>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">{content.emailLabel}</p>
          </div>
        </div>

        <div className="glass-card rounded-[1.75rem] p-4">
          <div className="grid gap-3">
            {content.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-medium text-white">{link.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{link.meta}</p>
                  </div>
                  <span className="text-cyan-300 transition group-hover:translate-x-1">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default Contact;
