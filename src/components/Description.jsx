import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Description = () => {
  const { t } = useLanguage();
  return (
    <section className="section description-section">
      <div className="container">
        <div className="description-content">
          <h2 className="section-title">{t('description.title')}</h2>
          <p className="description-text" dangerouslySetInnerHTML={{ __html: t('description.text') }} />
          <blockquote className="quote-text">
            {t('description.quote')}
          </blockquote>
        </div>
      </div>

      <style>{`
        .description-section {
          background-color: var(--color-bg-white);
          text-align: center;
        }

        .description-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .description-text {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .description-text a {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .description-text a:hover {
          color: var(--color-text-main);
        }

        .quote-text {
          font-family: serif;
          font-size: 1.5rem;
          font-style: italic;
          color: var(--color-text-main);
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
      `}</style>
    </section>
  );
};

export default Description;
