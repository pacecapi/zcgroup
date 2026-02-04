import React from 'react';

const Description = () => {
    return (
        <section className="section description-section">
            <div className="container">
                <div className="description-content">
                    <h2 className="section-title">I vår värld är det detaljerna som gör skillnaden</h2>
                    <p className="description-text">
                        Vi finns där du finns. Med verksamhet i <a href="#">Stockholm</a>, <a href="#">Göteborg</a>, <a href="#">Malmö</a>, <a href="#">Uppsala</a>, <a href="#">Västerås</a> och många fler orter, är vi aldrig långt borta. Oavsett om du behöver <a href="#">hemstädning</a> varje vecka eller en engångsinsats inför <a href="#">storhelgen</a>, så har vi lösningen för dig.
                    </p>
                    <blockquote className="quote-text">
                        "Det räcker inte att möta förväntningarna. Vi vill överträffa dem."
                    </blockquote>
                </div>
            </div>

            <style>{`
        .description-section {
          background-color: var(--color-bg-white);
          text-align: center;
        }

        .description-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .description-text {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .description-text a {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .description-text a:hover {
          color: var(--color-text-main);
        }

        .quote-text {
          font-family: serif;
          font-size: 1.5rem;
          font-style: italic;
          color: var(--color-text-main);
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
      `}</style>
        </section>
    );
};

export default Description;
