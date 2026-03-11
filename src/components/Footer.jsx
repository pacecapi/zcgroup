import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>{t('nav.services')}</h4>
            <ul>
              <li><a href="/solcellsmontage">{t('services.solar.title')}</a></li>
              <li><a href="/tjanster/hemstadning">{t('services.cleaning.title')}</a></li>
              <li><a href="/tjanster/storstadning">{t('services.deepCleaning.title')}</a></li>
              <li><a href="/tjanster/fonsterputs">{t('services.window.title')}</a></li>
              <li><a href="/tjanster/flyttstadning">{t('services.moving.title')}</a></li>
              <li><a href="/tjanster/kontorsstadning">{t('services.office.title')}</a></li>
              <li><a href="/tjanster/trappstadning">{t('services.staircase.title')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('nav.about')}</h4>
            <ul>
              <li><a href="#">{t('nav.about')}</a></li>
            </ul>
          </div>
          {/* ... keeping other columns simpler for now or mapping them if needed */}
          <div className="footer-col">
            <h4>{t('nav.contact')}</h4>
            <ul>
              <li><a href="#">{t('nav.contact')}</a></li>
            </ul>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal">
            <span>{t('footer.legal')}</span>
            <a href="#">{t('footer.terms')}</a>
            <a href="#">{t('footer.cookies')}</a>
            <a href="#">{t('footer.privacy')}</a>
          </div>
          <div className="address">
            Huvudkontor: Sveavägen 123, 111 22 Stockholm
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, #1a365d 0%, #0F172A 100%);
          padding: 4rem 0 2rem;
          color: white;
          border-top: 4px solid var(--color-brand-yellow);
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 10% 20%, rgba(0, 140, 207, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .footer-col h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--color-brand-yellow);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col li {
          margin-bottom: 0.75rem;
        }

        .footer-col a {
          color: #CBD5E1;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .footer-col a:hover {
          color: var(--color-brand-yellow);
          padding-left: 5px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-links a {
          color: white;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: var(--color-brand-yellow);
          color: #1a365d;
          transform: translateY(-3px);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: #94A3B8;
          position: relative;
          z-index: 1;
        }

        .footer-bottom a {
          color: #94A3B8;
          transition: color 0.2s;
        }

        .footer-bottom a:hover {
          color: var(--color-brand-yellow);
        }

        .legal {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .legal {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
