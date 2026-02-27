import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home } from 'lucide-react';

const SolarProjects = () => {
    return (
        <div className="app">
            <Header />
            <main>
                {/* Hero Section for Solar Projects */}
                <section className="solar-hero">
                    <div className="container">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>Hem</span>
                        </Link>
                        <h1>Våra Solcellsprojekt</h1>
                        <p>Vi hjälper företag och bostadsrättsföreningar att ställa om till förnybar energi.</p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="section">
                    <div className="container">
                        <div className="projects-grid">
                            {/* Placeholder Project 1 */}
                            <div className="project-card">
                                <div className="project-image" style={{ background: '#eee' }}></div>
                                <div className="project-info">
                                    <h3>Bostadsrättsförening Ekdungen</h3>
                                    <p>Installation av 150 solpaneler på tak.</p>
                                    <span className="project-stat">50 kWp installerad effekt</span>
                                </div>
                            </div>

                            {/* Placeholder Project 2 */}
                            <div className="project-card">
                                <div className="project-image" style={{ background: '#eee' }}></div>
                                <div className="project-info">
                                    <h3>Logistikcenter Väst</h3>
                                    <p>Markmonterad anläggning för industrifastighet.</p>
                                    <span className="project-stat">200 kWp installerad effekt</span>
                                </div>
                            </div>

                            {/* Placeholder Project 3 */}
                            <div className="project-card">
                                <div className="project-image" style={{ background: '#eee' }}></div>
                                <div className="project-info">
                                    <h3>Villaområde Solsidan</h3>
                                    <p>Samfällighetslösning för 10 hushåll.</p>
                                    <span className="project-stat">80 kWp installerad effekt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .solar-hero {
                    margin-top: 0;
                    background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
                    color: white;
                    padding: 12rem 0 6rem 0;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .solar-hero::before {
                    content: '';
                    position: absolute;
                    top: -20%;
                    left: -10%;
                    width: 60%;
                    height: 60%;
                    background: radial-gradient(circle, rgba(255, 210, 0, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                }

                .solar-hero::after {
                    content: '';
                    position: absolute;
                    bottom: -10%;
                    right: 10%;
                    width: 40%;
                    height: 40%;
                    background: radial-gradient(circle, rgba(0, 140, 207, 0.3) 0%, transparent 70%);
                    pointer-events: none;
                }

                .solar-hero h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1.5rem;
                    color: #006699;
                    font-weight: 800;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    position: relative;
                    z-index: 1;
                }

                .solar-hero p {
                    font-size: 1.25rem;
                    max-width: 600px;
                    margin: 0 auto;
                    opacity: 0.95;
                    position: relative;
                    z-index: 1;
                }

                .home-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: white;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: var(--radius-full);
                    transition: all 0.3s ease;
                    position: relative;
                    z-index: 1;
                }

                .home-link:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: translateX(-5px);
                }

                @media (max-width: 992px) {
                    .solar-hero {
                        padding: 10rem 0 4rem 0;
                    }
                    .solar-hero h1 {
                        font-size: 2.2rem;
                    }
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 3rem;
                    margin-top: 2rem;
                }

                .project-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                    transition: transform 0.3s ease;
                }
                
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-xl);
                }

                .project-image {
                    height: 250px;
                    width: 100%;
                    background-color: #ddd; /* Placeholder color */
                    background-size: cover;
                    background-position: center;
                }

                .project-info {
                    padding: 2rem;
                }

                .project-info h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-main);
                }
                
                .project-info p {
                    color: var(--color-text-secondary);
                    margin-bottom: 1.5rem;
                }
                
                .project-stat {
                    display: inline-block;
                    background: var(--color-primary-light);
                    color: var(--color-primary);
                    font-weight: 600;
                    font-size: 0.85rem;
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-full);
                }
            `}</style>
        </div>
    );
};

export default SolarProjects;
