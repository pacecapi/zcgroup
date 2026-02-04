import React from 'react';
import { Sparkles, Home, Wind, Truck, Shovel, Briefcase, Building2, Sun } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'solar',
      title: 'Solcellsmontage',
      desc: 'Komplett installation av solceller för både villa och företag.',
      icon: <Sun size={32} />,
      link: '#',
      color: 'var(--color-brand-yellow)',
      bg: 'rgba(255, 210, 0, 0.1)'
    },
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
        <div className="section-header">
          <h2 className="section-title">Våra Tjänster</h2>
          <p className="section-subtitle">
            Från skinande rena hem till hållbar energi. Vi erbjuder ett brett utbud av tjänster för att förenkla din vardag.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <a key={index} href={service.link} className={`service-card ${service.id ? 'featured-card' : ''}`}>
              <div
                className="icon-wrapper"
                style={{
                  backgroundColor: service.bg || 'var(--color-primary-light)',
                  color: service.color || 'var(--color-primary)'
                }}
              >
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

        .section-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 3rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
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
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md); /* Slightly squared for modern look */
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover .icon-wrapper {
            transform: scale(1.1);
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
          line-height: 1.5;
        }

        .read-more {
          font-weight: 600;
          color: var(--color-primary);
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
        }
        
        .featured-card {
            border-color: var(--color-brand-yellow);
            background: linear-gradient(to bottom right, #fff, #fffcf0);
        }
      `}</style>
    </section>
  );
};

export default Services;
