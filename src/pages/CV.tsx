import { Link } from "react-router-dom";
import "./CV.css";
import photoProfile from "../assets/pardo_fullstack_photo.jpg";
import Hero from "../components/Hero";

/* Imports des assets pour le mode light/dark */
import locLight from "../assets/location-light.png";
import locDark from "../assets/location-dark.png";
import contactLight from "../assets/contact-light.png";
import contactDark from "../assets/contact-dark.png";

/* On suppose que tu reçois le thème en prop comme sur ton MainLayout */
const CV = ({ theme }: { theme: string }) => {
  return (
    <div className="min-h-screen">
      <Hero showText={false}>
        <div className="cv-hero-flex-wrapper">
          <div className="cv-hero-text">
            <h1 className="cv-hero-title">Cécile Lavrut - Pardo</h1>
            <h2 className="cv-hero-subtitle">Développeuse Fullstack & Directrice Artistique</h2>
          </div>

          <a href="/CV_fullstack_pardo_2026.pdf" download className="cv-download-btn group">
            <div className="cv-download-text-container">
              <span className="cv-download-title">Télécharger le CV</span>
              <span className="cv-download-label">Document PDF</span>
            </div>
            <div className="cv-download-icon">
                <svg role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>
          </a>
        </div>
      </Hero>

      <main className="cv-body-content">
        <div className="cv-main-grid">
          <div className="cv-info-section">
            
            {/* Localisation : Simple div sans lien */}
           <div className="cv-social-card cv-no-click">
      <img 
        src={theme === 'dark' ? "/location-dark.png" : "/location-light.png"} 
        alt="" 
        className="cv-social-icon" 
      />
      <span className="cv-social-label">Paris, France</span>
    </div>

            <div className="cv-social-links">
              {/* Contact : Lien interne vers la page contact */}
              <Link to="/contact" className="cv-social-card">
                <img 
                  src={theme === 'dark' ? contactDark : contactLight} 
                  alt="" 
                  className="cv-social-icon" 
                />
                <span className="cv-social-label">Me contacter</span>
              </Link>
              
              <a href="https://github.com/cecilepardo" target="_blank" rel="noopener noreferrer" className="cv-social-card">
                <div className="cv-social-icon github-icon"></div>
                <span className="cv-social-label">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/c%C3%A9cile-lavrut-pardo-77b239b3/" target="_blank" rel="noopener noreferrer" className="cv-social-card">
                <div className="cv-social-icon linkedin-icon"></div>
                <span className="cv-social-label">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="cv-photo-section">
            <div className="cv-photo-wrapper">
              <img src={photoProfile} alt="Cécile Lavrut - Pardo" className="cv-photo" />
            </div>
          </div>
        </div>

        {/* Les futures sections (Skills, Formation, etc.) viendront ici */}
      </main>
    </div>
  );
};

export default CV;