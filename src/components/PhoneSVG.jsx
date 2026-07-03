import React from 'react';

const PALETTE = {
  legend: { body: '#EDEFF2', accent: '#FF5B00', stripe: true },
  black: { body: '#1B1D21', accent: '#FF5B00', stripe: false },
  cyan: { body: '#D9EFFC', accent: '#2C6BFF', stripe: false },
};

/**
 * Stylized product illustration (not a stock photo). idSuffix keeps
 * gradient/clipPath ids unique when multiple instances render at once.
 */
export default function PhoneSVG({ variant = 'legend', idSuffix = 'a', className = '' }) {
  const palette = PALETTE[variant] || PALETTE.legend;
  const clipId = `phoneClip-${idSuffix}`;
  const glowId = `haloGlow-${idSuffix}`;
  const screenId = `screenGrad-${idSuffix}`;

  return (
    <svg
      viewBox="0 0 360 720"
      className={`phone-svg ${className}`}
      role="img"
      aria-label={`iQOO 15R in the ${variant} colorway`}
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="20" y="14" width="320" height="692" rx="52" />
        </clipPath>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity="0.9" />
          <stop offset="60%" stopColor={palette.accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={palette.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={screenId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1c22" />
          <stop offset="100%" stopColor="#05060a" />
        </linearGradient>
      </defs>

      {/* Body */}
      <rect x="16" y="10" width="328" height="700" rx="56" fill={palette.body} />

      <g clipPath={`url(#${clipId})`}>
        <rect x="20" y="14" width="320" height="692" fill={palette.body} />

        {palette.stripe && (
          <g opacity="0.95">
            <polygon points="20,120 130,14 180,14 60,220" fill="#2C6BFF" />
            <polygon points="70,220 190,14 210,14 100,260" fill="#ffffff" />
            <polygon points="110,260 230,14 260,14 150,300" fill="#FF5B00" />
          </g>
        )}

        {/* Screen */}
        <rect x="34" y="28" width="292" height="664" rx="42" fill={`url(#${screenId})`} />
        <circle cx="180" cy="52" r="5" fill="#2b2e35" />
        <g opacity="0.85">
          <rect x="52" y="90" width="60" height="60" rx="16" fill="#22242b" />
          <rect x="122" y="90" width="60" height="60" rx="16" fill="#22242b" />
          <rect x="192" y="90" width="60" height="60" rx="16" fill="#22242b" />
          <rect x="52" y="160" width="60" height="60" rx="16" fill="#22242b" />
          <rect x="122" y="160" width="60" height="60" rx="16" fill="#22242b" />
          <rect x="192" y="160" width="60" height="60" rx="16" fill="#22242b" />
        </g>
        <rect x="60" y="560" width="240" height="6" rx="3" fill="#2b2e35" />
      </g>

      {/* Camera module + Monster Halo ring */}
      <rect x="220" y="40" width="96" height="150" rx="28" fill={variant === 'black' ? '#0c0d10' : '#1c1e23'} />
      <circle cx="268" cy="86" r="46" fill={`url(#${glowId})`} />
      <circle className="halo-ring" cx="268" cy="86" r="34" fill="none" stroke={palette.accent} strokeWidth="3" />
      <circle cx="268" cy="86" r="20" fill="#0b0c0f" stroke="#33363d" strokeWidth="2" />
      <circle cx="240" cy="140" r="16" fill="#0b0c0f" stroke="#33363d" strokeWidth="2" />
      <circle cx="296" cy="140" r="16" fill="#0b0c0f" stroke="#33363d" strokeWidth="2" />
      <circle cx="268" cy="164" r="12" fill="#0b0c0f" stroke="#33363d" strokeWidth="2" />

      {/* Side buttons */}
      <rect x="8" y="230" width="6" height="70" rx="3" fill="#3a3d44" />
      <rect x="346" y="200" width="6" height="46" rx="3" fill="#3a3d44" />
      <rect x="346" y="256" width="6" height="46" rx="3" fill="#3a3d44" />
    </svg>
  );
}
