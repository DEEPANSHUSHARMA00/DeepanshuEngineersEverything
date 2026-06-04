import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";

function StreamingDepth({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="streaming-depth"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <LazyMotion features={domMax} strict>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.groups.map((group, index) => (
            <m.article
              key={group.title}
              className="rounded-[1.55rem] border border-white/10 bg-slate-950/70 p-5 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:bg-slate-900/80"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.07, ease: motionEase }}
            >
              <h3 className="text-xl font-semibold tracking-tight text-white">{group.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>
      </LazyMotion>
    </SectionShell>
  );
}

export default StreamingDepth;
