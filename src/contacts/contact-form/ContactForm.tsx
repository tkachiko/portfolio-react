import React from 'react';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <input type="text" placeholder="Name"/>
      <input type="email" placeholder="E-mail"/>
      <textarea name="contact" id="portfolio-contact-text-area" placeholder="Your message"/>
      <button type={'submit'}>Send message</button>
    </form>
  );
};