import React from 'react';
import { Star, Check } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img src={heroImage} alt="Modern Scandinavian Interior" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <div className="badge">
                        <span className="badge-text">JUST NU!</span>
                        <span className="badge-offer">50% rabatt på första städningen</span>
                    </div>

                    <h1 className="hero-title">
                        Mer tid.<br />
                        Mer Hemfrid.
                    </h1>

                    <p className="hero-subtitle">
                        <span className="keyword">Tryggt.</span>
                        <span className="dot">•</span>
                        <span className="keyword">Flexibelt.</span>
                        <span className="dot">•</span>
                        <span className="keyword">Enkelt.</span>
                    </p>

                    <div className="conversion-box">
                        <div className="input-group">
                            <label>Postnummer</label>
                            <input type="text" placeholder="123 45" />
                        </div>
                        <div className="input-group">
                            <label>Tjänst</label>
                            <select>
                                <option>Hemstädning</option>
                                <option>Storstädning</option>
                                <option>Fönsterputs</option>
                            </select>
                        </div>
                        <button className="btn btn-primary hero-cta">
                            Se pris & boka
                        </button>
                    </div>

                    <p className="promo-note">* Gäller nya kunder vid tecknande av abonnemang.</p>

                    <div className="trustpilot-widget">
                        <div className="tp-stars">
                            <div className="star-box"><Star fill="white" size={16} /></div>
                            <div className="star-box"><Star fill="white" size={16} /></div>
                            <div className="star-box"><Star fill="white" size={16} /></div>
                            <div className="star-box"><Star fill="white" size={16} /></div>
                            <div className="star-box"><Star fill="white" size={16} /></div>
                        </div>
                        <div className="tp-text">
                            <strong>Excellent</strong> 4.8 out of 5 based on 2,300+ reviews on <span className="tp-logo">Trustpilot</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .hero {
          position: relative;
          height: 90vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          margin-top: 80px; /* Header height */
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-text {
          max-width: 600px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          background: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-primary-light);
        }

        .badge-text {
          background: var(--color-accent);
          color: var(--color-text-main);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          margin-right: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .badge-offer {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          font-weight: 800;
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--color-text-secondary);
          margin-bottom: 3rem;
          font-weight: 400;
        }

        .keyword {
          color: var(--color-primary);
          font-weight: 600;
        }

        .dot {
          margin: 0 0.5rem;
          color: #ccc;
        }

        .conversion-box {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: flex-end;
          margin-bottom: 1rem;
        }

        .input-group {
          flex: 1;
          min-width: 150px;
        }

        .input-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .input-group input, .input-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: 1rem;
          background: var(--color-bg-offwhite);
          transition: border-color 0.2s;
        }

        .input-group input:focus, .input-group select:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .hero-cta {
          padding: 0.75rem 2rem;
          height: 48px; /* Match input height roughly */
          font-weight: 600;
        }

        .promo-note {
          font-size: 0.8rem;
          color: var(--color-text-light);
          margin-bottom: 3rem;
          font-style: italic;
        }

        .trustpilot-widget {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .tp-stars {
          display: flex;
          gap: 2px;
        }

        .star-box {
          background: #00b67a;
          padding: 2px;
        }

        .tp-text {
          font-size: 0.9rem;
          color: var(--color-text-main);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .conversion-box {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-background img {
            object-position: 70% center; 
          }
           
          .hero-overlay {
            background: rgba(255,255,255,0.85); /* More opacity on mobile to read text */
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
