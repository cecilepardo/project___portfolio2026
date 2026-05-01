export interface Project {
	id: number;
	title: string;
	shortDesc: string;
	fullDesc: string;
	stack: string[];
	previewVideo: string; // La boucle de 10s
	demoVideo: string; // La démo de 2min
	githubUrl: string;
	liveUrl?: string; // Optionnel
}

export const devProjects: Project[] = [
	{
		id: 1,
		title: "Iloé by PixOwl",
		shortDesc: "Site de photographe complet",
		fullDesc:
			"Un site de photographe complet avec admin, plateforme de vente, gestion des galeries client, calendrier... Projet en cours de développement.",
		stack: [
			"MySQL",
			"Express",
			"Node.js",
			"React",
			"TypeScript",
			"JavaScript",
			"Stripe",
		],
		previewVideo: "/assets/dev/iloe-preview.mp4",
		demoVideo: "/assets/dev/iloe-demo.mp4",
		githubUrl:
			"https://github.com/cecilepardo/project___photographer-full-website_iloe",
		liveUrl: "https://www.iloe.pro",
	},

	{
		id: 2,
		title: "Pickit",
		shortDesc: "Site de prêt de matériel sportif",
		fullDesc:
			"Plateforme collaborative de prêt d'équipements sportifs, conçue en mobile-first. Les utilisateurs peuvent publier des annonces, échanger via un chat en temps réel, gérer leurs favoris et effectuer des paiements sécurisés via Stripe. Authentification JWT, gestion des rôles et tableau de bord administrateur.",
		stack: [
			"MySQL",
			"Express",
			"Node.js",
			"React Native",
			"TypeScript",
			"JavaScript",
			"Stripe",
		],
		previewVideo: "/assets/dev/pickit-preview.mp4",
		demoVideo: "/assets/dev/pickit-demo.mp4",
		githubUrl: "https://github.com/https://github.com/DevNexus59/Pickit", // CLONE + FORK GITHUB
		liveUrl: "https://pickit.pierrefourdin.dev/",
	},

	{
		id: 3,
		title: "Portfolio",
		shortDesc: "Portfolio de développeuse et designeuse",
		fullDesc:
			"Portfolio complet pour mes différents projets et mes books de graphiste, photographe, designeuse,...",
		stack: ["React", "TypeScript", "JavaScript", "Stripe"],
		previewVideo: "/assets/dev/portfolio-preview.mp4",
		demoVideo: "/assets/dev/portfolio-demo.mp4",
		githubUrl: "https://github.com/cecilepardo/project___portfolio2026",
		liveUrl: "https://pickit.pierrefourdin.dev/", // ADRESSE DU SITE DÉPLOYÉ
	},

	{
		id: 4,
		title: "MoveUp",
		shortDesc: "Site d'entraînement sportif pour les particuliers",
		fullDesc:
			"Site permettant aux utilisateurs de planifier leurs séances, voir des exercices et les sauvegarder. Fonctionnalités : inscription avec authentification sécurisée, tableau de bord personnalisé, planning des séances...",
		stack: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
		previewVideo: "/assets/dev/moveup-preview.mp4",
		demoVideo: "/assets/dev/moveup-demo.mp4",
		githubUrl:
			"https://github.com/Joachim-masson/Js-Crew809-TeamRocket-P2-G2-moveup", // CLONE + FORK GITHUB
		liveUrl: "https://moveup.pierrefourdin.dev/",
	},

	{
		id: 5,
		title: "Tatooine Interim",
		shortDesc: "Hackaton dans l'univers Star Wars",
		fullDesc:
			"Projet de recrutement de mercenaires dans l'univers Star Wars. Consommation d'une API existante sur un projet court en équipe.",
		stack: [
			"React",
			"TypeScript",
			"JavaScript",
			"Node.js",
			"REST API",
			"Express",
		],
		previewVideo: "/assets/dev/tatooine-preview.mp4",
		demoVideo: "/assets/dev/tatooine-demo.mp4",
		githubUrl:
			"https://github.com/cecilepardo/challenge___react-api-project_tatooine-interim",
		liveUrl: "https://pickit.pierrefourdin.dev/", // ADRESSE DU SITE DÉPLOYÉ
	},

	{
		id: 6,
		title: "Guilde des Échanges Douteux",
		shortDesc: "Plateforme fictive de troc au Moyen-Âge",
		fullDesc:
			"Site fictif permettant aux utilisateurs de visualiser, de poster des annonces et de s'envoyer des messages.",
		stack: ["React", "TypeScript", "JavaScript", "Stripe"],
		previewVideo: "/assets/dev/ged-preview.mp4",
		demoVideo: "/assets/dev/ged-demo.mp4",
		githubUrl:
			"https://github.com/cecilepardo/challenge___fullstack-trade-website_guilde-des-echanges-douteux",
		liveUrl: "https://pickit.pierrefourdin.dev/", // ADRESSE DU SITE DÉPLOYÉ
	},

	{
		id: 7,
		title: "Site des Poulettes",
		shortDesc:
			"Site d'un Éditeur Jeunesse, projet front-end avec différentes pages, albums...",
		fullDesc:
			"Site fictif d'un Éditeur Jeunesse, Les Poulettes, permettant aux utilisateurs de visualiser les différents albums parus, les auteurs... Projet front-end.",
		stack: ["HTML", "CSS", "JavaScript"],
		previewVideo: "/assets/dev/poulettes-preview.mp4",
		demoVideo: "/assets/dev/poulettes-demo.mp4",
		githubUrl:
			"https://github.com/cecilepardo/challenge___front-website_publisher_cocottes",
		liveUrl: "https://pickit.pierrefourdin.dev/", // ADRESSE DU SITE DÉPLOYÉ
	},

	{
		id: 8,
		title: "Site des Poulettes",
		shortDesc:
			"Site d'un Éditeur Jeunesse, projet front-end avec différentes pages, albums...",
		fullDesc:
			"Site fictif d'un Éditeur Jeunesse, Les Poulettes, permettant aux utilisateurs de visualiser les différents albums parus, les auteurs... Projet front-end.",
		stack: ["HTML", "CSS", "JavaScript"],
		previewVideo: "/assets/dev/poulettes-preview.mp4",
		demoVideo: "/assets/dev/poulettes-demo.mp4",
		githubUrl:
			"https://github.com/cecilepardo/challenge___front-website_publisher_cocottes",
		liveUrl: "https://pickit.pierrefourdin.dev/", // ADRESSE DU SITE DÉPLOYÉ
	},


	{
		id: 9,
		title: "Neon 808, label de musique",
		shortDesc: "Site d'un Label de musique, projet front-end avec différentes pages, artistes...",
		fullDesc: "Site fictif d'un Label de musique, Neon 808, permettant aux utilisateurs de visualiser les différents artistes, leur production... Projet front-end.",
		stack: ["HTML", "CSS", "JavaScript"],
		previewVideo: "/assets/dev/neon808-preview.mp4",
		demoVideo: "/assets/dev/neon808-demo.mp4",
		githubUrl: "https://github.com/cecilepardo/project_music-label-website_neon808",
		liveUrl: "https://pickit.pierrefourdin.dev/", // ADRESSE DU SITE DÉPLOYÉ
	},
];
