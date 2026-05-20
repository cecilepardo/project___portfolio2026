import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import ScrollToTop from "../components/ScrollToTop";
import styles from "./MainLayout.module.css"; // Import des styles

interface MainLayoutProps {
	theme: string;
	toggleTheme: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ theme, toggleTheme }) => {
	return (
		<div className={styles.layoutContainer}>
			<ScrollToTop />

			<Navbar theme={theme} toggleTheme={toggleTheme} />

			<main className={styles.mainContent}>
				<Outlet />
			</main>

			<Footer />

			<ThemeToggle
				theme={theme}
				toggleTheme={toggleTheme}
				className={styles.toggleButton}
			/>
		</div>
	);
};

export default MainLayout;
