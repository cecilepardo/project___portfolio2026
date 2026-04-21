import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {currentYear} -  Cécile Lavrut - Pardo 
        </p>
        <nav className={styles.footerNav}>
          <Link to="/LegalMentions" className={styles.link}>
            Mentions Légales
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;