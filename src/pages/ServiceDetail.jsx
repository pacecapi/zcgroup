import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, Home } from 'lucide-react';
import hemstadningImg from '../assets/Hemstadning1.jpg';

const heroImages = {
    'hemstadning': hemstadningImg,
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const { t, language } = useLanguage();

    // Map common slug to the translation key used in context
    const slugToKey = {
        'flyttstadning': 'moving',
        'storstadning': 'deepCleaning',
        'hemstadning': 'cleaning',
        'visningsstadning': 'visning',
        'fonsterputs': 'window',
        'kontorsstadning': 'office',
        'byggstadning': 'construction',
        'trappstadning': 'staircase'
    };

    const serviceKey = slugToKey[slug];

    if (!serviceKey) {
        return <Navigate to="/" />;
    }

    const serviceData = {
        title: t(`services.${serviceKey}.title`),
        desc: t(`services.${serviceKey}.desc`),
    };

    const heroImage = heroImages[slug];

    return (
        <div className="app">
            <Header />
            <main>
                <section className={`service-hero ${heroImage ? 'has-image' : ''}`}>
                    {heroImage && (
                        <div className="hero-carousel">
                            <div
                                className="hero-slide active"
                                style={{ backgroundImage: `url(${heroImage})` }}
                            />
                            <div className="hero-overlay" />
                        </div>
                    )}
                    <div className={`container ${heroImage ? 'hero-content' : ''}`}>
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>{language === 'sv' ? 'Hem' : language === 'en' ? 'Home' : 'Inicio'}</span>
                        </Link>
                        <h1>{serviceData.title}</h1>
                        <p className="hero-subtitle">{serviceData.desc}</p>
                        <button className="btn-cta-main">{t('hero.cta')}</button>
                    </div>
                </section>

                <section className="section bg-light">
                    <div className="container">
                        <div className="service-content-grid">
                            <div className="content-main">
                                <h2>{language === 'sv' ? 'Vad ingår?' : language === 'en' ? 'What is included?' : '¿Qué incluye?'}</h2>
                                <p>
                                    {language === 'sv'
                                        ? `Vi erbjuder professionell ${serviceData.title.toLowerCase()} med fokus på kvalitet och noggrannhet. Vårt team ser till att varje hörn blir skinande rent.`
                                        : language === 'en'
                                            ? `We offer professional ${serviceData.title.toLowerCase()} with a focus on quality and accuracy. Our team ensures that every corner is sparkling clean.`
                                            : `Ofrecemos ${serviceData.title.toLowerCase()} profesional con un enfoque en la calidad y el detalle. Nuestro equipo se asegura de que cada rincón quede impecable.`}
                                </p>
                                <ul className="include-list">
                                    <li><CheckCircle size={18} /> {language === 'sv' ? 'Utbildad personal' : language === 'en' ? 'Trained staff' : 'Personal capacitado'}</li>
                                    <li><CheckCircle size={18} /> {language === 'sv' ? 'Svanenmärkt material' : language === 'en' ? 'Eco-friendly materials' : 'Materiales ecológicos'}</li>
                                    <li><CheckCircle size={18} /> {language === 'sv' ? 'Garantisystem' : language === 'en' ? 'Quality guarantee' : 'Garantía de calidad'}</li>
                                    <li><CheckCircle size={18} /> {language === 'sv' ? 'Försäkring ingår' : language === 'en' ? 'Insurance included' : 'Seguro incluido'}</li>
                                </ul>
                            </div>
                            <div className="content-sidebar">
                                <div className="card quote-card">
                                    <h3>{t('hero.cta')}</h3>
                                    <p>{t('hero.note')}</p>
                                    <input type="text" placeholder={t('hero.inputPlaceholder')} className="input-field" />
                                    <button className="btn-primary-full">{t('hero.cta')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .service-hero {
                    margin-top: 0;
                    background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
                    color: white;
                    padding: 12rem 0 6rem 0;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .service-hero.has-image {
                    padding: 0;
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: none;
                }
                .service-hero.has-image::before,
                .service-hero.has-image::after {
                    display: none;
                }
                .hero-carousel {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }
                .hero-slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                }
                .hero-slide.active {
                    opacity: 1;
                }
                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to top, rgba(26, 54, 93, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%);
                    z-index: 1;
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    padding: 10rem 0 4rem 0;
                }
                .service-hero.has-image h1 {
                    color: white;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }
                .service-hero.has-image .hero-subtitle {
                    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
                }
                .service-hero::before {
                    content: '';
                    position: absolute;
                    top: -20%;
                    left: -10%;
                    width: 60%;
                    height: 60%;
                    background: radial-gradient(circle, rgba(255, 210, 0, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                }
                .service-hero::after {
                    content: '';
                    position: absolute;
                    bottom: -10%;
                    right: 10%;
                    width: 40%;
                    height: 40%;
                    background: radial-gradient(circle, rgba(0, 140, 207, 0.3) 0%, transparent 70%);
                    pointer-events: none;
                }
                .service-hero h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                    color: #006699;
                    font-weight: 800;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    position: relative;
                    z-index: 1;
                }
                .hero-subtitle {
                    font-size: 1.25rem;
                    max-width: 700px;
                    margin: 0 auto 2rem;
                    opacity: 0.95;
                    position: relative;
                    z-index: 1;
                }
                .btn-cta-main {
                    background: var(--color-brand-yellow);
                    color: var(--color-text-main);
                    border: none;
                    padding: 1rem 2.5rem;
                    font-weight: 700;
                    font-size: 1.1rem;
                    border-radius: var(--radius-full);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
                    position: relative;
                    z-index: 1;
                }
                .btn-cta-main:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(255, 210, 0, 0.4), 0 2px 0 rgba(184, 152, 0, 1);
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
                .bg-light {
                    background-color: #F8FAFC;
                }
                .service-content-grid {
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 4rem;
                }
                .content-main h2 {
                    margin-bottom: 1.5rem;
                    color: var(--color-text-main);
                }
                .include-list {
                    list-style: none;
                    margin-top: 2rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                .include-list li {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 500;
                    color: var(--color-text-secondary);
                }
                .include-list svg {
                    color: var(--color-brand-green);
                }
                .quote-card {
                    background: white;
                    padding: 2rem;
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-md);
                    text-align: center;
                }
                .quote-card h3 {
                    margin-bottom: 1rem;
                }
                .input-field {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    margin-bottom: 1rem;
                }
                .btn-primary-full {
                    width: 100%;
                    background: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 0.75rem;
                    border-radius: var(--radius-md);
                    font-weight: 600;
                    cursor: pointer;
                }

                @media (max-width: 992px) {
                    .service-hero {
                        padding: 10rem 0 4rem 0;
                    }
                    .service-hero.has-image {
                        min-height: 70vh;
                        padding: 0;
                    }
                    .hero-content {
                        padding: 8rem 0 3rem;
                    }
                    .service-content-grid {
                        grid-template-columns: 1fr;
                    }
                    .service-hero h1 {
                        font-size: 2.2rem;
                    }
                    .include-list {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .service-hero.has-image {
                        min-height: auto;
                    }
                    .hero-content {
                        padding: 7rem 0 2.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServiceDetail;
