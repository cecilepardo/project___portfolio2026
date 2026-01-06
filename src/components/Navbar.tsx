import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <header className={`navbar ${isOpen ? 'open' : ''}`}>
      <nav className="nav-content">
    {/* 1. Le Nom (Brand) - Visible uniquement sur mobile */}
        <div className="nav-brand">Cécile Pardo</div>

    {/* 2. Le bouton Burger */}
        <button className="burger" onClick={toggleMenu} aria-label="Menu">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
    </button>

    {/* 3. Les liens */}
    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
      <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
      <li><Link to="/projets" onClick={toggleMenu}>Projets</Link></li>
      <li><Link to="/cv" onClick={toggleMenu}>CV</Link></li>
      <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
    </ul>
  </nav>
</header>
  );
};

export default Navbar;