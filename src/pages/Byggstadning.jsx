import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, GraduationCap, Award, HardHat, Building2, User, Mail, Phone, MapPin, Send, FileText, Calendar, Loader2 } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';

const Byggstadning = () => {
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
        'Borttagning av byggdamm och skräp',
        'Rengöring av golv och ytor',
        'Fönsterputsning efter byggnation',
        'Sanering av byggmaterial',
        'Avtorkning av väggar och tak',
        'Rengöring av ventilationsgaller',
        'Polering av lackerade ytor',
        'Slutbesiktningsstädning',
    ];

    const cleaningTypes = [
        { title: 'Grovstädning', desc: 'Under och direkt efter byggarbetet' },
        { title: 'Finstädning', desc: 'Inför slutbesiktning eller inflyttning' },
        { title: 'Slutstädning', desc: 'Komplett städning av färdigt projekt' },
        { title: 'Löpande städning', desc: 'Regelbunden städning under byggtid' },
    ];

    return (
        <div className="app byggstadning-page">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="service-hero">
                    <div className="container">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>Hem</span>
                        </Link>
                        <h1>Byggstädning</h1>
                        <p className="hero-subtitle">
                            Professionell byggstädning för alla typer av byggprojekt.
                            Vi tar hand om allt från grovstädning till slutbesiktning.
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
                                <HardHat size={32} />
                            </div>
                            <div className="services-content">
                                <h2>Vad ingår i byggstädning?</h2>
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
                        <h2>Typer av byggstädning</h2>
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
                            <h2>Begär offert för byggstädning</h2>
                            <p className="form-intro">Fyll i formuläret så kontaktar vi dig med en skräddarsydd offert för ert byggprojekt.</p>

                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><Building2 size={16} /> Företagsnamn *</label>
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
                                    <label><MapPin size={16} /> Projektadress *</label>
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
                                        <label>Projekttyp</label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj typ</option>
                                            <option value="nyproduktion">Nyproduktion</option>
                                            <option value="renovering">Renovering</option>
                                            <option value="ombyggnad">Ombyggnad</option>
                                            <option value="tillbyggnad">Tillbyggnad</option>
                                            <option value="annat">Annat</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Projektstorlek (m²)</label>
                                        <select
                                            name="projectSize"
                                            value={formData.projectSize}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj storlek</option>
                                            <option value="100">Upp till 100 m²</option>
                                            <option value="300">101-300 m²</option>
                                            <option value="500">301-500 m²</option>
                                            <option value="1000">501-1000 m²</option>
                                            <option value="2000">1001-2000 m²</option>
                                            <option value="2000+">Över 2000 m²</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Typ av städning</label>
                                        <select
                                            name="cleaningType"
                                            value={formData.cleaningType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj typ</option>
                                            <option value="grov">Grovstädning</option>
                                            <option value="fin">Finstädning</option>
                                            <option value="slut">Slutstädning</option>
                                            <option value="lopande">Löpande städning</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><Calendar size={16} /> Önskat startdatum</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Meddelande</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Berätta gärna mer om ert byggprojekt och era städbehov..."
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

                                {submitStatus === 'success' && (
                                    <div className="status-message success">
                                        Tack! Din offertförfrågan har skickats. Vi återkommer inom kort.
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
                                            Skicka offertförfrågan
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
                    .types-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Byggstadning;
