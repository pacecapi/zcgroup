import React from 'react';
import { Users, Briefcase, ArrowRight } from 'lucide-react';

const Recruitment = () => {
    return (
        <section className="section recruitment-section">
            <div className="container recruitment-container">
                <div className="recruitment-text">
                    <h2 className="section-title title-left white-text">Vill du jobba på Hemfrid?</h2>
                    <p className="recruitment-desc white-text">
                        Vi söker ständigt efter nya stjärnor. Oavsett om du vill städa, fixa i trädgården eller jobba på kontoret.
                    </p>
                    <div className="roles-list">
                        <div className="role-tag">Hemstädare</div>
                        <div className="role-tag">Fönsterputsare</div>
                        <div className="role-tag">Flyttstädare</div>
                        <div className="role-tag">Kundtjänst</div>
                        <div className="role-tag">Säljare</div>
                    </div>
                    <button className="btn btn-secondary mt-4">
                        Besök vår karriärsida <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                    </button>
                </div>
                <div className="recruitment-icon">
                    <Users size={120} color="rgba(255,255,255,0.2)" />
                </div>
            </div>

            <style>{`
        .recruitment-section {
          background-color: var(--color-primary);
          color: white;
        }

        .recruitment-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .white-text {
          color: white !important;
        }

        .recruitment-desc {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          max-width: 500px;
          opacity: 0.9;
        }

        .roles-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .role-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          backdrop-filter: blur(5px);
        }

        .mt-4 {
          margin-top: 1rem;
        }

        .recruitment-icon {
          display: none;
        }

        @media (min-width: 768px) {
          .recruitment-icon {
            display: block;
          }
        }
      `}</style>
        </section>
    );
};

export default Recruitment;
