import { domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";
import TechnologyBadge from "./TechnologyBadge";

function Insights({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="insights" eyebrow={content.eyebrow} title={content.title} description={content.description}>
      <LazyMotion features={domMax} strict>
        <div className="grid gap-5 lg:grid-cols-3">
          {content.posts.map((post, index) => (
            <m.article
              key={post.title}
              className="rounded-[1.55rem] border border-white/10 bg-slate-950/70 p-5 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:bg-slate-900/80 sm:p-6"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.07, ease: motionEase }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">Draft Note</p>
              <h3 className="mt-4 text-xl font-semibold leading-7 tracking-tight text-white">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{post.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TechnologyBadge key={tag} label={tag} className="text-[0.72rem]" />
                ))}
              </div>
            </m.article>
          ))}
        </div>
      </LazyMotion>
    </SectionShell>
  );
}

export default Insights;
