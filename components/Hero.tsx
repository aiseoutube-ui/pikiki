
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Elements start scattered
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      }
    });

    elementsRef.current.forEach((el, i) => {
      if (!el) return;
      
      // Random initial scatter
      const initialX = (i % 2 === 0 ? -200 : 200) * (i + 1);
      const initialY = (i % 3 === 0 ? -150 : 150) * (i + 1);
      
      gsap.set(el, { x: initialX, y: initialY, rotation: Math.random() * 360, opacity: 0.6 });

      // Move to center "fusion"
      tl.to(el, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, 0);
    });

    // Animate the text as well
    tl.to(".hero-title", {
      scale: 1.1,
      opacity: 1,
      duration: 1,
    }, 0.2);

  }, []);

  const items = [
    { color: '#f97316', path: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" }, // Arrow/Knife
    { color: '#fbbf24', path: "M12 2v20M2 12h20" }, // Simple cross
    { color: '#10b981', path: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" }, // Plate
    { color: '#ef4444', path: "M5 3v18l14-9z" }, // Flame bit
  ];

  return (
    <section 
      id="inicio"
      ref={containerRef} 
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none"></div>
      
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      {/* Floating SVG Elements */}
      {items.map((item, i) => (
        <svg
          key={i}
          // Wrap assignment in braces to ensure the callback returns void as required by React types
          ref={(el) => { elementsRef.current[i] = el; }}
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke={item.color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute z-10"
        >
          <path d={item.path} />
        </svg>
      ))}

      <div className="z-20 text-center px-6">
        <h1 className="hero-title opacity-0 text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
          Cocinamos el <br />
          <span className="text-orange-500 italic">Futuro.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Explora la intersección entre la gastronomía creativa y el desarrollo de software de alto rendimiento.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#blog" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all shadow-2xl">
            Ver Recetas
          </a>
          <a href="#videos" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
            Canal de Vídeo
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>
  );
};

export default Hero;
