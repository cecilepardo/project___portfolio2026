import "./Hero.css";

interface HeroProps {
  showText?: boolean; // Propriété optionnelle
}

// On définit showText = true par défaut pour l'accueil
const Hero: React.FC<HeroProps> = ({ showText = true }) => {
  return (
    <section
      className="hero-container"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, transparent 60%, var(--color-space) 100%), var(--hero-bg-image)` 
      }}
    >
      <div className="hero-overlay">
        {/* On n'affiche hero-content que si showText est vrai */}
        {showText && (
          <div className="hero-content">
            <h1 className="hero-title">Cécile Lavrut - Pardo</h1>
            <h2 className="hero-subtitle">Développeuse Fullstack</h2>
            <p className="hero-description">
              En recherche d’une alternance full-stack, je mets mon œil de
              designer et ma rigueur de développeuse au service d’expériences
              numériques centrées utilisateur.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;