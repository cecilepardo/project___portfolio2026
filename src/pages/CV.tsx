import { useState, useEffect } from "react"; // 1. On ajoute useState et useEffect pour gérer l'état du scroll
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
interface CVProps {
	theme: string;
}
interface Skill {
	name: string;
	icon: string;
}
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
					<img
						src={skill.icon}
						alt={`${skill.name} icon`}
						className="cv-skill-icon"
					/>
					<span className="cv-skill-name">{skill.name}</span>
				</div>
			))}
		</div>
	</div>
);

const TimelineItem = ({ exp }: { exp: Experience }) => {
	const formatDetails = (text: string) => {
		if (text.includes(" : ")) {
			const [intro, list] = text.split(" : ");
			return (
				<>
					{intro} :
					<ul className="timeline-detail-list">
						{list.split(", ").map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</>
			);
		}
		return text;
	};

	return (
		<div className={`timeline-item ${exp.isDev ? "timeline-dev" : ""}`}>
			<div className="timeline-dot" />
			<div className="timeline-date">{exp.year}</div>
			<div className="timeline-content">
				<h4 className="timeline-role">{exp.role}</h4>
				<p className="timeline-company">{exp.company}</p>
				<div className="timeline-details">{formatDetails(exp.details)}</div>
			</div>
		</div>
	);
};

const CV = ({ theme }: CVProps) => {
	// 2. State pour afficher ou masquer le bouton
	const [showScrollBtn, setShowScrollBtn] = useState(false);

	// 3. Gestionnaire de scroll pour surveiller la position de l'utilisateur
	useEffect(() => {
		const handleScroll = () => {
			// Le bouton apparaît si l'utilisateur descend de plus de 400px
			if (window.scrollY > 400) {
				setShowScrollBtn(true);
			} else {
				setShowScrollBtn(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Note pédagogique : Très important, on nettoie l'écouteur d'événement
		// au démontage du composant pour éviter les fuites de mémoire (memory leaks).
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// 4. Fonction pour remonter en haut de manière fluide
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

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
			details:
				"Développement de 3 applications web (MoveUp, Pickit, Pixowl) : architecture scalable, API REST, optimisation des performances et conformité RGAA (accessibilité). Stack : SQL, Express, React, TypeScript.",
		},
		{
			year: "2020 - 2024",
			company: "Gamestream",
			role: "Directrice Artistique",
			details:
				"Coordination entre équipes tech et marketing en environnement Cloud Gaming. Workflows structurés, gestion de versions et optimisation des pipelines de production. Conception de campagnes multi-supports : bannières, visuels événementiels, vidéo, newsletters, kits de communication.",
		},
		{
			year: "2017 - 2020",
			company: "Freelance",
			role: "Graphiste Web & UI",
			details:
				"Création d'identités visuelles et interfaces : brandings de marques, chartes graphiques, logos, design d'interfaces (UI), photographie et illustration.",
		},
		{
			year: "2016 - 2017",
			company: "Geko Éditions",
			role: "Graphiste",
			details:
				"Édition et communication visuelle : mise en page d'ouvrages, illustration jeunesse, gestion des réseaux sociaux et création de contenu.",
		},
		{
			year: "2014 - 2016",
			company: "Suntrip Records",
			role: "Graphiste",
			details:
				"Identité de marque et digital : campagnes visuelles, UI du site, photographie événementielle et packshots.",
		},
		{
			year: "2011 - 2013",
			company: "Éditions CFSL Ink",
			role: "Graphiste",
			details:
				"Supports marketing et rédaction : création d'assets graphiques, rédaction de contenus et gestion des relations presse.",
		},
		{
			year: "2006 - 2011",
			company: "Ministère de l'Éducation Nationale",
			role: "Professeure des Écoles",
			details:
				"Gestion de projets et pédagogie : pilotage de projets pédagogiques, gestion de groupe, coordination de l'autonomie et adaptabilité.",
		},
	];

	const formations = [
		{
			year: "2025-2026",
			title: "Wild Code School",
			subtitle: "Titre certifié de Développeur Web et Web Mobile",
		},
		{
			year: "2011-2015",
			title: "Beaux-Arts de Paris",
			subtitle: "Techniques de Gravure (Eau-forte, Linogravure, Aquatinte...)",
		},
		{
			year: "2006",
			title: "Concours du CRPE (Bac +5)",
			subtitle: "Option Anglais et Mathématiques",
		},
		{
			year: "2002-2005",
			title: "DEUG + Licence d'Arts Plastiques",
			subtitle: "Spécialités Photo, Analyse de l'Image et Sérigraphie",
		},
		{
			year: "2000",
			title: "Baccalauréat Scientifique",
			subtitle: "Option SVT & Grec ancien",
		},
	];

	const expos = [
		{
			year: "2025",
			items: [
				"Exposition Paysages Pluriels (Brest, France)",
				"Parution revue Pourtant (série 'Silence')",
			],
		},
		{
			year: "2024",
			items: [
				"Parution Pourtant n°8",
				"2è prix photo (Impression Panoramique)",
				"Expo 1984 Metz (Festival Les Photographiques)",
			],
		},
		{ year: "2021", items: ["2è prix photo", "2è prix vidéo (Saarbrücken)"] },
		{
			year: "2019",
			items: [
				"1er prix photo",
				"4è prix vidéo (Revision Eastern Party)",
				"Expo photo Haunted à Paris XI",
			],
		},
		{
			year: "2018",
			items: [
				"1er prix photo",
				"4è prix photo (Evoke)",
				"Parution revue Corridor Elephant (série 'Ombres')",
			],
		},
		{
			year: "2017",
			items: [
				"2è prix photo (Cologne)",
				"Expo et démonstrations aux Journées de l'Estampe Contemporaine (Paris XIV)",
			],
		},
		{ year: "2016", items: ["Exposition d'aquatintes (Paris VII)"] },
		{
			year: "2015",
			items: [
				"1er prix vidéo (Revision Eastern Party)",
				"1er prix du Géant des Beaux-Arts (dotation de 7k€)",
			],
		},
		{
			year: "2013",
			items: ["Exposition photo Tchernobyl à l'Hôtel de Ville de Paris"],
		},
		{
			year: "2011",
			items: ["Livre photo 'Tchernobyl 25 ans après' aux Éditions CFSL Ink"],
		},
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
							aria-label="Télécharger le CV au format PDF"
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
							<SkillCard
								key={cat.title}
								title={cat.title}
								skills={cat.skills}
							/>
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
					<h3 className="cv-section-title">Expérience Professionnelle</h3>
					<div className="timeline-container">
						{experiences.map((exp) => (
							<TimelineItem key={`${exp.year}-${exp.company}`} exp={exp} />
						))}
					</div>
				</section>

				{/* 5. CONCOURS & EXPOS */}
				<section className="cv-section">
					<h3 className="cv-section-title">Concours & Expositions</h3>
					<div className="formation-unique-block expo-block">
						<div className="expo-grid">
							{expos.map((expo) => (
								<div key={expo.year} className="expo-item">
									<span className="formation-year">{expo.year}</span>
									<div className="expo-content">
										{expo.items.length > 1 ? (
											<ul className="expo-list">
												{expo.items.map((item) => (
													<li key={item}>{item}</li>
												))}
											</ul>
										) : (
											<p className="formation-subtitle">{expo.items[0]}</p>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* 6. BAS DE PAGE (Soft Skills & Loisirs) */}
				<div className="cv-footer-grid">
					<section className="cv-section">
						<h3 className="cv-section-title">Soft Skills</h3>
						<div className="soft-skills-container">
							{[
								"Polyvalence",
								"Agilité",
								"Rigueur",
								"Gestion de projet",
								"Anglais",
								"Créativité",
								"Sens du détail",
								"Orientation utilisateur",
								"Pédagogie",
								"Proactivité",
								"Autonomie",
								"Résolution de problèmes",
							].map((skill) => (
								<span key={skill} className="soft-skill-tag">
									{skill}
								</span>
							))}
						</div>
					</section>

					<section className="cv-section">
						<h3 className="cv-section-title">Intérêts</h3>
						<div className="interests-block">
							<p>
								<strong>Photographie :</strong> Portrait & urbex, expositions,
								parutions magazines.
							</p>
							<p>
								<strong>Illustration :</strong> Numérique et gravure
								(linogravure et eau forte).
							</p>
							<p>
								<strong>Sports aériens :</strong> Cerceau et pole sports.
							</p>
							<p>
								<strong>Tech :</strong> Demoscene.
							</p>
						</div>
					</section>
				</div>
			</main>

			{/* 5. Le bouton de scroll conditionnel */}
			{showScrollBtn && (
				<button
					type="button"
					className="cv-scroll-top-btn"
					onClick={scrollToTop}
					aria-label="Remonter en haut de la page"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						role="img"
						aria-label="Flèche vers le haut"
					>
						<polyline points="18 15 12 9 6 15" />
					</svg>
				</button>
			)}
		</div>
	);
};

export default CV;
