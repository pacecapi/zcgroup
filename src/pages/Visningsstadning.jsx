import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, GraduationCap, Award, ChevronDown, Sparkles, Eye, Calendar, Clock, User, Mail, Phone, MapPin, Send } from 'lucide-react';

const Visningsstadning = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        city: '',
        propertyType: '',
        size: '',
        preferredDate: '',
        timeSlot: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the form data to your email service
        console.log('Form submitted:', formData);
        alert('Tack! Vi har mottagit din förfrågan och återkommer inom kort.');
    };

    const services = [
        'Dammsugning och våttorkning av alla golv',
        'Rengöring av kök och vitvaror utvändigt',
        'Badrum och toalett rengörs noggrant',
        'Fönsterputsning (in- och utvändigt)',
        'Dammtorkning av alla ytor',
        'Putsning av speglar och glasytor',
        'Avtorkning av dörrar och karmar',
        'Städning av garderober och skåp',
    ];

    return (
        <div className="app visningsstadning-page">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="service-hero">
                    <div className="container">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>Hem</span>
                        </Link>
                        <h1>Visningsstädning</h1>
                        <p className="hero-subtitle">
                            Maximera intrycket vid din bostadsvisning. Vi ser till att varje rum
                            glänser och ger potentiella köpare det bästa första intrycket.
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
                                <Eye size={32} />
                            </div>
                            <div className="services-content">
                                <h2>Vad ingår i visningsstädning?</h2>
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

                {/* Booking Form */}
                <section className="form-section">
                    <div className="container">
                        <div className="form-card">
                            <h2>Boka visningsstädning</h2>
                            <p className="form-intro">Fyll i formuläret så kontaktar vi dig för att bekräfta bokningen.</p>

                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><User size={16} /> Förnamn *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><User size={16} /> Efternamn *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
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
                                    <label><MapPin size={16} /> Adress *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
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
                                        <label>Bostadstyp</label>
                                        <select
                                            name="propertyType"
                                            value={formData.propertyType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj typ</option>
                                            <option value="lagenhet">Lägenhet</option>
                                            <option value="villa">Villa</option>
                                            <option value="radhus">Radhus</option>
                                            <option value="annat">Annat</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Storlek (m²)</label>
                                        <select
                                            name="size"
                                            value={formData.size}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj storlek</option>
                                            <option value="30">Upp till 30 m²</option>
                                            <option value="50">31-50 m²</option>
                                            <option value="70">51-70 m²</option>
                                            <option value="90">71-90 m²</option>
                                            <option value="110">91-110 m²</option>
                                            <option value="130">111-130 m²</option>
                                            <option value="150">131-150 m²</option>
                                            <option value="180">150+ m²</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label><Calendar size={16} /> Önskat datum *</label>
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><Clock size={16} /> Tid</label>
                                        <select
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj tid</option>
                                            <option value="morning">Förmiddag (08-12)</option>
                                            <option value="afternoon">Eftermiddag (12-17)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Meddelande</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Berätta gärna mer om din bostad eller speciella önskemål..."
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
                                    Skicka bokningsförfrågan
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .visningsstadning-page {
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
                    .trust-badges {
                        flex-direction: column;
                        align-items: center;
                    }
                    .badge {
                        width: 100%;
                        justify-content: center;
                        max-width: 280px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Visningsstadning;
