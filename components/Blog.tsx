
import React, { useState, useMemo } from 'react';
import { RECIPES } from '../constants';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  
  const allTags = useMemo(() => {
    const tags = new Set<string>(['Todos']);
    RECIPES.forEach(r => r.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredRecipes = useMemo(() => {
    if (filter === 'Todos') return RECIPES;
    return RECIPES.filter(r => r.tags.includes(filter));
  }, [filter]);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">Gastronomía</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Blog de Comidas</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  filter === tag 
                  ? 'bg-orange-500 border-orange-500 text-white' 
                  : 'bg-transparent border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <article 
              key={recipe.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {recipe.tags.map(t => (
                    <span key={t} className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {recipe.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {recipe.cookTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-orange-500 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {recipe.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all"
                >
                  Leer Receta <ArrowRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
