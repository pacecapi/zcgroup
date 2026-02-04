import React from 'react';
import { Sparkles, Home, Wind, Truck, Shovel, Briefcase, Building2 } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Hemstädning',
            desc: 'Regelbunden städning för en enklare vardag.',
            icon: <Home size={32} />,
            link: '#'
        },
        {
            title: 'Storstädning',
            desc: 'En grundlig rengöring från golv till tak.',
            icon: <Sparkles size={32} />,
            link: '#'
        },
        {
            title: 'Fönsterputs',
            desc: 'Skinande rena fönster, året om.',
            icon: <Wind size={32} />,
            link: '#'
        },
        {
            title: 'Flyttstädning',
            desc: 'Vi städar så att du kan lämna över med gott samvete.',
            icon: <Truck size={32} />,
            link: '#'
        },
        {
            title: 'Trädgårdshjälp',
            desc: 'Från gräsklippning till beskärning.',
            icon: <Shovel size={32} />,
            link: '#'
        },
        {
            title: 'Kontorsstädning',
            desc: 'En ren arbetsplats för bättre fokus.',
            icon: <Briefcase size={32} />,
            link: '#'
        },
        {
            title: 'För BRF',
            desc: 'Renare trapphus och gemensamma utrymmen.',
            icon: <Building2 size={32} />,
            link: '#'
        }
    ];

    return (
        <section className="section services-section">
            <div className="container">
                <h2 className="section-title">Hur kan vi hjälpa dig?</h2>
                <p className="section-subtitle">
                    Vi har gjort rent i svenska hem i snart 30 år. Låt oss ta hand om det tråkiga så att du får mer tid över till annat.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <a key={index} href={service.link} className="service-card">
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <span className="read-more">Läs mer →</span>
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
        .services-section {
          background-color: var(--color-bg-white);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          transition: all 0.3s ease;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-light);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--color-text-main);
        }

        .service-card p {
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
          font-size: 0.95rem;
        }

        .read-more {
          font-weight: 600;
          color: var(--color-primary);
          font-size: 0.9rem;
        }
      `}</style>
        </section>
    );
};

export default Services;
