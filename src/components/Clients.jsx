import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import { motionEase } from "../sections/motion";
import { clientLogoMap } from "../assets/clientLogos";

function Clients({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Client organizations"
      className="flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-10 sm:py-12"
    >
      <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
        {content.eyebrow}
      </p>
      <LazyMotion features={domMax} strict>
        <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.logos.map((logo, index) => (
            <m.a
              key={logo.name}
              href={clientLogoMap[logo.name]?.href ?? `https://${logo.domain}`}
              target="_blank"
              rel="noreferrer"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: motionEase }}
              className="group rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5 text-center shadow-[0_20px_60px_rgba(2,6,23,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:bg-slate-900/80"
              title={logo.name}
            >
              <div className="flex h-full flex-col items-center justify-between gap-4">
                <div
                  className={`flex items-center justify-center ${clientLogoMap[logo.name]?.frameClassName ?? "min-h-20 min-w-[180px] rounded-[1.5rem] border border-white/10 bg-white px-5 py-4"}`}
                >
                  <img
                    src={clientLogoMap[logo.name]?.src}
                    alt={clientLogoMap[logo.name]?.alt ?? `${logo.name} logo`}
                    className={clientLogoMap[logo.name]?.imageClassName ?? "h-10 w-auto max-w-[160px] object-contain"}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div>
                  <p className="text-lg font-semibold tracking-tight text-white">{logo.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                    {clientLogoMap[logo.name]?.note ?? "Client"}
                  </p>
                </div>
              </div>
            </m.a>
          ))}
        </div>
      </LazyMotion>
    </section>
  );
}

export default Clients;
