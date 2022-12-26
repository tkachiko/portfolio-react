import React from 'react'
import styles from './ContactForm.module.scss'

export const ContactForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Your name" />
      <input type="email" placeholder="Your e-mail" />
      <textarea name="contact"
                id="portfolio-contact-text-area"
                placeholder="Type message here" />
      <button type={'submit'}>Send message</button>
    </form>
  )
}