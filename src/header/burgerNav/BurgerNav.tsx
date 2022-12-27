import React, {useState} from 'react'
import styles from './BurgerNav.module.scss'
import {Link} from 'react-scroll'

export const BurgerNav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div className={styles.burgerNav}>
      <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : `${styles.burgerNavItems}`}>
        <Link to={'main'}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={styles.active}
        >Main</Link>
        <Link to={'skills'}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={styles.active}
        >Skills</Link>
        <Link to={'projects'}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={styles.active}
        >Projects</Link>
        <Link to={'contacts'}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={styles.active}
        >Contacts</Link>
      </div>
      <div onClick={onBurgerBtnClick} className={menuIsOpen ? `${styles.closeBtn}` : `${styles.burgerBtn}`}>
        <div className={styles.burgerBtnItems}></div>
      </div>
    </div>
  )
}
