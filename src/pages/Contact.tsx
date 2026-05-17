import { useState, useRef } from "react"; // useRef est utile pour cibler le formulaire
import emailjs from "@emailjs/browser";
import Hero from "../components/Hero";
import styles from "./Contact.module.css";

interface ContactProps {
  theme: string;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rgpdConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData({ ...formData, [name]: val });
  };

  // --- LOGIQUE D'ENVOI ---
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    /* Note pédagogique : emailjs.sendForm utilise l'ID du service, du template et la clé publique.
      On utilise des variables d'environnement (VITE_...) pour ne pas mettre les clés en dur.
    */
    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatusMessage("Message envoyé avec succès !");
            setIsSending(false);
            setFormData({ name: "", email: "", message: "", rgpdConsent: false });
            formRef.current?.reset();
          },
          (error) => {
            console.error("Erreur EmailJS:", error);
            setStatusMessage("Une erreur est survenue, veuillez réessayer.");
            setIsSending(false);
          }
        );
    }
  };

  return (
    <div className={`contact-container ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <div className={styles.heroBackground}>
        <Hero showText={false} />
      </div>

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h2>Contactez-moi</h2>
          
          {/* On lie le ref et le onSubmit */}
          <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="rgpdConsent" name="rgpdConsent" checked={formData.rgpdConsent} onChange={handleChange} required />
              <label htmlFor="rgpdConsent">J'accepte que mes données soient traitées...</label>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={!formData.rgpdConsent || isSending}>
              {isSending ? "Envoi en cours..." : "Envoyer"}
            </button>

            {/* Notification visuelle pour l'utilisateur */}
            {statusMessage && <p className={styles.status}>{statusMessage}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;