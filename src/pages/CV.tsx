import heroImage from "../assets/hero.jpg";
import "./CV.css"; // Lié localement dans le dossier pages

const CV = () => {
	return (
		<div className="min-h-screen bg-[var(--color-space)]">
			{/* Utilisation des classes préfixées "cv-" pour éviter les conflits */}
			<section
				className="cv-hero-container"
				style={{
					backgroundImage: `linear-gradient(to bottom, transparent 60%, var(--color-space) 100%), url(${heroImage})`,
				}}
			>
				<div className="cv-hero-content">
					<h1 className="cv-hero-title">Cécile Pardo</h1>
					<h2 className="cv-hero-subtitle">Développeuse Fullstack</h2>
				</div>
			</section>

			<main className="cv-body-content">
				<div className="cv-main-grid">
					{/* Colonne Gauche (pour l'instant vide, accueillera tes liens plus tard) */}
					<div className="cv-info-section">
						<a
							href={`/CV_fullstack_pardo_2026.pdf`}
							download="CV_fullstack_pardo_2026.pdf"
							className="cv-download-btn group"
						>
							<div className="cv-download-text-container">
  <span className="cv-download-title">Télécharger le CV</span>
  <span className="cv-download-label">Document PDF</span>
</div>
							<div className="cv-download-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
									<polyline points="7 10 12 15 17 10"></polyline>
									<line x1="12" y1="15" x2="12" y2="3"></line>
								</svg>
							</div>
						</a>
					</div>

					{/* Colonne Droite (Ta Photo) */}
					<div className="cv-photo-section">
						<div className="cv-photo-wrapper">
							<img
								src="src/assets/pardo_fullstack_photo.jpg"
								alt="Cécile Pardo"
								className="cv-photo"
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default CV;
