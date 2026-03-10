import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, GraduationCap, Award, Building2, User, Mail, Phone, MapPin, Send, FileText, Clock, Users } from 'lucide-react';

const Trappstadning = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        orgNumber: '',
        contactPerson: '',
        email: '',
        phone: '',
        propertyAddress: '',
        postalCode: '',
        city: '',
        floors: '',
        apartments: '',
        frequency: '',
        additionalServices: [],
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

    const handleAdditionalService = (service) => {
        setFormData(prev => ({
            ...prev,
            additionalServices: prev.additionalServices.includes(service)
                ? prev.additionalServices.filter(s => s !== service)
                : [...prev.additionalServices, service]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Tack! Vi har mottagit din förfrågan och återkommer inom kort.');
    };

    const services = [
        'Dammsugning och moppning av trappor',
        'Avtorkning av räcken och ledstänger',
        'Putsning av entrépartier och dörrar',
        'Rengöring av hissar',
        'Tvätt av mattor vid entréer',
        'Avtorkning av brevlådor',
        'Fönsterputsning i trapphus',
        'Borttagning av spindelväv',
    ];

    const additionalServicesList = [
        'Fönsterputs trapphus',
        'Putsning av entrédörrar',
        'Rengöring av källare',
        'Städning av tvättstuga',
        'Storstädning 2 ggr/år',
    ];

    const benefits = [
        { title: 'Trygg fastighetsägare', desc: 'Vi skapar en ren och välkomnande miljö för era boende' },
        { title: 'Flexibla avtal', desc: 'Anpassa frekvens och tjänster efter era behov' },
        { title: 'Fast månadskostnad', desc: 'Förutsägbar budget utan överraskningar' },
        { title: 'Kvalitetskontroll', desc: 'Regelbunden uppföljning och dokumentation' },
    ];

    return (
        <div className="app trappstadning-page">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="service-hero">
                    <div className="container">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>Hem</span>
                        </Link>
                        <h1>Trappstädning</h1>
                        <p className="hero-subtitle">
                            Professionell trapphusstädning för bostadsrättsföreningar och fastighetsägare.
                            Vi håller era trapphus rena och välkomnande året runt.
                        </p>
                        <div className="trust-badges">
                            <span className="badge"><Shield size={18} color="#333" /> Städgaranti</span>
                            <span className="badge"><GraduationCap size={18} color="#333" /> Utbildad personal</span>
                            <span className="badge"><Award size={18} color="#333" /> Ansvarsförsäkring</span>
                        </div>
                    </div>
                </section>

                {/* Services Included */}
                <section className="services-included">
                    <div className="container">
                        <div className="services-card">
                            <div className="services-icon">
                                <Building2 size={32} />
                            </div>
                            <div className="services-content">
                                <h2>Vad ingår i trappstädning?</h2>
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

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="container">
                        <h2>Fördelar med vår trappstädning</h2>
                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Booking Form */}
                <section className="form-section">
                    <div className="container">
                        <div className="form-card">
                            <h2>Begär offert för trappstädning</h2>
                            <p className="form-intro">Fyll i formuläret så kontaktar vi dig med en skräddarsydd offert för er fastighet.</p>

                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><Building2 size={16} /> Företag/BRF-namn *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><FileText size={16} /> Organisationsnummer *</label>
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
                                        <label><User size={16} /> Kontaktperson *</label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><Phone size={16} /> Telefon *</label>
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
                                    <label><Mail size={16} /> E-post *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label><MapPin size={16} /> Fastighetsadress *</label>
                                    <input
                                        type="text"
                                        name="propertyAddress"
                                        value={formData.propertyAddress}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-row three-col">
                                    <div className="form-group">
                                        <label>Postnummer *</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ort *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Antal våningar</label>
                                        <select
                                            name="floors"
                                            value={formData.floors}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj</option>
                                            <option value="1-2">1-2 våningar</option>
                                            <option value="3-4">3-4 våningar</option>
                                            <option value="5-6">5-6 våningar</option>
                                            <option value="7+">7+ våningar</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label><Users size={16} /> Antal lägenheter</label>
                                        <select
                                            name="apartments"
                                            value={formData.apartments}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj</option>
                                            <option value="1-10">1-10</option>
                                            <option value="11-20">11-20</option>
                                            <option value="21-40">21-40</option>
                                            <option value="41-60">41-60</option>
                                            <option value="60+">Över 60</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label><Clock size={16} /> Önskad frekvens</label>
                                        <select
                                            name="frequency"
                                            value={formData.frequency}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj frekvens</option>
                                            <option value="weekly">1 gång/vecka</option>
                                            <option value="biweekly">Varannan vecka</option>
                                            <option value="monthly">1 gång/månad</option>
                                            <option value="other">Annat</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Tilläggstjänster</label>
                                    <div className="additional-services">
                                        {additionalServicesList.map((service, index) => (
                                            <label key={index} className="service-checkbox">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.additionalServices.includes(service)}
                                                    onChange={() => handleAdditionalService(service)}
                                                />
                                                <span>{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Meddelande</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Berätta gärna mer om er fastighet och era städbehov..."
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
                                        <span>Jag accepterar <a href="/villkor">villkoren</a></span>
                                    </label>
                                </div>

                                <button type="submit" className="btn-submit">
                                    <Send size={18} />
                                    Skicka offertförfrågan
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .trappstadning-page {
                    --section-padding: 5rem 0;
                }

                .service-hero {
                    margin-top: 0;
                    background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
                    color: white;
                    padding: 10rem 0 4rem 0;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
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

                .service-hero h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1.5rem;
                    color: #1a365d;
                    font-weight: 800;
                    position: relative;
                    z-index: 1;
                }

                .hero-subtitle {
                    font-size: 1.2rem;
                    max-width: 700px;
                    margin: 0 auto 2rem;
                    line-height: 1.7;
                    opacity: 0.95;
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

                /* Benefits Section */
                .benefits-section {
                    padding: 4rem 0;
                    background: white;
                }

                .benefits-section h2 {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .benefit-card {
                    text-align: center;
                    padding: 2rem 1.5rem;
                    background: #F8FAFC;
                    border-radius: var(--radius-lg);
                    border: 2px solid transparent;
                    transition: all 0.3s ease;
                }

                .benefit-card:hover {
                    border-color: var(--color-brand-yellow);
                    transform: translateY(-5px);
                }

                .benefit-card h3 {
                    color: var(--color-primary);
                    margin-bottom: 0.5rem;
                    font-size: 1.1rem;
                }

                .benefit-card p {
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

                .additional-services {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.75rem;
                    margin-top: 0.5rem;
                }

                .service-checkbox {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    padding: 0.75rem 1rem;
                    background: #F8FAFC;
                    border-radius: var(--radius-md);
                    transition: all 0.2s ease;
                }

                .service-checkbox:hover {
                    background: #EDF2F7;
                }

                .service-checkbox input {
                    width: 18px;
                    height: 18px;
                    accent-color: var(--color-primary);
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

                .btn-submit:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(255, 210, 0, 0.4), 0 2px 0 rgba(184, 152, 0, 1);
                }

                @media (max-width: 992px) {
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
                    .benefits-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .service-hero {
                        padding: 8rem 0 3rem;
                    }
                    .form-row, .form-row.three-col {
                        grid-template-columns: 1fr;
                    }
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                    .additional-services {
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
                    .benefits-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Trappstadning;
