import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projets' },
    { name: 'CV', path: '/cv' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-[1100] flex items-center bg-space md:bg-transparent border-b border-white/5 md:border-none">
      <div className="w-full px-6 flex justify-between items-center">
        
        {/* BLOC NOM & SOUSTITRE (Mobile uniquement) */}
        <div className="flex flex-col md:hidden">
          <Link to="/" className="text-main font-title text-lg font-bold leading-tight">
            Cécile Pardo
          </Link>
          <span className="text-main/70 text-xs font-body">
            Développeuse Fullstack
          </span>
        </div>

        {/* BOUTON BURGER / CROIX */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex items-center justify-center z-[1200] md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-between w-6 h-4">
            {/* Utilisation de la variable CSS directe */}
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>

        {/* MENU DE NAVIGATION */}
        <ul className={`
          /* Positionnement Plein Écran Mobile */
          fixed inset-0 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out
          
          /* Style Mobile : Fond opaque pour cacher le Hero, Masque pour fondu en bas */
          bg-space z-[1050]
          [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
          
          /* Animation Haut -> Bas */
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          
          /* Style Desktop : Horizontal, centré, pas de fond */
          md:static md:translate-y-0 md:flex md:flex-row md:bg-transparent md:w-full md:justify-center md:gap-12 md:[mask-image:none]
        `}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-main font-title text-2xl md:text-lg hover:text-sun transition-colors duration-300"
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