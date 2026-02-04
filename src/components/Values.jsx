import React from 'react';
import { ShieldCheck, Clock, Smile } from 'lucide-react';

const Values = () => {
  return (
    <section className="section values-section">
      <div className="container">
        <h2 className="section-title">Mer än bara service</h2>

        <div className="values-grid">
          <div className="value-item">
            <div className="icon-container">
              <ShieldCheck size={64} strokeWidth={1.5} />
            </div>
            <h3>Tryggt</h3>
            <p>
              Vår personal är noga utvald, utbildad och försäkrad. Vi har kollektivavtal och schyssta villkor – en självklarhet för oss.
            </p>
          </div>

          <div className="value-item">
            <div className="icon-container">
              <Clock size={64} strokeWidth={1.5} />
            </div>
            <h3>Flexibelt</h3>
            <p>
              Avboka eller boka om när livet händer. Ingen bindningstid på våra abonnemang, och du kan alltid pausa vid behov.
            </p>
          </div>

          <div className="value-item">
            <div className="icon-container">
              <Smile size={64} strokeWidth={1.5} />
            </div>
            <h3>Enkelt</h3>
            <p>
              Med vår app har du full kontroll. Se bokningar, fakturor och kommunicera direkt med din städare eller kundservice.
            </p>
          </div>
        </div>

        <div className="values-cta">
          <button className="btn btn-secondary">Läs mer om oss</button>
        </div>
      </div>

      <style>{`
        .values-section {
          background-color: var(--color-bg-light-grey);
          position: relative;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 4rem;
        }

        .value-item {
          background: white;
          padding: 3rem 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid transparent;
        }
        
        .value-item:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-xl);
            border-color: var(--color-brand-blue);
        }

        .icon-container {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-brand-blue);
            margin-bottom: 2rem;
            position: relative;
        }
        
        .icon-container::after {
            content: '';
            position: absolute;
            width: 50px;
            height: 50px;
            background: var(--color-brand-blue);
            opacity: 0.1;
            border-radius: 50%;
            z-index: -1;
            transform: scale(1.5);
            transition: transform 0.3s ease;
        }
        
        .value-item:hover .icon-container::after {
            transform: scale(1.8);
            opacity: 0.2;
        }

        .value-item h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          color: var(--color-text-main);
        }

        .value-item p {
          color: var(--color-text-secondary);
          line-height: 1.6;
          font-size: 1rem;
        }

        .values-cta {
          text-align: center;
          margin-top: 4rem;
        }

        @media (min-width: 992px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Values;
