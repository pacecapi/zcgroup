import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, GraduationCap, Award, Sparkles, UtensilsCrossed, Bath, Plus, Info, XCircle, AlertTriangle, Mail, Send, Loader2, User, Phone, MapPin, Truck, Calendar, Clock } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';

const Flyttstadning = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const result = await sendEmail('flyttstadning', formData);

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
                timeSlot: '',
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

        // Base price + price per m2 (with RUT deduction shown)
        const basePrice = 1800;
        const pricePerM2 = 40;
        const totalPrice = basePrice + (sizeNum * pricePerM2);
        const rutPrice = Math.round(totalPrice * 0.5); // 50% RUT-avdrag

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

    const additionalServices = [
        { name: 'Fönsterputs av halvinglasad balkong', price: '400 kr' },
        { name: 'Fönsterputs av helglasad balkong', price: '600 kr' },
        { name: 'Inglasad uterum (pris efter antal fönster)', price: 'Ca 800 kr' },
        { name: 'Helgtillägg', price: '600 kr' },
        { name: 'Storhelgtillägg', price: '1000 kr' },
        { name: 'Kamin: tömning av aska, glasrengöring, avtorkning', price: '200 kr' },
        { name: 'Fönsterputs av 3-glas', price: '20 kr/glas' },
        { name: 'Sopning av balkong', price: '150 kr' },
        { name: 'Städning av biytor (förråd, garage, balkonger)', price: 'Offert' },
    ];

    const services = [
        'Dammsugning och våttorkning av alla golv',
        'Rengöring av kök och vitvaror (in- och utvändigt)',
        'Badrum och toalett rengörs noggrant',
        'Fönsterputsning (in- och utvändigt)',
        'Rengöring av garderober och skåp',
        'Avtorkning av dörrar och karmar',
        'Rengöring av golvlister och socklar',
        'Städgaranti vid besiktning',
    ];

    return (
        <div className="app flyttstadning-page">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="service-hero">
                    <div className="container">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>Hem</span>
                        </Link>
                        <h1>Flyttstädning</h1>
                        <p className="hero-subtitle">
                            Professionell flyttstädning för en trygg överlämning. Vi ser till att bostaden blir
                            noggrant städad och godkänd vid besiktning, så att du kan lämna ditt hem med gott samvete.
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
                                <Truck size={32} />
                            </div>
                            <div className="services-content">
                                <h2>Vad ingår i flyttstädning?</h2>
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
                            <h2>Boka flyttstädning</h2>
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
                                            {sizeOptions.map(opt => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
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
                                            value={formData.timeSlot || ''}
                                            onChange={handleChange}
                                        >
                                            <option value="">Välj tid</option>
                                            <option value="morning">Förmiddag (08-12)</option>
                                            <option value="afternoon">Eftermiddag (12-17)</option>
                                        </select>
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

                                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="spin" />
                                            Skickar...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Skicka bokningsförfrågan
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Service Description */}
                <section className="section service-description">
                    <div className="container">
                        <h2 className="section-title">Vad ingår i flyttstädningen?</h2>

                        <div className="service-grid">
                            {/* Alla rum */}
                            <div className="service-card">
                                <div className="card-header">
                                    <Sparkles size={28} />
                                    <h3>Alla rum</h3>
                                </div>
                                <ul className="service-list">
                                    <li><CheckCircle size={16} /> Dammsugning och våttorkning av alla golv</li>
                                    <li><CheckCircle size={16} /> Rengöring av golvlister, trösklar och socklar</li>
                                    <li><CheckCircle size={16} /> Avtorkning av dörrar, dörrkarmar, handtag, kontakter och element</li>
                                    <li><CheckCircle size={16} /> Dammtorkning av väggar</li>
                                    <li><CheckCircle size={16} /> Dammtorkning av lampor</li>
                                    <li><CheckCircle size={16} /> Putsning av speglar</li>
                                    <li><CheckCircle size={16} /> Rengöring av garderober, hyllor och skåp (in- och utvändigt om de är tomma)</li>
                                    <li><CheckCircle size={16} /> Rengöring av fönsterkarmar, fönsterbrädor</li>
                                    <li><CheckCircle size={16} /> Fönsterputsning</li>
                                </ul>
                                <p className="card-note">
                                    <strong>Notera:</strong> Städning bakom kyl, frys, spis, tvättmaskin och torktumlare utförs endast om vitvaran dras fram av kund och efter städning återställes av kund.
                                </p>
                            </div>

                            {/* Kök */}
                            <div className="service-card">
                                <div className="card-header">
                                    <UtensilsCrossed size={28} />
                                    <h3>Kök</h3>
                                </div>
                                <ul className="service-list">
                                    <li><CheckCircle size={16} /> Rengöring av kyl och frys (ska vara avfrostad innan städningen påbörjas)</li>
                                    <li><CheckCircle size={16} /> Rengöring av diskmaskin (in- och utvändigt)</li>
                                    <li><CheckCircle size={16} /> Rengöring av spisfläkt, kåpa och filter (ej inne i fläkten)</li>
                                    <li><CheckCircle size={16} /> Avtorkning av skåp, lådor och bänkskivor (in- och utvändigt)</li>
                                    <li><CheckCircle size={16} /> Rengöring av diskho, kakel/stänkskydd</li>
                                    <li><CheckCircle size={16} /> Rengöring av spis, ugn, plåtar och galler (in- och utvändigt)</li>
                                    <li><CheckCircle size={16} /> Rengöring av ugnsglas</li>
                                </ul>
                                <p className="card-note">
                                    * Mellanglas rengörs endast om kund ansvarar för demontering och montering.
                                </p>
                            </div>

                            {/* Badrum / WC / Tvättstuga */}
                            <div className="service-card">
                                <div className="card-header">
                                    <Bath size={28} />
                                    <h3>Badrum / WC / Tvättstuga</h3>
                                </div>
                                <ul className="service-list">
                                    <li><CheckCircle size={16} /> Rengöring av all sanitet, även under badkaret</li>
                                    <li><CheckCircle size={16} /> Rengöring av kakelväggar</li>
                                    <li><CheckCircle size={16} /> Avtorkning av speglar, skåp och hyllor</li>
                                    <li><CheckCircle size={16} /> Rengöring av tvättmaskin och torktumlare (in- och utvändigt)</li>
                                    <li><CheckCircle size={16} /> Golvbrunnar och ventiler rengörs utvändigt</li>
                                    <li><CheckCircle size={16} /> Rengöring av förvaringsutrymmen (skåp, hyllor och lådor)</li>
                                </ul>
                                <p className="card-note">
                                    * Fronten på badkar nedmonteras och återställes av kund.
                                </p>
                            </div>

                            {/* Tilläggstjänster */}
                            <div className="service-card addon-card">
                                <div className="card-header">
                                    <Plus size={28} />
                                    <h3>Tilläggstjänster till flyttstädning</h3>
                                </div>
                                <ul className="service-list addon-list">
                                    {additionalServices.map((service, index) => (
                                        <li key={index}>
                                            <CheckCircle size={16} />
                                            <span className="addon-name">{service.name}</span>
                                            <span className="addon-price">{service.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className="important-notes">
                            <div className="note-card">
                                <AlertTriangle size={20} />
                                <div>
                                    <strong>Viktigt att veta:</strong>
                                    <ul>
                                        <li>Tunga vitvaror ska vara framdragna om rengöring bakom dem önskas.</li>
                                        <li>Ytor måste vara tömda för att kunna städas ordentligt.</li>
                                        <li>Kraftigt nedsmutsade ytor eller byggdamm kan kräva tillägg.</li>
                                        <li>Resultatet ska vara godkänt vid besiktning eller överlämning.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Tjänster som inte ingår */}
                        <div className="excluded-section">
                            <h3><XCircle size={24} /> Tjänster som inte ingår i flyttstädningen</h3>
                            <div className="excluded-grid">
                                <div className="excluded-item">Vattenlås</div>
                                <div className="excluded-item">Persienner</div>
                                <div className="excluded-item">Element demonteras ej</div>
                                <div className="excluded-item">Borttagning av spikar, krokar och liknande</div>
                                <div className="excluded-item">Städning av målade ytor (väggar, tak etc.) med risk för nyansskillnader</div>
                            </div>
                        </div>

                        {/* Kundens ansvar */}
                        <div className="info-section">
                            <div className="info-card">
                                <div className="info-header">
                                    <Info size={24} />
                                    <h3>Inför flyttstädning – Kundens ansvar</h3>
                                </div>
                                <div className="info-content">
                                    <ul className="responsibility-list">
                                        <li><CheckCircle size={16} /> Bostaden ska vara tömd om inget annat är överenskommet.</li>
                                        <li><CheckCircle size={16} /> Frysen ska vara avfrostad innan städning påbörjas.</li>
                                        <li><CheckCircle size={16} /> Dra ut vitvaror som kyl, frys, spis, tvättmaskin och torktumlare från väggen om du vill att vi rengör bakom.</li>
                                        <li><CheckCircle size={16} /> Vitvaror ställs tillbaka av kund efter avslutad städning.</li>
                                        <li><CheckCircle size={16} /> Front på badkar ska demonteras och monteras tillbaka av kund vid behov.</li>
                                        <li><CheckCircle size={16} /> Glas på ugnslucka ska demonteras och monteras tillbaka av kund vid behov.</li>
                                        <li><CheckCircle size={16} /> Kunden ansvarar för att det finns el i bostaden vid städtillfället.</li>
                                    </ul>
                                    <p className="info-note">
                                        <strong>Tänk på:</strong> Biytor som förråd, garage, uterum och balkonger ingår inte i vår flyttstädning men kan självklart bokas till vid behov.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .flyttstadning-page {
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

                .price-display {
                    background: linear-gradient(135deg, rgba(61, 174, 73, 0.12) 0%, rgba(61, 174, 73, 0.25) 100%);
                    border-radius: var(--radius-md);
                    padding: 1.5rem;
                    text-align: center;
                    border: 1px solid #3DAE49;
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

                .btn-submit:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
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
                    border: 1px solid transparent;
                }

                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }

                /* Alla rum - Brand Blue */
                .service-card:nth-child(1) {
                    background: linear-gradient(135deg, rgba(0, 140, 207, 0.15) 0%, rgba(0, 140, 207, 0.3) 100%);
                    border-color: #008CCF;
                }

                /* Kök - Brand Green */
                .service-card:nth-child(2) {
                    background: linear-gradient(135deg, rgba(61, 174, 73, 0.15) 0%, rgba(61, 174, 73, 0.3) 100%);
                    border-color: #3DAE49;
                }

                /* Badrum - Brand Yellow */
                .service-card:nth-child(3) {
                    background: linear-gradient(135deg, rgba(255, 210, 0, 0.15) 0%, rgba(255, 210, 0, 0.3) 100%);
                    border-color: #FFD200;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
                }

                .card-header svg {
                    color: var(--color-primary);
                }

                /* Alla rum - Brand Blue */
                .service-card:nth-child(1) .card-header {
                    border-bottom-color: #008CCF;
                }
                .service-card:nth-child(1) .card-header svg {
                    color: #008CCF;
                }
                .service-card:nth-child(1) .card-header h3 {
                    color: #1a365d;
                }

                /* Kök - Brand Green */
                .service-card:nth-child(2) .card-header {
                    border-bottom-color: #3DAE49;
                }
                .service-card:nth-child(2) .card-header svg {
                    color: #3DAE49;
                }
                .service-card:nth-child(2) .card-header h3 {
                    color: #1a365d;
                }

                /* Badrum - Brand Yellow */
                .service-card:nth-child(3) .card-header {
                    border-bottom-color: #FFD200;
                }
                .service-card:nth-child(3) .card-header svg {
                    color: #D4AF00;
                }
                .service-card:nth-child(3) .card-header h3 {
                    color: #1a365d;
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
                    flex-shrink: 0;
                    margin-top: 3px;
                }

                .service-card:nth-child(1) .service-list svg {
                    color: #008CCF;
                }

                .service-card:nth-child(2) .service-list svg {
                    color: #3DAE49;
                }

                .service-card:nth-child(3) .service-list svg {
                    color: #D4AF00;
                }

                .card-note {
                    margin-top: 1rem;
                    font-size: 0.85rem;
                    color: #64748B;
                    font-style: italic;
                    padding: 0.75rem;
                    background: #F8FAFC;
                    border-radius: var(--radius-sm);
                    border-left: 3px solid var(--color-primary);
                }

                .addon-card {
                    background: linear-gradient(135deg, rgba(255, 210, 0, 0.12) 0%, rgba(255, 210, 0, 0.25) 100%);
                    border: 1px solid #FFD200;
                    border-top: 4px solid #FFD200;
                }

                .addon-card .card-header svg {
                    color: #B8980A;
                }

                .addon-list li {
                    color: #1a365d;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .addon-list svg {
                    color: #B8980A !important;
                }

                .addon-name {
                    flex: 1;
                }

                .addon-price {
                    font-weight: 700;
                    color: #1a365d;
                    background: var(--color-brand-yellow);
                    padding: 0.25rem 0.75rem;
                    border-radius: var(--radius-full);
                    font-size: 0.85rem;
                }

                /* Important Notes */
                .important-notes {
                    margin-bottom: 3rem;
                }

                .note-card {
                    display: flex;
                    gap: 1rem;
                    background: linear-gradient(135deg, rgba(255, 210, 0, 0.12) 0%, rgba(255, 210, 0, 0.25) 100%);
                    border: 1px solid #FFD200;
                    border-left: 4px solid #FFD200;
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                }

                .note-card svg {
                    color: #B8980A;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .note-card ul {
                    margin: 0.5rem 0 0 1rem;
                    padding: 0;
                }

                .note-card li {
                    color: #1a365d;
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                }

                /* Excluded Section */
                .excluded-section {
                    background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);
                    border: 1px solid #CBD5E1;
                    border-left: 4px solid #64748B;
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    margin-bottom: 3rem;
                }

                .excluded-section h3 {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: #334155;
                    margin-bottom: 1.5rem;
                    font-size: 1.25rem;
                }

                .excluded-section h3 svg {
                    color: #64748B;
                }

                .excluded-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                }

                .excluded-item {
                    background: white;
                    padding: 0.75rem 1rem;
                    border-radius: var(--radius-md);
                    color: #475569;
                    font-size: 0.9rem;
                    border: 1px solid #CBD5E1;
                }

                /* Info Section */
                .info-section {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .info-card {
                    background: linear-gradient(135deg, rgba(0, 140, 207, 0.12) 0%, rgba(0, 140, 207, 0.25) 100%);
                    border: 1px solid #008CCF;
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                }

                .info-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }

                .info-header svg {
                    color: var(--color-primary);
                }

                .info-header h3 {
                    margin: 0;
                    color: #1a365d;
                    font-size: 1.25rem;
                }

                .responsibility-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.5rem 0;
                    display: grid;
                    gap: 0.75rem;
                }

                .responsibility-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    color: #1a365d;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                .responsibility-list svg {
                    color: #008CCF;
                    flex-shrink: 0;
                    margin-top: 3px;
                }

                .info-note {
                    background: rgba(255, 255, 255, 0.5);
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border-left: 4px solid #008CCF;
                    color: #1a365d;
                    margin: 0;
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
                    .service-grid {
                        grid-template-columns: 1fr;
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
                    .section-title {
                        font-size: 1.75rem;
                    }
                    .service-card {
                        padding: 1.5rem;
                    }
                    .price-value {
                        font-size: 2rem;
                    }
                    .addon-list li {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }
                    .addon-price {
                        margin-left: 1.5rem;
                    }
                    .excluded-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Flyttstadning;
