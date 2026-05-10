import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero>
        <div className="home-hero-content">
          <h1 className="home-title">Cécile Lavrut - Pardo</h1>
          <p className="home-tagline">Développeuse Fullstack & Directrice Artistique</p>
          <p className="home-description">
            15 ans d'expertise en design visuel au service du développement web. 
            Je crée des interfaces performantes, accessibles et intuitives.
          </p>
        </div>
      </Hero>

      <main className="home-container">
        <section className="home-cards-grid">
          {/* Carte Développement */}
          <Link to="/dev" className="home-card dev-card-link" aria-label="Voir mes projets de développement">
            <div className="home-card-video">
              {/* Ta vidéo "showreel" dev quand elle sera prête */}
              <div className="video-overlay">
                <h3>Développement Fullstack</h3>
              </div>
            </div>
            <div className="home-card-content">
              <p className="home-card-stack">MySQL • Express • Node.js • React • TypeScript</p>
              <span className="home-card-cta">Explorer le lab →</span>
            </div>
          </Link>

          {/* Carte Design */}
          <Link to="/design" className="home-card design-card-link" aria-label="Voir mon portfolio de design">
            <div className="home-card-video">
              {/* Ta vidéo "showreel" design quand elle sera prête */}
              <div className="video-overlay">
                <h3>Design & Direction Artistique</h3>
              </div>
            </div>
            <div className="home-card-content">
              <p className="home-card-stack">UI/UX • Branding • Photoshop • Figma • Premiere</p>
              <span className="home-card-cta">Découvrir le book →</span>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;