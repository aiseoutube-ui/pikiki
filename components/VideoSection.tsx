
import React, { useState } from 'react';
import { VIDEOS } from '../constants';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);

  return (
    <section id="videos" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">Streaming</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              CusiCusa.TV <br /> en Directo
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-lg">
              Tutoriales en alta definición, entrevistas con chefs-coders y reviews de gadgets de cocina inteligentes.
            </p>
            <button 
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-4 bg-orange-500 hover:bg-orange-600 p-2 pr-8 rounded-full transition-all shadow-xl shadow-orange-500/20"
            >
              <div className="bg-white text-orange-500 rounded-full p-4 group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={24} />
              </div>
              <span className="font-bold text-lg">Abrir Galería</span>
            </button>
          </div>

          <div className="w-full md:w-1/2 relative">
             <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/5 relative group cursor-pointer" onClick={() => setModalOpen(true)}>
               <img 
                 src={VIDEOS[0].thumbnail} 
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                 alt="Main video"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white text-slate-900 rounded-full p-6 shadow-2xl animate-pulse">
                   <Play fill="currentColor" size={32} />
                 </div>
               </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full -z-10"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Modal / Carousel */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
          <button 
            onClick={() => setModalOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors"
          >
            <X size={40} />
          </button>
          
          <div className="w-full max-w-6xl">
            <div className="mb-12">
               <span className="text-orange-500 font-bold mb-2 block">{activeVideo.category}</span>
               <h3 className="text-3xl md:text-4xl font-bold">{activeVideo.title}</h3>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
              {VIDEOS.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`flex-shrink-0 w-80 snap-start cursor-pointer transition-all rounded-2xl overflow-hidden border-2 ${activeVideo.id === video.id ? 'border-orange-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={video.thumbnail} className="w-full h-48 object-cover" alt={video.title} />
                  <div className="p-4 bg-slate-900">
                    <p className="font-semibold line-clamp-1">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between items-center">
               <div className="flex gap-4">
                 <button className="p-4 border border-white/10 rounded-full hover:bg-white/5"><ChevronLeft /></button>
                 <button className="p-4 border border-white/10 rounded-full hover:bg-white/5"><ChevronRight /></button>
               </div>
               <p className="text-slate-500">3 Vídeos cargados desde CusiCusa Master Database</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
