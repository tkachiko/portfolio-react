import React from 'react';
import styles from './ContactIcon.module.scss';

type PropsType = {
  src: string
}

export const ContactIcon: React.FC<PropsType> = (props) => {
  return (
    <img className={styles.icon} src={props.src}
         alt="contact"/>
  );
};