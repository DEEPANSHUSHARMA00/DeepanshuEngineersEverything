import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SectionShell({ id, eyebrow, title, description, children, delay = 0, className = "" }) {
  const titleId = `${id}-title`;

  return (
    <Reveal
      as="section"
      id={id}
      aria-labelledby={titleId}
      className={`section-shell ${className}`}
      delay={delay}
    >
      <SectionHeading eyebrow={eyebrow} title={title} description={description} titleId={titleId} />
      {children}
    </Reveal>
  );
}

export default SectionShell;
