import "./Hero.css";

interface HeroProps {
  showText?: boolean;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ showText = true, children }) => {
 return (
    <section 
      className="hero-container" 
      style={{ backgroundImage: `linear-gradient(to bottom, transparent 60%, var(--color-space) 100%), var(--hero-bg-image)` }}
      aria-label="Introduction"
    >
      <div className="hero-overlay">
        {/* Le conteneur qui assure l'alignement sur la grille de 1400px */}
        <div className="hero-inner">
          <div className="hero-content">
            {showText && (
              <header>
                <h1 className="hero-title">Cécile Lavrut - Pardo</h1>
                <h2 className="hero-subtitle">Développeuse Fullstack & Directrice Artistique</h2>
                <div className="hero-description">
                  <p>15 ans d'expertise en design visuel au service du développement web.</p>
                  <p>Je crée des interfaces performantes, accessibles et intuitives.</p>
                </div>
              </header>
            )}
            {children && <div className="hero-extra-content">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;