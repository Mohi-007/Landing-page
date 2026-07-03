import React from 'react';
import Reveal from './Reveal';

const ITEMS = [
  {
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    title: 'Built for marathon sessions',
    caption: 'Vapor-chamber cooling keeps clocks steady past the 60-minute mark.',
  },
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    title: 'Engineered, not assembled',
    caption: 'A CNC aluminium frame reinforced around the camera plateau.',
  },
  {
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    title: 'Halo that reacts to you',
    caption: 'Custom lighting cues for calls, charging, and clutch moments.',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-mono">// In the wild</span>
          <h2>Made for the long run</h2>
        </div>

        <div className="gallery-grid">
          {ITEMS.map((item, i) => (
            <Reveal
              as="figure"
              className="gallery-card"
              key={item.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
