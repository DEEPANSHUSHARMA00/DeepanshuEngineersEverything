import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SectionShell({ id, eyebrow, title, description, children, delay = 0, className = "" }) {
  return (
    <Reveal id={id} className={`section-shell ${className}`} delay={delay}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      {children}
    </Reveal>
  );
}

export default SectionShell;
