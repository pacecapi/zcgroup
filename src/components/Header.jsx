import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Städning', items: ['Hemstädning', 'Storstädning', 'Fönsterputs', 'Flyttstädning'] },
    { name: 'Trädgård', items: ['Trädgårdshjälp', 'Vår- och höststädning', 'Semesterservice'] },
    { name: 'Fler tjänster', items: ['Hantverkshjälp', 'Bärhjälp', 'Återvinning'] },
    { name: 'Företag', items: ['Kontorsstädning', 'BRF', 'Löneförmån'] },
    { name: 'Vi är Hemfrid', items: ['Om oss', 'Kontakt', 'Karriär', 'FAQ'] },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-section">
          <a href="/" className="logo">Hemfrid.</a>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((category) => (
              <li key={category.name} className="nav-item group">
                <button className="nav-link">
                  {category.name}
                  <ChevronDown size={14} className="chevron" />
                </button>
                <div className="mega-menu">
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}><a href="#">{item}</a></li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="lang-btn">
            <Globe size={18} />
            <span>SV</span>
          </button>
          <a href="#" className="login-link">
            <User size={18} />
            <span>Logga in</span>
          </a>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="mobile-nav">
          {navItems.map((category) => (
            <div key={category.name} className="mobile-group">
              <div className="mobile-group-title">{category.name}</div>
              <ul>
                {category.items.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid var(--color-border);
          height: 80px;
          display: flex;
          align-items: center;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: -0.05em;
        }

        .desktop-nav {
          display: none;
        }

        .nav-list {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 500;
          color: var(--color-text-main);
          font-size: 0.95rem;
          padding: 1rem 0;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-item {
          position: relative;
        }

        .mega-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          border: 1px solid var(--color-border);
        }

        .nav-item:hover .mega-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .mega-menu ul {
          list-style: none;
        }

        .mega-menu li {
          margin-bottom: 0.75rem;
        }

        .mega-menu a {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .mega-menu a:hover {
          color: var(--color-primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .lang-btn, .login-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--color-text-main);
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
          max-height: calc(100vh - 80px);
          overflow-y: auto;
        }

        .mobile-group {
          margin-bottom: 2rem;
        }

        .mobile-group-title {
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .mobile-group ul {
          list-style: none;
        }

        .mobile-group li {
          margin-bottom: 0.75rem;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: block;
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
