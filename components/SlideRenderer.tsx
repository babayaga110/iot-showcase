
import React from 'react';
import { SlideData } from '../types';
import IconRenderer from './IconRenderer';

interface SlideRendererProps {
  slide: SlideData;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  switch (slide.type) {
    case 'title':
      return (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
             <IconRenderer name="Network" className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold font-display leading-tight tracking-tight">
            <span className="gradient-text">{slide.title}</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-slate-400 max-w-2xl mx-auto">
            {slide.subtitle}
          </p>
          <div className="mt-12 flex space-x-4">
            <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
            <div className="h-1 w-24 bg-purple-500 rounded-full"></div>
            <div className="h-1 w-24 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
      );

    case 'intro':
      return (
        <div className="h-full flex flex-col md:flex-row items-center gap-12 p-8">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white mb-8">
              {slide.title}
            </h2>
            <div className="space-y-4">
              {slide.content?.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className="mt-1 p-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors">
                    <IconRenderer name="CheckCircle" className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-xl md:text-2xl text-slate-300 font-light group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="aspect-square rounded-3xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-30"></div>
                <img 
                  src={`https://picsum.photos/seed/${slide.id}/800/800`} 
                  alt="Background visual" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <IconRenderer name="Zap" className="w-32 h-32 text-blue-500/40 relative z-10" />
             </div>
          </div>
        </div>
      );

    case 'game':
      const game = slide.gameDetails;
      if (!game) return null;
      return (
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-12 p-6 md:p-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center space-x-4">
               <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-500/20">
                 <IconRenderer name={game.iconName} className="w-10 h-10 text-white" />
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-display text-white">{slide.title}</h2>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl space-y-4 border-l-4 border-l-blue-500">
               <div className="flex items-center space-x-2 text-blue-400 font-medium tracking-wide">
                 <IconRenderer name="Timer" className="w-5 h-5" />
                 <span>DURATION: {game.duration}</span>
               </div>
               <ul className="space-y-3">
                 {game.howItWorks.map((step, idx) => (
                   <li key={idx} className="flex items-center space-x-3 text-lg text-slate-300">
                     <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                     <span>{step}</span>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border-t-2 border-t-purple-500/30">
                 <p className="text-xs uppercase tracking-widest text-purple-400 mb-2 font-semibold">Technology</p>
                 <p className="text-sm md:text-base text-slate-200">{game.technology}</p>
              </div>
              <div className="glass-panel p-4 rounded-xl border-t-2 border-t-emerald-500/30">
                 <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2 font-semibold">Corporate Benefit</p>
                 <p className="text-sm md:text-base text-slate-200">{game.benefit}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
               <div className="relative glass-panel rounded-3xl p-4 w-80 lg:w-96 aspect-[4/5] overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${slide.title}/600/800`} 
                    alt={slide.title} 
                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="glass-panel p-3 rounded-lg text-center backdrop-blur-md">
                        <p className="text-sm font-medium text-white">Live AI Feedback Engine Enabled</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      );

    case 'tech':
      return (
        <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold font-display gradient-text">{slide.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {slide.content?.map((tech, idx) => {
              const [name, desc] = tech.split(':');
              return (
                <div key={idx} className="glass-panel p-8 rounded-3xl hover:border-blue-500/50 transition-all group">
                   <div className="mb-4 inline-block p-3 rounded-2xl bg-slate-800 group-hover:bg-blue-600/20 transition-colors">
                     <IconRenderer name="Cpu" className="w-8 h-8 text-blue-400" />
                   </div>
                   <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
                   <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-slate-500 text-lg max-w-2xl font-light italic">
            "We integrate high-frequency sensors with low-latency AI processing to ensure a seamless competitive experience."
          </p>
        </div>
      );

    case 'closing':
      return (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20"></div>
            <h2 className="text-5xl md:text-8xl font-black font-display text-white relative z-10 max-w-4xl mx-auto leading-tight">
              {slide.title}
            </h2>
          </div>
          <p className="text-xl md:text-3xl text-slate-400 font-light tracking-wide max-w-2xl">
            {slide.subtitle}
          </p>
          <button 
            className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-bold text-xl shadow-2xl shadow-blue-500/30 hover:scale-105 transition-transform"
            onClick={() => window.location.reload()}
          >
            Request Full Catalogue
          </button>
          <div className="flex space-x-8 text-slate-500 font-medium">
             <div className="flex items-center space-x-2">
                <IconRenderer name="Timer" className="w-5 h-5" />
                <span>24/7 Support</span>
             </div>
             <div className="flex items-center space-x-2">
                <IconRenderer name="Activity" className="w-5 h-5" />
                <span>Global Deployment</span>
             </div>
          </div>
        </div>
      );

    default:
      return <div>Slide Type Not Found</div>;
  }
};

export default SlideRenderer;
