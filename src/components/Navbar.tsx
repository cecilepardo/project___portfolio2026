import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-content">
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/projets">Projets</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;