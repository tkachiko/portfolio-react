import React from 'react'
import styles from './ContactIcon.module.scss'

type PropsType = {
  link: string
  img: string
}

export const ContactIcon: React.FC<PropsType> = (props) => {
  return (
    <a className={styles.link}
       href={props.link}
       target={'_blank'}
       rel={'noreferrer'}>
    <img className={styles.icon} src={props.img}
         alt="contact"/>
    </a>
  );
};