import React from 'react';

/**
 * Page CV : Présentation du parcours et téléchargement du document PDF.
 * Design : Minimaliste, respectant le thème Space/Horizon avec typographies mixtes.
 */
const CV = () => {
  // Nom du fichier situé dans le dossier /public
  const fileName = "CV_fullstack_pardo_2026.pdf";

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center">
      
      {/* SECTION TITRE : Majuscules pour l'aspect "Branding" */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-title text-main mb-4 uppercase tracking-[0.08em]">
  Parcours & Expertise
</h1>
        {/* Ligne d'accentuation discrète */}
        <div className="h-1 w-12 bg-sun mx-auto rounded-full opacity-60"></div>
      </header>

      {/* SECTION BOUTON : Texte mixte pour la fluidité de lecture */}
      <div className="flex flex-col items-center gap-4">
        <a 
          href={`/${fileName}`} 
          download={fileName}
          className="group flex items-center gap-8 px-10 py-5 bg-[var(--color-nav)] text-main rounded-xl transition-all duration-300 hover:brightness-110 active:scale-95 shadow-lg border border-white/5"
        >
          <div className="flex flex-col items-start">
            {/* Label technique : Majuscules discrètes */}
            <span className="text-[10px] opacity-50 font-body uppercase tracking-[0.2em] mb-1">
              Document PDF
            </span>
            {/* Action principale : Texte mixte fluide */}
            <span className="text-xl font-title tracking-wide">
              Télécharger le CV
            </span>
          </div>
          
          {/* Icône animée au survol */}
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
    /* Accessibilité : On indique que c'est une icône décorative */
    aria-hidden="true"
    role="img"
  >
    {/* Titre interne pour le linter */}
    <title>Icône de téléchargement</title>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
</div>
        </a>
      </div>

      {/* SECTION CONTENU : Placeholder élégant pour la version interactive */}
      <main className="w-full max-w-2xl mt-24 text-center">
        <div className="inline-block px-4 py-1 bg-sun/10 text-sun rounded-full text-[10px] font-body uppercase tracking-widest mb-6">
          Développement en cours
        </div>
        <p className="text-main/60 font-body leading-relaxed italic">
          L'intégration détaillée de mon expérience technique et de mes projets de formation 
          sera prochainement disponible sous forme de timeline interactive.
        </p>
      </main>
    </div>
  );
};

export default CV;