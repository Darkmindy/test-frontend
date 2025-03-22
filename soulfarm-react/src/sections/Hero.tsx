import heroImage from '../assets/images/hero-image.png';

function Hero() {
    return (
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Soulfarm Agricoltura Familiare</h1>
          <p>L'azienda è certificata biologica ed è composta da orto, frutteto e pascolo.</p>
        </div>
      </section>
    );
  }
  
  export default Hero;