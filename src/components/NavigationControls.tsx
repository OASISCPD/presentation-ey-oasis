import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onJump: (slideNumber: number) => void;
  slideTitles: string[];
}

const NavigationControls = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onJump,
  slideTitles,
}: NavigationControlsProps) => {
  return (
    <>
      <aside className="side-nav" aria-label="Recorrido de slides">
        <div className="side-nav-title">Recorrido</div>
        <div className="side-nav-list">
          {slideTitles.map((title, index) => {
            const slideNumber = index + 1;
            return (
              <button
                key={`${title}-${index}`}
                className={`side-nav-item ${currentSlide === slideNumber ? 'active' : ''}`}
                onClick={() => onJump(slideNumber)}
                aria-current={currentSlide === slideNumber ? 'step' : undefined}
              >
                <span className="side-nav-dot" />
                <span className="side-nav-text">{title}</span>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="controls">
        <div className="nav-buttons">
          <button 
            className="nav-btn" 
            onClick={onPrev}
            disabled={currentSlide === 1}
          >
            <FaArrowLeft aria-hidden="true" />
            Anterior
          </button>
          <button 
            className="nav-btn" 
            onClick={onNext}
            disabled={currentSlide === totalSlides}
          >
            Siguiente
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
        <div className="mobile-nav" aria-label="Progreso de slides">
          <div className="progress-wrap" role="group" aria-label="Progreso de la presentación">
            <div className="progress-track">
              <div
                className="progress-bar"
                style={{ width: `${Math.round((currentSlide / totalSlides) * 100)}%` }}
              />
            </div>
            <div className="progress-meta">
              <span className="progress-title">
                {slideTitles[currentSlide - 1] ?? `Slide ${currentSlide}`}
              </span>
              <span>{currentSlide} / {totalSlides}</span>
            </div>
          </div>
        </div>
        <div className="slide-counter">
          <span>{currentSlide}</span> / <span>{totalSlides}</span>
        </div>
      </div>
    </>
  );
};

export default NavigationControls;
