function Logo({ className = "w-48 h-56" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 340"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <style>
          {`
            .logo-text { font-family: Arial, Helvetica, sans-serif; font-weight: 900; }
            .logo-subtext { font-family: Arial, Helvetica, sans-serif; font-weight: 400; }
          `}
        </style>
      </defs>

      <g id="hammer-top">
        <rect x="110" y="20" width="8" height="35" fill="#000" />
        <path d="M 85 18 Q 120 8 150 20 L 145 25 Q 115 15 90 22 Z" fill="#000" />
      </g>

      <g id="spray-bottle-left">
        <rect x="35" y="70" width="18" height="50" rx="2" fill="#000" />
        <rect x="28" y="62" width="32" height="12" rx="3" fill="#000" />

        <circle cx="25" cy="82" r="6" fill="#000" />
        <path d="M 20 82 L 10 70 M 22 88 L 8 78 M 24 94 L 10 86 M 26 100 L 12 92" stroke="#000" strokeWidth="2" strokeLinecap="round" />

        <path d="M 44 85 L 55 75 L 48 65" fill="#000" />
      </g>

      <g id="feather-duster">
        <rect x="135" y="48" width="10" height="55" fill="#000" />
        <path d="M 125 103 L 135 95 L 145 103 L 155 95 L 150 110 L 140 105 L 130 110 Z" fill="#000" />
        <path d="M 125 98 L 130 108 M 135 100 L 140 112 M 145 98 L 150 108 M 155 100 L 160 110" stroke="#000" strokeWidth="1.5" />
      </g>

      <g id="spray-bottle-right">
        <rect x="227" y="70" width="18" height="50" rx="2" fill="#000" />
        <rect x="220" y="62" width="32" height="12" rx="3" fill="#000" />

        <circle cx="255" cy="82" r="6" fill="#000" />
        <path d="M 260 82 L 270 70 M 258 88 L 272 78 M 256 94 L 270 86 M 254 100 L 268 92" stroke="#000" strokeWidth="2" strokeLinecap="round" />

        <path d="M 236 85 L 225 75 L 232 65" fill="#000" />
      </g>

      <g id="bucket-and-banner">
        <path d="M 70 125 L 60 150 L 220 150 L 210 125 Z" fill="#000" />
        <path d="M 65 120 L 215 120 Q 220 118 220 115 L 60 115 Q 60 118 65 120" fill="#000" />

        <path d="M 70 150 Q 70 170 140 180 Q 210 170 210 150" fill="#0052CC" stroke="#000" strokeWidth="3" />
      </g>

      <g id="text">
        <text
          x="140"
          y="225"
          textAnchor="middle"
          fontSize="48"
          fontWeight="900"
          fill="#000"
          className="logo-text"
          letterSpacing="-1"
        >
          QUEEN DEE
        </text>

        <line x1="70" y1="238" x2="100" y2="238" stroke="#000" strokeWidth="1.5" />
        <line x1="180" y1="238" x2="210" y2="238" stroke="#000" strokeWidth="1.5" />

        <text
          x="140"
          y="265"
          textAnchor="middle"
          fontSize="16"
          fill="#000"
          className="logo-subtext"
          letterSpacing="3"
        >
          Services
        </text>
      </g>
    </svg>
  );
}

export default Logo;
