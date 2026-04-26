interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="skill-card">
    <h4 className="skill-card-title">{title}</h4>
    <div className="skill-list">
      {skills.map((skill) => (
        <span key={skill} className="skill-item">
          {skill}
        </span>
      ))}
    </div>
  </div>
);