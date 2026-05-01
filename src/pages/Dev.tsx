// 1. Imports React
import { useCallback, useEffect, useState } from "react";

// 2. Imports de types (Note le "import type")
import type { Project } from "../data/projects";
import { devProjects } from "../data/projects";

// 3. Imports de composants
import DevCard from "../components/DevCard";

// 4. Style
import "./Dev.css";

const Dev = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedProject(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  return (
    <main className="dev-page">
      <header className="dev-header">
        <h1 className="dev-title">Dev Lab</h1>
        <p className="dev-subtitle">Solutions logicielles & Architecture web</p>
      </header>

      <div className="dev-grid">
        {devProjects.map((project) => (
          <DevCard 
            key={project.id} 
            project={project} 
            onOpen={setSelectedProject} 
          />
        ))}
      </div>

      {selectedProject && (
        /* 
           Correction : On utilise un <button> invisible pour l'overlay 
           pour satisfaire la règle "noStaticElementInteractions"
        */
        <button
          type="button"
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
          aria-label="Fermer la modale"
        >
          {/* 
             Le contenu de la modale est une <section> avec role="dialog" 
             On utilise un stopPropagation sur le click pour ne pas fermer
             la modale quand on clique sur le texte.
          */}
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
              <div className="modal-video">
                <video src={selectedProject.demoVideo} controls autoPlay muted />
              </div>

              <div className="modal-details">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-tags">
                  {selectedProject.stack.map((s) => (
                    <span key={s} className="dev-hashtag">#{s}</span>
                  ))}
                </div>
                <h3>Fonctionnalités</h3>
                <p className="modal-description">{selectedProject.fullDesc}</p>
                <div className="modal-actions">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                    GitHub
                  </a>
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
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