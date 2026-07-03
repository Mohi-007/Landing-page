import React, { useState } from 'react';
import { SPEC_TABS } from '../data/specs';

export default function SpecTabs() {
  const [activeId, setActiveId] = useState(SPEC_TABS[0].id);
  const active = SPEC_TABS.find((tab) => tab.id === activeId);

  return (
    <section id="specs" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-mono">// Telemetry</span>
          <h2>Specs that hold up mid-match</h2>
        </div>

        <div className="tabs" role="tablist" aria-label="Specification categories">
          {SPEC_TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={tab.id === activeId}
              className={`tab-btn ${tab.id === activeId ? 'is-active' : ''}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* key={activeId} re-triggers the fade-up animation on every tab switch */}
        <div className="spec-grid" key={activeId} role="tabpanel">
          {active.items.map((item) => (
            <div className="spec-card" key={item.label}>
              <div className="spec-card-top">
                <span className="spec-label">{item.label}</span>
                <span className="spec-hint">{item.hint}</span>
              </div>
              <div className="spec-value">{item.value}</div>
              <div className="spec-gauge">
                <div className="spec-gauge-fill" style={{ width: `${item.fill}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
