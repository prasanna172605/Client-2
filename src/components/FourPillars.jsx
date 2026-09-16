import React from 'react';
import { Target, Award, Leaf, ShieldCheck } from 'lucide-react';
import { fourPillars } from '../data/contentData';

const icons = [Target, Award, Leaf, ShieldCheck];

export default function FourPillars() {
  return (
    <section className="four-pillars-section">
      <div className="container">
        <div className="pillars-grid">
          {fourPillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={pillar.number} 
                className={`pillar-card reveal-zoom delay-${idx + 1} card-tilt`}
              >
                <div className="pillar-header">
                  <div className="pillar-number">{pillar.number}</div>
                  <div className="pillar-icon-box">
                    <Icon size={24} className="pillar-icon" />
                  </div>
                </div>
                <h3 className="pillar-title">
                  {pillar.title}
                  <span className="dot glow-dot">.</span>
                </h3>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-accent-bar"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
