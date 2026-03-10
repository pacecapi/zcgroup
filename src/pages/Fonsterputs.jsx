import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, CheckCircle, Shield, GraduationCap, Award, Plus, Minus, Wind, Calendar, Clock, User, Mail, Phone, MapPin, Hash, MessageSquare, Send, Loader2 } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';

// Window visual component
const WindowVisual = ({ type }) => {
    const styles = {
        container: {
            width: '100%',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px'
        },
        frame: {
            background: '#E8E8E8',
            border: '3px solid #D4D4D4',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        },
        glass: {
            background: 'linear-gradient(135deg, #B8D4E8 0%, #D6E8F5 50%, #B8D4E8 100%)',
            border: '2px solid #E8E8E8'
        },
        divider: {
            background: '#E8E8E8',
            flexShrink: 0
        }
    };

    const renderWindow = () => {
        switch(type) {
            case 'M1': // Single window
                return (
                    <div style={{...styles.frame, width: '40px', height: '60px'}}>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                    </div>
                );
            case 'M2': // Two-wing window
                return (
                    <div style={{...styles.frame, width: '60px', height: '60px', flexDirection: 'row'}}>
                        <div style={{...styles.glass, flex: 1, margin: '3px', marginRight: '1px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '3px', marginLeft: '1px'}}></div>
                    </div>
                );
            case 'M3': // With ventilation
                return (
                    <div style={{...styles.frame, width: '50px', height: '65px'}}>
                        <div style={{...styles.glass, height: '15px', margin: '3px', marginBottom: '1px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '3px', marginTop: '1px'}}></div>
                    </div>
                );
            case 'M4': // With top window (överljusfönster)
                return (
                    <div style={{...styles.frame, width: '60px', height: '70px'}}>
                        <div style={{...styles.glass, height: '18px', margin: '3px', marginBottom: '1px'}}></div>
                        <div style={{display: 'flex', flex: 1}}>
                            <div style={{...styles.glass, flex: 1, margin: '3px', marginTop: '1px', marginRight: '1px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '3px', marginTop: '1px', marginLeft: '1px'}}></div>
                        </div>
                    </div>
                );
            case 'M5': // Spröjs 4 panes
                return (
                    <div style={{...styles.frame, width: '55px', height: '60px'}}>
                        <div style={{display: 'flex', flex: 1}}>
                            <div style={{...styles.glass, flex: 1, margin: '3px', marginRight: '1px', marginBottom: '1px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '3px', marginLeft: '1px', marginBottom: '1px'}}></div>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <div style={{...styles.glass, flex: 1, margin: '3px', marginRight: '1px', marginTop: '1px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '3px', marginLeft: '1px', marginTop: '1px'}}></div>
                        </div>
                    </div>
                );
            case 'M6': // Spröjs 6 panes
                return (
                    <div style={{...styles.frame, width: '55px', height: '70px'}}>
                        <div style={{display: 'flex', flex: 1}}>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                        </div>
                    </div>
                );
            case 'M7': // Spröjs 8 panes
                return (
                    <div style={{...styles.frame, width: '60px', height: '70px'}}>
                        <div style={{display: 'flex', flex: 1}}>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                            <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                        </div>
                    </div>
                );
            case 'M8': // Spröjs 12 panes
                return (
                    <div style={{...styles.frame, width: '60px', height: '70px'}}>
                        {[1,2,3].map(row => (
                            <div key={row} style={{display: 'flex', flex: 1}}>
                                {[1,2,3,4].map(col => (
                                    <div key={col} style={{...styles.glass, flex: 1, margin: '1px'}}></div>
                                ))}
                            </div>
                        ))}
                    </div>
                );
            case 'M9': // Spröjs 16 panes
                return (
                    <div style={{...styles.frame, width: '65px', height: '70px'}}>
                        {[1,2,3,4].map(row => (
                            <div key={row} style={{display: 'flex', flex: 1}}>
                                {[1,2,3,4].map(col => (
                                    <div key={col} style={{...styles.glass, flex: 1, margin: '1px'}}></div>
                                ))}
                            </div>
                        ))}
                    </div>
                );
            case 'M10': // Spröjs 20 panes
                return (
                    <div style={{...styles.frame, width: '70px', height: '70px'}}>
                        {[1,2,3,4].map(row => (
                            <div key={row} style={{display: 'flex', flex: 1}}>
                                {[1,2,3,4,5].map(col => (
                                    <div key={col} style={{...styles.glass, flex: 1, margin: '1px'}}></div>
                                ))}
                            </div>
                        ))}
                    </div>
                );
            case 'M11': // Wide window >1m
                return (
                    <div style={{...styles.frame, width: '80px', height: '55px', flexDirection: 'row'}}>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                    </div>
                );
            case 'B1': // Balcony door
                return (
                    <div style={{...styles.frame, width: '35px', height: '75px'}}>
                        <div style={{...styles.glass, flex: 1, margin: '3px', marginBottom: '1px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '3px', marginTop: '1px'}}></div>
                    </div>
                );
            case 'B2': // Half-glazed balcony
                return (
                    <div style={{...styles.frame, width: '75px', height: '60px', flexDirection: 'row'}}>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                    </div>
                );
            case 'B3': // Fully-glazed balcony
                return (
                    <div style={{...styles.frame, width: '85px', height: '65px', flexDirection: 'row'}}>
                        <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                        <div style={{...styles.glass, flex: 1, margin: '2px'}}></div>
                    </div>
                );
            case 'T3': // Triple glass
                return (
                    <div style={{...styles.frame, width: '50px', height: '60px', position: 'relative'}}>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                        <div style={{position: 'absolute', bottom: '5px', right: '5px', background: '#3B82F6', color: 'white', fontSize: '8px', padding: '2px 4px', borderRadius: '2px', fontWeight: 'bold'}}>3</div>
                    </div>
                );
            default:
                return (
                    <div style={{...styles.frame, width: '50px', height: '60px'}}>
                        <div style={{...styles.glass, flex: 1, margin: '3px'}}></div>
                    </div>
                );
        }
    };

    return <div style={styles.container}>{renderWindow()}</div>;
};

const Fonsterputs = () => {
    // Window types with prices (after RUT) - Based on renthem.se
    const windowTypes = [
        { id: 'M1', name: 'Enkelt fönster', desc: '1 öppning, max 90cm bred', price: 35 },
        { id: 'M2', name: 'Tvåluftsfönster', desc: '2 öppningar, standard', price: 50 },
        { id: 'M3', name: 'Med ventil', desc: 'Fönster med ventilationslucka', price: 55 },
        { id: 'M4', name: 'Med överljusfönster', desc: 'Övre + nedre del', price: 65 },
        { id: 'M5', name: 'Spröjsat 4 rutor', desc: '4 spröjsade rutor', price: 70 },
        { id: 'M6', name: 'Spröjsat 6 rutor', desc: '6 spröjsade rutor', price: 80 },
        { id: 'M7', name: 'Spröjsat 8 rutor', desc: '8 spröjsade rutor', price: 90 },
        { id: 'M8', name: 'Spröjsat 12 rutor', desc: '12 spröjsade rutor', price: 100 },
        { id: 'M9', name: 'Spröjsat 16 rutor', desc: '16 spröjsade rutor', price: 115 },
        { id: 'M10', name: 'Spröjsat 20 rutor', desc: '20 spröjsade rutor', price: 130 },
        { id: 'M11', name: 'Stort fönster', desc: 'Bredare än 1 meter', price: 75 },
        { id: 'B1', name: 'Balkongdörr', desc: 'Helglasad dörr', price: 60 },
        { id: 'B2', name: 'Halvglasad balkong', desc: 'Inglasad balkong max 3m²', price: 200 },
        { id: 'B3', name: 'Helglasad balkong', desc: 'Inglasad balkong max 6m²', price: 350 },
        { id: 'T3', name: '3-glas fönster', desc: '6 ytor per fönster', price: 20 },
    ];

    const addons = [
        { id: 'ladder', name: 'Stege/skaft behövs', price: 50, desc: 'För svåråtkomliga fönster' },
        { id: 'frame', name: 'Karmtvätt', price: 25, desc: 'Rengöring av fönsterkarmar' },
        { id: 'outward', name: 'Utåtgående fönster', price: 20, desc: 'Extra hantering per fönster' },
    ];

    const [selectedWindows, setSelectedWindows] = useState({});
    const [selectedAddons, setSelectedAddons] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        entryCode: '',
        phone: '',
        email: '',
        personnummer: '',
        preferredDate: '',
        timeSlot: '',
        message: ''
    });

    const updateWindowCount = (id, delta) => {
        setSelectedWindows(prev => {
            const current = prev[id] || 0;
            const newValue = Math.max(0, current + delta);
            if (newValue === 0) {
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: newValue };
        });
    };

    const toggleAddon = (id) => {
        setSelectedAddons(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const result = await sendEmail('fonsterputs', {
            ...formData,
            selectedWindows,
            selectedAddons,
            totalPrice: calculateTotal()
        });

        setIsSubmitting(false);
        if (result.success) {
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                address: '',
                postalCode: '',
                city: '',
                entryCode: '',
                phone: '',
                email: '',
                personnummer: '',
                preferredDate: '',
                timeSlot: '',
                message: ''
            });
            setSelectedWindows({});
            setSelectedAddons({});
        } else {
            setSubmitStatus('error');
        }
    };

    // Calculate total price
    const calculateTotal = () => {
        let total = 0;

        // Windows
        Object.entries(selectedWindows).forEach(([id, count]) => {
            const window = windowTypes.find(w => w.id === id);
            if (window) total += window.price * count;
        });

        // Addons
        Object.entries(selectedAddons).forEach(([id, selected]) => {
            if (selected) {
                const addon = addons.find(a => a.id === id);
                if (addon) {
                    if (id === 'frame' || id === 'outward') {
                        // Per window addons
                        const totalWindows = Object.values(selectedWindows).reduce((a, b) => a + b, 0);
                        total += addon.price * totalWindows;
                    } else {
                        total += addon.price;
                    }
                }
            }
        });

        return total;
    };

    const totalPrice = calculateTotal();
    const totalWindows = Object.values(selectedWindows).reduce((a, b) => a + b, 0);

    return (
        <div className="app fonsterputs-page">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="service-hero">
                    <div className="container">
                        <Link to="/" className="home-link">
                            <Home size={18} />
                            <span>Hem</span>
                        </Link>
                        <h1>Fönsterputs</h1>
                        <p className="hero-subtitle">
                            Skinande rena fönster, året runt. Vi putsar alla typer av fönster –
                            från vanliga villafönster till inglasade balkonger. Priserna visas efter RUT-avdrag.
                        </p>
                        <div className="trust-badges">
                            <span className="badge"><Shield size={18} color="#333" /> Städgaranti</span>
                            <span className="badge"><GraduationCap size={18} color="#333" /> Utbildad personal</span>
                            <span className="badge"><Award size={18} color="#333" /> Ansvarsförsäkring</span>
                        </div>
                    </div>
                </section>

                {/* Window Selection Section */}
                <section className="window-section">
                    <div className="container">
                        <h2 className="section-title">Välj dina fönstertyper</h2>
                        <p className="section-subtitle">Klicka på + för att lägga till fönster. Priser visas efter 50% RUT-avdrag.</p>

                        <div className="window-grid">
                            {windowTypes.map((window) => (
                                <div
                                    key={window.id}
                                    className={`window-card ${selectedWindows[window.id] ? 'selected' : ''}`}
                                >
                                    <div className="window-visual"><WindowVisual type={window.id} /></div>
                                    <div className="window-info">
                                        <span className="window-id">{window.id}</span>
                                        <h3>{window.name}</h3>
                                        <p>{window.desc}</p>
                                        <span className="window-price">{window.price} kr/st</span>
                                    </div>
                                    <div className="window-counter">
                                        <button
                                            className="counter-btn"
                                            onClick={() => updateWindowCount(window.id, -1)}
                                            disabled={!selectedWindows[window.id]}
                                        >
                                            <Minus size={18} />
                                        </button>
                                        <span className="counter-value">{selectedWindows[window.id] || 0}</span>
                                        <button
                                            className="counter-btn add"
                                            onClick={() => updateWindowCount(window.id, 1)}
                                        >
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Addons Section */}
                <section className="addons-section">
                    <div className="container">
                        <h2 className="section-title">Tilläggstjänster</h2>
                        <div className="addons-grid">
                            {addons.map((addon) => (
                                <div
                                    key={addon.id}
                                    className={`addon-card ${selectedAddons[addon.id] ? 'selected' : ''}`}
                                    onClick={() => toggleAddon(addon.id)}
                                >
                                    <div className="addon-checkbox">
                                        {selectedAddons[addon.id] && <CheckCircle size={24} />}
                                    </div>
                                    <div className="addon-info">
                                        <h4>{addon.name}</h4>
                                        <p>{addon.desc}</p>
                                    </div>
                                    <span className="addon-price">+{addon.price} kr</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Price Summary - Sticky */}
                {totalWindows > 0 && (
                    <div className="price-summary-sticky">
                        <div className="container">
                            <div className="summary-content">
                                <div className="summary-info">
                                    <span className="summary-windows">{totalWindows} fönster valda</span>
                                    <span className="summary-note">Pris efter RUT-avdrag (50%)</span>
                                </div>
                                <div className="summary-price">
                                    <span className="price-label">Totalt:</span>
                                    <span className="price-value">{totalPrice} kr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Booking Form Section */}
                <section id="formular" className="form-section">
                    <div className="container">
                        <div className="form-card">
                            <h2>Boka fönsterputsning</h2>
                            <p className="form-intro">Fyll i dina uppgifter så kontaktar vi dig för att bekräfta bokningen.</p>

                            <form className="booking-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><User size={16} /> Förnamn *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><User size={16} /> Efternamn *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleFormChange}
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
                                        onChange={handleFormChange}
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
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ort *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Portkod</label>
                                        <input
                                            type="text"
                                            name="entryCode"
                                            value={formData.entryCode}
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label><Phone size={16} /> Mobilnummer *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><Mail size={16} /> E-post *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><Hash size={16} /> Personnummer (för RUT-avdrag)</label>
                                    <input
                                        type="text"
                                        name="personnummer"
                                        placeholder="ÅÅÅÅMMDD-XXXX"
                                        value={formData.personnummer}
                                        onChange={handleFormChange}
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label><Calendar size={16} /> Önskat datum *</label>
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><Clock size={16} /> Tid *</label>
                                        <select
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                            onChange={handleFormChange}
                                            required
                                        >
                                            <option value="">Välj tid</option>
                                            <option value="morning">Förmiddag (08-12)</option>
                                            <option value="afternoon">Eftermiddag (12-17)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><MessageSquare size={16} /> Meddelande</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        placeholder="Beskriv gärna dina fönster eller speciella önskemål..."
                                    ></textarea>
                                </div>

                                {/* Order Summary */}
                                {totalWindows > 0 && (
                                    <div className="order-summary">
                                        <h3>Din beställning</h3>
                                        <div className="order-items">
                                            {Object.entries(selectedWindows).map(([id, count]) => {
                                                const window = windowTypes.find(w => w.id === id);
                                                return (
                                                    <div key={id} className="order-item">
                                                        <span>{count}x {window?.name}</span>
                                                        <span>{window?.price * count} kr</span>
                                                    </div>
                                                );
                                            })}
                                            {Object.entries(selectedAddons).filter(([_, selected]) => selected).map(([id]) => {
                                                const addon = addons.find(a => a.id === id);
                                                return (
                                                    <div key={id} className="order-item addon">
                                                        <span>+ {addon?.name}</span>
                                                        <span>+{addon?.price} kr</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="order-total">
                                            <span>Totalt (efter RUT)</span>
                                            <span className="total-price">{totalPrice} kr</span>
                                        </div>
                                    </div>
                                )}

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

                                <button type="submit" className="btn-submit" disabled={isSubmitting || totalWindows === 0}>
                                    {isSubmitting ? (
                                        <><Loader2 size={18} className="spin" /> Skickar...</>
                                    ) : (
                                        <>Skicka bokningsförfrågan <Wind size={20} /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .fonsterputs-page {
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

                /* Window Section */
                .window-section {
                    padding: var(--section-padding);
                    background: #F8FAFC;
                }

                .section-title {
                    text-align: center;
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-main);
                }

                .section-subtitle {
                    text-align: center;
                    color: var(--color-text-secondary);
                    margin-bottom: 3rem;
                }

                .window-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .window-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                    border: 2px solid transparent;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .window-card:hover {
                    box-shadow: var(--shadow-md);
                }

                .window-card.selected {
                    border-color: var(--color-primary);
                    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
                }

                .window-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.5rem;
                    background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
                    border-radius: var(--radius-md);
                    min-height: 90px;
                }

                .window-info {
                    flex: 1;
                }

                .window-id {
                    display: inline-block;
                    background: var(--color-primary);
                    color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }

                .window-info h3 {
                    font-size: 1.1rem;
                    margin-bottom: 0.25rem;
                    color: var(--color-text-main);
                }

                .window-info p {
                    font-size: 0.85rem;
                    color: var(--color-text-secondary);
                    margin-bottom: 0.5rem;
                }

                .window-price {
                    font-weight: 700;
                    color: var(--color-primary);
                }

                .window-counter {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid #E2E8F0;
                }

                .counter-btn {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 2px solid #E2E8F0;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .counter-btn:hover:not(:disabled) {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }

                .counter-btn:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }

                .counter-btn.add {
                    background: var(--color-brand-yellow);
                    border-color: var(--color-brand-yellow);
                }

                .counter-value {
                    font-size: 1.25rem;
                    font-weight: 700;
                    min-width: 30px;
                    text-align: center;
                }

                /* Addons Section */
                .addons-section {
                    padding: 3rem 0 5rem;
                    background: white;
                }

                .addons-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 1rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .addon-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.25rem;
                    background: #F8FAFC;
                    border-radius: var(--radius-md);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: 2px solid transparent;
                }

                .addon-card:hover {
                    background: #EFF6FF;
                }

                .addon-card.selected {
                    border-color: var(--color-brand-green);
                    background: #F0FDF4;
                }

                .addon-checkbox {
                    width: 28px;
                    height: 28px;
                    border: 2px solid #CBD5E1;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: all 0.2s ease;
                }

                .addon-card.selected .addon-checkbox {
                    background: var(--color-brand-green);
                    border-color: var(--color-brand-green);
                    color: white;
                }

                .addon-info {
                    flex: 1;
                }

                .addon-info h4 {
                    font-size: 0.95rem;
                    margin-bottom: 0.25rem;
                }

                .addon-info p {
                    font-size: 0.8rem;
                    color: var(--color-text-secondary);
                }

                .addon-price {
                    font-weight: 700;
                    color: var(--color-primary);
                }

                /* Price Summary Sticky */
                .price-summary-sticky {
                    position: sticky;
                    bottom: 0;
                    background: white;
                    border-top: 1px solid #E2E8F0;
                    padding: 1rem 0;
                    z-index: 100;
                    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
                }

                .summary-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .summary-info {
                    display: flex;
                    flex-direction: column;
                }

                .summary-windows {
                    font-weight: 700;
                    color: var(--color-text-main);
                }

                .summary-note {
                    font-size: 0.85rem;
                    color: var(--color-text-secondary);
                }

                .summary-price {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .price-label {
                    font-size: 0.9rem;
                    color: var(--color-text-secondary);
                }

                .price-value {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: var(--color-primary);
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

                .form-group textarea {
                    resize: vertical;
                }

                /* Order Summary */
                .order-summary {
                    background: #F8FAFC;
                    border-radius: var(--radius-md);
                    padding: 1.5rem;
                    margin-top: 1rem;
                }

                .order-summary h3 {
                    font-size: 1.1rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid #E2E8F0;
                }

                .order-items {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .order-item {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.9rem;
                }

                .order-item.addon {
                    color: var(--color-text-secondary);
                }

                .order-total {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 1rem;
                    border-top: 2px solid #E2E8F0;
                    font-weight: 700;
                }

                .total-price {
                    font-size: 1.25rem;
                    color: var(--color-primary);
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

                /* Responsive */
                @media (max-width: 992px) {
                    .service-hero h1 {
                        font-size: 2.5rem;
                    }

                    .form-card {
                        padding: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .service-hero {
                        padding: 8rem 0 3rem 0;
                    }

                    .form-row,
                    .form-row.three-col {
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

                    .summary-content {
                        flex-direction: column;
                        gap: 0.5rem;
                        text-align: center;
                    }

                    .section-title {
                        font-size: 1.75rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Fonsterputs;
