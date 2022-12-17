import React from 'react';
import styles from './Project.module.scss';

type PropsType = {
  title: string
  description: string
  style: { backgroundImage: string }
}

export const Project: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.project}>
      <div className={styles.image}
      style={props.style}>
        <a className={styles.viewBtn} href={'#'}>Watch</a>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{props.title}</h3>
        <span className={styles.description}>{props.description}</span>
      </div>
    </div>
  );
};
