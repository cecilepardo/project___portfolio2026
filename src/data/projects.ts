export interface Project {
	id: number;
	title: string;
	shortDesc: string;
	fullDesc: string;
	stack: string[];
	previewVideo: string;
	demoVideo: string;
	videoAlt: string;
	githubUrl: string;
	githubAria: string;
	liveUrl?: string;
	liveAria?: string;
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
		previewVideo: "IloeShort.mp4",
		demoVideo: "Iloe.mp4",
		videoAlt: "Aperçu vidéo de l'interface du site de photographie Iloé",
		githubUrl:
			"https://github.com/cecilepardo/project___photographer-full-website_iloe",
		githubAria: "Consulter le code source de Iloé sur GitHub",
		liveUrl: "https://www.iloe.pro",
		liveAria: "Visiter le site Iloé en direct",
	},
	{
		id: 2,
		title: "Pickit",
		shortDesc: "Site de prêt de matériel sportif",
		fullDesc:
			"Plateforme collaborative de prêt d'équipements sportifs, conçue en mobile-first. Chat en temps réel, gestion des favoris et paiements sécurisés via Stripe. Authentification JWT et tableau de bord admin.",
		stack: [
			"MySQL",
			"Express",
			"Node.js",
			"React Native",
			"TypeScript",
			"JavaScript",
			"Stripe",
		],
		previewVideo: "PickitShort.mp4",
		demoVideo: "Pickit.mp4",
		videoAlt: "Démonstration de l'application Pickit",
		githubUrl: "https://github.com/DevNexus59/Pickit",
		githubAria: "Consulter le code source de Pickit sur GitHub",
		liveUrl: "https://pickit.pierrefourdin.dev/",
		liveAria: "Voir la démonstration en ligne de Pickit",
	},
	{
		id: 3,
		title: "Portfolio",
		shortDesc: "Portfolio de développeuse et designeuse",
		fullDesc:
			"Portfolio complet pour mes différents projets et mes books de graphiste, photographe, designeuse...",
		stack: ["React", "TypeScript", "JavaScript", "Stripe"],
		previewVideo: "",
		demoVideo: "",
		videoAlt: "Aperçu de la navigation du portfolio actuel",
		githubUrl: "https://github.com/cecilepardo/project___portfolio2026",
		githubAria: "Consulter le code source du portfolio sur GitHub",
		liveUrl: "",
		liveAria: "Voir le portfolio en ligne",
	},
	{
		id: 4,
		title: "MoveUp",
		shortDesc: "Site d'entraînement sportif pour les particuliers",
		fullDesc:
			"Site permettant aux utilisateurs de planifier leurs séances, voir des exercices et les sauvegarder. Authentification sécurisée et tableau de bord personnalisé.",
		stack: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
		previewVideo: "MoveUpShort.mp4",
		demoVideo: "MoveUp.mp4",
		videoAlt: "Démonstration des fonctionnalités de planification de MoveUp",
		githubUrl:
			"https://github.com/Joachim-masson/Js-Crew809-TeamRocket-P2-G2-moveup",
		githubAria: "Consulter le code source de MoveUp sur GitHub",
		liveUrl: "https://moveup.pierrefourdin.dev/",
		liveAria: "Voir la démonstration en ligne de MoveUp",
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
		previewVideo: "TatooineShort.mp4",
		demoVideo: "Tatooine.mp4",
		videoAlt: "Aperçu de l'interface thématique Star Wars de Tatooine Interim",
		githubUrl:
			"https://github.com/cecilepardo/challenge___react-api-project_tatooine-interim",
		githubAria: "Consulter le code source de Tatooine Interim sur GitHub",
		liveUrl: "https://pickit.pierrefourdin.dev/",
		liveAria: "Voir la démonstration de Tatooine Interim",
	},
	// {
	// 	id: 6,
	// 	title: "Guilde des Échanges Douteux",
	// 	shortDesc: "Plateforme fictive de troc au Moyen-Âge",
	// 	fullDesc:
	// 		"Site fictif permettant aux utilisateurs de visualiser, de poster des annonces et de s'envoyer des messages.",
	// 	stack: ["React", "TypeScript", "JavaScript", "Stripe"],
	// 	previewVideo: "",
	// 	demoVideo: "",
	// 	videoAlt: "Présentation de la plateforme de troc médiévale",
	// 	githubUrl:
	// 		"https://github.com/cecilepardo/challenge___fullstack-trade-website_guilde-des-echanges-douteux",
	// 	githubAria: "Consulter le code source de la Guilde sur GitHub",
	// 	liveUrl: "https://pickit.pierrefourdin.dev/",
	// 	liveAria: "Voir la démo de la Guilde des Échanges Douteux",
	// },
	// {
	// 	id: 7,
	// 	title: "Site des Poulettes",
	// 	shortDesc: "Site d'un Éditeur Jeunesse",
	// 	fullDesc:
	// 		"Site fictif d'un Éditeur Jeunesse, Les Poulettes, permettant de visualiser les albums parus et les auteurs.",
	// 	stack: ["HTML", "CSS", "JavaScript"],
	// 	previewVideo: "",
	// 	demoVideo: "",
	// 	videoAlt: "Aperçu de la mise en page du catalogue Les Poulettes",
	// 	githubUrl:
	// 		"https://github.com/cecilepardo/challenge___front-website_publisher_cocottes",
	// 	githubAria: "Consulter le code source des Poulettes sur GitHub",
	// 	liveUrl: "https://pickit.pierrefourdin.dev/",
	// 	liveAria: "Voir la démo du site Les Poulettes",
	// },
	{
		id: 9,
		title: "Neon 808, label de musique",
		shortDesc: "Site d'un Label de musique",
		fullDesc:
			"Site fictif d'un Label de musique, Neon 808, présentant les artistes et leurs productions.",
		stack: ["HTML", "CSS", "JavaScript"],
		previewVideo: "Neon808Short.mp4",
		demoVideo: "Neon808.mp4",
		videoAlt: "Démonstration visuelle du label Neon 808",
		githubUrl:
			"https://github.com/cecilepardo/project_music-label-website_neon808",
		githubAria: "Consulter le code source de Neon 808 sur GitHub",
		liveUrl: "https://pickit.pierrefourdin.dev/",
		liveAria: "Voir le site Neon 808 en ligne",
	},
];
