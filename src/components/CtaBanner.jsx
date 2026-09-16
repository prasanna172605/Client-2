import React from 'react';
import { Phone, FileCheck } from 'lucide-react';
import { companyDetails } from '../data/contentData';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="cta-ribbon-section overflow-hidden">
      <div className="container">
        <div className="cta-ribbon-content">
          <div className="cta-left reveal-left">
            <div className="cta-kicker">
              <span className="animated-line"></span>
              <span>INTEGRITY & COMMITMENT</span>
            </div>
            <h2 className="cta-heading">
              Don’t Hesitate To Ask<span className="dot glow-dot">.</span>
            </h2>
            <p className="cta-sub">
              Have an urgent rebar placing project, bid tender takeoff, or 3D BIM coordination requirement? Our structural detailing engineers are ready to assist.
            </p>
          </div>

          <div className="cta-right reveal-right">
            <button onClick={onOpenQuote} className="btn-dark-cta btn-shimmer">
              <FileCheck size={18} />
              <span>REQUEST A QUOTE</span>
            </button>
            <a href={`tel:${companyDetails.phoneUSA}`} className="cta-phone-link hover-lift">
              <div className="phone-icon-round pulse-icon">
                <Phone size={18} />
              </div>
              <div className="phone-text-group">
                <span className="phone-caption">TOLL FREE / 24/7 SUPPORT</span>
                <span className="phone-number">{companyDetails.phoneUSA}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
