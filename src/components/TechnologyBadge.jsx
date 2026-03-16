import { getTechnologyVisual } from "../assets/technologyVisuals";

function TechnologyBadge({ label, className = "" }) {
  const visual = getTechnologyVisual(label);

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-slate-300 transition duration-300 ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border shadow-[0_12px_30px_rgba(2,6,23,0.2)]"
        style={visual.tileStyle}
      >
        <svg
          viewBox={visual.viewBox}
          className="h-5 w-5"
          style={visual.iconStyle}
          fill="none"
        >
          {visual.kind === "brand" ? (
            <path d={visual.path} fill="currentColor" />
          ) : (
            visual.paths.map((pathProps, index) => <path key={index} {...pathProps} />)
          )}
        </svg>
      </span>
      <span>{label}</span>
    </div>
  );
}

export default TechnologyBadge;
