import cimbLogo from "./client-logos/cimb.svg";
import kloudspotLogo from "./client-logos/kloudspot.png";
import optimumLogo from "./client-logos/optimum.png";
import rakbankLogo from "./client-logos/rakbank.ico";

export const clientLogoMap = {
  RAKBANK: {
    src: rakbankLogo,
    href: "https://www.rakbank.ae/",
    alt: "RAKBANK official site icon",
    imageClassName: "h-12 w-12 rounded-2xl shadow-[0_16px_40px_rgba(2,6,23,0.24)]",
    frameClassName:
      "h-20 w-20 rounded-[1.5rem] border border-emerald-300/25 bg-white p-4",
    note: "UAE",
  },
  "CIMB Bank": {
    src: cimbLogo,
    href: "https://www.cimb.com/",
    alt: "CIMB official logo",
    imageClassName: "h-10 w-auto max-w-[150px]",
    frameClassName:
      "min-h-20 min-w-[180px] rounded-[1.5rem] border border-white/10 bg-white px-5 py-4",
    note: "Malaysia",
  },
  Kloudspot: {
    src: kloudspotLogo,
    href: "https://kloudspot.com/",
    alt: "Kloudspot official logo",
    imageClassName: "h-14 w-auto max-w-[170px]",
    frameClassName:
      "min-h-20 min-w-[190px] rounded-[1.5rem] border border-white/10 bg-white px-5 py-3",
    note: "Analytics Platform",
  },
  Optimum: {
    src: optimumLogo,
    href: "https://theoptimum.net/",
    alt: "Optimum Solutions official logo",
    imageClassName: "h-10 w-auto max-w-[170px]",
    frameClassName:
      "min-h-20 min-w-[180px] rounded-[1.5rem] border border-white/10 bg-slate-950 px-5 py-4",
    note: "Engineering Partner",
  },
};
