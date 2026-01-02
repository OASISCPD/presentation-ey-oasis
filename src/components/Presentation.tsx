import { useState, useEffect } from 'react';
import './Presentation.css';
import NavigationControls from './NavigationControls';
import { clientSlides, staffSlides } from './slidesData';
import SlideRenderer from './SlideRenderer';

type PresentationMode = 'client' | 'staff';

const Presentation = () => {
  const [mode, setMode] = useState<PresentationMode>('client');
  const [currentSlide, setCurrentSlide] = useState(1);
  
  const currentSlides = mode === 'client' ? clientSlides : staffSlides;
  const totalSlides = currentSlides.length;

  const showSlide = (n: number) => {
    if (n > totalSlides) {
      setCurrentSlide(totalSlides);
    } else if (n < 1) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(n);
    }
  };

  const nextSlide = () => showSlide(currentSlide + 1);
  const prevSlide = () => showSlide(currentSlide - 1);

  const handleModeChange = (newMode: PresentationMode) => {
    setMode(newMode);
    setCurrentSlide(1); // Reset a la primera slide al cambiar de modo
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  useEffect(() => {
    const container = document.querySelector('.slide-container');
    if (container) {
      container.scrollTop = 0;
    }
  }, [currentSlide]);

  return (
    <div className="presentation-wrapper">
      {/* Selector de Modo */}
      <div className="mode-selector">
        <button 
          className={`mode-btn ${mode === 'client' ? 'active' : ''}`}
          onClick={() => handleModeChange('client')}
        >
          👤 Cliente
        </button>
        <button 
          className={`mode-btn ${mode === 'staff' ? 'active' : ''}`}
          onClick={() => handleModeChange('staff')}
        >
          👔 Empleado
        </button>
      </div>

      <div className="slide-container">
        {currentSlides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`slide ${slide.className} ${currentSlide === index + 1 ? 'active' : ''}`}
          >
            <SlideRenderer slide={slide} />
          </div>
        ))}
      </div>
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
};

export default Presentation;
