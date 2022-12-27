import React from 'react';
import styles from './Header.module.scss';
import {Nav} from './nav/Nav';
import {BurgerNav} from './burgerNav/BurgerNav'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Nav/>
      <BurgerNav/>
    </div>
  );
};
