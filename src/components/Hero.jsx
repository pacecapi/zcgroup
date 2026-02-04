import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';
import heroImage1 from '../assets/hero.png';
import heroImage2 from '../assets/hero_solar.png';

const Hero = () => {
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
                  Tid för det som är viktigt.
                </h1>
              </div>

              <p className="hero-desc">
                Professionella tjänster inom städning och solcellsmontage.
                Vi hjälper både privatpersoner och företag med pålitliga och kvalitativa tjänster.
                Välj det tjänst som passar ditt behov.
              </p>
            </div>

            <div className="short-data-section">
              <div className="short-data-item">
                <Star size={20} fill="black" />
                <span>4.8/5 Trustpilot</span>
              </div>
              <div className="short-data-item">
                <span>50,000+ Kunder</span>
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
          margin-top: 80px; /* Header height */
          min-height: 500px;
          height: calc(100vh - 80px);
          max-height: 700px;
          background-color: var(--color-bg-white);
          overflow: hidden;
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
            color: var(--color-text-main);
            /* Simulating the blurred out heavy title in screenshot */
            font-weight: 800;
        }
        
        .hero-desc {
            font-size: 1.125rem;
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-bottom: 3rem;
            padding: 1.5rem;
            background: #f9f9f9; /* Subtle box effect behind text like screenshot */
            border-radius: var(--radius-md);
        }

        .short-data-section {
            display: flex;
            gap: 2rem;
            border-top: 1px solid var(--color-border);
            padding-top: 2rem;
        }
        
        .short-data-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            font-size: 0.9rem;
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
