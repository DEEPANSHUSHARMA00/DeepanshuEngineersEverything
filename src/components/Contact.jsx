import { motion, useReducedMotion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import SectionShell from "../sections/SectionShell";
import { motionEase } from "../sections/motion";

function Contact({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="contact"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      className="overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.08),transparent_30%)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="max-w-2xl">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">{content.message}</p>
        </div>

        <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
          {content.links.map((link) => {
            const external = link.href.startsWith("http");

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent px-5 py-6 text-left shadow-[0_16px_45px_rgba(2,6,23,0.22)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/35 hover:shadow-[0_0_30px_rgba(34,211,238,0.18),0_24px_60px_rgba(2,6,23,0.34)]"
                aria-label={`${link.label}: ${link.meta}`}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                transition={{ duration: 0.24, ease: motionEase }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-medium text-white">{link.label}</p>
                    <p className="mt-2 break-words text-sm leading-6 text-slate-400">{link.meta}</p>
                  </div>
                  <motion.span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-300 transition duration-300 group-hover:bg-cyan-300/[0.1]"
                    whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                    transition={{ duration: 0.22, ease: motionEase }}
                  >
                    <SocialIcon name={link.label} />
                  </motion.span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

export default Contact;
