import { useState, useEffect } from 'react';
import './Presentation.css';
import NavigationControls from './NavigationControls';
import { slides } from './slidesData';
import SlideRenderer from './SlideRenderer';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = slides.length;

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
      <div className="slide-container">
        {slides.map((slide: any, index: number) => (
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
