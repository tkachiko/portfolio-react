import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {ContactForm} from './contact-form/ContactForm';

export const Contacts = () => {
  return (
    <div className={styles.contactsBlock}>
      <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
        <h2 className={styles.title}>contacts</h2>
        <ContactForm/>
        <button>Send message</button>
      </div>
    </div>
  );
};
