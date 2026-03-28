import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, GraduationCap, Award, HardHat, Building2, User, Mail, Phone, MapPin, Send, FileText, Calendar, Loader2, ArrowLeft, ArrowRight } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';
import { useLanguage } from '../context/LanguageContext';
import heroImg1 from '../assets/Byggstadningimage_1.jpg';
import heroImg2 from '../assets/Byggstadningimage_2.jpg';

const Byggstadning = () => {
    const { t, language } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        companyName: '',
        orgNumber: '',
        contactPerson: '',
        email: '',
        phone: '',
        projectAddress: '',
        postalCode: '',
        city: '',
        projectType: '',
        projectSize: '',
        startDate: '',
        cleaningType: '',
        message: '',
        acceptTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const result = await sendEmail('byggstadning', formData);

        setIsSubmitting(false);
        if (result.success) {
            setSubmitStatus('success');
            setFormData({
                companyName: '',
                orgNumber: '',
                contactPerson: '',
                email: '',
                phone: '',
                projectAddress: '',
                postalCode: '',
                city: '',
                projectType: '',
                projectSize: '',
                startDate: '',
                cleaningType: '',
                message: '',
                acceptTerms: false
            });
        } else {
            setSubmitStatus('error');
        }
    };

    const services = [
        t('byggstadning.service1'),
        t('byggstadning.service2'),
        t('byggstadning.service3'),
        t('byggstadning.service4'),
        t('byggstadning.service5'),
        t('byggstadning.service6'),
        t('byggstadning.service7'),
        t('byggstadning.service8'),
    ];

    const heroImages = [heroImg1, heroImg2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    const nextSlide = () => setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    const prevSlide = () => setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

    const cleaningTypes = [
        { title: t('byggstadning.roughCleaning'), desc: t('byggstadning.roughCleaningDesc') },
        { title: t('byggstadning.fineCleaning'), desc: t('byggstadning.fineCleaningDesc') },
        { title: t('byggstadning.finalCleaning'), desc: t('byggstadning.finalCleaningDesc') },
        { title: t('byggstadning.ongoingCleaning'), desc: t('byggstadning.ongoingCleaningDesc') },
    ];

    return (
        <div className="app byggstadning-page">
            <Header />
            <main>
                {/* Hero Section with Carousel */}
                <section className="service-hero">
                    <div className="hero-carousel">
                        {heroImages.map((img, index) => (
                            <div
                                key={index}
                                className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                {index === 1 && (
                                    <>
                                        <span className="before-after-label label-antes">{t('byggstadning.before')}</span>
                                        <span className="before-after-label label-despues">{t('byggstadning.after')}</span>
                                    </>
                                )}
                            </div>
                        ))}
                        <div className="hero-overlay" />
                        <button className="carousel-nav prev" onClick={prevSlide}>
                            <ArrowLeft size={28} color="white" />
                        </button>
                        <button className="carousel-nav next" onClick={nextSlide}>
                            <ArrowRight size={28} color="white" />
                        </button>
                        <div className="carousel-dots">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="container hero-content">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>{t('common.home')}</span>
                        </Link>
                        <h1>{t('byggstadning.title')}</h1>
                        <p className="hero-subtitle">
                            {t('byggstadning.subtitle')}
                        </p>
                        <div className="trust-badges">
                            <span className="badge"><Shield size={18} color="#333" /> {t('common.cleaningGuarantee')}</span>
                            <span className="badge"><GraduationCap size={18} color="#333" /> {t('common.trainedStaff')}</span>
                            <span className="badge"><Award size={18} color="#333" /> {t('common.insurance')}</span>
                        </div>
                    </div>
                </section>

                {/* Services Included */}
                <section className="services-included">
                    <div className="container">
                        <div className="services-card">
                            <div className="services-icon">
                                <HardHat size={32} />
                            </div>
                            <div className="services-content">
                                <h2>{t('byggstadning.servicesTitle')}</h2>
                                <div className="services-grid">
                                    {services.map((service, index) => (
                                        <div key={index} className="service-item">
                                            <CheckCircle size={18} />
                                            <span>{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cleaning Types Section */}
                <section className="types-section">
                    <div className="container">
                        <h2>{t('byggstadning.typesTitle')}</h2>
                        <div className="types-grid">
                            {cleaningTypes.map((type, index) => (
                                <div key={index} className="type-card">
                                    <h3>{type.title}</h3>
                                    <p>{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Booking Form */}
                <section className="form-section">
                    <div className="container">
                        <div className="form-card">
                            <h2>{t('byggstadning.bookTitle')}</h2>
                            <p className="form-intro">{t('common.formIntro')}</p>

                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><Building2 size={16} /> {t('byggstadning.companyName')} *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><FileText size={16} /> {t('byggstadning.orgNumber')} *</label>
                                        <input
                                            type="text"
                                            name="orgNumber"
                                            value={formData.orgNumber}
                                            onChange={handleChange}
                                            placeholder="XXXXXX-XXXX"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label><User size={16} /> {t('byggstadning.contactPerson')} *</label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><Phone size={16} /> {t('common.phone')} *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><Mail size={16} /> {t('common.email')} *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label><MapPin size={16} /> {t('byggstadning.projectAddress')} *</label>
                                    <input
                                        type="text"
                                        name="projectAddress"
                                        value={formData.projectAddress}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-row three-col">
                                    <div className="form-group">
                                        <label>{t('common.postalCode')} *</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('common.city')} *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('byggstadning.projectType')}</label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                        >
                                            <option value="">{t('byggstadning.selectProjectType')}</option>
                                            <option value="nyproduktion">{t('byggstadning.newBuild')}</option>
                                            <option value="renovering">{t('byggstadning.renovation')}</option>
                                            <option value="ombyggnad">{t('byggstadning.remodel')}</option>
                                            <option value="tillbyggnad">{t('byggstadning.extension')}</option>
                                            <option value="annat">{t('byggstadning.other')}</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>{t('byggstadning.area')}</label>
                                        <select
                                            name="projectSize"
                                            value={formData.projectSize}
                                            onChange={handleChange}
                                        >
                                            <option value="">{t('byggstadning.selectSize')}</option>
                                            <option value="100">{t('byggstadning.upTo100')}</option>
                                            <option value="300">101-300 m²</option>
                                            <option value="500">301-500 m²</option>
                                            <option value="1000">501-1000 m²</option>
                                            <option value="2000">1001-2000 m²</option>
                                            <option value="2000+">{t('byggstadning.over2000')}</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>{t('byggstadning.cleaningType')}</label>
                                        <select
                                            name="cleaningType"
                                            value={formData.cleaningType}
                                            onChange={handleChange}
                                        >
                                            <option value="">{t('byggstadning.selectCleaningType')}</option>
                                            <option value="grov">{t('byggstadning.roughCleaning')}</option>
                                            <option value="fin">{t('byggstadning.fineCleaning')}</option>
                                            <option value="slut">{t('byggstadning.finalCleaning')}</option>
                                            <option value="lopande">{t('byggstadning.ongoingCleaning')}</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><Calendar size={16} /> {t('common.preferredDate')}</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>{t('common.message')}</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t('common.messagePlaceholder')}
                                    ></textarea>
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="acceptTerms"
                                            checked={formData.acceptTerms}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span>{t('common.acceptTerms')} <a href="/villkor">{t('common.terms')}</a></span>
                                    </label>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="status-message success">
                                        {t('common.successMessage')}
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="status-message error">
                                        {t('common.errorMessage')}
                                    </div>
                                )}

                                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="spin" />
                                            {t('common.sending')}
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            {t('byggstadning.bookBtn')}
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .byggstadning-page {
                    --section-padding: 5rem 0;
                }

                .service-hero {
                    margin-top: 0;
                    color: white;
                    padding: 0;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
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

                .before-after-label {
                    position: absolute;
                    bottom: 8%;
                    background: #6BC24A;
                    color: white;
                    font-weight: 800;
                    font-size: 1.2rem;
                    padding: 0.5rem 1.5rem;
                    border-radius: var(--radius-full);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    z-index: 2;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                }

                .label-antes {
                    left: 15%;
                }

                .label-despues {
                    right: 15%;
                }

                .carousel-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.15);
                    border: none;
                    cursor: pointer;
                    z-index: 5;
                    padding: 0.75rem;
                    border-radius: 50%;
                    opacity: 0.7;
                    transition: all 0.3s;
                }

                .carousel-nav:hover {
                    opacity: 1;
                    background: rgba(255, 255, 255, 0.25);
                }

                .carousel-nav.prev {
                    left: 1.5rem;
                }

                .carousel-nav.next {
                    right: 1.5rem;
                }

                .carousel-dots {
                    position: absolute;
                    bottom: 1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 0.5rem;
                    z-index: 5;
                }

                .dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    border: 2px solid white;
                    background: transparent;
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.3s;
                }

                .dot.active {
                    background: var(--color-brand-yellow);
                    border-color: var(--color-brand-yellow);
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    padding: 10rem 0 4rem 0;
                }

                .service-hero h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1.5rem;
                    color: white;
                    font-weight: 800;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }

                .hero-subtitle {
                    font-size: 1.2rem;
                    max-width: 700px;
                    margin: 0 auto 2rem;
                    line-height: 1.7;
                    opacity: 0.95;
                    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
                }

                .trust-badges {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    z-index: 1;
                }

                .badge {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--color-brand-yellow);
                    color: var(--color-text-main);
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.9rem;
                    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
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
                }

                /* Services Included */
                .services-included {
                    padding: 4rem 0;
                    background: #F8FAFC;
                    margin-top: -2rem;
                    position: relative;
                    z-index: 10;
                }

                .services-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 3rem;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    display: flex;
                    gap: 2rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .services-icon {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }

                .services-content h2 {
                    margin-bottom: 1.5rem;
                    color: var(--color-text-main);
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.75rem;
                }

                .service-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-text-secondary);
                }

                .service-item svg {
                    color: var(--color-brand-green);
                    flex-shrink: 0;
                }

                /* Types Section */
                .types-section {
                    padding: 4rem 0;
                    background: white;
                }

                .types-section h2 {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .types-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .type-card {
                    text-align: center;
                    padding: 2rem 1.5rem;
                    background: #F8FAFC;
                    border-radius: var(--radius-lg);
                    border: 2px solid transparent;
                    transition: all 0.3s ease;
                }

                .type-card:hover {
                    border-color: var(--color-brand-yellow);
                    transform: translateY(-5px);
                }

                .type-card h3 {
                    color: var(--color-primary);
                    margin-bottom: 0.5rem;
                    font-size: 1.1rem;
                }

                .type-card p {
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                }

                /* Form Section */
                .form-section {
                    padding: var(--section-padding);
                    background: #F8FAFC;
                }

                .form-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 3rem;
                    max-width: 800px;
                    margin: 0 auto;
                    box-shadow: var(--shadow-lg);
                }

                .form-card h2 {
                    text-align: center;
                    margin-bottom: 0.5rem;
                }

                .form-intro {
                    text-align: center;
                    color: var(--color-text-secondary);
                    margin-bottom: 2rem;
                }

                .booking-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-row.three-col {
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: var(--color-text-main);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .form-group label svg {
                    color: var(--color-primary);
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    padding: 0.875rem 1rem;
                    border: 2px solid #E2E8F0;
                    border-radius: var(--radius-md);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(0, 140, 207, 0.1);
                }

                .checkbox-group {
                    margin-top: 0.5rem;
                }

                .checkbox-label {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    cursor: pointer;
                }

                .checkbox-label input {
                    width: 20px;
                    height: 20px;
                    accent-color: var(--color-primary);
                }

                .checkbox-label a {
                    color: var(--color-primary);
                    text-decoration: underline;
                }

                .btn-submit {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    background: var(--color-brand-yellow);
                    color: var(--color-text-main);
                    border: none;
                    padding: 1.25rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 700;
                    border-radius: var(--radius-full);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
                    margin-top: 1rem;
                }

                .btn-submit:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(255, 210, 0, 0.4), 0 2px 0 rgba(184, 152, 0, 1);
                }

                .btn-submit:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .status-message {
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    text-align: center;
                    font-weight: 600;
                }

                .status-message.success {
                    background: #D1FAE5;
                    color: #065F46;
                }

                .status-message.error {
                    background: #FEE2E2;
                    color: #991B1B;
                }

                .spin {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 992px) {
                    .service-hero {
                        min-height: 500px;
                    }
                    .hero-content {
                        padding: 8rem 0 3rem;
                    }
                    .service-hero h1 {
                        font-size: 2.5rem;
                    }
                    .services-card {
                        flex-direction: column;
                        text-align: center;
                    }
                    .services-icon {
                        margin: 0 auto;
                    }
                    .form-card {
                        padding: 2rem;
                    }
                    .types-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .service-hero {
                        min-height: 400px;
                    }
                    .hero-content {
                        padding: 7rem 0 2.5rem;
                    }
                    .form-row, .form-row.three-col {
                        grid-template-columns: 1fr;
                    }
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                    .trust-badges {
                        flex-direction: column;
                        align-items: center;
                    }
                    .badge {
                        width: 100%;
                        justify-content: center;
                        max-width: 280px;
                    }
                    .types-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Byggstadning;
