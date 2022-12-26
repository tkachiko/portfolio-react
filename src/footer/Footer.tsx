import React from 'react'
import styles from './Footer.module.scss'
import linkedin from '../assets/image/contacts/linkedin.svg'
import telegram from '../assets/image/contacts/telegram.svg'
import email from '../assets/image/contacts/email.svg'
import codewars from '../assets/image/contacts/codewars.svg'
import github from '../assets/image/contacts/github.svg'
import {Title} from '../common/components/title/Title'
import {v1} from 'uuid'
import {ContactIcon} from './contact-icons/ContactIcon'

export const Footer = () => {
    const contacts = [
      {id: v1(), label: 'linkedin', link: 'https://www.linkedin.com/in/elena-tkachenko-8a509265/', img: linkedin},
      {id: v1(), label: 'telegram', link: 'https://t.me/tkachiko', img: telegram},
      {id: v1(), label: 'email', link: 'mailto:tkachikos@gmail.com', img: email},
      {id: v1(), label: 'github', link: 'https://github.com/tkachiko/', img: github},
      {id: v1(), label: 'codewars', link: 'https://www.codewars.com/users/tkachiko', img: codewars},
    ]

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Title text={'Elena Tkachenko'} />
        <div className={styles.icons}>
          {contacts.map(contact => <ContactIcon key={contact.id} link={contact.link} img={contact.img}/>)}
        </div>
        <p className={styles.copyright}>  &#169; 2022 All rights reserved</p>
      </div>
    </div>
  )
}