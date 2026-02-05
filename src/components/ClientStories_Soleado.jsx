import React from 'react';
import './ClientStories_Soleado.css';

const ClientStories_Soleado = () => {
    // Using placeholder logos - in production, these would be actual company logos
    const clients = [
        { name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com' },
        { name: 'Zekiro', logo: 'https://via.placeholder.com/150x60/2ecc71/ffffff?text=ZEKIRO' },
        { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
        { name: 'UPS', logo: 'https://logo.clearbit.com/ups.com' },
        { name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com' },
        { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' }
    ];

    return (
        <section className="client-stories-soleado section">
            <div className="container">
                <h2 className="client-stories-soleado__title">Client Success Stories</h2>

                <div className="client-stories-soleado__carousel">
                    <button className="carousel-nav carousel-nav--prev" aria-label="Previous">
                        ‹
                    </button>

                    <div className="client-stories-soleado__track">
                        {clients.map((client, index) => (
                            <div key={index} className="client-logo-card">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="client-logo"
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/150x60/3DAE49/ffffff?text=${client.name}`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <button className="carousel-nav carousel-nav--next" aria-label="Next">
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClientStories_Soleado;
