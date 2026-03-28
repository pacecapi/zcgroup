import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="testimonial-content">
                    <span className="quote-mark">{"\u201C"}</span>
                    <p className="testimonial-text">{t('testimonial.text')}</p>
                    <div className="testimonial-author">
                        <span className="author-name">{t('testimonial.author')}</span>
                        <span className="author-role">{t('testimonial.role')}</span>
                    </div>
                </div>
            </div>

            <style>{`
        .testimonials-section {
          background-color: var(--color-bg-white);
          text-align: center;
        }

        .testimonial-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .quote-mark {
          font-family: serif;
          font-size: 6rem;
          color: var(--color-primary-light);
          line-height: 0;
          display: block;
          margin-bottom: 2rem;
        }

        .testimonial-text {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-text-main);
          margin-bottom: 2rem;
          line-height: 1.4;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-weight: 700;
          color: var(--color-text-main);
        }

        .author-role {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
