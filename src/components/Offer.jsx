import './Offer.css';

function Offer() {
  return (
    <section className="offer" id="offer">
      <div className="container">
        <div className="offer-banner">
          <span className="offer-tag">Limited Time</span>
          <h3>Free Skin Consultation This Month</h3>
          <p>Book now and get a comprehensive skin analysis worth $150 FREE</p>
          <div className="offer-timer">⏰ Offer ends in 7 days</div>
        </div>
      </div>
    </section>
  );
}

export default Offer;