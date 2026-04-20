import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

interface MainLayoutProps {
  theme: string;
  toggleTheme: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative pt-20">
        <Outlet /> {/* C'est ici que s'afficheront Home, Portfolio, etc. */}
      </main>
      <ThemeToggle
        theme={theme}
        toggleTheme={toggleTheme}
        className="fixed bottom-8 right-8 w-12 h-12 hidden md:flex z-[2000]"
      />
    </>
  );
};

export default MainLayout;