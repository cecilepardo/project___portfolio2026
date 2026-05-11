import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./Home.css";

/* --- Assets Visuels --- */
import homeDesign from "../assets/homeDesign.jpg";
import homeDev from "../assets/homeDev.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <Hero /> 

      <main className="home-container">
        <section className="home-cards-grid">
          
          {/* Carte Parcours Développement */}
          <Link to="/dev" className="home-card" aria-label="Explorer mes projets de développement Fullstack">
            <div className="home-card-video">
              {/* Correction : utilisation du bon nom de variable */}
              <img src={homeDev} alt="" className="home-card-img" />
              <div className="video-overlay">
                <h3>Développement Fullstack</h3>
              </div>
            </div>
            
            <div className="home-card-content">
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
              {/* Correction : utilisation du bon nom de variable */}
              <img src={homeDesign} alt="" className="home-card-img" />
              <div className="video-overlay">
                <h3>Design & Direction Artistique</h3>
              </div>
            </div>
            
            <div className="home-card-content">
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