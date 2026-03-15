import SectionShell from "../sections/SectionShell";

function About({ content }) {
  return (
    <SectionShell
      id="about"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="glass-card rounded-[1.75rem] p-6 sm:p-7">
          <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[1.75rem] bg-gradient-to-b from-sky-400/10 via-transparent to-transparent p-6 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">
            {content.highlightTitle}
          </p>
          <div className="mt-5 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            {content.highlightParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default About;
