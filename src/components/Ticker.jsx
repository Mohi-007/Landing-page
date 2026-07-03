import React from 'react';

const STATS = [
  '0–100% IN 21 MIN',
  '144Hz LTPO AMOLED',
  '6500mm² VAPOR CHAMBER',
  '50MP OIS · 3x PERISCOPE',
  'IP68 + IP69 RATED',
  '99.8% FRAME STABILITY',
  '16GB + 1TB STORAGE',
  'MONSTER HALO LIGHT',
];

export default function Ticker() {
  // Duplicate the list so the CSS marquee loop is seamless
  const items = [...STATS, ...STATS];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item}
            <span className="ticker-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
