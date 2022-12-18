import React from 'react'
import styles from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

export const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styleContainer.container}>
        <div className={styles.textBlock}>
          <span>Hi There</span>
          <h1>I am <span>Elena Tkachenko</span></h1>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.photo}>
          <div className={styles.absImg}></div>
        </div>
      </div>
    </div>
  )
}
