import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {ContactForm} from './contact-form/ContactForm';
import {Title} from '../common/components/title/Title'

export const Contacts = () => {
  return (
    <div className={styles.contactsBlock}>
      <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
        <Title text={'Contacts'}/>
        <ContactForm/>
      </div>
    </div>
  );
};
