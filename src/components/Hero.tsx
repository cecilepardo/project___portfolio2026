import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero-container"
      style={{ 
        /* 2. Remplace url(${heroImage}) par var(--hero-bg-image) */
        backgroundImage: `linear-gradient(to bottom, transparent 60%, var(--color-space) 100%), var(--hero-bg-image)` 
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Cécile Pardo</h1>
          <h2 className="hero-subtitle">Développeuse Fullstack</h2>
          <p className="hero-description">
            En recherche d’une alternance full-stack, je mets mon œil de
            designer et ma rigueur de développeuse au service d’expériences
            numériques centrées utilisateur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
