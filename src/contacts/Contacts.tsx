import React from 'react'
import styles from './Contacts.module.scss'
import {ContactForm} from './contact-form/ContactForm'
import {Title} from '../common/components/title/Title'

export const Contacts = () => {
  return (
    <div className={styles.contactsBlock}>
      <div className={styles.container}>
        <Title text={'Contacts'} />
        <ContactForm />
      </div>
    </div>
  )
}
