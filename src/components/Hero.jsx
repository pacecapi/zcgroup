import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';
import heroImage1 from '../assets/hero.png';
import heroImage2 from '../assets/hero_solar.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const settings = {
    slideDuration: 5000,
  };

  const images = [heroImage1, heroImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, settings.slideDuration);
    return () => clearInterval(timer);
  }, [images.length, settings.slideDuration]);

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };


  return (
    <section className="hero">
      <div className="hero-grid">
        {/* Left Column: Text */}
        <div className="hero-text-content">
          <div className="text-wrapper">
            <div className="white-box-overlay"> {/* Placeholder for the blurred text effect if needed, mostly clean white bg now */}
              <div className="title-placeholder-blur">
                {/* Simulating the blurred title in the screenshot if we don't have exact text, 
                               but let's use a real title that fits the description */}
                <h1 className="hero-title">
                  {t('hero.title')}
                </h1>
              </div>

              <p className="hero-desc">
                {t('hero.desc')}
              </p>

              <div className="conversion-widget">
                <div className="input-with-button">
                  <input type="text" placeholder={t('hero.inputPlaceholder')} aria-label="Postnummer" />
                  <button className="btn-cta">{t('hero.cta')}</button>
                </div>
                <p className="widget-note">{t('hero.note')}</p>
              </div>
            </div>

            <div className="short-data-section">
              <div className="short-data-item">
                <Star size={20} fill="white" />
                <span>{t('hero.trustpilot')}</span>
              </div>
              <div className="short-data-item">
                <span>{t('hero.customers')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image Carousel */}
        <div className="hero-image-content">
          <div className="carousel-container">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}

            <button className="carousel-nav prev" onClick={prevSlide}>
              <ArrowLeft size={32} color="white" />
            </button>
            <button className="carousel-nav next" onClick={nextSlide}>
              <ArrowRight size={32} color="white" />
            </button>


          </div>
        </div>
      </div>

      <style>{`
        .hero {
          margin-top: 140px;
          min-height: 500px;
          height: calc(100vh - 140px);
          max-height: 700px;
          background-color: var(--color-primary);
          overflow: hidden;
          transition: margin-top 0.3s ease, height 0.3s ease;
        }

        @media (max-width: 991px) {
          .hero {
            margin-top: 80px;
            height: auto;
            min-height: calc(100vh - 80px);
            max-height: none;
          }
        }

        .hero-grid {
            display: flex;
            height: 100%;
        }

        .hero-text-content {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem;
            position: relative;
            z-index: 10;
        }

        .text-wrapper {
            max-width: 500px;
        }

        .hero-title {
            font-size: 3.5rem;
            line-height: 1.1;
            margin-bottom: 2rem;
            color: white;
            font-weight: 800;
        }

        @media (max-width: 991px) {
            .hero-title {
                font-size: 2.2rem;
                margin-bottom: 1.5rem;
            }
        }
        
        .hero-desc {
            font-size: 1.125rem;
            color: white;
            line-height: 1.6;
            margin-bottom: 3rem;
            padding: 1.5rem 0;
            border-radius: var(--radius-md);
        }

        @media (max-width: 991px) {
            .hero-desc {
                font-size: 1rem;
                margin-bottom: 2rem;
                padding: 0.5rem 0;
            }
        }

        .conversion-widget {
            margin-bottom: 2rem;
            max-width: 450px;
        }

        .input-with-button {
            display: flex;
            background: white;
            padding: 0.5rem;
            border-radius: var(--radius-full);
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        @media (max-width: 480px) {
            .input-with-button {
                flex-direction: column;
                background: transparent;
                box-shadow: none;
                padding: 0;
                gap: 1rem;
            }
            .input-with-button input {
                background: white;
                border-radius: var(--radius-full);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            .btn-cta {
                width: 100%;
            }
        }

        .input-with-button input {
            flex: 1;
            border: none;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            outline: none;
            background: transparent;
            color: var(--color-text-main);
        }

        .input-with-button input::placeholder {
            color: #999;
        }

        .btn-cta {
            background-color: var(--color-brand-yellow);
            color: var(--color-text-main);
            font-weight: 700;
            padding: 0.75rem 2rem;
            border-radius: var(--radius-full);
            white-space: nowrap;
            transition: transform 0.2s, box-shadow 0.2s;
            font-size: 1rem;
        }

        .btn-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 210, 0, 0.4);
            filter: brightness(1.05);
        }

        .widget-note {
            margin-top: 0.75rem;
            font-size: 0.85rem;
            color: rgba(255,255,255,0.8);
            margin-left: 1rem;
        }

        @media (max-width: 480px) {
            .widget-note {
                margin-left: 0;
                text-align: center;
            }
        }

        .short-data-section {
            display: flex;
            gap: 2rem;
            border-top: 1px solid rgba(255,255,255,0.3);
            padding-top: 2rem;
        }
        
        .short-data-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            font-size: 0.9rem;
            color: white;
        }

        .hero-image-content {
            flex: 1;
            position: relative;
            overflow: hidden;
        }

        .carousel-container {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .carousel-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }

        .carousel-slide.active {
            opacity: 1;
        }

        .carousel-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            cursor: pointer;
            z-index: 20;
            padding: 1rem;
            opacity: 0.7;
            transition: opacity 0.2s;
        }
        
        .carousel-nav:hover {
            opacity: 1;
        }

        .carousel-nav.prev {
            left: 1rem;
        }
        
        .carousel-nav.next {
            right: 1rem;
        }
        
        /* Blue Circle Badge */


        @media (max-width: 992px) {
            .hero-grid {
                flex-direction: column-reverse;
                height: auto;
                max-height: none;
            }
            .hero-image-content {
                height: 400px;
            }
            .hero-text-content {
                padding: 2rem;
            }

        }
      `}</style>
    </section>
  );
};

export default Hero;
