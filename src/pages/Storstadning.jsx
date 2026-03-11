import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, GraduationCap, Award, ChevronDown, Sparkles, UtensilsCrossed, Bath, Plus, Info, Send, Loader2, User, Mail, Phone, MapPin } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';

const Storstadning = () => {
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
        { value: '', label: 'Välj storlek' },
        { value: '30', label: 'Upp till 30 m²' },
        { value: '50', label: '31-50 m²' },
        { value: '70', label: '51-70 m²' },
        { value: '90', label: '71-90 m²' },
        { value: '110', label: '91-110 m²' },
        { value: '130', label: '111-130 m²' },
        { value: '150', label: '131-150 m²' },
        { value: '180', label: '151-180 m²' },
        { value: '200', label: '180+ m²' },
    ];

    return (
        <div className="app storstadning-page">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="service-hero">
                    <div className="container">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>Hem</span>
                        </Link>
                        <h1>Storstädning</h1>
                        <p className="hero-subtitle">
                            Storstädning för ett fräscht och välstädat hem eller arbetsplats. Vi utför en grundlig
                            rengöring av alla ytor för att ge ditt utrymme ny energi och ett långvarigt rent resultat.
                        </p>
                        <div className="trust-badges">
                            <span className="badge"><Shield size={18} color="#333" /> Städgaranti</span>
                            <span className="badge"><GraduationCap size={18} color="#333" /> Utbildad personal</span>
                            <span className="badge"><Award size={18} color="#333" /> Ansvarsförsäkring</span>
                        </div>
                    </div>
                </section>

                {/* Booking Form Section */}
                <section className="booking-section">
                    <div className="container">
                        <div className="booking-card">
                            <h2>Boka din storstädning</h2>
                            <p className="form-intro">Fyll i formuläret så kontaktar vi dig för att bekräfta bokningen.</p>

                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><User size={16} /> Förnamn *</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label><User size={16} /> Efternamn *</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label><Mail size={16} /> E-post *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label><Phone size={16} /> Telefon *</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><MapPin size={16} /> Adress *</label>
                                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                                </div>

                                <div className="form-row three-col">
                                    <div className="form-group">
                                        <label>Postnummer *</label>
                                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Ort *</label>
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Bostadstyp</label>
                                        <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
                                            <option value="">Välj typ</option>
                                            <option value="lagenhet">Lägenhet</option>
                                            <option value="villa">Villa</option>
                                            <option value="radhus">Radhus</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Storlek (m²) *</label>
                                        <select name="size" value={formData.size} onChange={handleChange} required>
                                            {sizeOptions.map(opt => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Önskat datum</label>
                                        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
                                    </div>
                                </div>

                                {priceInfo && (
                                    <div className="price-display">
                                        <div className="price-box">
                                            <span className="price-label">Pris efter RUT-avdrag</span>
                                            <span className="price-value">{priceInfo.rutPrice.toLocaleString('sv-SE')} kr</span>
                                            <span className="price-original">Ordinarie: {priceInfo.totalPrice.toLocaleString('sv-SE')} kr</span>
                                        </div>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label>Meddelande</label>
                                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Berätta gärna mer om din bostad eller speciella önskemål..."></textarea>
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required />
                                        <span>Jag accepterar <a href="/villkor" className="terms-link">villkoren</a></span>
                                    </label>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="status-message success">
                                        <CheckCircle size={20} />
                                        Tack! Vi har mottagit din förfrågan och återkommer inom kort.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="status-message error">
                                        Något gick fel. Vänligen försök igen eller kontakta oss direkt.
                                    </div>
                                )}

                                <button type="submit" className="btn-cta-booking" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <><Loader2 size={18} className="spin" /> Skickar...</>
                                    ) : (
                                        <><Send size={18} /> Boka storstädning</>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Service Description */}
                <section className="section service-description">
                    <div className="container">
                        <h2 className="section-title">Vad ingår i Storstädning?</h2>

                        <div className="service-grid">
                            {/* Alla rum */}
                            <div className="service-card">
                                <div className="card-header">
                                    <Sparkles size={28} />
                                    <h3>Alla rum</h3>
                                </div>
                                <ul className="service-list">
                                    <li><CheckCircle size={16} /> Dammsugning och moppning av golv</li>
                                    <li><CheckCircle size={16} /> Dammsugning av mattor även under om möjlighet finns</li>
                                    <li><CheckCircle size={16} /> Dammsugning av klädda och stoppade möbler</li>
                                    <li><CheckCircle size={16} /> Dammtorkning av golvlister, karmar, eluttag, dörrar, fönsterbrädor</li>
                                    <li><CheckCircle size={16} /> Putsning av speglar</li>
                                    <li><CheckCircle size={16} /> Tömning av papperskorgar</li>
                                    <li><CheckCircle size={16} /> Damning av möbler, lampor och tavlor</li>
                                    <li><CheckCircle size={16} /> Dammtorkning av fria ytor på hyllor</li>
                                    <li><CheckCircle size={16} /> Dammtorkning av väggar, element, fria ytor samt ovanpå skåp och garderober</li>
                                </ul>
                            </div>

                            {/* Kök */}
                            <div className="service-card">
                                <div className="card-header">
                                    <UtensilsCrossed size={28} />
                                    <h3>Kök</h3>
                                </div>
                                <ul className="service-list">
                                    <li><CheckCircle size={16} /> Rengöring av mikrovågsugn in- och utvändigt</li>
                                    <li><CheckCircle size={16} /> Rengöring av köksfläkt samt ventiler (ej inuti)</li>
                                    <li><CheckCircle size={16} /> Rengöring av kyl och frys utvändigt</li>
                                    <li><CheckCircle size={16} /> Rengöring av diskmaskin in- och utvändigt</li>
                                    <li><CheckCircle size={16} /> Rengöring av skåp, hyllor och lådor utvändigt</li>
                                    <li><CheckCircle size={16} /> Avtorkning av köksluckor in- och utvändigt</li>
                                    <li><CheckCircle size={16} /> Rengöring av diskho och diskbänk</li>
                                    <li><CheckCircle size={16} /> Rengöring av spis och kakel ovanför diskbänk</li>
                                    <li><CheckCircle size={16} /> Tömning och avtorkning av sopkorg</li>
                                    <li><CheckCircle size={16} /> Rengöring in- och utvändigt i skåp där sopbehållare finns</li>
                                    <li><CheckCircle size={16} /> Torkning av vitvaror</li>
                                </ul>
                            </div>

                            {/* Toalett och badrum */}
                            <div className="service-card">
                                <div className="card-header">
                                    <Bath size={28} />
                                    <h3>Toalett och badrum</h3>
                                </div>
                                <ul className="service-list">
                                    <li><CheckCircle size={16} /> Rengöring av kakelväggar och fogar i duschutrymme (om möjligt)</li>
                                    <li><CheckCircle size={16} /> Rengöring av golv och synliga rör</li>
                                    <li><CheckCircle size={16} /> Golvbrunnar och ventiler rengörs utvändigt</li>
                                    <li><CheckCircle size={16} /> Rengöring av alla förvaringsutrymmen utvändigt</li>
                                    <li><CheckCircle size={16} /> Rengöring av all sanitet, även under badkaret</li>
                                    <li><CheckCircle size={16} /> Tvättmaskin, torktumlare och torkskåp rengörs utvändigt</li>
                                </ul>
                                <p className="card-note">
                                    * Fronten av badkar/jacuzzi nedmonteras och återställes av kund
                                </p>
                            </div>

                            {/* Tilläggstjänster */}
                            <div className="service-card addon-card">
                                <div className="card-header">
                                    <Plus size={28} />
                                    <h3>Tilläggstjänster till storstädning</h3>
                                </div>
                                <ul className="service-list addon-list">
                                    <li><CheckCircle size={16} /> Fönsterputs</li>
                                    <li><CheckCircle size={16} /> Rengöring av ugn invändig</li>
                                    <li><CheckCircle size={16} /> Rengöring av kylskåp invändig</li>
                                    <li><CheckCircle size={16} /> Rengöring av köksskåp och lådor invändig</li>
                                    <li><CheckCircle size={16} /> Bi area som balkong, vind, förråd och garage</li>
                                </ul>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="info-section">
                            <div className="info-card">
                                <div className="info-header">
                                    <Info size={24} />
                                    <h3>Inför storstädning</h3>
                                </div>
                                <div className="info-content">
                                    <p>
                                        Vi rekommenderar att lösa föremål såsom leksaker, kläder, disk m.m. plockas undan
                                        för att uppnå bästa möjliga städresultat.
                                    </p>
                                    <p className="info-note">
                                        <strong>Observera:</strong> Målade ytor såsom väggar och tak endast dammtorkas med
                                        torr trasa för att undvika att färgen skadas eller släpper.
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
                        padding: 8rem 0 3rem 0;
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
