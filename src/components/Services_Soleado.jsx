import React from 'react';
import { Wind, Battery, Droplet } from 'lucide-react';
import './Services_Soleado.css';

const Services_Soleado = () => {
    const services = [
        {
            icon: <Wind size={48} />,
            title: 'Renewable Integration',
            description: 'Optimizing clean energy systems for maximum efficiency and sustainability.'
        },
        {
            icon: <Battery size={48} />,
            title: 'Energy Storage Solutions',
            description: 'Advanced storage technologies for reliable and resilient power grids.'
        },
        {
            icon: <Droplet size={48} />,
            title: 'Sustainable Resource Management',
            description: 'Innovative methods for water purification and waste reduction.'
        }
    ];

    return (
        <section className="services-soleado section">
            <div className="container">
                <h2 className="services-soleado__title">Our Services</h2>

                <div className="services-soleado__grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card-soleado">
                            <div className="service-card-soleado__icon">
                                {service.icon}
                            </div>
                            <h3 className="service-card-soleado__title">{service.title}</h3>
                            <p className="service-card-soleado__description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services_Soleado;
