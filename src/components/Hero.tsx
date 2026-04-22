import "./Hero.css";

interface HeroProps {
  showText?: boolean;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ showText = true, children }) => {
 return (
    <section className="hero-container" style={{ backgroundImage: `linear-gradient(to bottom, transparent 60%, var(--color-space) 100%), var(--hero-bg-image)` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          {showText && (
            <>
              <h1 className="hero-title">Cécile Lavrut - Pardo</h1>
              <h2 className="hero-subtitle">Développeuse Fullstack & Directrice Artistique</h2>
              <p className="hero-description">15 ans d'expertise en design visuel au service du développement web. Je crée des interfaces performantes, accessibles et intuitives.</p>
            </>
          )}
          {children} {/* Ton bouton de téléchargement s'affichera ici */}
        </div>
      </div>
    </section>
  );
};

export default Hero;