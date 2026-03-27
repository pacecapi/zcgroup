import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, Users, Zap, FileText, Wrench, Building2, Sun, ArrowRight, ArrowLeft, Phone, Mail, Clock, Award, Target, Hammer, Send, Loader2 } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';
import heroImg1 from '../assets/Solcellsmontage1.jpg';
import heroImg2 from '../assets/Solcellsmontage2.png';
import heroImg3 from '../assets/Solcellsmontage3.png';

const Solcellsmontage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const result = await sendEmail('solcellsmontage', formData);

        setIsSubmitting(false);
        if (result.success) {
            setSubmitStatus('success');
            setFormData({
                companyName: '',
                contactPerson: '',
                email: '',
                phone: '',
                message: ''
            });
        } else {
            setSubmitStatus('error');
        }
    };

    const features = [
        {
            icon: <Wrench size={32} />,
            title: 'Mekanisk montering',
            desc: 'Vi utför enbart den mekaniska monteringen av montagesystem och solpaneler – inget el-arbete.'
        },
        {
            icon: <Building2 size={32} />,
            title: 'Tak & markinstallationer',
            desc: 'Erfarenhet av alla typer av tak och markbaserade installationer över hela Sverige.'
        },
        {
            icon: <FileText size={32} />,
            title: 'Ni tillhandahåller underlag',
            desc: 'Ni levererar ritningar och tekniskt underlag – vi ansvarar för ett fackmannamässigt montage.'
        },
        {
            icon: <Shield size={32} />,
            title: 'Kvalitet & säkerhet',
            desc: 'Säkert, effektivt montage enligt gällande branschstandarder och säkerhetsföreskrifter.'
        }
    ];

    const whyUs = [
        { icon: <Target size={24} />, text: 'Specialiserad montagepartner' },
        { icon: <Users size={24} />, text: 'Erfarna montörer' },
        { icon: <Clock size={24} />, text: 'Flexibel kapacitet' },
        { icon: <Award size={24} />, text: 'Kvalitetsfokus' },
        { icon: <Hammer size={24} />, text: 'Branschstandarder' },
        { icon: <Zap size={24} />, text: 'Effektivt utförande' },
    ];

    const heroImages = [heroImg1, heroImg2, heroImg3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    const nextSlide = () => setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    const prevSlide = () => setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

    return (
        <div className="app solcellsmontage-page">
            <Header />
            <main>
                {/* Hero Section with Carousel */}
                <section className="hero-section">
                    <div className="hero-carousel">
                        {heroImages.map((img, index) => (
                            <div
                                key={index}
                                className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        ))}
                        <div className="hero-overlay"></div>
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
                                    className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="container hero-content">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>Hem</span>
                        </Link>
                        <div className="hero-text-box">
                            <div className="hero-badge">
                                <Sun size={20} />
                                <span>Montagepartner för solcellsbranschen</span>
                            </div>
                            <h1>Mekanisk montering av montagesystem och solpaneler</h1>
                            <p className="hero-description">
                                Vi är en specialiserad montagepartner som arbetar som underentreprenör åt etablerade
                                solcells- och installationsföretag i hela Sverige.
                            </p>
                            <p className="hero-description">
                                Vi utför enbart den mekaniska monteringen av montagesystem och solpaneler.
                            </p>
                            <div className="hero-cta-group">
                                <a href="#kontakt" className="btn-cta-primary">
                                    Kontakta oss
                                    <ArrowRight size={20} />
                                </a>
                                <a href="#tjanster" className="btn-cta-secondary">
                                    Våra tjänster
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Target Audience Section */}
                <section className="target-section">
                    <div className="container">
                        <div className="target-card">
                            <div className="target-icon">
                                <Building2 size={40} />
                            </div>
                            <div className="target-content">
                                <h2>Våra tjänster riktar sig till företag</h2>
                                <p>
                                    Våra tjänster riktar sig till företag i branschen som behöver en pålitlig,
                                    flexibel och kvalitetsfokuserad montageentreprenör för tak- och markinstallationer.
                                </p>
                                <p className="highlight">
                                    <strong>Ni tillhandahåller ritningar och tekniskt underlag</strong> – och vi ansvarar för
                                    ett säkert, effektivt och fackmannamässigt montage enligt gällande branschstandarder.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="tjanster" className="features-section">
                    <div className="container">
                        <h2 className="section-title">Vad vi erbjuder</h2>
                        <p className="section-subtitle">
                            Som specialiserad underentreprenör fokuserar vi helt på mekanisk montering
                        </p>

                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section className="why-section">
                    <div className="container">
                        <h2 className="section-title">Varför välja oss?</h2>
                        <div className="why-grid">
                            {whyUs.map((item, index) => (
                                <div key={index} className="why-item">
                                    <div className="why-icon">{item.icon}</div>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <h2 className="section-title">Så fungerar samarbetet</h2>
                        <div className="process-grid">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <h3>Kontakt</h3>
                                <p>Ni kontaktar oss med information om ert projekt och behov.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <h3>Underlag</h3>
                                <p>Ni tillhandahåller ritningar, specifikationer och tekniskt underlag.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <h3>Planering</h3>
                                <p>Vi planerar montaget och koordinerar med er tidplan.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <h3>Montage</h3>
                                <p>Vi utför den mekaniska monteringen enligt branschstandarder.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="kontakt" className="contact-section">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h2>Kontakta oss</h2>
                                <p>
                                    Är ni ett solcells- eller installationsföretag som söker en pålitlig
                                    montagepartner? Kontakta oss för att diskutera ert projekt.
                                </p>

                                <div className="contact-details">
                                    <div className="contact-item">
                                        <Phone size={24} />
                                        <div>
                                            <span className="label">Telefon</span>
                                            <a href="tel:+46XXXXXXXX">+46 XX XXX XX XX</a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <Mail size={24} />
                                        <div>
                                            <span className="label">E-post</span>
                                            <a href="mailto:info@zcgroup.se">info@zcgroup.se</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="trust-badges-contact">
                                    <span className="badge-small"><Shield size={16} /> Försäkrad</span>
                                    <span className="badge-small"><Award size={16} /> Kvalitetsfokus</span>
                                    <span className="badge-small"><Users size={16} /> Erfarna montörer</span>
                                </div>
                            </div>

                            <div className="contact-form-card">
                                <h3>Skicka en förfrågan</h3>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="companyName">Företagsnamn *</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="contactPerson">Kontaktperson *</label>
                                            <input
                                                type="text"
                                                id="contactPerson"
                                                name="contactPerson"
                                                value={formData.contactPerson}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Telefon *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-post *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Meddelande</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Berätta om ert projekt..."
                                        ></textarea>
                                    </div>
                                    {submitStatus === 'success' && (
                                        <div className="status-message success">
                                            Tack! Din förfrågan har skickats. Vi återkommer inom kort.
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="status-message error">
                                            Ett fel uppstod. Försök igen eller kontakta oss direkt.
                                        </div>
                                    )}

                                    <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={18} className="spin" />
                                                Skickar...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Skicka förfrågan
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .solcellsmontage-page {
                    --section-padding: 5rem 0;
                }

                /* Hero Section */
                .hero-section {
                    position: relative;
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
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
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(to top, rgba(26, 54, 93, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%);
                    z-index: 1;
                }

                .carousel-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.15);
                    border: none;
                    cursor: pointer;
                    z-index: 15;
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
                    z-index: 15;
                }

                .carousel-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    border: 2px solid white;
                    background: transparent;
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.3s;
                }

                .carousel-dot.active {
                    background: var(--color-brand-yellow);
                    border-color: var(--color-brand-yellow);
                }

                .hero-content {
                    position: relative;
                    z-index: 10;
                    padding-top: 8rem;
                    padding-bottom: 4rem;
                }

                .home-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: white;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-bottom: 2rem;
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: var(--radius-full);
                    transition: all 0.3s ease;
                }

                .home-link:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: translateX(-5px);
                }

                .hero-text-box {
                    max-width: 700px;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--color-brand-yellow);
                    color: #333;
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-full);
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                }

                .hero-section h1 {
                    font-size: 3.5rem;
                    line-height: 1.1;
                    color: white;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
                }

                .hero-description {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.95);
                    line-height: 1.7;
                    margin-bottom: 1rem;
                }

                .hero-cta-group {
                    display: flex;
                    gap: 1rem;
                    margin-top: 2rem;
                    flex-wrap: wrap;
                }

                .btn-cta-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--color-brand-yellow);
                    color: #333;
                    padding: 1rem 2rem;
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
                }

                .btn-cta-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(255, 210, 0, 0.4), 0 2px 0 rgba(184, 152, 0, 1);
                }

                .btn-cta-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: var(--radius-full);
                    font-weight: 600;
                    font-size: 1.1rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .btn-cta-secondary:hover {
                    background: rgba(255, 255, 255, 0.25);
                }

                /* Target Section */
                .target-section {
                    padding: 4rem 0;
                    background: #F8FAFC;
                    margin-top: -3rem;
                    position: relative;
                    z-index: 20;
                }

                .target-card {
                    display: flex;
                    gap: 2rem;
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 3rem;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    max-width: 900px;
                    margin: 0 auto;
                }

                .target-icon {
                    flex-shrink: 0;
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .target-content h2 {
                    font-size: 1.75rem;
                    margin-bottom: 1rem;
                    color: var(--color-text-main);
                }

                .target-content p {
                    color: var(--color-text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1rem;
                }

                .target-content .highlight {
                    background: linear-gradient(135deg, #E8F4FD 0%, #CCE7F7 100%);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border-left: 4px solid var(--color-primary);
                    color: #1a365d;
                }

                /* Features Section */
                .features-section {
                    padding: var(--section-padding);
                    background: white;
                }

                .section-title {
                    text-align: center;
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: var(--color-text-main);
                }

                .section-subtitle {
                    text-align: center;
                    color: var(--color-text-secondary);
                    font-size: 1.1rem;
                    margin-bottom: 3rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }

                .feature-card {
                    background: #F8FAFC;
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    text-align: center;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--color-primary);
                }

                .feature-icon {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin: 0 auto 1.5rem;
                }

                .feature-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.75rem;
                    color: var(--color-text-main);
                }

                .feature-card p {
                    color: var(--color-text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                /* Why Section */
                .why-section {
                    padding: var(--section-padding);
                    background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
                }

                .why-section .section-title {
                    color: white;
                }

                .why-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 1.5rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .why-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    text-align: center;
                }

                .why-icon {
                    width: 60px;
                    height: 60px;
                    background: var(--color-brand-yellow);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #333;
                    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
                }

                .why-item span {
                    color: white;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                /* Process Section */
                .process-section {
                    padding: var(--section-padding);
                    background: #F8FAFC;
                }

                .process-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    position: relative;
                }

                .process-grid::before {
                    content: '';
                    position: absolute;
                    top: 35px;
                    left: 10%;
                    right: 10%;
                    height: 3px;
                    background: linear-gradient(90deg, var(--color-primary), var(--color-brand-yellow));
                    z-index: 0;
                }

                .process-step {
                    text-align: center;
                    position: relative;
                    z-index: 1;
                }

                .step-number {
                    width: 70px;
                    height: 70px;
                    background: var(--color-brand-yellow);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #333;
                    margin: 0 auto 1.5rem;
                    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
                    border: 4px solid white;
                }

                .process-step h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.75rem;
                    color: var(--color-text-main);
                }

                .process-step p {
                    color: var(--color-text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                /* Contact Section */
                .contact-section {
                    padding: var(--section-padding);
                    background: white;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .contact-info h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: var(--color-text-main);
                }

                .contact-info > p {
                    color: var(--color-text-secondary);
                    line-height: 1.7;
                    margin-bottom: 2rem;
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .contact-item svg {
                    width: 50px;
                    height: 50px;
                    padding: 12px;
                    background: #EBF7ED;
                    border-radius: var(--radius-md);
                    color: var(--color-brand-green);
                }

                .contact-item .label {
                    display: block;
                    font-size: 0.85rem;
                    color: var(--color-text-secondary);
                }

                .contact-item a {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    text-decoration: none;
                }

                .contact-item a:hover {
                    color: var(--color-primary);
                }

                .trust-badges-contact {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .badge-small {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #F8FAFC;
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-full);
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                }

                .contact-form-card {
                    background: #F8FAFC;
                    border-radius: var(--radius-lg);
                    padding: 2.5rem;
                }

                .contact-form-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--color-text-main);
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
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
                .form-group textarea {
                    padding: 0.875rem 1rem;
                    border: 2px solid #E2E8F0;
                    border-radius: var(--radius-md);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    background: white;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(0, 140, 207, 0.1);
                }

                .form-group textarea {
                    resize: vertical;
                }

                .btn-submit {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: var(--color-brand-yellow);
                    color: #333;
                    border: none;
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 700;
                    border-radius: var(--radius-full);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
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

                /* Responsive */
                @media (max-width: 1200px) {
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .why-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 992px) {
                    .hero-section h1 {
                        font-size: 2.5rem;
                    }

                    .hero-description {
                        font-size: 1.1rem;
                    }

                    .target-card {
                        flex-direction: column;
                        text-align: center;
                    }

                    .target-icon {
                        margin: 0 auto;
                    }

                    .process-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 3rem;
                    }

                    .process-grid::before {
                        display: none;
                    }

                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .hero-section {
                        min-height: auto;
                        padding: 6rem 0 3rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }

                    .why-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .process-grid {
                        grid-template-columns: 1fr;
                    }

                    .form-row {
                        grid-template-columns: 1fr;
                    }

                    .hero-cta-group {
                        flex-direction: column;
                    }

                    .btn-cta-primary,
                    .btn-cta-secondary {
                        text-align: center;
                        justify-content: center;
                    }

                    .section-title {
                        font-size: 1.75rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Solcellsmontage;
