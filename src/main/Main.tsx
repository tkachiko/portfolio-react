import React from 'react'
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span>Hi There</span>
          <span>I am <span>Elena Tkachenko</span></span>
          <h1>Frontend Developer</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.absImg}></div>
        </div>
      </div>
    </div>
  )
}
