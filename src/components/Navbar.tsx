import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

/* Section : Types */
interface NavLink {
	name: string;
	path: string;
}

interface NavbarProps {
	theme: string;
	toggleTheme: () => void;
}

/* Section : Composant */
const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const isContactPage = location.pathname === "/contact";

	/* Gestion du scroll lock */
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
	}, [isOpen]);

	const navLinks: NavLink[] = [
		{ name: "Accueil", path: "/" },
		{ name: "Projets", path: "/projets" },
		{ name: "CV", path: "/cv" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<nav className="fixed top-0 left-0 w-full h-20 z-[1100] flex items-center justify-center bg-space md:bg-transparent md:top-6">
			{/* Barre de navigation principale */}
			<div
				className="w-full h-full flex flex-row-reverse justify-between items-center md:flex-row md:h-12 md:w-auto md:bg-[var(--color-nav)] md:rounded-xl md:shadow-lg md:backdrop-blur-md md:border md:border-white/10"
				style={{ paddingLeft: "30px", paddingRight: "30px" }}
			>
				{/* Burger Button (Droite sur mobile) */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="relative w-8 h-8 flex items-center justify-center z-[1200] md:hidden focus:outline-none"
					aria-label="Toggle menu"
				>
					<div className="flex flex-col justify-between w-6 h-4">
						<span
							className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
						></span>
						<span
							className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
						></span>
						<span
							className={`block w-full h-0.5 bg-[var(--text-main)] transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
						></span>
					</div>
				</button>

				{/* Brand/Nom (Gauche sur mobile) */}
				{!isContactPage && (
					<div className="flex flex-col md:hidden">
						<Link
							to="/"
							className="text-main font-title text-lg font-bold leading-tight"
						>
							Cécile Pardo
						</Link>
						<span className="text-main/70 text-xs font-body">
							Développeuse Fullstack
						</span>
					</div>
				)}

				{/* Menu & Liens */}
				<ul
					style={{
						backgroundImage:
							window.innerWidth < 768
								? "linear-gradient(to bottom, var(--color-space) 80%, transparent 100%)"
								: "none",
					}}
					className={`
            fixed top-0 left-0 w-full h-[70vh] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out
            z-[1050] bg-space md:bg-transparent
            ${isOpen ? "translate-y-0" : "-translate-y-full"}
            md:static md:translate-y-0 md:h-auto md:flex md:flex-row md:w-auto md:gap-10
          `}
				>
					{navLinks.map((link) => (
						<li key={link.name}>
							<Link
								to={link.path}
								onClick={() => setIsOpen(false)}
								className="font-title text-2xl md:text-sm uppercase tracking-widest hover:text-sun transition-colors duration-300 text-main"
							>
								{link.name}
							</Link>
						</li>
					))}

					{/* Toggle Thème - Mobile */}
					<li className="md:hidden pt-4 border-t border-white/10 w-1/2 flex justify-center">
						<ThemeToggle
							theme={theme}
							toggleTheme={toggleTheme}
							className="w-12 h-12 flex" /* Pas besoin de position fixed ici */
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
