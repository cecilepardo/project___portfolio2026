import { Link } from "react-router-dom";
import Hero from "../components/Hero";

/* --- Assets UI & Profil --- */
import contactDark from "../assets/contact-dark.png";
import contactLight from "../assets/contact-light.png";
import locDark from "../assets/location-dark.png";
import locLight from "../assets/location-light.png";
import photoProfile from "../assets/pardo_fullstack_photo.jpg";

/* --- Assets Icons Hard Skills --- */
import iconCss from "../assets/icons/css.png";
import iconDocker from "../assets/icons/docker.png";
import iconExpress from "../assets/icons/express.png";
import iconFigma from "../assets/icons/figma.png";
import iconGitHub from "../assets/icons/github.png";
import iconHtml5 from "../assets/icons/html5.png";
import iconIllustrator from "../assets/icons/illustrator.png";
import iconIndesign from "../assets/icons/indesign.png";
import iconJavascript from "../assets/icons/javascript.png";
import iconJira from "../assets/icons/jira.png";
import iconLightroom from "../assets/icons/lightroom.png";
import iconMysql from "../assets/icons/mysql.png";
import iconNodejs from "../assets/icons/nodejs.png";
import iconPhotoshop from "../assets/icons/photoshop.png";
import iconPremiere from "../assets/icons/premiere.png";
import iconPython from "../assets/icons/python.png";
import iconReact from "../assets/icons/react.png";
import iconTrello from "../assets/icons/trello.png";
import iconTypescript from "../assets/icons/typescript.png";

import "./CV.css";

/* --- Interfaces --- */
interface CVProps { theme: string; }
interface Skill { name: string; icon: string; }
interface Experience {
  year: string;
  company: string;
  role: string;
  details: string;
  isDev?: boolean;
}

/* --- Sous-composants --- */

const SkillCard = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div className="cv-skill-card">
    <h4 className="cv-skill-card-title">{title}</h4>
    <div className="cv-skill-list">
      {skills.map((skill) => (
        <div key={skill.name} className="cv-skill-item">
          <img src={skill.icon} alt="" className="cv-skill-icon" />
          <span className="cv-skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ exp }: { exp: Experience }) => (
  <div className={`timeline-item ${exp.isDev ? "timeline-dev" : ""}`}>
    <div className="timeline-dot" />
    <div className="timeline-date">{exp.year}</div>
    <div className="timeline-content">
      <h4 className="timeline-role">{exp.role}</h4>
      <p className="timeline-company">{exp.company}</p>
      <p className="timeline-details">{exp.details}</p>
    </div>
  </div>
);

const CV = ({ theme }: CVProps) => {
  const categories = [
    {
      title: "Back-end",
      skills: [
        { name: "MySQL", icon: iconMysql },
        { name: "Express", icon: iconExpress },
        { name: "Node.js", icon: iconNodejs },
        { name: "Python", icon: iconPython },
      ],
    },
    {
      title: "Front-end",
      skills: [
        { name: "JavaScript", icon: iconJavascript },
        { name: "TypeScript", icon: iconTypescript },
        { name: "React", icon: iconReact },
        { name: "HTML 5", icon: iconHtml5 },
        { name: "CSS 3", icon: iconCss },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Photoshop", icon: iconPhotoshop },
        { name: "Illustrator", icon: iconIllustrator },
        { name: "Figma", icon: iconFigma },
        { name: "InDesign", icon: iconIndesign },
        { name: "Premiere", icon: iconPremiere },
        { name: "Lightroom", icon: iconLightroom },
      ],
    },
    {
      title: "Outils",
      skills: [
        { name: "Docker", icon: iconDocker },
        { name: "GitHub", icon: iconGitHub },
        { name: "Jira", icon: iconJira },
        { name: "Trello", icon: iconTrello },
      ],
    },
  ];

  const experiences: Experience[] = [
    {
      year: "2025 - 2026",
      company: "Wild Code School",
      role: "UX/UI & Développement Fullstack",
      isDev: true,
      details: "Développement de 3 applications web (SQL, Express, React, TS). Focus sur l'API REST, l'architecture scalable et l'accessibilité (RGAA). Projets clés : MoveUp | Pickit | Pixowl."
    },
    {
      year: "2020 - 2024",
      company: "Gamestream",
      role: "Directrice Artistique",
      details: "Production d'assets en environnement produit tech (Cloud Gaming). Mise en place de workflows structurés, gestion de versions et coordination avec les équipes tech/marketing."
    },
    {
      year: "2011 - 2020",
      company: "Freelance & Éditions (Geko, Suntrip, CFSL Ink)",
      role: "Graphiste Web & UI Senior",
      details: "Conception de systèmes visuels complexes. Expertise en gestion de projets digitaux, résolution de problèmes et maîtrise des pipelines de production multimédia."
    },
    {
      year: "2006 - 2011",
      company: "Ministère de l'Éducation Nationale",
      role: "Professeure des Écoles",
      details: "Pilotage de projets pédagogiques, vulgarisation technique et adaptation continue."
    }
  ];

  const formations = [
    { year: "2025-2026", title: "Wild Code School", subtitle: "Titre certifié de Développeur Web et Web Mobile" },
    { year: "2011-2015", title: "Beaux-Arts de Paris", subtitle: "Techniques de Gravure (Eau-forte, Linogravure, Aquatinte, photogravure..." },
    { year: "2006", title: "Concours du CRPE (Bac +5)", subtitle: "Option Anglais et Mathématiques" },
    { year: "2002-2005", title: "DEUG + Licence d'Arts Plastiques", subtitle: "Spécialités Photo, Analyse de l'Image et Sérigraphie" },
    { year: "2000", title: "Baccalauréat Scientifique", subtitle: "Option SVT & Grec ancien" }
  ];

  return (
    <div className="cv-page">
      <Hero showText={false}>
        <div className="cv-hero-container">
          <div className="cv-hero-flex-wrapper">
            <div className="cv-hero-text">
              <h1 className="cv-hero-title">Cécile Lavrut - Pardo</h1>
              <h2 className="cv-hero-subtitle">
                Développeuse Fullstack & Directrice Artistique
              </h2>
            </div>
            <a
              href="/CV_fullstack_pardo_2026.pdf"
              download
              className="cv-download-btn"
            >
              <div className="cv-download-text-container">
                <span className="cv-download-title">Télécharger le CV</span>
                <span className="cv-download-label">Document PDF</span>
              </div>
              <div className="cv-download-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  role="img"
                  aria-labelledby="dl-title"
                >
                  <title id="dl-title">Télécharger</title>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </Hero>

      <main className="cv-body-content">
        {/* 1. Grille Social/Photo */}
        <div className="cv-main-grid">
          <div className="cv-info-section">
            <div className="cv-social-links">
              <div className="cv-social-card cv-no-click">
                <img
                  src={theme === "dark" ? locDark : locLight}
                  alt=""
                  className="cv-social-icon"
                />
                <span className="cv-social-label">Paris, France</span>
              </div>
              <Link to="/contact" className="cv-social-card">
                <img
                  src={theme === "dark" ? contactDark : contactLight}
                  alt=""
                  className="cv-social-icon"
                />
                <span className="cv-social-label">Contacter</span>
              </Link>
              <a
                href="https://github.com/cecilepardo"
                target="_blank"
                rel="noreferrer"
                className="cv-social-card"
              >
                <div className="cv-social-icon github-icon" />
                <span className="cv-social-label">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/c%C3%A9cile-lavrut-pardo-77b239b3/"
                target="_blank"
                rel="noreferrer"
                className="cv-social-card"
              >
                <div className="cv-social-icon linkedin-icon" />
                <span className="cv-social-label">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="cv-photo-section">
            <div className="cv-photo-wrapper">
              <img src={photoProfile} alt="Portrait" className="cv-photo" />
            </div>
          </div>
        </div>

        {/* 2. HARD SKILLS */}
        <section className="cv-section cv-skills-margin">
          <h3 className="cv-section-title">Hard Skills</h3>
          <div className="cv-skills-grid">
            {categories.map((cat) => (
              <SkillCard key={cat.title} title={cat.title} skills={cat.skills} />
            ))}
          </div>
        </section>

        {/* 3. FORMATION */}
        <section className="cv-section">
          <h3 className="cv-section-title">Formation</h3>
          <div className="formation-unique-block">
            {formations.map((f) => (
              <div key={f.title} className="formation-dense-item">
                <span className="formation-year">{f.year}</span>
                <div className="formation-info">
                  <h4 className="formation-title">{f.title}</h4>
                  <p className="formation-subtitle">{f.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EXPÉRIENCES */}
        <section className="cv-section experience-top-margin">
          <h3 className="cv-section-title">Expériences Professionnelles</h3>
          <div className="timeline-container">
            {experiences.map((exp) => (
              <TimelineItem key={`${exp.year}-${exp.company}`} exp={exp} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CV;