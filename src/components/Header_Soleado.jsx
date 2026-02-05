import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import './Header_Soleado.css';

const Header_Soleado = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header-soleado">
            <div className="container header-soleado__container">
                <div className="header-soleado__logo">
                    <a href="/" className="logo-link">
                        <img src={logo} alt="ZC Group" className="logo-img" />
                        <span className="logo-text">ZC Group</span>
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="header-soleado__nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#cleantech" className="nav-link">Clean Tech</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#news" className="nav-link">News</a>
                        </li>
                    </ul>
                </nav>

                <div className="header-soleado__actions">
                    <a href="#contact" className="btn-contact-soleado">Contact</a>
                    <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="mobile-nav-soleado">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#cleantech">Clean Tech</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact" className="mobile-contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header_Soleado;
