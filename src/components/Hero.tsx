import heroImage from "../assets/hero.jpg";
import "./Hero.css"; // N'oublie pas d'importer le CSS si ce n'est pas déjà fait

const Hero = () => {
	return (
		<section
			className="hero-container"
			style={{ 
    backgroundImage: `linear-gradient(to bottom, transparent 60%, var(--color-space) 100%), url(${heroImage})` 
  }}
		>
			<div className="hero-overlay">
				<div className="hero-content">
					<h1 className="hero-title">Cécile Pardo</h1>
					<h2 className="hero-subtitle">Développeuse Fullstack</h2>
					<p className="hero-description">
						En recherche d’une alternance full-stack, je mets mon œil de
						designer et ma rigueur de développeuse au service d’expériences
						numériques centrées utilisateur.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
