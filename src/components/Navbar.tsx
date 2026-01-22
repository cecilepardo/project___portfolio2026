import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Projets", path: "/projets" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-[1100] flex items-center justify-center bg-space md:bg-transparent md:top-6">
      
      {/* Conteneur du contenu (Nom + Burger) */}
      <div className="w-full h-full flex justify-between items-center md:h-12 md:w-auto md:bg-[var(--color-nav)] md:rounded-xl md:shadow-lg md:backdrop-blur-md md:border md:border-white/10"
           style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        
        {/* NOM & SOUSTITRE */}
        <div className="flex flex-col md:hidden">
          <Link to="/" className="text-main font-title text-lg font-bold leading-tight">
            Cécile Pardo
          </Link>
          <span className="text-main/70 text-xs font-body">
            Développeuse Fullstack
          </span>
        </div>

        {/* BOUTON BURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex items-center justify-center z-[1200] md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-between w-6 h-4">
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
          </div>
        </button>

				{/* LISTE DES LIENS */}
				<ul
					style={{
						backgroundImage:
							window.innerWidth < 768
								? "linear-gradient(to bottom, var(--color-space) 80%, transparent 100%)"
								: "none",
					}}
					className={`
            fixed top-0 left-0 w-full h-[60vh] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out
            z-[1050] opacity-100 bg-space md:bg-transparent
            ${isOpen ? "translate-y-0" : "-translate-y-full"}
            
            /* Desktop Reset : On laisse le CSS de Navbar.css gérer la couleur des liens */
            md:static md:translate-y-0 md:h-auto md:flex md:flex-row md:w-auto md:gap-10
          `}
				>
					{navLinks.map((link) => (
						<li key={link.name}>
							<Link
								to={link.path}
								onClick={() => setIsOpen(false)}
								className="font-title text-2xl md:text-sm uppercase tracking-widest hover:text-sun transition-colors duration-300"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
