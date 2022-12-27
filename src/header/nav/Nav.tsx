import React from 'react'
import styles from './Nav.module.scss'
import {Link} from 'react-scroll'

export const Nav = () => {
  return (
    <div className={styles.nav}>
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
  )
}
