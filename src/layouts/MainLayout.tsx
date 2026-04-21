import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

interface MainLayoutProps {
  theme: string;
  toggleTheme: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ theme, toggleTheme }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative pt-20" style={{ flex: 1 }}>
        <Outlet /> 
      </main>

      <Footer />

      <ThemeToggle
        theme={theme}
        toggleTheme={toggleTheme}
        className="fixed bottom-8 right-8 w-12 h-12 hidden md:flex z-[2000]"
      />
    </div>
  );
};

export default MainLayout;