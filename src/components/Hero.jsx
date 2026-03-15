import Reveal from "./Reveal";

const buttonStyles = {
  primary:
    "bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 text-slate-950 shadow-[0_18px_50px_rgba(45,212,191,0.24)] hover:-translate-y-0.5",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10",
  ghost: "text-slate-300 hover:-translate-y-0.5 hover:text-white",
};

function Hero({ hero }) {
  return (
    <section
      id="hero"
      className="grid scroll-mt-28 gap-6 lg:grid-cols-[minmax(0,1.3fr)_380px] lg:items-stretch"
    >
      <Reveal className="glass-card relative overflow-hidden rounded-[2.25rem] border border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.12),transparent_24%)]" />
        <div className="relative">
          <p className="eyebrow mb-5">{hero.eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hero.name}
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-slate-200 sm:text-xl">
            {hero.tagline}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">{hero.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                download={action.download}
                className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-200 ${buttonStyles[action.variant]}`}
              >
                {action.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="glass-card grid gap-4 rounded-[2rem] p-5 sm:p-6" delay={120}>
        {hero.metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 ${index === 0 ? "bg-gradient-to-br from-cyan-400/12 to-transparent" : ""}`}
          >
            <p className="font-mono text-3xl font-semibold text-cyan-300 sm:text-4xl">{metric.value}</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">{metric.label}</p>
          </div>
        ))}

        <div className="rounded-[1.5rem] border border-dashed border-cyan-300/20 bg-cyan-300/[0.03] p-5">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300">Current Mission</p>
          <p className="mt-3 text-sm leading-7 text-slate-400">{hero.panelNote}</p>
        </div>
      </Reveal>
    </section>
  );
}

export default Hero;
