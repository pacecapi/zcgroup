import React, { useState } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'VÅRA TJÄNSTER', link: '#' },
    { name: 'OM OSS', link: '#' },
    { name: 'KONTAKTA OSS', link: '#' }
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-section">
          <a href="/" className="logo-link">
            <img src={logo} alt="Z&C Group" className="logo-img" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a href={item.link} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="lang-btn">
            <span className="lang-active">SV</span>
            <span className="lang-sep">|</span>
            <span className="lang-inactive">EN</span>
          </button>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}><a href={item.link}>{item.name}</a></li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          z-index: 1000;
          height: 90px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid transparent; 
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo-link {
          display: block;
          height: 70px; /* Adjust based on logo aspect ratio */
        }

        .logo-img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }

        .desktop-nav {
          display: none;
        }

        .nav-list {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .nav-link {
          font-weight: 700;
          color: var(--color-text-light); /* Lighter grey for menu items */
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .lang-btn {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-main);
          background: #000033; /* Dark background for SV based on screenshot? Or just black text. */
          /* Screenshot shows SV in a dark box. Let's approximate that style. */
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        /* Specific style for language selector to match screenshot approx */
        .lang-btn {
            background: none;
            color: #ccc;
        }
        
        .lang-active {
            background-color: #000040; /* Dark Blue/Black */
            color: white;
            padding: 2px 4px;
            font-size: 0.75rem;
            border-radius: 2px;
        }

        .lang-inactive {
            color: #999;
             font-size: 0.75rem;
             padding: 2px 4px;
        }
        
        .mobile-toggle {
          display: block;
        }

        .mobile-nav {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: white;
          padding: 2rem;
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
        }

        .mobile-nav ul {
          list-style: none;
        }

        .mobile-nav li {
          margin-bottom: 1.5rem;
        }
        
        .mobile-nav a {
            font-weight: 700;
            font-size: 1.1rem;
            text-transform: uppercase;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: block;
            position: absolute; /* Center the nav */
            left: 50%;
            transform: translateX(-50%);
          }
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
