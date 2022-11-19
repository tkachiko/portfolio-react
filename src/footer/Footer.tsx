import React from 'react';
import styles from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {ContactIcon} from './contact-icons/ContactIcon';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styleContainer.container} ${styles.footerContainer}`}>
        <h2 className={styles.title}>Elena Tkachenko</h2>
        <div className={styles.icons}>
          <ContactIcon src={'https://i.pinimg.com/736x/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.jpg'}/>
          <ContactIcon src={'https://i.pinimg.com/736x/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.jpg'}/>
          <ContactIcon src={'https://i.pinimg.com/736x/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.jpg'}/>
          <ContactIcon src={'https://i.pinimg.com/736x/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.jpg'}/>
        </div>
        <p>  &#169; 2022 All rights reserved</p>
      </div>
    </div>
  );
};