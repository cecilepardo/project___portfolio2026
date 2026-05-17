import { useState, useMemo } from "react";
import "./Design.css";

/* --- Types --- */
type Category =
	| "All"
	| "Design"
	| "Graphisme"
	| "Illustration"
	| "Photo"
	| "UI"
	| "Vidéo";

interface Project {
	id: number;
	title: string;
	category: string;
	img: string; // URL du média (image ou vidéo)
	size: string;
	alt: string;
	type: "image" | "video"; // Distingue le tag HTML à utiliser
}

/* --- Logique de récupération dynamique --- */
// On inclut les extensions vidéo dans le glob
const mediaFiles = import.meta.glob(
	"/src/assets/portfolio/**/*.{jpg,jpeg,png,webp,svg,mp4,webm}",
	{ eager: true },
);

/**
 * Transformation des assets selon la nomenclature :
 * catégorie_titre_alt_format.extension
 */
const allProjects: Project[] = Object.keys(mediaFiles).map((path, index) => {
	const fileName = path.split("/").pop() || "";
	const parts = fileName.split(".")[0].split("_");
	const extension = fileName.split(".").pop()?.toLowerCase();

	// 1. Extraction des segments du nom de fichier
	const rawCat = parts[0] || "Design";
	const rawTitle = parts[1] || "Projet";
	const rawAlt = parts[2] || rawTitle;
	const sizeKey = parts[3] ? `_${parts[3]}` : "_sm";

	// 2. Détection du type de média
	const isVideo = ["mp4", "webm"].includes(extension || "");

	// 3. Mapping des classes de taille Bento
	const sizeMap: Record<string, string> = {
		_lg: "large",
		_wd: "wide",
		_tl: "tall",
		_sm: "small",
	};

	// 4. Normalisation des catégories (Mapping flexible)
	const formatCategory = (cat: string) => {
		const map: Record<string, string> = {
			graphism: "Graphisme",
			graphisme: "Graphisme",
			ui: "UI",
			video: "Vidéo",
			design: "Design",
			photo: "Photo",
			illustration: "Illustration",
		};
		return (
			map[cat.toLowerCase()] ||
			cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()
		);
	};

	return {
		id: index,
		title: rawTitle.replace(/-/g, " "),
		category: formatCategory(rawCat),
		img: (mediaFiles[path] as any).default,
		size: sizeMap[sizeKey] || "small",
		alt: rawAlt.replace(/-/g, " "),
		type: isVideo ? "video" : "image",
	};
});

const Design = () => {
	const [filter, setFilter] = useState<Category>("All");
	const categories: Category[] = [
		"All",
		"Design",
		"Graphisme",
		"Illustration",
		"Photo",
		"UI",
		"Vidéo",
	];

	/**
	 * Filtrage et Randomisation
	 * Le 'useMemo' empêche la grille de se mélanger à nouveau si le composant re-render
	 * pour une raison autre que le changement de filtre.
	 */
	const displayedProjects = useMemo(() => {
		const filtered =
			filter === "All"
				? allProjects
				: allProjects.filter(
						(p) => p.category.toLowerCase() === filter.toLowerCase(),
					);

		// Algorithme de mélange (Fisher-Yates simple) pour le dynamisme visuel
		return [...filtered].sort(() => Math.random() - 0.5);
	}, [filter]);

	return (
		<div className="design-page">
			<div className="design-container">
				<header className="design-header">
					<h1 className="design-title">Design</h1>
					<p className="design-subtitle">
						<strong>Portfolio :</strong> de l'UI design à la vidéo, donner vie
						aux idées sur tous les supports.
					</p>
				</header>

				{/* Filtres de navigation */}
				<nav className="design-filters" aria-label="Catégories de projets">
					{categories.map((cat) => (
						<button
							type="button"
							key={cat}
							className={`filter-btn ${filter === cat ? "active" : ""}`}
							onClick={() => setFilter(cat)}
							aria-pressed={filter === cat}
						>
							<span className="filter-label">{cat}</span>
						</button>
					))}
				</nav>

				{/* Grille Bento : la 'key' force le re-montage et déclenche les animations CSS */}
				<div className="bento-grid" key={filter}>
					{displayedProjects.map((project) => (
						<article key={project.id} className={`bento-item ${project.size}`}>
							<div className="bento-card">
								{/* Rendu conditionnel selon le type de média */}
								{project.type === "video" ? (
									<video
										src={project.img}
										className="bento-media"
										muted
										loop
										autoPlay
										playsInline
										/* playsInline est vital pour l'auto-play sur mobile sans plein écran */
									/>
								) : (
									<img
										src={project.img}
										alt={project.alt}
										className="bento-media"
										loading="lazy"
									/>
								)}

								{/* Overlay textuel avec protection de lisibilité (gradient + shadow) */}
								<div className="bento-overlay">
									<div className="bento-info">
										<span className="bento-cat">{project.category}</span>
										<h3 className="bento-title">{project.title}</h3>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
};

export default Design;
