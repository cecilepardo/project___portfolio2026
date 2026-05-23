import { useState, useMemo, useEffect, useCallback } from "react";
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
	img: string;
	size: string;
	alt: string;
	type: "image" | "video";
}

/* --- Logique de récupération dynamique --- */
const mediaFiles = import.meta.glob(
	"/src/assets/portfolio/**/*.{jpg,jpeg,png,webp,svg,mp4,webm}",
	{ eager: true },
);

const allProjects: Project[] = Object.keys(mediaFiles).map((path, index) => {
	const fileName = path.split("/").pop() || "";
	const parts = fileName.split(".")[0].split("_");
	const extension = fileName.split(".").pop()?.toLowerCase();

	const rawCat = parts[0] || "Design";
	const rawTitle = parts[1] || "Projet";
	const rawAlt = parts[2] || rawTitle;
	const sizeKey = parts[3] ? `_${parts[3]}` : "_sm";

	const isVideo = ["mp4", "webm"].includes(extension || "");

	const sizeMap: Record<string, string> = {
		_lg: "large",
		_wd: "wide",
		_tl: "tall",
		_sm: "small",
	};

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
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const categories: Category[] = [
		"All",
		"Design",
		"Graphisme",
		"Illustration",
		"Photo",
		"UI",
		"Vidéo",
	];

	const displayedProjects = useMemo(() => {
		const filtered =
			filter === "All"
				? allProjects
				: allProjects.filter(
						(p) => p.category.toLowerCase() === filter.toLowerCase(),
					);

		return [...filtered].sort(() => Math.random() - 0.5);
	}, [filter]);

	const handleClose = useCallback(() => setSelectedIndex(null), []);

	const handleNext = useCallback(() => {
		if (selectedIndex !== null) {
			setSelectedIndex((prev) =>
				prev === displayedProjects.length - 1 ? 0 : prev! + 1,
			);
		}
	}, [selectedIndex, displayedProjects.length]);

	const handlePrev = useCallback(() => {
		if (selectedIndex !== null) {
			setSelectedIndex((prev) =>
				prev === 0 ? displayedProjects.length - 1 : prev! - 1,
			);
		}
	}, [selectedIndex, displayedProjects.length]);

	useEffect(() => {
		if (selectedIndex === null) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") handleClose();
			if (e.key === "ArrowRight") handleNext();
			if (e.key === "ArrowLeft") handlePrev();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedIndex, handleClose, handleNext, handlePrev]);

	const currentProject =
		selectedIndex !== null ? displayedProjects[selectedIndex] : null;

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

				<nav className="design-filters" aria-label="Catégories de projets">
					{categories.map((cat) => (
						<button
							type="button"
							key={cat}
							className={`filter-btn ${filter === cat ? "active" : ""}`}
							onClick={() => {
								setFilter(cat);
								handleClose();
							}}
							aria-pressed={filter === cat}
						>
							<span className="filter-label">{cat}</span>
						</button>
					))}
				</nav>

				<div className="bento-grid" key={filter}>
					{displayedProjects.map((project, index) => (
						<article key={project.id} className={`bento-item ${project.size}`}>
							<button
								type="button"
								className="bento-card-button"
								onClick={() => setSelectedIndex(index)}
								aria-label={`Ouvrir le projet ${project.title}`}
							>
								<div className="bento-card">
									{project.type === "video" ? (
										<video
											src={project.img}
											className="bento-media"
											muted
											loop
											autoPlay
											playsInline
										/>
									) : (
										<img
											src={project.img}
											alt={project.alt}
											className="bento-media"
											loading="lazy"
										/>
									)}

									<div className="bento-overlay">
										<div className="bento-info">
											<span className="bento-cat">{project.category}</span>
											<h3 className="bento-title">{project.title}</h3>
										</div>
									</div>
								</div>
							</button>
						</article>
					))}
				</div>
			</div>

			{/* --- STRUCTURE DE LA MODALE COMPLÈTE --- */}
			{currentProject && (
				<button
					type="button"
					className="modal-overlay"
					onClick={handleClose}
					aria-label="Fermer la galerie"
				>
					<button
						type="button"
						className="gallery-nav-btn gallery-prev"
						onClick={(e) => {
							e.stopPropagation();
							handlePrev();
						}}
						aria-label="Projet précédent"
					>
						&#8249;
					</button>

					<div
						className="gallery-modal-content"
						onClick={(e) => e.stopPropagation()}
						onKeyDown={(e) => e.stopPropagation()}
						role="dialog"
						aria-modal="true"
					>
						<button
							type="button"
							className="modal-close"
							onClick={handleClose}
							aria-label="Fermer"
						>
							&times;
						</button>

						{currentProject.type === "video" ? (
							<video
								src={currentProject.img}
								controls
								autoPlay
								loop
								muted
								className="gallery-media-fullscreen"
							/>
						) : (
							<img
								src={currentProject.img}
								alt={currentProject.alt}
								className="gallery-media-fullscreen"
							/>
						)}

						<div className="gallery-caption">
							<span className="gallery-cat">{currentProject.category}</span>
							<h2 className="gallery-title">{currentProject.title}</h2>
						</div>
					</div>

					<button
						type="button"
						className="gallery-nav-btn gallery-next"
						onClick={(e) => {
							e.stopPropagation();
							handleNext();
						}}
						aria-label="Projet suivant"
					>
						&#8250;
					</button>
				</button>
			)}
		</div>
	);
};

export default Design;
