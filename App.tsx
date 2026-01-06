
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import SlideRenderer from './components/SlideRenderer';
import AIAssistant from './components/AIAssistant';
import IconRenderer from './components/IconRenderer';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'Home') {
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        setCurrentSlideIndex(SLIDES.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = SLIDES[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="relative h-screen w-screen bg-[#0f172a] text-slate-200 overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 h-full w-full max-w-7xl mx-auto flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full h-full max-h-[85vh] relative group">
          <div className="w-full h-full overflow-hidden transition-all duration-500 ease-in-out">
            <SlideRenderer key={currentSlide.id} slide={currentSlide} />
          </div>

          {/* Navigation Buttons (Appear on hover) */}
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full group-hover:translate-x-4 p-4 rounded-full glass-panel text-slate-400 hover:text-white transition-all disabled:opacity-0"
          >
            <IconRenderer name="Timer" className="w-6 h-6 rotate-90" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full group-hover:-translate-x-4 p-4 rounded-full glass-panel text-slate-400 hover:text-white transition-all disabled:opacity-0"
          >
            <IconRenderer name="Timer" className="w-6 h-6 -rotate-90" />
          </button>
        </div>
      </main>

      {/* Footer Navigation & Progress */}
      <footer className="fixed bottom-0 left-0 w-full z-20 glass-panel border-t border-white/5 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-slate-400">
            <IconRenderer name="Network" className="w-5 h-5 text-blue-500" />
            <span className="text-xs font-bold uppercase tracking-widest hidden md:inline">Smart Outdoor AI & IoT</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-700 hidden md:block"></div>
          <p className="text-sm font-medium text-slate-500">
            Slide {currentSlideIndex + 1} <span className="text-slate-700">/</span> {SLIDES.length}
          </p>
        </div>

        <div className="flex-1 max-w-xl w-full mx-4">
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white disabled:opacity-20 transition-all"
          >
            <IconRenderer name="Timer" className="w-5 h-5 rotate-90" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white disabled:opacity-20 transition-all"
          >
            <IconRenderer name="Timer" className="w-5 h-5 -rotate-90" />
          </button>
          <div className="h-4 w-[1px] bg-slate-700 mx-2"></div>
          <button 
             className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest"
             onClick={() => setCurrentSlideIndex(0)}
          >
            Restart
          </button>
        </div>
      </footer>

      {/* AI Strategist Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
