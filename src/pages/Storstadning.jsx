import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, GraduationCap, Award, ChevronDown, Sparkles, UtensilsCrossed, Bath, Plus, Info, Send, Loader2, User, Mail, Phone, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';
import { useLanguage } from '../context/LanguageContext';
import heroImg1 from '../assets/Storstadning1.avif';
import heroImg2 from '../assets/Storstadning2.avif';
import heroImg3 from '../assets/Storstadning3.avif';

const heroImages = [heroImg3]; // Slide 1: combined img1+img2, Slide 2: img3

const Storstadning = () => {
    const { t, language } = useLanguage();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        city: '',
        size: '',
        propertyType: '',
        preferredDate: '',
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

        const result = await sendEmail('storstadning', formData);

        setIsSubmitting(false);
        if (result.success) {
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                postalCode: '',
                city: '',
                size: '',
                propertyType: '',
                preferredDate: '',
                message: '',
                acceptTerms: false
            });
        } else {
            setSubmitStatus('error');
        }
    };

    // Pricing based on m2
    const getPriceForSize = (size) => {
        const sizeNum = parseInt(size);
        if (!sizeNum) return null;

        const basePrice = 1500;
        const pricePerM2 = 35;
        const totalPrice = basePrice + (sizeNum * pricePerM2);
        const rutPrice = Math.round(totalPrice * 0.5);

        return { totalPrice, rutPrice };
    };

    const priceInfo = getPriceForSize(formData.size);

    const sizeOptions = [
        { value: '', label: t('common.selectSize') },
        { value: '30', label: `${t('common.upTo')} 30 m²` },
        { value: '50', label: '31-50 m²' },
        { value: '70', label: '51-70 m²' },
        { value: '90', label: '71-90 m²' },
        { value: '110', label: '91-110 m²' },
        { value: '130', label: '111-130 m²' },
        { value: '150', label: '131-150 m²' },
        { value: '180', label: '151-180 m²' },
        { value: '200', label: '180+ m²' },
    ];

    const totalSlides = 2; // Slide 0: combined, Slide 1: img3

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentImageIndex((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentImageIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

    return (
        <div className="app storstadning-page">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="service-hero">
                    <div className="hero-carousel">
                        {/* Slide 0: img1 full */}
                        <div
                            className={`hero-slide ${currentImageIndex === 0 ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${heroImg1})` }}
                        />
                        {/* Slide 1: img2 + img3 side by side with divider */}
                        <div className={`hero-slide hero-slide-combined ${currentImageIndex === 1 ? 'active' : ''}`}>
                            <div className="combined-img" style={{ backgroundImage: `url(${heroImg2})` }} />
                            <div className="combined-divider" />
                            <div className="combined-img" style={{ backgroundImage: `url(${heroImg3})` }} />
                        </div>
                        <div className="hero-overlay" />
                        <button className="carousel-nav prev" onClick={prevSlide}>
                            <ArrowLeft size={32} color="white" />
                        </button>
                        <button className="carousel-nav next" onClick={nextSlide}>
                            <ArrowRight size={32} color="white" />
                        </button>
                    </div>
                    <div className="container hero-content">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>{t('common.home')}</span>
                        </Link>
                        <h1>{t('storstadning.title')}</h1>
                        <p className="hero-subtitle">
                            {t('storstadning.subtitle')}
                        </p>
                        <div className="trust-badges">
                            <span className="badge"><Shield size={18} color="#333" /> {t('common.cleaningGuarantee')}</span>
                            <span className="badge"><GraduationCap size={18} color="#333" /> {t('common.trainedStaff')}</span>
                            <span className="badge"><Award size={18} color="#333" /> {t('common.insurance')}</span>
                        </div>
                    </div>
                </section>

                {/* Booking Form Section */}
                <section className="booking-section">
                    <div className="container">
                        <div className="booking-card">
                            <h2>{t('storstadning.bookTitle')}</h2>
                            <p className="form-intro">{t('common.formIntro')}</p>

                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><User size={16} /> {t('common.firstName')} *</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label><User size={16} /> {t('common.lastName')} *</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label><Mail size={16} /> {t('common.email')} *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label><Phone size={16} /> {t('common.phone')} *</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><MapPin size={16} /> {t('common.address')} *</label>
                                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                                </div>

                                <div className="form-row three-col">
                                    <div className="form-group">
                                        <label>{t('common.postalCode')} *</label>
                                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('common.city')} *</label>
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('common.propertyType')}</label>
                                        <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
                                            <option value="">{t('common.selectType')}</option>
                                            <option value="lagenhet">{t('common.apartment')}</option>
                                            <option value="villa">Villa</option>
                                            <option value="radhus">{t('common.townhouse')}</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>{t('common.size')} *</label>
                                        <select name="size" value={formData.size} onChange={handleChange} required>
                                            {sizeOptions.map(opt => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>{t('common.preferredDate')}</label>
                                        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
                                    </div>
                                </div>

                                {priceInfo && (
                                    <div className="price-display">
                                        <div className="price-box">
                                            <span className="price-label">{t('common.priceAfterRut')}</span>
                                            <span className="price-value">{priceInfo.rutPrice.toLocaleString('sv-SE')} kr</span>
                                            <span className="price-original">{t('common.regularPrice')}: {priceInfo.totalPrice.toLocaleString('sv-SE')} kr</span>
                                        </div>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label>{t('common.message')}</label>
                                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder={t('common.messagePlaceholder')}></textarea>
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required />
                                        <span>{t('common.acceptTerms')} <a href="/villkor" className="terms-link">{t('common.terms')}</a></span>
                                    </label>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="status-message success">
                                        <CheckCircle size={20} />
                                        {t('common.successMessage')}
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="status-message error">
                                        {t('common.errorMessage')}
                                    </div>
                                )}

                                <button type="submit" className="btn-cta-booking" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <><Loader2 size={18} className="spin" /> {t('common.sending')}</>
                                    ) : (
                                        <><Send size={18} /> {t('storstadning.bookBtn')}</>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Service Description */}
                <section className="section service-description">
                    <div className="container">
                        <h2 className="section-title">{t('storstadning.whatIncluded')}</h2>

                        <div className="service-grid">
                            {/* Alla rum */}
                            <div className="service-card">
                                <div className="card-header">
                                    <Sparkles size={28} />
                                    <h3>{t('storstadning.allRooms')}</h3>
                                </div>
                                <ul className="service-list">
                                    {(t('storstadning.allRoomsList') || []).map((item, i) => (
                                        <li key={i}><CheckCircle size={16} /> {item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Kök */}
                            <div className="service-card">
                                <div className="card-header">
                                    <UtensilsCrossed size={28} />
                                    <h3>{t('storstadning.kitchen')}</h3>
                                </div>
                                <ul className="service-list">
                                    {(t('storstadning.kitchenList') || []).map((item, i) => (
                                        <li key={i}><CheckCircle size={16} /> {item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Toalett och badrum */}
                            <div className="service-card">
                                <div className="card-header">
                                    <Bath size={28} />
                                    <h3>{t('storstadning.bathroom')}</h3>
                                </div>
                                <ul className="service-list">
                                    {(t('storstadning.bathroomList') || []).map((item, i) => (
                                        <li key={i}><CheckCircle size={16} /> {item}</li>
                                    ))}
                                </ul>
                                <p className="card-note">
                                    {t('storstadning.bathroomNote')}
                                </p>
                            </div>

                            {/* Tilläggstjänster */}
                            <div className="service-card addon-card">
                                <div className="card-header">
                                    <Plus size={28} />
                                    <h3>{t('storstadning.addons')}</h3>
                                </div>
                                <ul className="service-list addon-list">
                                    {(t('storstadning.addonsList') || []).map((item, i) => (
                                        <li key={i}><CheckCircle size={16} /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="info-section">
                            <div className="info-card">
                                <div className="info-header">
                                    <Info size={24} />
                                    <h3>{t('storstadning.infoTitle')}</h3>
                                </div>
                                <div className="info-content">
                                    <p>
                                        {t('storstadning.infoText')}
                                    </p>
                                    <p className="info-note">
                                        <strong>{language === 'sv' ? 'Observera' : language === 'en' ? 'Note' : 'Nota'}:</strong> {t('storstadning.infoNote')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .storstadning-page {
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

                .hero-slide-combined {
                    display: flex;
                    background: none !important;
                    background-image: none !important;
                }

                .hero-slide-combined .combined-img {
                    flex: 1;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                }

                .combined-divider {
                    width: 4px;
                    height: 100%;
                    background: white;
                    flex-shrink: 0;
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

                .carousel-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    z-index: 10;
                    padding: 1rem;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }

                .carousel-nav:hover {
                    opacity: 1;
                }

                .carousel-nav.prev {
                    left: 1rem;
                }

                .carousel-nav.next {
                    right: 1rem;
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
                    position: relative;
                    z-index: 1;
                }

                .hero-subtitle {
                    font-size: 1.2rem;
                    max-width: 700px;
                    margin: 0 auto 2rem;
                    line-height: 1.7;
                    opacity: 0.95;
                    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
                    position: relative;
                    z-index: 1;
                }

                .trust-badges {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    position: relative;
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
                    transition: all 0.3s ease;
                }

                .badge:hover {
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

                /* Booking Section */
                .booking-section {
                    background: #F8FAFC;
                    padding: 4rem 0;
                    margin-top: -2rem;
                    position: relative;
                    z-index: 10;
                }

                .booking-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 3rem;
                    max-width: 600px;
                    margin: 0 auto;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                }

                .booking-card h2 {
                    text-align: center;
                    margin-bottom: 2rem;
                    color: var(--color-text-main);
                    font-size: 1.75rem;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-weight: 600;
                    color: var(--color-text-main);
                    font-size: 0.9rem;
                }

                .form-group input,
                .form-group select {
                    padding: 0.875rem 1rem;
                    border: 2px solid #E2E8F0;
                    border-radius: var(--radius-md);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .form-group input:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(0, 140, 207, 0.1);
                }

                .select-wrapper {
                    position: relative;
                }

                .select-wrapper select {
                    width: 100%;
                    appearance: none;
                    cursor: pointer;
                    padding-right: 2.5rem;
                }

                .select-icon {
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    color: #64748B;
                }

                .price-display {
                    background: linear-gradient(135deg, #EBF7ED 0%, #D4EEDB 100%);
                    border-radius: var(--radius-md);
                    padding: 1.5rem;
                    margin-bottom: 1.5rem;
                    text-align: center;
                    border: 1px solid rgba(61, 174, 73, 0.3);
                }

                .price-box {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .price-label {
                    font-size: 0.875rem;
                    color: #1a365d;
                    font-weight: 500;
                }

                .price-value {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #1a365d;
                }

                .price-original {
                    font-size: 0.875rem;
                    color: #64748B;
                    text-decoration: line-through;
                }

                .checkbox-group {
                    margin-bottom: 1.5rem;
                }

                .checkbox-label {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    cursor: pointer;
                    font-size: 0.9rem;
                }

                .checkbox-label input[type="checkbox"] {
                    width: 20px;
                    height: 20px;
                    accent-color: var(--color-primary);
                }

                .terms-link {
                    color: var(--color-primary);
                    text-decoration: underline;
                }

                .btn-cta-booking {
                    width: 100%;
                    background: var(--color-brand-yellow);
                    color: var(--color-text-main);
                    border: none;
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 700;
                    border-radius: var(--radius-full);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
                }

                .btn-cta-booking:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(255, 210, 0, 0.4), 0 2px 0 rgba(184, 152, 0, 1);
                }

                .btn-cta-booking:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .booking-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .form-intro {
                    text-align: center;
                    color: var(--color-text-secondary);
                    margin-bottom: 1rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }

                .form-row.three-col {
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .form-group label svg {
                    color: var(--color-primary);
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 80px;
                }

                .status-message {
                    padding: 1rem 1.5rem;
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-weight: 600;
                }

                .status-message.success {
                    background: #D1FAE5;
                    color: #065F46;
                    border: 1px solid #6EE7B7;
                }

                .status-message.error {
                    background: #FEE2E2;
                    color: #991B1B;
                    border: 1px solid #FCA5A5;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .spin {
                    animation: spin 1s linear infinite;
                }

                /* Service Description Section */
                .service-description {
                    padding: var(--section-padding);
                }

                .section-title {
                    text-align: center;
                    font-size: 2.5rem;
                    margin-bottom: 3rem;
                    color: var(--color-text-main);
                }

                .service-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .service-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    box-shadow: var(--shadow-md);
                    transition: all 0.3s ease;
                }

                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 2px solid #F1F5F9;
                }

                .card-header svg {
                    color: var(--color-primary);
                }

                .card-header h3 {
                    font-size: 1.4rem;
                    color: var(--color-text-main);
                    margin: 0;
                }

                .service-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .service-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    color: var(--color-text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                .service-list svg {
                    color: var(--color-brand-green);
                    flex-shrink: 0;
                    margin-top: 3px;
                }

                .card-note {
                    margin-top: 1rem;
                    font-size: 0.85rem;
                    color: #64748B;
                    font-style: italic;
                }

                .addon-card {
                    background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
                    border: 1px solid #FDBA74;
                }

                .addon-card .card-header svg {
                    color: #EA580C;
                }

                .addon-list li {
                    color: #9A3412;
                }

                /* Info Section */
                .info-section {
                    max-width: 800px;
                    margin: 0 auto;
                }

                .info-card {
                    background: linear-gradient(135deg, #E8F4FD 0%, #CCE7F7 100%);
                    border: 1px solid rgba(0, 140, 207, 0.3);
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                }

                .info-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .info-header svg {
                    color: var(--color-primary);
                }

                .info-header h3 {
                    margin: 0;
                    color: #1a365d;
                    font-size: 1.25rem;
                }

                .info-content p {
                    color: #1a365d;
                    line-height: 1.7;
                    margin-bottom: 1rem;
                }

                .info-content p:last-child {
                    margin-bottom: 0;
                }

                .info-note {
                    background: rgba(255, 255, 255, 0.5);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border-left: 4px solid #3B82F6;
                }

                /* Responsive */
                @media (max-width: 992px) {
                    .service-hero {
                        min-height: 70vh;
                    }

                    .hero-content {
                        padding: 8rem 0 3rem;
                    }

                    .service-hero h1 {
                        font-size: 2.5rem;
                    }

                    .service-grid {
                        grid-template-columns: 1fr;
                    }

                    .form-grid {
                        grid-template-columns: 1fr;
                    }

                    .booking-card {
                        padding: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .service-hero {
                        min-height: auto;
                    }

                    .hero-content {
                        padding: 7rem 0 2.5rem;
                    }
                }

                @media (max-width: 576px) {
                    .trust-badges {
                        flex-direction: column;
                        align-items: center;
                    }

                    .badge {
                        width: 100%;
                        justify-content: center;
                        max-width: 280px;
                    }

                    .section-title {
                        font-size: 1.75rem;
                    }

                    .service-card {
                        padding: 1.5rem;
                    }

                    .price-value {
                        font-size: 2rem;
                    }

                    .form-row, .form-row.three-col {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Storstadning;
