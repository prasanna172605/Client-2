import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyDetails } from '../data/contentData';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="about" className="about-section overflow-hidden">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual & Experience Badge - Slides from Left */}
          <div className="about-image-column reveal-left">
            <div className="about-image-wrapper">
              <div className="image-zoom-frame">
                <img 
                  src={`${import.meta.env.BASE_URL}images/service-concrete-estimation.jpg`} 
                  alt="Rebar Detailing & Engineering Team at Work" 
                  className="about-main-img img-hover-zoom"
                />
              </div>
              
              {/* Floating Construction Yellow Badge */}
              <div className="experience-badge float-slow">
                <span className="badge-years counter-pulse">10+</span>
                <span className="badge-text">Years of Engineering Excellence</span>
              </div>

              {/* Secondary Floating Metric Card */}
              <div className="floating-metric-card float-slow float-delay">
                <ShieldCheck size={28} className="metric-icon pulse-icon" />
                <div>
                  <h4 className="metric-title">99.9% Accuracy</h4>
                  <p className="metric-desc">ACI & CRSI Compliant Detailing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content - Slides from Right */}
          <div className="about-content-column reveal-right">
            <div className="section-kicker">
              <span className="animated-line"></span>
              <span>WHO WE ARE</span>
            </div>
            
            <h2 className="section-title">
              About Us<span className="dot glow-dot">.</span>
            </h2>

            <p className="about-lead">
              <strong>{companyDetails.name}</strong> is a specialist engineering service & solutions business enterprise servicing customers throughout quite a number of engineering segments helping enhance their engineering efficiency, assist their global footprint, and enhance their competitiveness.
            </p>

            <p>
              Leveraging technology, domain knowledge, & our robust work planning methods to ensure an effective global delivery model for engineering services projects, we have emerged as a partner-of-choice for leading global structural fabricators and general contractors. Our engineering teams seamlessly combine into our customer’s in-house engineering environment and act as a digital extension of their engineering organization.
            </p>

            <p>
              At <strong>{companyDetails.name}</strong>, we utilize the latest computer-aided software (Tekla Structures, RebarCAD, AutoCAD) to develop accurate and comprehensive placing plans with required sections. Our detailers pride themselves in accuracy and adherence to project schedules. Once plans are approved, the cutting and bending details are directly transmitted electronically to production equipment, eliminating data entry errors and speeding up fabrication cycles.
            </p>

            {/* Feature Points with Interactive Hover Effect */}
            <div className="about-features-list">
              <div className="feature-item hover-shift">
                <div className="check-icon-circle">
                  <Check size={16} />
                </div>
                <span>Direct electronic export of BBS to shear lines (ASA / BVBS)</span>
              </div>
              <div className="feature-item hover-shift">
                <div className="check-icon-circle">
                  <Check size={16} />
                </div>
                <span>Strict adherence to ACI 318, CRSI, ASTM & BS 8666 standards</span>
              </div>
              <div className="feature-item hover-shift">
                <div className="check-icon-circle">
                  <Check size={16} />
                </div>
                <span>Fast revision turnaround & dedicated jobsite support</span>
              </div>
              <div className="feature-item hover-shift">
                <div className="check-icon-circle">
                  <Check size={16} />
                </div>
                <span>Global delivery model servicing USA, Canada, Europe & Middle East</span>
              </div>
            </div>

            {/* Quick Stats Grid with Zoom In on Reveal */}
            <div className="about-stats-grid reveal-zoom">
              <div className="stat-box hover-lift">
                <div className="stat-number text-gradient-yellow">{companyDetails.projectsCompleted}</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-box hover-lift">
                <div className="stat-number text-gradient-yellow">{companyDetails.rebarTonnage}</div>
                <div className="stat-label">Tons Detailed & Estimated</div>
              </div>
              <div className="stat-box hover-lift">
                <div className="stat-number text-gradient-yellow">100%</div>
                <div className="stat-label">On-Time Schedule Adherence</div>
              </div>
            </div>

            {/* CTA Row */}
            <div className="about-cta-row">
              <button onClick={onOpenQuote} className="btn-yellow btn-shimmer">
                <span>REQUEST A QUOTE</span>
                <ArrowRight size={16} className="btn-arrow" />
              </button>
              <div className="contact-callout">
                <span className="callout-sub">Have a tender deadline?</span>
                <a href={`tel:${companyDetails.phoneUSA}`} className="callout-tel hover-underline">
                  {companyDetails.phoneDisplay}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
