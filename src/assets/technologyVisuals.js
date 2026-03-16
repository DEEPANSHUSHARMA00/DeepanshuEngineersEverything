import {
  siApachekafka,
  siDocker,
  siGit,
  siGooglecloud,
  siJenkins,
  siLinux,
  siMysql,
  siOpenjdk,
  siRedis,
  siSpringboot,
} from "simple-icons";

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");

  if (normalized.length !== 6) {
    return null;
  }

  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return { red, green, blue };
}

function rgba({ red, green, blue }, alpha) {
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getLuminance({ red, green, blue }) {
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function createBrandVisual(icon) {
  const hex = `#${icon.hex}`;
  const rgb = hexToRgb(hex);
  const isDark = rgb ? getLuminance(rgb) < 70 : false;

  return {
    kind: "brand",
    viewBox: "0 0 24 24",
    path: icon.path,
    tileStyle: rgb
      ? {
          backgroundColor: isDark ? "rgba(248, 250, 252, 0.96)" : rgba(rgb, 0.16),
          borderColor: isDark ? rgba(rgb, 0.24) : rgba(rgb, 0.36),
        }
      : undefined,
    iconStyle: {
      color: hex,
    },
  };
}

function createGenericVisual(paths) {
  return {
    kind: "generic",
    viewBox: "0 0 24 24",
    paths,
    tileStyle: {
      backgroundColor: "rgba(14, 165, 233, 0.12)",
      borderColor: "rgba(103, 232, 249, 0.22)",
    },
    iconStyle: {
      color: "#67e8f9",
    },
  };
}

const brandDefinitions = [
  { matcher: /kafka/, icon: siApachekafka },
  { matcher: /redis/, icon: siRedis },
  { matcher: /linux/, icon: siLinux },
  { matcher: /jenkins/, icon: siJenkins },
  { matcher: /\bgit\b/, icon: siGit },
  { matcher: /java/, icon: siOpenjdk },
  { matcher: /spring boot/, icon: siSpringboot },
  { matcher: /docker/, icon: siDocker },
  { matcher: /google cloud|gcp/, icon: siGooglecloud },
  { matcher: /mysql/, icon: siMysql },
];

const genericDefinitions = [
  {
    matcher: /zookeeper|distributed backend services|distributed systems/,
    paths: [
      {
        d: "M6 7.5h4M14 7.5h4M12 7.5v4.5M8 16.5h8",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      {
        d: "M5 5h4v5H5zM15 5h4v5h-4zM10 14h4v5h-4z",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinejoin: "round",
      },
    ],
  },
  {
    matcher: /virtual machines?|linux server environments?/,
    paths: [
      {
        d: "M4.75 6.5h14.5v8.5H4.75z",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinejoin: "round",
      },
      {
        d: "M8 18.5h8M10 15v3.5M14 15v3.5",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
    ],
  },
  {
    matcher: /replication|monitoring/,
    paths: [
      {
        d: "M5 18.5h14",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
      },
      {
        d: "M6 15.5 9.2 11l2.4 2.6 4.3-6.1 2.1 2.7",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
    ],
  },
  {
    matcher: /network|event driven architecture/,
    paths: [
      {
        d: "M7 6.5h10M7 17.5h10M7 6.5l10 11M17 6.5 7 17.5",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      {
        d: "M4.5 5h5v5h-5zM14.5 14h5v5h-5z",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinejoin: "round",
      },
    ],
  },
  {
    matcher: /build automation|deployment pipelines?/,
    paths: [
      {
        d: "M5 12h4M15 12h4M9 12h6",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      {
        d: "M4.5 9.5h5v5h-5zM14.5 9.5h5v5h-5z",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinejoin: "round",
      },
    ],
  },
  {
    matcher: /microservices/,
    paths: [
      {
        d: "M4.5 5h6v5h-6zM13.5 5h6v5h-6zM9 14h6v5H9z",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinejoin: "round",
      },
      {
        d: "M10.5 7.5h3M12 10v4",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
    ],
  },
  {
    matcher: /database/,
    paths: [
      {
        d: "M6 7.5c0-1.9 2.7-3.5 6-3.5s6 1.6 6 3.5-2.7 3.5-6 3.5-6-1.6-6-3.5Z",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinejoin: "round",
      },
      {
        d: "M6 7.5v8c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5v-8",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinejoin: "round",
      },
    ],
  },
];

const defaultVisual = createGenericVisual([
  {
    d: "M12 4.5 18 8v8l-6 3.5L6 16V8l6-3.5Z",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinejoin: "round",
  },
  {
    d: "M9.5 12h5",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
  },
]);

export function getTechnologyVisual(label) {
  const normalized = label.trim().toLowerCase();
  const brandMatch = brandDefinitions.find(({ matcher }) => matcher.test(normalized));

  if (brandMatch) {
    return createBrandVisual(brandMatch.icon);
  }

  const genericMatch = genericDefinitions.find(({ matcher }) => matcher.test(normalized));

  if (genericMatch) {
    return createGenericVisual(genericMatch.paths);
  }

  return defaultVisual;
}
