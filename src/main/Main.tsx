import React from 'react'
import styles from './Main.module.scss'
import {Fade} from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect'

export const Main = () => {
  return (
    <div id={'main'} className={styles.mainBlock}>
      <div className={styles.container}>
        <Fade>
          <div className={styles.greeting}>
            <span>Hi There</span>
            <span>I am <span>Elena Tkachenko</span></span>
            <h1>Frontend Developer</h1>
            <ReactTypingEffect text={'Frontend Developer'} />
          </div>
          <div className={styles.photo}>
            <div className={styles.absImg}></div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
