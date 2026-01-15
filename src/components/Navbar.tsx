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
    /* Container principal décollé du haut sur Desktop */
    <nav className="fixed top-0 left-0 w-full h-20 z-[1100] flex items-center justify-center bg-space md:bg-transparent md:top-6">
      
      {/* Le Rectangle flottant Desktop 
          - md:max-w-2xl : Largeur contenue pour 4 liens
          - md:rounded-xl : Rectangle à bords arrondis (pas pilule)
          - md:h-12 : Hauteur ajustée pour un look compact
      */}
      <div className="w-full h-full px-6 flex justify-between items-center md:h-12 md:w-auto md:max-w-2xl md:bg-[var(--color-nav)] md:rounded-xl md:px-8">
        
        {/* NOM & SOUSTITRE (Visible uniquement sur Mobile) */}
        <div className="flex flex-col md:hidden">
          <Link to="/" className="text-main font-title text-lg font-bold leading-tight">
            Cécile Pardo
          </Link>
          <span className="text-main/70 text-xs font-body">
            Développeuse Fullstack
          </span>
        </div>

        {/* BOUTON BURGER (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex items-center justify-center z-[1200] md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-between w-6 h-4">
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>

        {/* LISTE DES LIENS */}
        <ul 
          style={{ 
            backgroundImage: window.innerWidth < 768 ? 'linear-gradient(to bottom, var(--color-space) 80%, transparent 100%)' : 'none'
          }}
          className={`
            fixed top-0 left-0 w-full h-[60vh] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out
            z-[1050] opacity-100
            ${isOpen ? 'translate-y-0' : '-translate-y-full'}
            
            /* Desktop Reset : On centre les liens dans le rectangle */
            md:static md:translate-y-0 md:h-auto md:flex md:flex-row md:bg-transparent md:w-auto md:gap-10
          `}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-main font-title text-2xl md:text-sm uppercase tracking-widest hover:text-sun transition-colors duration-300"
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