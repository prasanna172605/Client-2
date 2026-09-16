import React from 'react';
import { Cpu, FileCheck } from 'lucide-react';
import { codesAndStandards } from '../data/contentData';

export default function StandardsBar() {
  const software = [
    { name: "Tekla Structures", role: "3D BIM & Concrete Detailing" },
    { name: "RebarCAD", role: "Automated BBS & Bar Lists" },
    { name: "AutoCAD", role: "2D Engineering & Plans" },
    { name: "Bluebeam Revu", role: "Precision Quantity Take-Off" },
    { name: "Navisworks", role: "Clash Detection & Erection Phasing" },
    { name: "ASA Rebar", role: "Production Shear Line Integration" }
  ];

  return (
    <section id="standards" className="standards-section">
      <div className="container">
        {/* Section Header */}
        <div className="center-header">
          <div className="section-kicker">ENGINEERING STANDARDS & SOFTWARE</div>
          <h2 className="section-title">
            Codes & Compliance<span className="dot">.</span>
          </h2>
          <p className="section-subtitle">
            Our engineering deliverables conform strictly to local, regional, and international building codes, ensuring zero regulatory or structural friction during fabrication and inspection.
          </p>
        </div>

        {/* Codes Grid */}
        <div className="codes-grid">
          {codesAndStandards.map((item, index) => (
            <div key={index} className="code-card">
              <div className="code-badge">
                <FileCheck size={18} className="code-icon" />
                <span className="code-title">{item.code}</span>
              </div>
              <p className="code-desc">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Software Stack Strip */}
        <div className="software-stack-container">
          <div className="software-header">
            <Cpu size={20} className="text-yellow" />
            <span>State-of-the-Art Software Stack We Utilize Daily:</span>
          </div>
          <div className="software-grid">
            {software.map((sw, i) => (
              <div key={i} className="software-item">
                <span className="sw-name">{sw.name}</span>
                <span className="sw-role">{sw.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
