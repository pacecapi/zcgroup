import React from 'react';
import { CheckCircle } from 'lucide-react';
import appMockup from '../assets/app-mockup.png';

const AppSection = () => {
  const features = [
    'Se dina bokningar',
    'Boka med timbank',
    'Avboka & omboka smidigt',
    'Uppdatera städinstruktioner',
    'Lämna omdömen',
    'Hantera fakturor',
    'Få personliga erbjudanden',
    'Tips & guider'
  ];

  return (
    <section className="section app-section">
      <div className="container app-container">
        <div className="app-content">
          <h2 className="section-title title-left">Allt du behöver på ett ställe</h2>
          <p className="app-text">
            Som kund hos Z&C Group får du tillgång till vår smidiga app. Här samlar vi allt som rör ditt hem, så att du kan lägga tiden på annat.
          </p>

          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <CheckCircle size={20} className="feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="btn btn-primary app-btn">Läs mer om appen</button>
        </div>

        <div className="app-image">
          <img src={appMockup} alt="Z&C Group App" />
        </div>
      </div>

      <style>{`
        .app-section {
          background-color: var(--color-bg-light-grey);
          overflow: hidden;
        }

        .app-container {
          display: flex;
          align-items: center;
          gap: 4rem;
          flex-direction: column;
        }

        .app-content {
          flex: 1;
        }

        .title-left {
          text-align: left;
        }

        .app-text {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .features-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
          color: var(--color-text-main);
        }

        .feature-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .app-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        
        .app-image img {
          max-width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          max-height: 500px;
          object-fit: contain;
        }

        @media (min-width: 992px) {
          .app-container {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
};

export default AppSection;
