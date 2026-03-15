function SocialIcon({ name, className = "h-4 w-4" }) {
  const sharedProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
  };

  if (name === "LinkedIn") {
    return (
      <svg {...sharedProps}>
        <path
          d="M7 10v7M7 7.2v.1M11 17v-4.2c0-1.3 1-2.3 2.3-2.3S15.6 11.5 15.6 12.8V17M5 10h4v7H5zm6 0h4v1.1c.6-.8 1.5-1.3 2.7-1.3 2 0 3.3 1.4 3.3 3.9V17h-4v-3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg {...sharedProps}>
        <path
          d="M9 18.5c-3 .9-3-1.5-4.5-1.8M13.5 20v-2.3c0-.7.1-1.2.4-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.4.5 1 .5 2V20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path
        d="M4 7.5h16v9H4zm0 0 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SocialIcon;
