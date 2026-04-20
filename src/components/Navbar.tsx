import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom"; // Link reste utile pour le titre
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

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Petit tableau pour simplifier le rendu des liens
  const links = [
    { name: "Accueil", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Projets", path: "/projets" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`navbar ${isOpen ? "open" : ""}`}>
      <nav className="nav-content">
        
        {!isContactPage && (
          <div className="nav-brand">
            <Link to="/" onClick={() => setIsOpen(false)} className="nav-brand-link">
              Cécile Pardo
            </Link>
          </div>
        )}

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

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                // Si le lien est actif, on applique la classe "nav-active"
                className={({ isActive }) => (isActive ? "nav-link nav-active" : "nav-link")}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          
          <li className="md:hidden pt-2 flex justify-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="w-12 h-12" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;