import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { revealVariants } from "./motion";

function Reveal({ as = "div", className = "", delay = 0, children, ...props }) {
  const elementRef = useRef(null);
  const inView = useInView(elementRef, {
    once: true,
    amount: 0.18,
  });
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      ref={elementRef}
      className={className}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? "visible" : inView ? "visible" : "hidden"}
      variants={revealVariants}
      custom={delay / 1000}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
