import React from 'react';
import { Users, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Recruitment = () => {
  const { t } = useLanguage();
  const roles = t('recruitment.roles');
  return (
    <section className="section recruitment-section">
      <div className="container recruitment-container">
        <div className="recruitment-text">
          <h2 className="section-title title-left white-text">{t('recruitment.title')}</h2>
          <p className="recruitment-desc white-text">{t('recruitment.desc')}</p>
          <div className="roles-list">
            {Array.isArray(roles) && roles.map((role, i) => (
              <div key={i} className="role-tag">{role}</div>
            ))}
          </div>
          <button className="btn btn-secondary mt-4">
            {t('recruitment.cta')} <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
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
