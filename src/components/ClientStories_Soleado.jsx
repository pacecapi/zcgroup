import React from 'react';
import './ClientStories_Soleado.css';

const ClientStories_Soleado = () => {
    const clients = [
        { name: 'Samsung' },
        { name: 'Zekiro' },
        { name: 'Microsoft' },
        { name: 'UPS' },
        { name: 'Google' },
        { name: 'Amazon' }
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
                                <span className="client-name">{client.name}</span>
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
