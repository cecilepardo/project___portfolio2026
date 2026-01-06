import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projets';
import CV from './pages/CV';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      {/* State and Function in props to Navbar */}
      <Navbar currentTheme={theme} />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div className="toggle-container">
  <input 
    type="checkbox" 
    className="checkbox" 
    onChange={toggleTheme} 
    checked={theme === 'light'} 
  />
  <div className="icons">
    <span className="sun">☀️</span>
    <span className="moon">🌙</span>
  </div>
</div>
    </Router>
  );
}

export default App;