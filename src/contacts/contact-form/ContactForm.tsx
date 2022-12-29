import styles from './ContactForm.module.scss'
import React, {useRef, FormEvent} from 'react'
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //@ts-ignore
    emailjs.sendForm('gmail', 'message_form', form.current, '9ZeIqPtzHU7dI7Bqh')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    //@ts-ignore
    form.current.reset()
  }

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <input type="text"
             name="name"
             placeholder="Your name" />
      <input type="email"
             name="email"
             placeholder="Your e-mail" />
      <input type="text"
             name="subject"
             placeholder="Subject" />
      <textarea name="message"
                id="portfolio-contact-text-area"
                placeholder="Type message here" />
      <button type={'submit'}>Send message</button>
    </form>
  )
}