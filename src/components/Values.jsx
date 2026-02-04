import React from 'react';
import { ShieldCheck, Clock, Smile } from 'lucide-react';

const Values = () => {
    return (
        <section className="section values-section">
            <div className="container">
                <h2 className="section-title">Mer än bara service</h2>

                <div className="values-grid">
                    <div className="value-item">
                        <ShieldCheck size={48} className="value-icon" />
                        <h3>Tryggt</h3>
                        <p>
                            Vår personal är noga utvald, utbildad och försäkrad. Vi har kollektivavtal och schyssta villkor – en självklarhet för oss.
                        </p>
                    </div>

                    <div className="value-item">
                        <Clock size={48} className="value-icon" />
                        <h3>Flexibelt</h3>
                        <p>
                            Avboka eller boka om när livet händer. Ingen bindningstid på våra abonnemang, och du kan alltid pausa vid behov.
                        </p>
                    </div>

                    <div className="value-item">
                        <Smile size={48} className="value-icon" />
                        <h3>Enkelt</h3>
                        <p>
                            Med vår app har du full kontroll. Se bokningar, fakturor och kommunicera direkt med din städare eller kundservice.
                        </p>
                    </div>
                </div>

                <div className="values-cta">
                    <button className="btn btn-secondary">Läs mer om Hemfrid</button>
                </div>
            </div>

            <style>{`
        .values-section {
          background-color: var(--color-bg-light-grey);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-top: 3rem;
          text-align: center;
        }

        .value-item {
          padding: 0 1rem;
        }

        .value-icon {
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }

        .value-item h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .value-item p {
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .values-cta {
          text-align: center;
          margin-top: 4rem;
        }

        @media (min-width: 768px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
        </section>
    );
};

export default Values;
