
import React from 'react';
import { ChefHat, Twitter, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ChefHat className="text-orange-500" size={32} />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Cusi<span className="text-orange-500">Cusa</span>
              </span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Redefiniendo el arte de cocinar a través de la lente de la ingeniería y la creatividad digital.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contenido</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Recetas Gourmet</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Vídeos Tutoriales</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Tech Reviews</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Entrevistas</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Empresa</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Contacto</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Legal & Privacidad</a></li>
              <li><a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Newsletter</h5>
            <p className="text-slate-500 mb-6 text-sm">Suscríbete para recibir dosis semanales de código y sabor.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
              <button className="bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-all">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} CusiCusa Project. Hecho con ❤️ por amantes de la cocina y el código.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
             <a href="#" className="hover:text-slate-900 transition-colors">Privacidad</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
