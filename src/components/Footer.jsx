import { motion, useReducedMotion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import { motionEase } from "../sections/motion";

function Footer({ content }) {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl border-t border-white/8 pt-8 text-center">
        <div className="rounded-[1.75rem] bg-slate-950/75 px-6 py-8 backdrop-blur-md sm:px-8">
          <p className="text-xl font-semibold tracking-tight text-white">{content.name}</p>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">{content.role}</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            {content.links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 shadow-[0_10px_30px_rgba(2,6,23,0.2)] transition-colors duration-200 hover:border-cyan-300/35 hover:bg-cyan-300/[0.08] hover:text-cyan-200"
                whileHover={reduceMotion ? undefined : { y: -3, boxShadow: "0 0 24px rgba(34,211,238,0.18)" }}
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                transition={{ duration: 0.22, ease: motionEase }}
              >
                <SocialIcon name={link.label} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
