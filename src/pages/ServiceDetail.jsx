import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle } from 'lucide-react';

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

    return (
        <div className="app">
            <Header />
            <main>
                <section className="service-hero">
                    <div className="container">
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
                    margin-top: 110px;
                    background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80') center/cover;
                    color: white;
                    padding: 8rem 0;
                    text-align: center;
                }
                .service-hero h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                }
                .hero-subtitle {
                    font-size: 1.25rem;
                    max-width: 700px;
                    margin: 0 auto 2rem;
                    opacity: 0.9;
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
                    transition: transform 0.2s;
                }
                .btn-cta-main:hover {
                    transform: scale(1.05);
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
                    .service-content-grid {
                        grid-template-columns: 1fr;
                    }
                    .service-hero h1 {
                        font-size: 2.5rem;
                    }
                    .include-list {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServiceDetail;
