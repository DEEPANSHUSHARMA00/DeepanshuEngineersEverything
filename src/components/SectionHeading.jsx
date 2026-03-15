function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="max-w-3xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
