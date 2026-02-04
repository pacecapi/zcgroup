import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Våra tjänster</h4>
            <ul>
              <li><a href="#">Solcellsmontage</a></li>
              <li><a href="#">Hemstädning</a></li>
              <li><a href="#">Storstädning</a></li>
              <li><a href="#">Fönsterputs</a></li>
              <li><a href="#">Flyttstädning</a></li>
              <li><a href="#">Trädgårdshjälp</a></li>
              <li><a href="#">Kontorsstädning</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Om Z&C Group</h4>
            <ul>
              <li><a href="#">Om oss</a></li>
              <li><a href="#">Våra orter</a></li>
              <li><a href="#">Hållbarhet</a></li>
              <li><a href="#">Pressrum</a></li>
              <li><a href="#">Investerare</a></li>
              <li><a href="#">Blogg</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Mer information</h4>
            <ul>
              <li><a href="#">Ladda ner appen</a></li>
              <li><a href="#">Tips & Guider</a></li>
              <li><a href="#">FAQ / Frågor & Svar</a></li>
              <li><a href="#">RUT-avdrag</a></li>
              <li><a href="#">Presentkort</a></li>
              <li><a href="#">Integritetspolicy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontakta oss</h4>
            <ul>
              <li><a href="#">Kundservice</a></li>
              <li><a href="#">Bli företagskund</a></li>
              <li><a href="#">Jobba hos oss</a></li>
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
            <span>© 2024 Z&C Group</span>
            <a href="#">Villkor</a>
            <a href="#">Cookies</a>
            <a href="#">Integritet</a>
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
