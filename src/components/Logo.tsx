function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            .logo-text { font-family: Arial, sans-serif; font-weight: bold; }
            .logo-subtext { font-family: Arial, sans-serif; font-size: 14px; letter-spacing: 2px; }
          `}
        </style>
      </defs>

      <g id="cleaning-tools">
        <g id="spray-bottle-left">
          <rect x="25" y="55" width="12" height="35" fill="#1a1a1a" />
          <rect x="20" y="50" width="22" height="8" fill="#1a1a1a" rx="2" />
          <ellipse cx="48" cy="65" rx="8" ry="5" fill="#1a1a1a" />
          <path
            d="M48 70 L42 85 L48 90 L54 85 Z"
            fill="#1a1a1a"
          />
          <line x1="52" y1="72" x2="65" y2="60" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="54" y1="75" x2="68" y2="62" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="56" y1="78" x2="70" y2="64" stroke="#1a1a1a" strokeWidth="1.5" />
        </g>

        <g id="broom">
          <rect x="94" y="35" width="6" height="50" fill="#1a1a1a" rx="3" />
          <path
            d="M 90 85 Q 94 95 98 85 Q 100 80 98 75 Q 96 72 94 75 Q 92 78 90 85"
            fill="#1a1a1a"
          />
          <rect x="92" y="78" width="4" height="15" fill="#1a1a1a" />
          <rect x="98" y="78" width="4" height="15" fill="#1a1a1a" />
        </g>

        <g id="spray-bottle-right">
          <rect x="163" y="55" width="12" height="35" fill="#1a1a1a" />
          <rect x="158" y="50" width="22" height="8" fill="#1a1a1a" rx="2" />
          <ellipse cx="152" cy="65" rx="8" ry="5" fill="#1a1a1a" />
          <path
            d="M152 70 L146 85 L152 90 L158 85 Z"
            fill="#1a1a1a"
          />
          <line x1="148" y1="72" x2="135" y2="60" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="146" y1="75" x2="132" y2="62" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="144" y1="78" x2="130" y2="64" stroke="#1a1a1a" strokeWidth="1.5" />
        </g>

        <g id="bucket">
          <path
            d="M 75 80 L 70 100 L 130 100 L 125 80 Z"
            fill="#1a1a1a"
          />
          <path
            d="M 72 78 L 128 78 Q 130 75 128 70 L 74 70 Q 72 75 72 78"
            fill="#1a1a1a"
          />
          <path
            d="M 75 100 Q 75 115 100 120 Q 125 115 125 100"
            fill="#0052cc"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
        </g>
      </g>

      <g id="banner">
        <path
          d="M 40 115 Q 100 125 160 115 Q 160 120 100 130 Q 40 120 40 115"
          fill="#1a1a1a"
        />
        <ellipse cx="100" cy="127" rx="58" ry="8" fill="#0052cc" opacity="0.9" />
      </g>

      <g id="text">
        <text
          x="100"
          y="160"
          textAnchor="middle"
          fontSize="32"
          fontWeight="bold"
          fill="#1a1a1a"
          className="logo-text"
        >
          QUEEN DEE
        </text>
        <line x1="60" y1="168" x2="75" y2="168" stroke="#0052cc" strokeWidth="1.5" />
        <text
          x="100"
          y="185"
          textAnchor="middle"
          fontSize="12"
          fill="#666"
          className="logo-subtext"
        >
          Services
        </text>
        <line x1="125" y1="168" x2="140" y2="168" stroke="#0052cc" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export default Logo;
