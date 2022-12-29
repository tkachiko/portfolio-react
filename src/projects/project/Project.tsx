import React from 'react'
import styles from './Project.module.scss'
import {Button} from '../../common/components/button/Button'

type PropsType = {
  title: string
  description: string
  style: { backgroundImage: string }
  link: string
}

export const Project: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.project}>
      <div className={styles.image}
           style={props.style}>
        <Button text={'Watch'} link={props.link} />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{props.title}</h3>
        <span className={styles.description}>{props.description}</span>
      </div>
    </div>
  )
}
