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
                            <li><a href="#">Hemstädning</a></li>
                            <li><a href="#">Storstädning</a></li>
                            <li><a href="#">Fönsterputs</a></li>
                            <li><a href="#">Flyttstädning</a></li>
                            <li><a href="#">Trädgårdshjälp</a></li>
                            <li><a href="#">Kontorsstädning</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Vi är Hemfrid</h4>
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
                        <span>© 2024 Hemfrid</span>
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
          background-color: #F8F9FA;
          padding: 4rem 0 2rem;
          color: var(--color-text-main);
          border-top: 1px solid var(--color-border);
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
          color: var(--color-text-main);
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col li {
          margin-bottom: 0.75rem;
        }

        .footer-col a {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .footer-col a:hover {
          color: var(--color-primary);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-links a {
          color: var(--color-text-main);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #E5E7EB;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--color-text-light);
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
