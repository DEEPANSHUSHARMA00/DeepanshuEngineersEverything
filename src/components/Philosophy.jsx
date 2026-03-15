import Reveal from "../sections/Reveal";

function Philosophy({ content }) {
  return (
    <Reveal
      id="philosophy"
      className="section-shell overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_32%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="eyebrow mb-5">{content.eyebrow}</p>
        <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {content.description}
        </p>

        <Reveal className="relative mt-12 w-full max-w-4xl" delay={80}>
          <span className="pointer-events-none absolute -left-2 -top-10 font-serif text-7xl text-white/8 sm:text-8xl lg:text-9xl">
            "
          </span>
          <p className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {content.quotes[0]}
          </p>
        </Reveal>

        <Reveal className="relative mt-10 w-full max-w-4xl" delay={180}>
          <p className="text-balance text-2xl font-medium leading-tight tracking-[-0.04em] text-slate-300 sm:text-4xl lg:text-5xl">
            {content.quotes[1]}
          </p>
        </Reveal>

        <Reveal className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" delay={240} />

        <Reveal className="mt-8 max-w-3xl" delay={300}>
          <p className="text-balance text-base leading-8 text-slate-400 sm:text-lg">
            {content.supportingText}
          </p>
        </Reveal>

        <Reveal className="mt-8 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-slate-400" delay={360}>
          {content.signature}
        </Reveal>
      </div>
    </Reveal>
  );
}

export default Philosophy;
