import './Hero.css';

function Hero() {
  const handleBookClick = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" >
      <div className="container">
        <div className="hero-content">
          <h1>Get Younger Looking Skin <span className="highlight">Without Surgery</span></h1>
          <p className="subheadline">Advanced aesthetic treatments for natural-looking results</p>
          <button onClick={handleBookClick} className="btn btn-large">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;