import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./App.css";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LegalMentions from "./pages/LegalMentions";
import MainLayout from "./layouts/MainLayout";
import Portfolio from "./pages/Portfolio";
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

	// 1. Définition des routes (syntaxe moderne "Data Router")
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout theme={theme} toggleTheme={toggleTheme} />,
			errorElement: <ErrorPage />, // Ajoute cette ligne ici !
			children: [
				{ index: true, element: <Home /> },
  { path: "portfolio", element: <Portfolio /> },
  { path: "projets", element: <Projects /> },
  { path: "cv", element: <CV theme={theme} /> },
  { path: "contact", element: <Contact theme={theme} /> },
  { path: "LegalMentions", element: <LegalMentions /> },
],
		},
	]);

	// 2. On rend le RouterProvider avec notre configuration
	return <RouterProvider router={router} />;
}

export default App;
