import React, { useState } from 'react';
import { Menu, X, Globe, User, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cleaningServices = [
    "Hemstädning",
    "Storstädning",
    "Flyttstädning",
    "Visningsstädning",
    "Fönsterputs",
    "Kontorsstädning",
    "Byggstädning",
    "Trappstädning"
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
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">
                VÅRA TJÄNSTER <ChevronDown size={14} style={{ marginLeft: '4px' }} />
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-grid">
                  <div className="dropdown-col">
                    <h5>Städtjänster</h5>
                    <ul>
                      {cleaningServices.map((service) => (
                        <li key={service}><a href="#">{service}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="dropdown-col featured-col">
                    <h5>Solcellsmontage (B2B)</h5>
                    <p className="dropdown-desc">
                      Kompletta lösningar för företag och fastigheter.
                    </p>
                    <a href="/solar-projects" className="btn-dropdown">Se våra projekt →</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">OM OSS</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">KONTAKTA OSS</a>
            </li>
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
            <li>
              <span className="mobile-nav-header">VÅRA TJÄNSTER</span>
              <ul className="mobile-subnav">
                <li><a href="#">Solcellsmontage (B2B)</a></li>
                {cleaningServices.map((service) => (
                  <li key={service}><a href="#">{service}</a></li>
                ))}
              </ul>
            </li>
            <li className="mobile-item"><a href="#">OM OSS</a></li>
            <li className="mobile-item"><a href="#">KONTAKTA OSS</a></li>
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
          height: 110px;
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
          position: relative;
        }

        .logo-link {
          display: block;
          height: 95px;
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
          align-items: center;
        }

        .nav-item {
            position: relative;
            height: 110px;
            display: flex;
            align-items: center;
        }

        .nav-link {
          font-weight: 700;
          color: var(--color-text-light);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        /* Dropdown Styles */
        .dropdown-menu {
            position: absolute;
            top: 100%; /* Below header */
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: white;
            padding: 2rem;
            border-radius: var(--radius-md);
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            width: 600px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease;
            cursor: default;
        }

        .nav-item:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
        }
        
        /* Triangle indicator */
        .dropdown-menu::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            width: 12px;
            height: 12px;
            background: white;
            border-top: 1px solid rgba(0,0,0,0.03);
            border-left: 1px solid rgba(0,0,0,0.03);
        }

        .dropdown-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .dropdown-col h5 {
            font-size: 0.9rem;
            color: var(--color-text-main);
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 1rem;
            border-bottom: 2px solid var(--color-brand-yellow);
            padding-bottom: 0.5rem;
            display: inline-block;
        }

        .dropdown-col ul {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr; /* Split cleaning list into 2 sub-cols if needed, or just 1 list */
            gap: 0.5rem;
        }
        
        .dropdown-col ul li a {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
            text-decoration: none;
            display: block;
            padding: 0.25rem 0;
            transition: color 0.2s;
        }
        
        .dropdown-col ul li a:hover {
            color: var(--color-primary);
        }
        
        .featured-col {
            background: #F8FAFC;
            padding: 1.5rem;
            border-radius: var(--radius-md);
        }
        
        .dropdown-desc {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
            margin-bottom: 1rem;
            line-height: 1.5;
        }
        
        .btn-dropdown {
            display: inline-block;
            background: var(--color-brand-yellow);
            color: var(--color-text-main);
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: var(--radius-full);
            font-size: 0.85rem;
            text-decoration: none;
            transition: transform 0.2s;
        }
        
        .btn-dropdown:hover {
            transform: translateY(-2px);
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
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .lang-active {
            background-color: #000040; 
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
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-nav {
          position: absolute;
          top: 110px;
          left: 0;
          right: 0;
          background: white;
          padding: 2rem;
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          max-height: 80vh;
          overflow-y: auto;
        }

        .mobile-nav ul {
          list-style: none;
        }
        
        .mobile-nav-header {
            font-weight: 700;
            display: block;
            margin-bottom: 1rem;
            color: var(--color-text-main);
        }
        
        .mobile-subnav {
            padding-left: 1rem;
            border-left: 2px solid var(--color-border);
            margin-bottom: 1.5rem;
        }

        .mobile-nav li {
          margin-bottom: 0.75rem;
        }
        
        .mobile-item {
            margin-bottom: 1.5rem;
        }
        
        .mobile-nav a {
            font-weight: 600;
            font-size: 1rem;
            text-transform: none;
            color: var(--color-text-secondary);
            text-decoration: none;
        }
        
        .mobile-item > a {
            text-transform: uppercase;
            font-weight: 700;
            color: var(--color-text-main);
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
