export function SeoulBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-indigo-950 pointer-events-none select-none"
    >
      {/* Vibrant Multi-Tone Seoul Sunset & Twilight Sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 32%, #db2777 62%, #f97316 86%, #facc15 100%)',
        }}
      />

      {/* Luminous Color Blooms (Cobalt, Magenta, Teal, Tangerine) */}
      <div
        className="absolute -top-24 -left-24 h-[60vh] w-[60vw] opacity-75"
        style={{
          background:
            'radial-gradient(circle at center, rgba(14, 165, 233, 0.7) 0%, rgba(59, 130, 246, 0.25) 45%, transparent 72%)',
        }}
      />
      <div
        className="absolute top-[18%] -right-20 h-[65vh] w-[65vw] opacity-80"
        style={{
          background:
            'radial-gradient(circle at center, rgba(251, 146, 60, 0.85) 0%, rgba(244, 63, 94, 0.45) 48%, transparent 75%)',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-[55vh] w-[65vw] opacity-70"
        style={{
          background:
            'radial-gradient(circle at center, rgba(20, 184, 166, 0.55) 0%, rgba(79, 70, 229, 0.35) 50%, transparent 75%)',
        }}
      />

      {/* Seoul Namsan & Skyline Colorful Architectural Vector Artwork */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="seoul-mountain-far" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4338ca" stopOpacity="0.82" />
            <stop offset="50%" stopColor="#7e22ce" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#be185d" stopOpacity="0.82" />
          </linearGradient>
          <linearGradient id="seoul-mountain-near" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#311042" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#4c0519" stopOpacity="0.94" />
          </linearGradient>
          <linearGradient id="seoul-river" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.86" />
            <stop offset="35%" stopColor="#1d4ed8" stopOpacity="0.84" />
            <stop offset="70%" stopColor="#9333ea" stopOpacity="0.84" />
            <stop offset="100%" stopColor="#e11d48" stopOpacity="0.86" />
          </linearGradient>
          <radialGradient id="tower-beacon" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="1" />
            <stop offset="40%" stopColor="#fb7185" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Crisp Architectural Grid Lines */}
        <g stroke="#ffffff" strokeOpacity="0.09" strokeWidth="1">
          <line x1="0" y1="180" x2="1600" y2="180" />
          <line x1="0" y1="360" x2="1600" y2="360" />
          <line x1="0" y1="540" x2="1600" y2="540" />
          <line x1="320" y1="0" x2="320" y2="900" />
          <line x1="800" y1="0" x2="800" y2="900" />
          <line x1="1280" y1="0" x2="1280" y2="900" />
        </g>

        {/* Bukhansan / Far Mountain Ridge */}
        <path
          d="M0 440 L140 392 L290 420 L460 355 L620 398 L770 330 L940 375 L1120 342 L1290 388 L1450 352 L1600 395 L1600 900 L0 900 Z"
          fill="url(#seoul-mountain-far)"
        />

        {/* Namsan Ridge */}
        <path
          d="M0 530 Q260 495 480 465 T920 395 Q1160 378 1340 445 T1600 485 L1600 900 L0 900 Z"
          fill="url(#seoul-mountain-near)"
        />

        {/* N Seoul Tower Silhouette with Illuminated Light Ring */}
        <g transform="translate(1038, 175)">
          <circle cx="12" cy="18" r="56" fill="url(#tower-beacon)" />
          <rect x="11" y="16" width="2" height="58" fill="#fef08a" fillOpacity="0.95" />
          <rect x="9" y="72" width="6" height="16" fill="#f9a8d4" fillOpacity="0.9" />
          <path d="M-2 88 L26 88 L22 104 L2 104 Z" fill="#1e1b4b" />
          <rect x="-4" y="92" width="32" height="4" fill="#38bdf8" />
          <rect x="-3" y="97" width="30" height="3" fill="#fb7185" />
          <rect x="7" y="104" width="10" height="118" fill="#1e1b4b" />
          <rect x="0" y="205" width="24" height="24" fill="#0f172a" />
        </g>

        {/* Seoul Urban Skyline Silhouette */}
        <g fill="#130f2d" stroke="#a5b4fc" strokeOpacity="0.28" strokeWidth="1">
          <rect x="40" y="455" width="68" height="190" />
          <rect x="122" y="415" width="54" height="230" />
          <rect x="192" y="470" width="84" height="175" />
          <rect x="295" y="435" width="62" height="210" />
          <rect x="372" y="490" width="90" height="155" />
          <rect x="480" y="448" width="52" height="197" />
          <rect x="548" y="405" width="70" height="240" />
          <rect x="635" y="468" width="88" height="177" />
          <rect x="742" y="430" width="58" height="215" />
          <rect x="820" y="478" width="94" height="167" />
          <rect x="936" y="446" width="64" height="199" />
          <rect x="1115" y="455" width="76" height="190" />
          <rect x="1210" y="412" width="58" height="233" />
          <rect x="1285" y="464" width="86" height="181" />
          {/* Lotte World Tower Spire */}
          <path d="M1412 245 L1432 645 L1392 645 Z" fill="#1e1b4b" />
          <rect x="1460" y="440" width="95" height="205" />
        </g>

        {/* Colorful City Window & Neon Signage Accents */}
        <g fillOpacity="0.85">
          <rect x="134" y="432" width="12" height="3" fill="#38bdf8" />
          <rect x="134" y="442" width="18" height="3" fill="#facc15" />
          <rect x="150" y="465" width="10" height="3" fill="#fb7185" />
          <rect x="308" y="452" width="14" height="3" fill="#34d399" />
          <rect x="564" y="424" width="16" height="3" fill="#fde047" />
          <rect x="564" y="436" width="24" height="3" fill="#38bdf8" />
          <rect x="582" y="458" width="14" height="3" fill="#fb7185" />
          <rect x="754" y="448" width="14" height="3" fill="#a78bfa" />
          <rect x="1224" y="430" width="14" height="3" fill="#fb923c" />
          <rect x="1224" y="442" width="22" height="3" fill="#34d399" />
          <rect x="1409" y="280" width="6" height="3" fill="#fde047" />
          <rect x="1408" y="315" width="8" height="3" fill="#38bdf8" />
        </g>

        {/* Colorful Han River Reflections */}
        <rect x="0" y="640" width="1600" height="260" fill="url(#seoul-river)" />
        <line x1="0" y1="640" x2="1600" y2="640" stroke="#fde047" strokeOpacity="0.45" strokeWidth="1.5" />

        <g strokeWidth="2.5" strokeOpacity="0.45">
          <line x1="180" y1="668" x2="430" y2="668" stroke="#38bdf8" />
          <line x1="510" y1="705" x2="720" y2="705" stroke="#fde047" />
          <line x1="680" y1="684" x2="980" y2="684" stroke="#fb7185" />
          <line x1="1080" y1="666" x2="1360" y2="666" stroke="#34d399" />
          <line x1="1190" y1="712" x2="1470" y2="712" stroke="#fb923c" />
        </g>
      </svg>

      {/* Light Editorial Scrim: Preserves Vivid Color While Protecting White Text Legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(15, 12, 41, 0.34) 0%, rgba(15, 12, 41, 0.24) 48%, rgba(15, 12, 41, 0.42) 100%)',
        }}
      />
    </div>
  );
}
