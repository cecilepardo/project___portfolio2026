import type { Project } from "../data/projects";

interface DevCardProps {
	project: Project;
	onOpen: (p: Project) => void;
}

const DevCard = ({ project, onOpen }: DevCardProps) => {
	return (
		<button
      type="button" // Indispensable pour éviter qu'il ne se comporte comme un "submit"
      className="dev-card"
      onClick={() => onOpen(project)}
      aria-label={`Voir les détails du projet ${project.title}`}
    >
			<div className="dev-card-media" aria-hidden="true">
				{project.previewVideo ? (
					<video
						src={`/assets/videos/${project.previewVideo}`}
						autoPlay
						loop
						muted
						playsInline
						preload="auto"
						className="card-video-preview"
						tabIndex={-1}
					>
						<source
							src={`/assets/videos/${project.previewVideo}`}
							type="video/mp4"
						/>
						<track kind="captions" label={project.videoAlt} />
					</video>
				) : (
					<div
						className="dev-video-placeholder"
						role="img"
						aria-label="Aperçu vidéo en cours de rendu"
					>
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

				<div className="dev-btn-more">Découvrir</div>
			</div>
		</button>
	);
};

export default DevCard;
