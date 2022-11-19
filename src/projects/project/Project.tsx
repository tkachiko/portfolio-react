import React from 'react';
import styles from './Project.module.css';

type PropsType = {
  title: string
  description: string
}

export const Project: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.project}>
      <div className={styles.icon}>
        <button className={styles.button}>Watch</button>
      </div>
      <h3>{props.title}</h3>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};
