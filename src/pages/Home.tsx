import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Le Hero gère l'identité visuelle et le message d'accueil */}
      <Hero /> 

      <main className="home-container">
        <section className="home-cards-grid">
          
          {/* Carte Parcours Développement */}
          <Link to="/dev" className="home-card" aria-label="Explorer mes projets de développement Fullstack">
            <div className="home-card-video">
              <div className="video-overlay">
                <h3>Développement Fullstack</h3>
              </div>
            </div>
            
            <div className="home-card-content">
              {/* Tags techniques identiques au style de la page Dev */}
              <div className="dev-card-tags">
                {["MySQL", "Express", "Node.js", "Python", "JavaScript", "React", "TypeScript", "HTML", "CSS"].map((tech) => (
                  <span key={tech} className="dev-hashtag">#{tech}</span>
                ))}
              </div>
              <span className="home-card-cta">Découvrir</span>
            </div>
          </Link>

          {/* Carte Parcours Design */}
          <Link to="/design" className="home-card" aria-label="Découvrir mon portfolio Design et Direction Artistique">
            <div className="home-card-video">
              <div className="video-overlay">
                <h3>Design & Direction Artistique</h3>
              </div>
            </div>
            
            <div className="home-card-content">
              {/* Tags design harmonisés sur le style technique */}
              <div className="dev-card-tags">
                {["Photoshop", "Illustrator", "Figma", "InDesign", "Premiere", "Lightroom", "Affinity", "ProCreate", "Adobe XD"].map((skill) => (
                  <span key={skill} className="dev-hashtag">#{skill}</span>
                ))}
              </div>
              <span className="home-card-cta">Découvrir</span>
            </div>
          </Link>

        </section>
      </main>
    </div>
  );
};

export default Home;