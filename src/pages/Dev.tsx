// 1. Imports React
import { useCallback, useEffect, useState } from "react";

// 2. Imports de types et données
import type { Project } from "../data/projects";
import { devProjects } from "../data/projects";

// 3. Imports de composants
import DevCard from "../components/DevCard";

// 4. Style CSS
import "./Dev.css";

const Dev = () => {
  // État pour suivre le projet sélectionné et gérer l'ouverture de la modale
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Gestion de la fermeture de la modale via la touche Échap
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedProject(null);
  }, []);

  // Écouteur d'événement global pour intercepter le clavier
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  return (
    <main className="dev-page">
      <div className="dev-container">
        <header className="dev-header">
          <h1 className="dev-title">Projets Dev</h1>
          <p className="dev-subtitle">
            Solutions logicielles & Architecture web
          </p>
        </header>

        {/* Grille d'affichage des cartes de projets */}
        <div className="dev-grid">
          {devProjects.map((project) => (
            <DevCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* --- STRUCTURE DE LA MODALE COMPLÈTE --- */}
      {selectedProject && (
        <button
          type="button"
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
          aria-label="Fermer la modale"
        >
          {/* Conteneur de la modale (stop-propagation évite de fermer la modale en cliquant à l'intérieur) */}
          <section
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer"
            >
              &times;
            </button>

            <div className="modal-layout">
              
              {/* Section Média : Lecteur vidéo natif ou Placeholder dynamique */}
              <section 
                className="modal-video"
                aria-label={`Démonstration vidéo du projet ${selectedProject?.title}`}
              >
                {selectedProject?.demoVideo ? (
                  <video
                    src={`/assets/videos/${selectedProject.demoVideo}`}
                    controls
                    preload="metadata"
                    className="modal-video-player"
                    aria-label={selectedProject.videoAlt}
                  >
                    <track kind="captions" label={`Sous-titres pour ${selectedProject.title}`} />
                    Votre navigateur ne prend pas en charge la lecture de cette vidéo.
                  </video>
                ) : (
                  <output 
                    className="dev-video-placeholder"
                    aria-live="polite"
                  >
                    <p>La vidéo de démonstration complète de {selectedProject?.title} arrive très vite.</p>
                  </output>
                )}
              </section>

              {/* Section Informations et Métadonnées du projet */}
              <div className="modal-details">
                <h2 className="modal-title">{selectedProject.title}</h2>

                {/* Badges de la Stack Technique */}
                <div className="modal-tags">
                  {selectedProject.stack.map((s) => (
                    <span key={s} className="dev-hashtag">
                      #{s}
                    </span>
                  ))}
                </div>

                {/* Zone de texte de la description */}
                <div className="modal-description-section">
                  <h3>Fonctionnalités</h3>
                  <p className="modal-description">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Liens externes et CTAs */}
                <div className="modal-actions">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    aria-label={selectedProject.githubAria}
                  >
                    GitHub
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      aria-label={selectedProject.liveAria}
                    >
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>

            </div>
          </section>
        </button>
      )}
    </main>
  );
};

export default Dev;