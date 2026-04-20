import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Projects from "./pages/Projets";
import CV from "./pages/CV";
import Contact from "./pages/Contact";

function App() {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Router>
			{/* On passe le thème et la fonction à la Navbar pour le menu mobile */}
			<Navbar theme={theme} toggleTheme={toggleTheme} />

			<main className="relative pt-20">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projets" element={<Projects />} />
					<Route path="/cv" element={<CV />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>

			{/* Le bouton flottant (géré par son propre composant pour le mode desktop) */}
			<ThemeToggle
				theme={theme}
				toggleTheme={toggleTheme}
				className="fixed bottom-8 right-8 w-12 h-12 hidden md:flex z-[2000]"
			/>
		</Router>
	);
}

export default App;
