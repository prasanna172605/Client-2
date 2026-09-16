import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/contentData';
import { motion, AnimatePresence } from 'motion/react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="testimonials-section py-24 bg-slate-900 overflow-hidden relative">
      <div className="container relative z-10">
        <div className="center-header">
          <div className="section-kicker">CLIENT SATISFACTION</div>
          <h2 className="section-title text-white">
            Testimonials<span className="dot">.</span>
          </h2>
          <p className="section-subtitle text-slate-300">
            Read what general contractors, structural engineers, and steel fabricators say about our accuracy and adherence to deadlines.
          </p>
        </div>

        {/* Framer Motion Carousel */}
        <div className="relative max-w-4xl mx-auto min-h-[380px] lg:min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="testimonial-card !h-full flex flex-col justify-center items-center text-center bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 lg:p-14 shadow-2xl">
                <Quote size={40} className="text-yellow-500 mb-6 opacity-80" />
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f5a623" color="#f5a623" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed italic mb-8">
                  “{testimonialsData[activeIndex].quote}”
                </p>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 text-slate-900 flex items-center justify-center font-bold text-xl">
                    {testimonialsData[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonialsData[activeIndex].author}</h4>
                    <p className="text-yellow-500 text-sm">{testimonialsData[activeIndex].role} &bull; {testimonialsData[activeIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-2 md:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 hover:scale-110 transition-all z-20 shadow-lg cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-2 md:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 hover:scale-110 transition-all z-20 shadow-lg cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Trust Banner */}
        <div className="trust-metrics-strip mt-20">
          <div className="trust-item">
            <span className="trust-number">99.8%</span>
            <span className="trust-text">Client Retention Rate</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-number">24 Hours</span>
            <span className="trust-text">Rapid RFQ Response</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-number">100%</span>
            <span className="trust-text">Schedule Adherence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
