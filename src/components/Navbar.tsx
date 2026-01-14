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
    <nav className="fixed top-0 left-0 w-full h-20 z-[1000] flex items-center bg-space md:bg-transparent border-b border-white/5 md:border-none">
      {/* Container principal avec justify-between pour écarter Nom et Burger */}
      <div className="w-full px-6 flex justify-between items-center">
        
        {/* BLOC NOM : Visible uniquement sur Mobile (md:hidden) */}
        <div className="flex flex-col md:hidden">
          <Link to="/" className="text-main font-title text-lg font-bold leading-tight">
            Cécile Pardo
          </Link>
          <span className="text-main/70 text-xs font-body">
            Développeuse Fullstack
          </span>
        </div>

        {/* BOUTON BURGER : Forcé en blanc/main pour être visible */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex items-center justify-center z-[1100] md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-between w-6 h-4">
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>

        {/* MENU : Desktop (centré) / Mobile (plein écran) */}
        <ul className={`
          fixed inset-0 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out bg-space/98 backdrop-blur-xl
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          md:static md:translate-y-0 md:flex md:flex-row md:bg-transparent md:backdrop-blur-none md:w-full md:justify-center md:gap-12
        `}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-main font-title text-2xl md:text-lg hover:text-sun transition-colors"
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