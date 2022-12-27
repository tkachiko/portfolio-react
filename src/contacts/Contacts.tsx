import React from 'react'
import styles from './Contacts.module.scss'
import {ContactForm} from './contact-form/ContactForm'
import {Title} from '../common/components/title/Title'
import {Fade} from 'react-awesome-reveal'

export const Contacts = () => {
  return (
    <div id={'contacts'} className={styles.contactsBlock}>
      <Fade>
        <div className={styles.container}>
          <Title text={'Contacts'} />
          <ContactForm />
        </div>
      </Fade>
    </div>
  )
}
