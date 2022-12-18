import React from 'react'
import styles from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import linkedin from './../assets/image/linkedin.svg'
import telegram from './../assets/image/telegram.svg'
import email from './../assets/image/email.svg'
import codewars from './../assets/image/codewars.svg'
import phone from './../assets/image/phone.svg'
import github from './../assets/image/github.svg'
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
      <div className={`${styleContainer.container} ${styles.footerContainer}`}>
        <Title text={'Elena Tkachenko'} />
        <div className={styles.icons}>
          {contacts.map(contact => <ContactIcon key={contact.id} link={contact.link} img={contact.img}/>)}
        </div>
        <p>  &#169; 2022 All rights reserved</p>
      </div>
    </div>
  )
}