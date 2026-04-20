import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isContactPage = location.pathname === "/contact";

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Empêcher le scroll quand le menu est ouvert
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = 'unset'; // Nettoyage
    };
  }, [isOpen]);

  return (
  <header className={`navbar ${isOpen ? "open" : ""}`}>
    <nav className="nav-content">
      
      {/* Brand : Nom réduit pour mobile, caché si /contact */}
      {!isContactPage && (
        <div className="nav-brand">
          <Link to="/" onClick={() => setIsOpen(false)} className="nav-brand-link">
            Cécile Pardo
          </Link>
        </div>
      )}

      {/* Bouton Burger : Forcé à droite via flex-order ou structure */}
      <button
        type="button"
        className="burger"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
      </button>

      {/* Menu Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
        <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
        <li><Link to="/projets" onClick={() => setIsOpen(false)}>Projets</Link></li>
        <li><Link to="/cv" onClick={() => setIsOpen(false)}>CV</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        
        {/* Toggle Thème Mobile sans la ligne de séparation */}
        <li className="md:hidden pt-2 flex justify-center">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="w-12 h-12" />
        </li>
      </ul>
    </nav>
  </header>
);
};

export default Navbar;