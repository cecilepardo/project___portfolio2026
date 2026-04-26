import { useState } from 'react';
import Hero from '../components/Hero';
import styles from './Contact.module.css';

interface ContactProps {
  theme: string;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rgpdConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // Note pédagogique : On utilise un cast "as HTMLInputElement" pour accéder à la propriété .checked
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  return (
    /* Conteneur parent relatif pour z-index */
    <div className={`contact-container ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      
      {/* 1. Le Hero en arrière-plan */}
      <div className={styles.heroBackground}>
        <Hero showText={false} />
      </div>

      {/* 2. Le formulaire par-dessus */}
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h2>Contactez-moi</h2>
          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" onChange={handleChange} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={handleChange} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} onChange={handleChange} required />
            </div>

            <div className={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                id="rgpdConsent" 
                name="rgpdConsent" 
                checked={formData.rgpdConsent}
                onChange={handleChange}
                required 
              />
              <label htmlFor="rgpdConsent">
                En cochant cette case, j'accepte que mes données soient traitées dans le cadre de ma demande de contact.
              </label>
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={!formData.rgpdConsent}
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;