import React from 'react';
import PhoneSVG from './PhoneSVG';

export default function Hero({ activeColor }) {
  const glowColor = activeColor === 'cyan' ? '#2C6BFF' : '#FF5B00';

  return (
    <section id="overview" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner container">
        <div className="hero-copy">
          <span className="eyebrow">Monster Halo™ · New Arrival</span>

          <h1 className="hero-title">
            ZERO LAG.
            <br />
            <span className="accent-text">ALL THROTTLE.</span>
          </h1>

          <p className="hero-sub">
            The iQOO 15R pairs a Snapdragon® 8 Elite Gen 5 with a 6500mm² vapor chamber
            and a 144Hz LTPO display — built so every frame lands exactly when you need it.
          </p>

          <div className="hero-actions">
            <a href="#reserve" className="btn btn-primary">
              Reserve Now
            </a>
            <a href="#specs" className="btn btn-ghost">
              Explore Specs
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>8 Elite Gen 5</strong>
              <span>Snapdragon Flagship</span>
            </div>
            <div>
              <strong>144Hz</strong>
              <span>LTPO AMOLED</span>
            </div>
            <div>
              <strong>7000mAh</strong>
              <span>120W FlashCharge</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" style={{ '--glow-color': glowColor }} aria-hidden="true" />
          <PhoneSVG variant={activeColor} idSuffix="hero" className="hero-phone" />
        </div>
      </div>
    </section>
  );
}
