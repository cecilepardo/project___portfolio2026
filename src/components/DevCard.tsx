import { Project } from "../data/projects";

interface DevCardProps {
  project: Project;
  onOpen: (p: Project) => void;
}

const DevCard = ({ project, onOpen }: DevCardProps) => {
  return (
    <article className="dev-card">
      <div className="dev-card-media">
        <video 
          src={project.previewVideo} 
          muted 
          loop 
          autoPlay 
          playsInline 
        />
      </div>
      <div className="dev-card-info">
        <h3 className="dev-card-title">{project.title}</h3>
        <p className="dev-card-desc">{project.shortDesc}</p>
        <div className="dev-card-tags">
          {project.stack.map(tech => (
            <span key={tech} className="dev-hashtag">#{tech}</span>
          ))}
        </div>
        <button className="dev-btn-more" onClick={() => onOpen(project)}>
          Voir plus
        </button>
      </div>
    </article>
  );
};

export default DevCard;