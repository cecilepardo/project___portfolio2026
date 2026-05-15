import type { Project } from "../data/projects";

interface DevCardProps {
	project: Project;
	onOpen: (p: Project) => void;
}

const DevCard = ({ project, onOpen }: DevCardProps) => {
	return (
		<article className="dev-card">
			<div 
  className="dev-card-media"
  aria-hidden="true" /* La vidéo automatique est purement visuelle, on la masque pour les lecteurs d'écran */
>
  {project.previewVideo ? (
    <video
      src={`/assets/videos/${project.previewVideo}`}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="card-video-preview"
      tabIndex={-1} /* Évite que le lecteur d'écran ne focus sur une vidéo décorative */
    >
      {/* On utilise l'alt défini dans tes datas pour la description textuelle */}
      <track kind="captions" label={project.videoAlt} /> 
    </video>
  ) : (
    <div 
      className="dev-video-placeholder"
      role="img" /* On indique s'émantiquement qu'il s'agit d'une image/placeholder visuel */
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

				{/* Utilisation de type="button" pour la sémantique Biome */}
				<button
					type="button"
					className="dev-btn-more"
					onClick={() => onOpen(project)}
				>
					Voir plus
				</button>
			</div>
		</article>
	);
};

export default DevCard;
