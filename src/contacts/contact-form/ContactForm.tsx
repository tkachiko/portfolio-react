import React from 'react';
import styles from './Contact.module.css';

export const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <input type="text" placeholder="Name"/><br/>
      <input type="email" placeholder="E-mail"/><br/>
      <textarea name="contact" id="portfolio-contact-text-area" placeholder="Your message"/><br/>
    </form>
  );
};