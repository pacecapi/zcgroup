import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    sv: {
        nav: {
            services: 'VÅRA TJÄNSTER',
            about: 'OM OSS',
            contact: 'KONTAKTA OSS'
        },
        hero: {
            title: 'Tid för det som är viktigt.',
            desc: 'Professionella tjänster inom städning och solcellsmontage. Vi hjälper både privatpersoner och företag med pålitliga och kvalitativa tjänster.',
            inputPlaceholder: 'Ditt postnummer',
            cta: 'Beräkna pris',
            note: 'Se ditt pris direkt på 30 sekunder',
            trustpilot: '4.8/5 Trustpilot',
            customers: '50,000+ Kunder'
        },
        services: {
            title: 'Våra Tjänster',
            subtitle: 'Från skinande rena hem till hållbar energi.',
            readMore: 'Läs mer',
            solar: { title: 'Solcellsmontage', desc: 'Komplett installation av solceller för både villa och företag.' },
            cleaning: { title: 'Hemstädning', desc: 'Regelbunden städning för en enklare vardag.' },
            deepCleaning: { title: 'Storstädning', desc: 'En grundlig rengöring från golv till tak.' },
            window: { title: 'Fönsterputs', desc: 'Skinande rena fönster, året om.' },
            moving: { title: 'Flyttstädning', desc: 'Vi städar så att du kan lämna över med gott samvete.' },
            garden: { title: 'Trädgårdshjälp', desc: 'Från gräsklippning till beskärning.' },
            office: { title: 'Kontorsstädning', desc: 'En ren arbetsplats för bättre fokus.' },
            brf: { title: 'För BRF', desc: 'Renare trapphus och gemensamma utrymmen.' }
        },
        footer: {
            legal: '© 2024 Z&C Group. Alla rättigheter förbehållna.',
            terms: 'Villkor',
            cookies: 'Cookies',
            privacy: 'Integritet'
        }
        // ... adding more as we go
    },
    en: {
        nav: {
            services: 'OUR SERVICES',
            about: 'ABOUT US',
            contact: 'CONTACT US'
        },
        hero: {
            title: 'Time for what matters.',
            desc: 'Professional services in cleaning and solar panel installation. We help both individuals and companies with reliable and high-quality services.',
            inputPlaceholder: 'Your zip code',
            cta: 'Calculate price',
            note: 'See your price instantly in 30 seconds',
            trustpilot: '4.8/5 Trustpilot',
            customers: '50,000+ Customers'
        },
        services: {
            title: 'Our Services',
            subtitle: 'From sparkling clean homes to sustainable energy.',
            readMore: 'Read more',
            solar: { title: 'Solar Installation', desc: 'Complete installation of solar panels for both villas and businesses.' },
            cleaning: { title: 'Home Cleaning', desc: 'Regular cleaning for a simpler everyday life.' },
            deepCleaning: { title: 'Deep Cleaning', desc: 'A thorough clean from floor to ceiling.' },
            window: { title: 'Window Cleaning', desc: 'Sparkling clean windows, all year round.' },
            moving: { title: 'Move-out Cleaning', desc: 'We clean so you can handover with peace of mind.' },
            garden: { title: 'Garden Help', desc: 'From lawn mowing to pruning.' },
            office: { title: 'Office Cleaning', desc: 'A clean workplace for better focus.' },
            brf: { title: 'For HOA/BRF', desc: 'Cleaner stairwells and common areas.' }
        },
        footer: {
            legal: '© 2024 Z&C Group. All rights reserved.',
            terms: 'Terms',
            cookies: 'Cookies',
            privacy: 'Privacy'
        }
    },
    es: {
        nav: {
            services: 'NUESTROS SERVICIOS',
            about: 'SOBRE NOSOTROS',
            contact: 'CONTÁCTANOS'
        },
        hero: {
            title: 'Tiempo para lo que importa.',
            desc: 'Servicios profesionales de limpieza e instalación de paneles solares. Ayudamos a particulares y empresas con servicios fiables y de alta calidad.',
            inputPlaceholder: 'Tu código postal',
            cta: 'Calcular precio',
            note: 'Ver precio al instante en 30 segundos',
            trustpilot: '4.8/5 Trustpilot',
            customers: '50,000+ Clientes'
        },
        services: {
            title: 'Nuestros Servicios',
            subtitle: 'Desde hogares impecables hasta energía sostenible.',
            readMore: 'Leer más',
            solar: { title: 'Instalación Solar', desc: 'Instalación completa de paneles solares para casas particulares y empresas.' },
            cleaning: { title: 'Limpieza de Hogar', desc: 'Limpieza regular para un día a día más sencillo.' },
            deepCleaning: { title: 'Limpieza a Fondo', desc: 'Una limpieza minuciosa de suelo a techo.' },
            window: { title: 'Limpieza de Cristales', desc: 'Cristales relucientes durante todo el año.' },
            moving: { title: 'Limpieza por Mudanza', desc: 'Limpiamos para que entregues las llaves con tranquilidad.' },
            garden: { title: 'Ayuda en Jardín', desc: 'Desde cortar el césped hasta podar.' },
            office: { title: 'Limpieza de Oficinas', desc: 'Un lugar de trabajo limpio para un mejor enfoque.' },
            brf: { title: 'Para Comunidades', desc: 'Escaleras y zonas comunes más limpias.' }
        },
        footer: {
            legal: '© 2024 Z&C Group. Todos los derechos reservados.',
            terms: 'Términos',
            cookies: 'Cookies',
            privacy: 'Privacidad'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('sv');

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[language];
        for (const key of keys) {
            if (result) result = result[key];
        }
        return result || path;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
