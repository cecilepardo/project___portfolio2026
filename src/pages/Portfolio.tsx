import { useState } from "react";
import "./Portfolio.css";

/* --- Types --- */
type Category = "All" | "Design" | "Graphisme" | "Illustration" | "Photo" | "UI" | "Vidéo";

interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  size: string;
  alt: string;
}

/* --- Logique de récupération dynamique --- */
const imageFiles = import.meta.glob(
  "/src/assets/portfolio/**/*.{jpg,jpeg,png,webp,svg}",
  { eager: true }
);

/**
 * Fonction utilitaire pour transformer "mon-beau-projet" en "Mon Beau Projet"
 */
const capitalizeTitle = (str: string) => 
  str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

// Transformation des assets en objets utilisables
const allProjects: Project[] = Object.keys(imageFiles).map((path, index) => {
  const fileName = path.split("/").pop() || "";
  const folder = path.split("/").slice(-2, -1)[0];
  
  const sizeMap: Record<string, string> = {
    _lg: "large", // Carré 2x2
    _wd: "wide",  // Horizontal 2x1
    _tl: "tall",  // Vertical 1x2
    _sm: "small", // Carré 1x1
  };

  const sizeKey = Object.keys(sizeMap).find((key) => fileName.includes(key)) || "_sm";
  const categoryFormatted = folder.charAt(0).toUpperCase() + folder.slice(1);
  
  // Nettoyage du titre (on retire le suffixe de taille et les tirets)
  const rawName = fileName.split("_")[0];
  const cleanTitle = capitalizeTitle(rawName);

  return {
    id: index,
    title: cleanTitle,
    category: categoryFormatted,
    img: (imageFiles[path] as any).default,
    size: sizeMap[sizeKey],
    alt: `${categoryFormatted} - ${cleanTitle}` // Alt sémantique généré
  };
});

const Portfolio = () => {
  const [filter, setFilter] = useState<Category>("All");
  const categories: Category[] = ["All", "Design", "Graphisme", "Illustration", "Photo", "UI", "Vidéo"];

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h1 className="portfolio-title">Portfolio</h1>
          <p className="portfolio-subtitle">Sélection de travaux créatifs & design</p>
        </header>

        {/* 1. Filtres style CV */}
        <nav className="portfolio-filters" role="tablist">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              aria-label={`Filtrer par catégorie ${cat}`}
            >
              <span className="filter-label">{cat}</span>
            </button>
          ))}
        </nav>

        {/* 2. Grille Bento */}
        <div className="bento-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`bento-item ${project.size}`}>
              <div className="bento-card">
                <img 
                  src={project.img} 
                  alt={project.alt} 
                  loading="lazy" 
                />
                <div className="bento-overlay">
                  <div className="bento-info">
                    <span className="bento-cat">{project.category}</span>
                    <h3 className="bento-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;