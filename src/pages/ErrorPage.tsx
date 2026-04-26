import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.heroBackground}>
				<Hero showText={false} />
			</div>

			<div className={styles.content}>
				<h1 className={styles.title}>404</h1>
				<p className={styles.text}>Page non trouvée</p>
				<Link to="/" className={styles.homeBtn}>
					Retourner à l'accueil
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
