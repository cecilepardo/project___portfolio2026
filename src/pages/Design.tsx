import { useState, useMemo } from "react";
import "./Design.css";

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
 * Transformation des fichiers selon ta nomenclature :
 * catégorie_titre-de-l-image_alt-de-l-image_format.jpg
 */
const allProjects: Project[] = Object.keys(imageFiles).map((path, index) => {
  const fileName = path.split("/").pop() || "";
  const parts = fileName.split(".")[0].split("_");
  
  // 1. Extraction des segments
  const rawCat = parts[0] || "Design";
  const rawTitle = parts[1] || "Projet";
  const rawAlt = parts[2] || rawTitle;
  const sizeKey = parts[3] ? `_${parts[3]}` : "_sm";

  // 2. Mapping des tailles
  const sizeMap: Record<string, string> = {
    _lg: "large",
    _wd: "wide",
    _tl: "tall",
    _sm: "small",
  };

  // 3. Harmonisation de la catégorie (pour éviter les bugs "Graphisme" vs "graphisme")
  const formatCategory = (cat: string) => {
    const map: Record<string, string> = {
      graphism: "Graphisme",
      graphisme: "Graphisme",
      ui: "UI",
      video: "Vidéo",
      design: "Design",
      photo: "Photo",
      illustration: "Illustration"
    };
    return map[cat.toLowerCase()] || cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  };

  return {
    id: index,
    title: rawTitle.replace(/-/g, " "),
    category: formatCategory(rawCat),
    img: (imageFiles[path] as any).default,
    size: sizeMap[sizeKey] || "small",
    alt: rawAlt.replace(/-/g, " ")
  };
});

const Design = () => {
  const [filter, setFilter] = useState<Category>("All");
  
  // Liste ordonnée pour l'affichage des boutons
  const categories: Category[] = ["All", "Design", "Graphisme", "Illustration", "Photo", "UI", "Vidéo"];

  /**
   * Filtrage et Randomisation
   * useMemo garantit que l'ordre aléatoire reste stable tant qu'on ne change pas de filtre
   */
  const displayedProjects = useMemo(() => {
    const filtered = filter === "All" 
      ? allProjects 
      : allProjects.filter(p => p.category.toLowerCase() === filter.toLowerCase());
    
    // Algorithme de mélange simple pour donner du dynamisme à la Bento Grid
    return [...filtered].sort(() => Math.random() - 0.5);
  }, [filter]);

  return (
    <div className="design-page">
      <div className="design-container">
        <header className="design-header">
          <h1 className="design-title">Visual Lab</h1>
          <p className="design-subtitle"><strong>Portfolio :</strong> de l'UI design à la vidéo, donner vie aux idées sur tous les supports. </p>
        </header>

        {/* Navigation des filtres */}
        <nav className="design-filters" aria-label="Catégories de projets">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              aria-label={`Afficher les projets de type ${cat}`}
            >
              <span className="filter-label">{cat}</span>
            </button>
          ))}
        </nav>

        {/* Grille Bento Dynamique */}
        <div className="bento-grid" key={filter}>
          {displayedProjects.map((project) => (
            <article key={project.id} className={`bento-item ${project.size}`}>
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;