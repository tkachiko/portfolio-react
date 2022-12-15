import React from 'react';
import styles from './Title.module.css';

type TitlePropsType = {
  text: string
}

export const Title: React.FC<TitlePropsType> = (props) => {
  return (
    <h2 className={styles.title}>{props.text}</h2>
  );
};
