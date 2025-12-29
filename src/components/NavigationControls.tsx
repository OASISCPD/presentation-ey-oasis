interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

const NavigationControls = ({ currentSlide, totalSlides, onNext, onPrev }: NavigationControlsProps) => {
  return (
    <div className="controls">
      <div className="nav-buttons">
        <button 
          className="nav-btn" 
          onClick={onPrev}
          disabled={currentSlide === 1}
        >
          ← Anterior
        </button>
        <button 
          className="nav-btn" 
          onClick={onNext}
          disabled={currentSlide === totalSlides}
        >
          Siguiente →
        </button>
      </div>
      <div className="slide-counter">
        <span>{currentSlide}</span> / <span>{totalSlides}</span>
      </div>
    </div>
  );
};

export default NavigationControls;
