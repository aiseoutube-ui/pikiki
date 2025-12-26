
import React, { useEffect, useRef } from 'react';
import { APPS } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Smartphone, Monitor, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AppShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    gsap.from(cards, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });
  }, []);

  return (
    <section id="apps" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">Ecosistema Digital</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16">Herramientas para el Chef Moderno</h2>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {APPS.map((app) => (
            <div 
              key={app.id} 
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start hover:border-orange-200 transition-colors"
            >
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-3xl mb-8">
                {app.icon}
              </div>
              <div className="flex gap-2 mb-4">
                {app.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{app.name}</h3>
              <p className="text-slate-600 mb-10 flex-grow">
                {app.description}
              </p>
              <button className="flex items-center gap-2 font-bold text-orange-500 group">
                Descubrir <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>
           <div className="text-left relative z-10">
             <h4 className="text-2xl font-bold mb-2">¿Quieres desarrollar con nosotros?</h4>
             <p className="text-slate-400">Accede a nuestra API gratuita para desarrolladores gastronómicos.</p>
           </div>
           <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all whitespace-nowrap relative z-10">
             Documentación API
           </button>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
