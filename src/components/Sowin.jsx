import React from "react";

const sowinCardsData = [
  { img: "./src/assets/images/sowinimage01.png", title: "Steve Carl" },
  { img: "./src/assets/images/sowinimage02.png", title: "LeBron James" },
  { img: "./src/assets/images/sowinimage03.png", title: "Devin Booker" },
  { img: "./src/assets/images/sowinimage04.png", title: "Simon Karkave" },
  { img: "./src/assets/images/sowinimage05.png", title: "Emma Wilson" },
];

const Sowin = React.memo(() => {
  return (
    <div className="sowin">
      <div className="sowin-wrapper">
        <div className="sowin-content">
          <h1>YOU CAN'T WIN, SO WIN.</h1>
          <p className="subtitle">
            They'll talk whether you win or lose. So leave 'em speechless.
          </p>
        </div>
        <h3 className="collection-title">So Win Collection</h3>
        <div className="sowin-cards">
          {sowinCardsData.map((card) => (
            <div key={card.title} className="sowin-card">
              <div className="sowin-card-image-container">
                <img src={card.img} alt={card.title} />
              </div>
              <span className="sowin-title">{card.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Sowin;
