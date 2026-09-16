import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { companyDetails, servicesData } from '../data/contentData';
import { WhatsappIcon } from './SocialIcons';

export default function Footer({ onOpenQuote }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      {/* Upper Footer Columns */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Col 1: Brand & Overview */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
                <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="#f5a623" />
                <path d="M10 16L30 16M10 20L30 20M10 24L30 24" stroke="#181a1d" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M15 12L15 28M25 12L25 28" stroke="#181a1d" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="footer-logo-text">
                <span className="part1">ACCUQUANT</span>
                <span className="part2">SERVICES</span>
              </div>
            </div>

            <p className="footer-about-text">
              The one stop destination for state-of-the-art Rebar detailing and estimation services. We serve structural engineers, fabricators, general contractors and designers with precision and dependability.
            </p>

            <div className="footer-social-links">
              <a 
                href={`https://wa.me/${companyDetails.phoneUSA.replace(/[^+\d]/g, '')}`} 
                className="footer-social-icon" 
                aria-label="WhatsApp"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links<span className="dot">.</span></h4>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollTo('home')} className="footer-link"><ArrowRight size={12} className="link-arrow" /> Home</button></li>
              <li><button onClick={() => scrollTo('about')} className="footer-link"><ArrowRight size={12} className="link-arrow" /> About Us</button></li>
              <li><button onClick={() => scrollTo('services')} className="footer-link"><ArrowRight size={12} className="link-arrow" /> Our Services</button></li>
              <li><button onClick={() => scrollTo('projects')} className="footer-link"><ArrowRight size={12} className="link-arrow" /> Featured Projects</button></li>
              <li><button onClick={() => scrollTo('standards')} className="footer-link"><ArrowRight size={12} className="link-arrow" /> Codes & Standards</button></li>
              <li><button onClick={() => scrollTo('testimonials')} className="footer-link"><ArrowRight size={12} className="link-arrow" /> Testimonials</button></li>
              <li><button onClick={() => scrollTo('contact')} className="footer-link"><ArrowRight size={12} className="link-arrow" /> Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Engineering Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services<span className="dot">.</span></h4>
            <ul className="footer-links-list">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button onClick={() => scrollTo('services')} className="footer-link">
                    <ArrowRight size={12} className="link-arrow" /> {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & RFQ Action */}
          <div className="footer-col">
            <h4 className="footer-heading">Get In Touch<span className="dot">.</span></h4>
            <div className="footer-contact-items">
              <div className="contact-line">
                <MapPin size={16} className="contact-icon text-yellow" />
                <span>Trichy, Tamil Nadu, India & US Operations</span>
              </div>
              <div className="contact-line">
                <Phone size={16} className="contact-icon text-yellow" />
                <a href={`tel:${companyDetails.phoneUSA}`}>{companyDetails.phoneDisplay}</a>
              </div>
              <div className="contact-line">
                <Mail size={16} className="contact-icon text-yellow" />
                <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>
              </div>
            </div>

            <div className="footer-cta-box">
              <span className="box-title">Need a Quick Project Estimate?</span>
              <button onClick={onOpenQuote} className="btn-yellow btn-sm">
                <span>REQUEST QUOTE</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>{companyDetails.name}</strong>. All rights reserved. Rebar Detailing & Estimation Specialists.
          </p>
          <div className="bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="sep">&bull;</span>
            <a href="#terms">Terms of Service</a>
            <span className="sep">&bull;</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
