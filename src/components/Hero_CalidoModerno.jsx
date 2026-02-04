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
          margin-top: 140px; /* Header height */
          min-height: 500px;
          height: calc(100vh - 140px);
          max-height: 700px;
          background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
          position: relative;
          overflow: hidden;
        }

        /* Decorative Glows for Warmth and Modernity */
        .hero::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(255, 210, 0, 0.15) 0%, transparent 70%);
          z-index: 2;
          pointer-events: none;
          animation: pulse 8s infinite alternate;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -10%;
          left: 10%;
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, rgba(0, 140, 207, 0.3) 0%, transparent 70%);
          z-index: 2;
          pointer-events: none;
        }

        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.1); }
        }

        .hero-grid {
            display: flex;
            height: 100%;
            position: relative;
            z-index: 5;
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
            text-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .hero-desc {
            font-size: 1.125rem;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
            margin-bottom: 3rem;
            padding: 1rem 0;
            border-radius: var(--radius-md);
        }

        .conversion-widget {
            margin-bottom: 2rem;
            max-width: 450px;
            position: relative;
        }

        .input-with-button {
            display: flex;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 0.5rem;
            border-radius: var(--radius-full);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: transform 0.3s ease;
        }

        .input-with-button:focus-within {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            background: white;
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
            color: #777;
        }

        .btn-cta {
            background-color: var(--color-brand-yellow);
            color: var(--color-text-main);
            font-weight: 700;
            padding: 0.75rem 2rem;
            border-radius: var(--radius-full);
            white-space: nowrap;
            transition: all 0.3s ease;
            font-size: 1rem;
            box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
        }

        .btn-cta:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 15px rgba(255, 210, 0, 0.4), 0 2px 0 rgba(184, 152, 0, 1);
            filter: brightness(1.05);
        }

        .btn-cta:active {
            transform: translateY(2px);
            box-shadow: 0 0 0 rgba(184, 152, 0, 1);
        }

        .widget-note {
            margin-top: 0.75rem;
            font-size: 0.85rem;
            color: rgba(255,255,255,0.85);
            margin-left: 1rem;
        }

        .short-data-section {
            display: flex;
            gap: 2rem;
            border-top: 1px solid rgba(255,255,255,0.2);
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
            mask-image: linear-gradient(to right, transparent, black 15%);
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
            transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-slide.active {
            opacity: 1;
        }

        .carousel-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 20;
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .carousel-container:hover .carousel-nav {
            opacity: 1;
        }

        .carousel-nav:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-50%) scale(1.1);
        }

        .carousel-nav.prev {
            left: 1.5rem;
        }
        
        .carousel-nav.next {
            right: 1.5rem;
        }
        

        @media (max-width: 992px) {
            .hero {
                height: auto;
                max-height: none;
            }
            .hero-grid {
                flex-direction: column-reverse;
                height: auto;
            }
            .hero-image-content {
                height: 400px;
                mask-image: linear-gradient(to bottom, transparent, black 15%);
            }
            .hero-text-content {
                padding: 3rem 1.5rem;
            }
            .hero-title {
                font-size: 2.5rem;
            }
        }
      `}</style>
    </section>
  );
};

export default Hero;
