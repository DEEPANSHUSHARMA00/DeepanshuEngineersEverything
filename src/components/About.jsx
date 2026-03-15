import profilePlaceholder from "../assets/profile-placeholder.svg";
import Reveal from "../sections/Reveal";
import SectionShell from "../sections/SectionShell";

function About({ content }) {
  return (
    <SectionShell
      id="about"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <Reveal className="glass-card rounded-[1.9rem] p-6 sm:p-7" delay={60}>
          <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          className="glass-card overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-sky-400/10 via-transparent to-transparent"
          delay={180}
        >
          <div className="p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">
              {content.profileLabel}
            </p>
          </div>
          <div className="px-6 sm:px-7">
            <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/70">
              <img
                src={profilePlaceholder}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width="720"
                height="880"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="p-6 sm:p-7">
            <h3 className="text-2xl font-semibold tracking-tight text-white">{content.profileRole}</h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.26em] text-slate-400">
              {content.profileFocus}
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">{content.profileCaption}</p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export default About;
