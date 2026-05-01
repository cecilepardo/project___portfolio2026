const DevCard = ({ project }) => (
  <article className="dev-card">
    <div className="dev-card-media">
      <video src={project.video} autoPlay muted loop playsInline />
    </div>
    <div className="dev-card-content">
      <div className="dev-tag-list">
        {project.stack.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="dev-card-links">
        <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
      </div>
    </div>
  </article>
);