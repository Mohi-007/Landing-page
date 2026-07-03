import React from 'react';
import PhoneSVG from './PhoneSVG';
import { COLORWAYS } from '../data/colorways';

export default function Colorways({ activeColor, onChange }) {
  return (
    <section id="design" className="section section-alt">
      <div className="container design-grid">
        <div className="design-visual">
          <div className="design-glow" aria-hidden="true" />
          <PhoneSVG variant={activeColor} idSuffix="design" className="design-phone" />
        </div>

        <div className="design-copy">
          <span className="eyebrow eyebrow-mono">// Finish</span>
          <h2>Three builds. One monster.</h2>
          <p className="section-sub">
            Every finish carries the Monster Halo ring — a light signature that pulses for
            charging, notifications, and in-game kills.
          </p>

          <div className="swatch-list" role="radiogroup" aria-label="Choose a colorway">
            {COLORWAYS.map((c) => (
              <button
                key={c.id}
                role="radio"
                aria-checked={activeColor === c.id}
                className={`swatch-btn ${activeColor === c.id ? 'is-active' : ''}`}
                onClick={() => onChange(c.id)}
              >
                <span className="swatch-preview" style={{ background: c.swatch }} />
                <span className="swatch-text">
                  <span className="swatch-name">{c.name}</span>
                  <span className="swatch-tagline">{c.tagline}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
