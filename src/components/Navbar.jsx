import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/contentData';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'clip';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? 'header-sticky' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="brand-logo">
            <div className="logo-symbol">
              <svg viewBox="0 0 40 40" width="34" height="34" fill="none">
                <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="#f5a623" />
                <path d="M10 16L30 16M10 20L30 20M10 24L30 24" stroke="#181a1d" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M15 12L15 28M25 12L25 28" stroke="#181a1d" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-primary">ACCUQUANT</span>
              <span className="logo-secondary">SERVICES</span>
              <span className="logo-tagline">REBAR DETAILING & ESTIMATION</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <button onClick={() => scrollToSection('home')} className="nav-link active">Home</button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('about')} className="nav-link">About Us</button>
              </li>

              {/* Services Dropdown */}
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="nav-link has-dropdown"
                >
                  Services <ChevronDown size={14} className={`dropdown-chevron ${servicesDropdownOpen ? 'rotate' : ''}`} />
                </button>
                
                <ul className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                  {servicesData.map((s) => (
                    <li key={s.id}>
                      <button 
                        onClick={() => scrollToSection('services')}
                        className="dropdown-link"
                      >
                        <span className="dropdown-num">{s.id}</span>
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('standards')} className="nav-link">Standards</button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              </li>
            </ul>
          </nav>

          {/* Right CTA Button & Mobile Toggle */}
          <div className="header-actions">
            <button onClick={onOpenQuote} className="btn-yellow quote-btn d-none-mobile">
              <span>REQUEST A QUOTE</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
            <li className="mobile-services-item">
              <button 
                className="mobile-services-accordion-btn"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Our Services</span>
                <ChevronDown size={16} className={`accordion-chevron ${mobileServicesOpen ? 'rotate' : ''}`} />
              </button>
              
              <div className={`mobile-sub-menu ${mobileServicesOpen ? 'expanded' : ''}`}>
                {servicesData.map((s) => (
                  <button 
                    key={s.id} 
                    onClick={() => scrollToSection('services')} 
                    className="mobile-sub-link"
                  >
                    <span className="sub-num">{s.id}</span>
                    {s.title}
                  </button>
                ))}
              </div>
            </li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('standards')}>Standards</button></li>
            <li><button onClick={() => scrollToSection('testimonials')}>Testimonials</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact Us</button></li>
            <li className="mobile-cta-li">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }} 
                className="btn-yellow w-100 btn-shimmer"
              >
                REQUEST A QUOTE
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}
