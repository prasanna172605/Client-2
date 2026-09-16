import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-zoom, .reveal-up');
    
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      targets.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optional: uncomment if you only want it to animate once
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
