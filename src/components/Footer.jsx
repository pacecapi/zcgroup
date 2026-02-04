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
              <li><a href="/solar-projects">{t('services.solar.title')}</a></li>
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
          background-color: #0F172A; /* Dark Navy for premium feel */
          padding: 4rem 0 2rem;
          color: white;
          border-top: none;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-col h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: white;
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
          color: #94A3B8; /* Slate gray text */
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .footer-col a:hover {
          color: var(--color-brand-yellow);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-links a {
          color: white;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        
        .social-links a:hover {
            opacity: 1;
            color: var(--color-brand-yellow);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: #64748B;
        }
        
        .footer-bottom a {
            color: #64748B;
        }
        
        .footer-bottom a:hover {
            color: white;
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
