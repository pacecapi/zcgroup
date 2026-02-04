import React from 'react';
import { Sparkles, Home, Wind, Truck, Shovel, Briefcase, Building2, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      id: 'solar',
      title: t('services.solar.title'),
      desc: t('services.solar.desc'),
      icon: <Sun size={32} />,
      link: '#',
      color: 'var(--color-brand-yellow)',
      bg: 'rgba(255, 210, 0, 0.1)'
    },
    {
      title: t('services.cleaning.title'),
      desc: t('services.cleaning.desc'),
      icon: <Home size={32} />,
      link: '#'
    },
    {
      title: t('services.deepCleaning.title'),
      desc: t('services.deepCleaning.desc'),
      icon: <Sparkles size={32} />,
      link: '#'
    },
    {
      title: t('services.window.title'),
      desc: t('services.window.desc'),
      icon: <Wind size={32} />,
      link: '#'
    },
    {
      title: t('services.moving.title'),
      desc: t('services.moving.desc'),
      icon: <Truck size={32} />,
      link: '#'
    },
    {
      title: t('services.garden.title'),
      desc: t('services.garden.desc'),
      icon: <Shovel size={32} />,
      link: '#'
    },
    {
      title: t('services.office.title'),
      desc: t('services.office.desc'),
      icon: <Briefcase size={32} />,
      link: '#'
    },
    {
      title: t('services.brf.title'),
      desc: t('services.brf.desc'),
      icon: <Building2 size={32} />,
      link: '#'
    }
  ];

  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
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
              <span className="read-more">{t('services.readMore')} →</span>
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
