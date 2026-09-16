import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/contentData';

export default function ServicesSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentService = servicesData[activeTab];

  return (
    <section id="services" className="services-section overflow-hidden">
      <div className="container">
        {/* Section Header - Reveal Zoom */}
        <div className="center-header reveal-zoom">
          <div className="section-kicker">
            <span className="animated-line"></span>
            <span>WHAT WE DO</span>
          </div>
          <h2 className="section-title">
            Our Services<span className="dot glow-dot">.</span>
          </h2>
          <p className="section-subtitle">
            We deploy modern techniques to its full potential to make an impact on the workflow. We work in close collaboration with our clients and believe in forging a long-term relationship with them.
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="services-tabs-container reveal-up">
          <div className="services-tabs-list">
            {servicesData.map((service, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`service-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="tab-num">{service.id}</span>
                  <div className="tab-text-group">
                    <span className="tab-title">{service.tabTitle.replace(/^\d+\s*/, '')}</span>
                  </div>
                  <div className="tab-active-indicator"></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Content Panel with Zoom & Right-Slide Keyed Animation */}
        <div className="service-detail-card" key={currentService.id}>
          <div className="service-detail-grid">
            {/* Left: Service Image with Zoom Effect */}
            <div className="service-image-side anim-zoom-in">
              <div className="service-image-container img-zoom-wrapper">
                <img 
                  src={currentService.image} 
                  alt={currentService.title} 
                  className="service-feature-img img-hover-zoom"
                />
                <div className="service-number-badge pulse-subtle">
                  <span>{currentService.id}</span>
                </div>
              </div>

              {/* Software Tools Used */}
              <div className="software-tools-box">
                <span className="tools-label">ENGINEERING TOOLS:</span>
                <div className="tools-badges">
                  {currentService.software.map((tool, idx) => (
                    <span key={idx} className="tool-pill tool-hover-lift">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Service Details & Scope - Slides from Right */}
            <div className="service-content-side anim-slide-right">
              <div className="service-kicker-tag">SERVICE {currentService.id}</div>
              <h3 className="service-main-heading">
                {currentService.title}
                <span className="dot glow-dot">.</span>
              </h3>
              
              <p className="service-lead-text">{currentService.shortDesc}</p>
              <p className="service-full-text">{currentService.fullDesc}</p>

              <div className="service-deliverables-block">
                <h4 className="deliverables-heading">Key Deliverables & Specifications:</h4>
                <ul className="deliverables-list">
                  {currentService.deliverables.map((item, idx) => (
                    <li key={idx} className="deliverable-item hover-shift">
                      <div className="check-box">
                        <Check size={14} className="check-icon" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-action-row">
                <button onClick={onOpenQuote} className="btn-yellow btn-shimmer">
                  <span>INQUIRE FOR {currentService.title.toUpperCase()}</span>
                  <ArrowRight size={16} className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Card Mini Grid with Staggered Hover Zoom */}
        <div className="services-mini-cards-grid reveal-up">
          {servicesData.map((item, index) => (
            <div 
              key={item.id} 
              className={`mini-service-card card-zoom-effect ${index === activeTab ? 'highlighted' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="mini-card-top">
                <span className="mini-card-num">{item.id}</span>
                <ArrowRight size={16} className="mini-card-arrow" />
              </div>
              <h4 className="mini-card-title">{item.title}</h4>
              <p className="mini-card-desc">{item.shortDesc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
