import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: import.meta.env.BASE_URL + 'images/project-500-west.jpg',
    kicker: 'THE ONE STOP DESTINATION',
    title: 'State of the Art Rebar Detailing & Estimation Services',
    subtitle: 'Providing precision shop placing drawings, bar bending schedules, and accurate take-offs for structural engineers, fabricators, and general contractors globally.',
    badge: 'Tekla Structures & RebarCAD 3D Detailing'
  },
  {
    id: 2,
    image: import.meta.env.BASE_URL + 'images/project-atlantic-station.jpg',
    kicker: 'ENGINEERING EFFICIENCY & INTEGRITY',
    title: 'Precision BBS & Automated Cutting Lists to Jobsite',
    subtitle: 'Streamlined digital workflows eliminate data entry errors. Direct electronic transfer of bending data to automated shear lines guarantees millimeter accuracy.',
    badge: '100% Code Adherence: ACI, CRSI, BS 8666'
  },
  {
    id: 3,
    image: import.meta.env.BASE_URL + 'images/service-rebar-detailing.jpg',
    kicker: 'GLOBAL DELIVERY CAPABILITY',
    title: 'Dependable Partner for Tight Construction Schedules',
    subtitle: 'Trusted across the USA, Europe, Middle East, and Asia-Pacific. Fast turnaround, 24/7 technical queries support, and competitive tender takeoffs.',
    badge: '99.9% Accuracy on Over 180,000+ Tons'
  }
];

export default function HeroSlider({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimKey((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (newIndex) => {
    setCurrentSlide(newIndex);
    setAnimKey((prev) => prev + 1);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const slide = slides[currentSlide];

  return (
    <section id="home" className="hero-slider-section">
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`hero-slide ${index === currentSlide ? 'active ken-burns' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        >
          <div className="hero-overlay"></div>
        </div>
      ))}

      {/* Hero Animated Text Content with Zoom & Left/Right Transitions */}
      <div className="container hero-content-wrapper">
        <div className="hero-content" key={animKey}>
          {/* Feature Tag - Slides in from Left */}
          <div className="hero-kicker-badge hero-anim-left">
            <span className="kicker-line animated-line"></span>
            <span className="kicker-text">{slide.kicker}</span>
          </div>

          {/* Main Headline - Zoom In with Bold Punch */}
          <h1 className="hero-title hero-anim-zoom">
            {slide.title}
            <span className="dot glow-dot">.</span>
          </h1>

          {/* Subtitle - Slides in from Left with Delay */}
          <p className="hero-description hero-anim-left delay-1">
            {slide.subtitle}
          </p>

          {/* Feature Pill - Slides in from Right */}
          <div className="hero-pill hero-anim-right delay-2">
            <CheckCircle2 size={16} className="text-yellow pulse-icon" />
            <span>{slide.badge}</span>
          </div>

          {/* Action Buttons - Slide Up with Shimmer */}
          <div className="hero-actions hero-anim-up delay-3">
            <button onClick={onOpenQuote} className="btn-yellow btn-shimmer">
              <span>REQUEST A QUOTE</span>
              <ArrowRight size={16} className="btn-arrow" />
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="btn-outline-light btn-hover-slide"
            >
              <span>OUR SERVICES</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button onClick={prevSlide} className="slider-arrow prev" aria-label="Previous Slide">
        <ChevronLeft size={28} />
      </button>
      <button onClick={nextSlide} className="slider-arrow next" aria-label="Next Slide">
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className={`slider-dot ${i === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
