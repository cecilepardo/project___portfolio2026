import { useRef } from "react";
import type { Project } from "../data/projects";

interface DevCardProps {
	project: Project;
	onOpen: (p: Project) => void;
}

// Note pédagogique : On ajoute "export" devant pour que le composant
// soit utilisable ailleurs et que l'erreur "unused variable" disparaisse.
export const DevCard = ({ project, onOpen }: DevCardProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleMouseEnter = () => {
		// Note pédagogique : .play() renvoie une promesse, il est propre de catcher
		// d'éventuelles erreurs de lecture (ex: mode économie d'énergie).
		videoRef.current?.play().catch(() => {});
	};

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0; // On remet au début pour un effet "neuf" à chaque hover
		}
	};

	return (
		<button
			type="button"
			className="dev-card"
			onClick={() => onOpen(project)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			aria-label={`Voir les détails du projet ${project.title}`}
		>
			<div className="dev-card-media" aria-hidden="true">
				{project.previewVideo ? (
					<video
						ref={videoRef}
						src={`/assets/videos/${project.previewVideo}`}
						loop
						muted
						playsInline
						preload="auto"
						className="card-video-preview"
					>
						<source
							src={`/assets/videos/${project.previewVideo}`}
							type="video/mp4"
						/>
					</video>
				) : (
					<div className="dev-video-placeholder">
						<span>Aperçu en cours...</span>
					</div>
				)}
			</div>

			<div className="dev-card-info">
				<h3 className="dev-card-title">{project.title}</h3>
				<p className="dev-card-desc">{project.shortDesc}</p>

				<div className="dev-card-tags">
					{project.stack.map((tech) => (
						<span key={tech} className="dev-hashtag">
							#{tech}
						</span>
					))}
				</div>

				<div className="dev-btn-more">Voir plus</div>
			</div>
		</button>
	);
};

export default DevCard;
