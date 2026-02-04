import React from 'react';

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="testimonial-content">
                    <span className="quote-mark">“</span>
                    <p className="testimonial-text">
                        Att komma hem till ett nystädat hem på torsdagar är veckans höjdpunkt. Det ger mig lugn och tid att fokusera på familjen.
                    </p>
                    <div className="testimonial-author">
                        <span className="author-name">Anna, Stockholm</span>
                        <span className="author-role">Kund sedan 2018</span>
                    </div>
                </div>
            </div>

            <style>{`
        .testimonials-section {
          background-color: var(--color-bg-white);
          text-align: center;
        }

        .testimonial-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .quote-mark {
          font-family: serif;
          font-size: 6rem;
          color: var(--color-primary-light);
          line-height: 0;
          display: block;
          margin-bottom: 2rem;
        }

        .testimonial-text {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-text-main);
          margin-bottom: 2rem;
          line-height: 1.4;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-weight: 700;
          color: var(--color-text-main);
        }

        .author-role {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
