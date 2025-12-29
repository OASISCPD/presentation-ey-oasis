import type { SlideData } from './slidesData';

interface SlideRendererProps {
  slide: SlideData;
}

const SlideRenderer = ({ slide }: SlideRendererProps) => {
  const getImagePath = (imageName?: string) => {
    if (!imageName) return '';
    return `/assets/${imageName}`;
  };

  if (slide.type === 'cover') {
    return (
      <>
        <h1>{slide.content.title}</h1>
        <h2>{slide.content.subtitle}</h2>
        <p style={{ fontSize: '1.2em', color: 'rgba(255,255,255,0.8)', marginBottom: '2em' }}>
          {slide.content.description}
        </p>
        {slide.content.image && (
          <img 
            src={getImagePath(slide.content.image)} 
            alt={slide.content.title}
            style={{ 
              width: '60%', 
              maxWidth: '500px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)' 
            }}
          />
        )}
      </>
    );
  }

  if (slide.type === 'intro') {
    return (
      <div className="content">
        <div>
          <h1>{slide.content.title}</h1>
          {slide.content.description?.split('\n\n').map((paragraph, index) => (
            <p key={index} style={index > 0 ? { marginTop: '1.5em' } : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
        {slide.content.image && (
          <img 
            src={getImagePath(slide.content.image)} 
            alt={slide.content.title}
            style={{ 
              width: '100%', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
            }}
          />
        )}
      </div>
    );
  }

  if (slide.type === 'welcome') {
    return (
      <div className="content">
        <div>
          <h1>{slide.content.title}</h1>
          {slide.content.features?.map((feature, index) => (
            <div key={index} className="feature-box">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        {slide.content.image && (
          <img 
            src={getImagePath(slide.content.image)} 
            alt={slide.content.title}
            style={{ 
              width: '100%', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
            }}
          />
        )}
      </div>
    );
  }

  if (slide.type === 'step') {
    return (
      <div className="content">
        <div style={slide.content.grid ? { 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3em', 
          alignItems: 'start' 
        } : undefined}>
          <div>
            {slide.content.stepNumber && (
              <div className="step-number">{slide.content.stepNumber}</div>
            )}
            <h1>{slide.content.title}</h1>
            <p>{slide.content.description}</p>
            
            {slide.content.infoBox && (
              <div className="info-box">
                <h3>{slide.content.infoBox.title}</h3>
                <p>{slide.content.infoBox.description}</p>
              </div>
            )}
            
            {slide.content.requirements && (
              <div className="requirements">
                <h3>Requisitos de Seguridad</h3>
                {slide.content.requirements.map((req, index) => (
                  <div key={index} className="requirement-item">{req}</div>
                ))}
              </div>
            )}
          </div>
          
          {slide.content.image && (
            <img 
              src={getImagePath(slide.content.image)} 
              alt={slide.content.title}
              style={{ 
                width: '100%', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
              }}
            />
          )}
        </div>
      </div>
    );
  }

  if (slide.type === 'confirmation') {
    return (
      <div className="content">
        <div style={slide.content.grid ? { 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3em', 
          alignItems: 'start',
          background: 'transparent' 
        } : undefined}>
          <div style={{ textAlign: 'left' }}>
            {slide.content.stepNumber && (
              <div className="step-number">{slide.content.stepNumber}</div>
            )}
            <h1 style={{ color: 'white' }}>{slide.content.title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>{slide.content.description}</p>
            
            {slide.content.infoBox && (
              <div style={{ 
                background: 'rgba(255,255,255,0.95)', 
                padding: '2em', 
                borderRadius: '15px', 
                marginTop: '2em' 
              }}>
                <h3 style={{ color: '#B30000' }}>{slide.content.infoBox.title}</h3>
                <p style={{ color: '#333' }}>{slide.content.infoBox.description}</p>
              </div>
            )}
          </div>
          
          {slide.content.image && (
            <img 
              src={getImagePath(slide.content.image)} 
              alt={slide.content.title}
              style={{ 
                width: '100%', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
              }}
            />
          )}
        </div>
      </div>
    );
  }

  if (slide.type === 'login') {
    return (
      <div className="content">
        <div style={slide.content.grid ? { 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3em', 
          alignItems: 'start' 
        } : undefined}>
          <div>
            <h1>{slide.content.title}</h1>
            <p style={{ fontSize: '1.2em', color: '#555', margin: '1.5em 0' }}>
              {slide.content.description}
            </p>
            
            {slide.content.infoBox && (
              <div className="info-box">
                <h3>{slide.content.infoBox.title}</h3>
                <p>{slide.content.infoBox.description}</p>
              </div>
            )}
          </div>
          
          {slide.content.image && (
            <img 
              src={getImagePath(slide.content.image)} 
              alt={slide.content.title}
              style={{ 
                width: '100%', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
              }}
            />
          )}
        </div>
      </div>
    );
  }

  if (slide.type === 'main') {
    return (
      <div className="content">
        <div>
          <h1>{slide.content.title}</h1>
          {slide.content.features?.map((feature, index) => (
            <div key={index} className="feature">
              <h3>{feature.icon} {feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        {slide.content.image && (
          <img 
            src={getImagePath(slide.content.image)} 
            alt={slide.content.title}
            style={{ 
              width: '100%', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
            }}
          />
        )}
      </div>
    );
  }

  if (slide.type === 'closing') {
    return (
      <>
        <h1 style={{ whiteSpace: 'pre-line' }}>{slide.content.title}</h1>
        <p style={{ fontSize: '1.5em', margin: '1.5em 0' }}>
          {slide.content.subtitle}
        </p>
        <div className="contact-box" style={{ margin: '3em 0' }}>
          <p style={{ fontSize: '1.3em', margin: '0.5em 0' }}>📧 celulaproyectosdigitales@bingopilar.com.ar</p>
        </div>

        <div className="drive-cta" style={{ marginTop: '1.5em' }}>
          <p className="drive-note" style={{ marginBottom: '1rem', fontSize: '1.05em' }}>
            Para descargar las APKs, primero abre la carpeta de Google Drive donde están alojadas.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1FG29tvDcwSYLjSoosrLcivYcbWgQthTB?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn primary"
            role="link"
            aria-label="Abrir carpeta de Google Drive para descargar APKs"
          >
            Abrir carpeta de descargas (Google Drive)
          </a>
        </div>
        <p style={{ marginTop: '3em', fontSize: '2.5em', fontWeight: 600 }}>
          {slide.content.description}
        </p>
        <p style={{ marginTop: '1em', fontSize: '1.2em', opacity: 0.8 }}>
          Ahora estás listo para guiar a tus clientes
        </p>
      </>
    );
  }

  return null;
};

export default SlideRenderer;
