import linkedinLight from "../assets/linkedin-light.png";
import linkedinDark from "../assets/linkedin-dark.png";
import githubLight from "../assets/github-light.png";
import githubDark from "../assets/github-dark.png";

const CV = () => {
	const fileName = "CV_fullstack_pardo_2026.pdf";

	return (
		<div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center">
			{/* 1. HEADER DE PAGE : Parcours & Expertise */}
			<header className="text-center mb-12">
				<h1 className="text-3xl md:text-5xl font-title text-main mb-4 uppercase tracking-[0.08em]">
					Parcours & Expertise
				</h1>
				<div className="h-1 w-12 bg-sun mx-auto rounded-full opacity-60"></div>
			</header>

			{/* 2. BLOC ACTION : Téléchargement (Espacement mb-32 pour aérer) */}
			<div className="flex flex-col items-center mb-32">
				<a
					href={`/${fileName}`}
					download={fileName}
					className="group flex items-center gap-8 px-10 py-5 bg-[var(--color-nav)] text-main rounded-xl transition-all duration-300 hover:brightness-110 active:scale-95 border border-white/5 shadow-none"
				>
					<div className="flex flex-col items-start">
						<span className="text-[10px] opacity-50 font-body uppercase tracking-[0.2em] mb-1">
							Document PDF
						</span>
						<span className="text-xl font-title tracking-wide">
							Télécharger le CV
						</span>
					</div>

					<div className="bg-main/10 p-3 rounded-lg group-hover:bg-sun group-hover:text-space transition-colors duration-300">
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
							aria-hidden="true"
							role="img"
						>
							<title>Icône de téléchargement</title>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
							<polyline points="7 10 12 15 17 10"></polyline>
							<line x1="12" y1="15" x2="12" y2="3"></line>
						</svg>
					</div>
				</a>
			</div>

			{/* 3. BLOC IDENTITÉ : Le CV en dur */}
			<div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-12 border-b border-white/10 pb-12 mb-12">
				{/* INFOS GAUCHE */}
				<div className="flex-1 text-center md:text-left">
					<h2 className="text-lg tracking-wider text-sun mb-2 font-body">
						Développeuse Web & Mobile Fullstack
					</h2>
					<h3 className="text-4xl md:text-5xl font-title text-main mb-8 tracking-wide">
						Cécile Pardo
					</h3>

					<div className="flex justify-center md:justify-start gap-10">
  {/* GitHub */}
  <a
    href="https://github.com/cecilepardo"
    target="_blank"
    rel="noreferrer"
    /* On garde le hover horizon uniquement pour le dark mode */
    className="group flex items-center gap-3 text-main/60 transition-colors duration-300 dark:hover:text-[var(--color-horizon)]"
  >
    <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
      {/* On affiche githubLight tout le temps (puisque tu veux les icônes light en mode light) */}
      <img 
        src={githubLight} 
        alt="" 
        className="w-full h-full object-contain" 
      />
    </div>
    <span className="font-body text-sm uppercase tracking-widest">
      GitHub
    </span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/c%C3%A9cile-lavrut-pardo-77b239b3/"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-3 text-main/60 transition-colors duration-300 dark:hover:text-[var(--color-horizon)]"
  >
    <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
      <img 
        src={linkedinLight} 
        alt="" 
        className="w-full h-full object-contain" 
      />
    </div>
    <span className="font-body text-sm uppercase tracking-widest">
      LinkedIn
    </span>
  </a>
</div>
				</div>

				{/* PHOTO DROITE */}
				<div className="relative group">
					<div className="absolute -inset-2 bg-gradient-to-tr from-sun/20 to-horizon/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<div className="relative w-40 h-48 md:w-48 md:h-56 bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-none">
						<img
							src="src/assets/pardo_fullstack_photo.jpg"
							alt="Cécile Pardo"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>

			{/* 4. FOOTER DE PAGE */}
			<main className="w-full max-w-2xl mt-24 text-center">
				<div className="inline-block px-4 py-1 bg-sun/10 text-sun rounded-full text-[10px] font-body uppercase tracking-widest mb-6">
					Développement en cours
				</div>
				<p className="text-main/60 font-body leading-relaxed italic">
					L'intégration détaillée de mon expérience technique et de mes projets
					de formation sera prochainement disponible sous forme de timeline
					interactive.
				</p>
			</main>
		</div>
	);
};

export default CV;
