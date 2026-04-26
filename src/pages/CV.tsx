import { Link } from "react-router-dom";

import Hero from "../components/Hero";

import contactDark from "../assets/contact-dark.png";
import contactLight from "../assets/contact-light.png";
import locDark from "../assets/location-dark.png";
import locLight from "../assets/location-light.png";
import photoProfile from "../assets/pardo_fullstack_photo.jpg";
import "./CV.css";

/* --- Types & Interfaces --- */
interface CVProps {
  theme: string;
}

interface SkillCardProps {
  title: string;
  skills: string[];
}

/* --- Sous-composant SkillCard --- */

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="skill-card">
    <h4 className="skill-card-title">{title}</h4>
    <div className="skill-list">
      {skills.map((skill) => (
        <span key={skill} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const CV = ({ theme }: CVProps) => {
  // Données centralisées pour faciliter la maintenance
  const hardSkills = [
    { title: "Back-end", skills: ["MySQL", "Node.js", "Express", "Python"] },
    { title: "Front-end", skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
    { title: "Design", skills: ["Photoshop", "Illustrator", "Figma", "Lightroom", "Première", "InDesign"] },
    { title: "Outils", skills: ["Docker", "Jira", "Trello", "GitHub"] },
  ];

  return (
    <div className="min-h-screen">
      <Hero showText={false}>
        <div className="cv-hero-flex-wrapper">
          <div className="cv-hero-text">
            <h1 className="cv-hero-title">Cécile Lavrut - Pardo</h1>
            <h2 className="cv-hero-subtitle">
              Développeuse Fullstack & Directrice Artistique
            </h2>
          </div>

          <a
            href="/CV_fullstack_pardo_2026.pdf"
            download="CV_fullstack_pardo_2026.pdf"
            className="cv-download-btn group"
          >
            <div className="cv-download-text-container">
              <span className="cv-download-title">Télécharger le CV</span>
              <span className="cv-download-label">Document PDF</span>
            </div>
            <div className="cv-download-icon">
              <svg
                role="img"
                aria-label="download icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
          </a>
        </div>
      </Hero>

      <main className="cv-body-content">
        {/* Section Entête : Social & Photo */}
        <div className="cv-main-grid">
          <div className="cv-info-section">
            <div className="cv-social-links">
              <div className="cv-social-card cv-no-click">
                <img
                  src={theme === "dark" ? locDark : locLight}
                  alt="localisation"
                  className="cv-social-icon"
                />
                <span className="cv-social-label">Paris, France</span>
              </div>

              <Link to="/contact" className="cv-social-card">
                <img
                  src={theme === "dark" ? contactDark : contactLight}
                  alt="contact"
                  className="cv-social-icon"
                />
                <span className="cv-social-label">Contacter</span>
              </Link>

              <a
                href="https://github.com/cecilepardo"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-social-card"
              >
                <div className="cv-social-icon github-icon" />
                <span className="cv-social-label">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/c%C3%A9cile-lavrut-pardo-77b239b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-social-card"
              >
                <div className="cv-social-icon linkedin-icon" />
                <span className="cv-social-label">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="cv-photo-section">
            <div className="cv-photo-wrapper">
              <img
                src={photoProfile}
                alt="Portrait Cécile Lavrut - Pardo"
                className="cv-photo"
              />
            </div>
          </div>
        </div>

        {/* Section Compétences Techniques */}
        <section className="cv-skills-section">
          <h3 className="cv-section-title">Hard Skills</h3>
          <div className="cv-skills-grid">
            {hardSkills.map((category) => (
              <SkillCard 
                key={category.title} 
                title={category.title} 
                skills={category.skills} 
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CV;