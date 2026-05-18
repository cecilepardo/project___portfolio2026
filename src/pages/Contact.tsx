import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Hero from "../components/Hero";
import styles from "./Contact.module.css";

interface ContactProps {
  theme: string;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rgpdConsent: false,
    honeypot: "", // Champ piège bien déclaré
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Sécurité Honeypot : si rempli, on simule un succès sans rien envoyer
    if (formData.honeypot !== "") {
      console.warn("Bot detecté.");
      setStatusMessage("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "", rgpdConsent: false, honeypot: "" });
      return;
    }

    if (!captchaToken) {
      setStatusMessage("Veuillez valider le captcha.");
      return;
    }

    setIsSending(true);

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
            // Correction TypeScript : on remet toutes les propriétés de l'état initial
            setFormData({ name: "", email: "", message: "", rgpdConsent: false, honeypot: "" });
            setCaptchaToken(null);
            recaptchaRef.current?.reset();
            formRef.current?.reset();
          },
          (error) => {
            console.error("Erreur EmailJS:", error);
            setStatusMessage("Une erreur est survenue.");
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
          
          <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
            {/* Champ Honeypot invisible pour les humains */}
            <div className={styles.hpField} aria-hidden="true">
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleChange} 
                tabIndex={-1} 
                autoComplete="off" 
              />
            </div>

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

            <div className={styles.captchaGroup}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
                theme={theme === "dark" ? "dark" : "light"}
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="rgpdConsent" name="rgpdConsent" checked={formData.rgpdConsent} onChange={handleChange} required />
              <label htmlFor="rgpdConsent">J'accepte que mes données soient traitées...</label>
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={!formData.rgpdConsent || !captchaToken || isSending}
            >
              {isSending ? "Envoi en cours..." : "Envoyer"}
            </button>

            {statusMessage && <p className={styles.status}>{statusMessage}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;