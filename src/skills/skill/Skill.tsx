import React from 'react'
import styles from './Skill.module.scss'
import {Fade} from 'react-awesome-reveal'

type PropsType = {
  title: string
  description: string
  style: { backgroundImage: string }
}

export const Skill: React.FC<PropsType> = (props) => {
  return (
    <Fade>
      <div className={styles.skill}>
        <div className={styles.icon} style={props.style}></div>
        <h3>{props.title}</h3>
        <span className={styles.description}>{props.description}</span>
      </div>
    </Fade>
  )
}
