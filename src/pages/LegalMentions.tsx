import styles from "./LegalMentions.module.css";

const MentionsLegales = () => {
	return (
		<div className={styles.container}>
			<h1>Mentions Légales</h1>

			<section className={styles.section}>
				<h2>1. Éditeur du site</h2>
				<p>
					Le présent site est édité par : <strong>Cécile Lavrut - Pardo</strong>
				</p>
				<p>
					Conformément à l'article 6, III, 2° de la loi n° 2004-575 du 21 juin
					2004 (LCEN), les coordonnées de l'éditeur du site sont tenues à la
					disposition du public par l'hébergeur, qui en garantit la
					confidentialité.
				</p>
				<p>Email : pardo.cle@gmail.com</p>
			</section>

			<section className={styles.section}>
				<h2>2. Hébergement du site</h2>
				<p>Ce site est hébergé par : Vercel Inc.</p>
				<p>
					Adresse de l'hébergeur : 440 N Barranca Ave #4133, Covina, CA 91723,
					États-Unis
				</p>
				<p>Adresse de contact : https://vercel.com/contact</p>
			</section>

			<section className={styles.section}>
				<h2>3. Propriété intellectuelle</h2>
				<p>
					L'ensemble de ce site (structure, textes, logos, design et code
					source) relève de la législation française et internationale sur le
					droit d'auteur et la propriété intellectuelle.
				</p>
				<p>
					Toute reproduction, représentation, modification ou adaptation de tout
					ou partie des éléments du site est strictement interdite sans
					l'autorisation écrite préalable de l'éditeur.
				</p>
				<p>
					Les images de background ont été réalisées par{" "}
					<a
						href="https://2d.fr"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#ff5c80" }}
					>
						Made Art
					</a>
					.
				</p>
			</section>

			<section className={styles.section}>
				<h2>4. Protection des données personnelles (RGPD)</h2>
				<p>
					Conformément au Règlement Général sur la Protection des Données
					(RGPD), les informations collectées via le formulaire de contact (nom,
					email, message) sont uniquement utilisées pour répondre à vos
					demandes.
				</p>
				<ul>
					<li>
						<strong>Destinataire des données :</strong> Cécile Pardo.
					</li>
					<li>
						<strong>Durée de conservation :</strong> Les données sont conservées
						le temps nécessaire au traitement de la demande, pour une durée
						maximale de 1 an.
					</li>
					<li>
						<strong>Vos droits :</strong> Vous disposez d'un droit d'accès, de
						rectification et de suppression de vos données en me contactant par
						email.
					</li>
				</ul>
			</section>
		</div>
	);
};

export default MentionsLegales;
