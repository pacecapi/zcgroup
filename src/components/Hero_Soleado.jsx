import React from 'react';
import './Hero_Soleado.css';

const Hero_Soleado = () => {
    return (
        <section className="hero-soleado">
            <div className="hero-soleado__content container">
                <div className="hero-soleado__text">
                    <h1 className="hero-soleado__title">
                        ZC Group:<br />
                        Innovating<br />
                        for a Cleaner Future.
                    </h1>
                    <p className="hero-soleado__description">
                        Pioneering sustainable solutions through<br />
                        advanced clean technology.
                    </p>
                    <button className="btn btn-soleado">
                        Explore Solutions
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero_Soleado;
