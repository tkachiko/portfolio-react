import styles from './Button.module.scss'
import {FC} from 'react'

type PropsType = {
  text: string
  link: string
}

export const Button: FC<PropsType> = ({text, link}) => {
  return <a href={link} target={'_blank'} rel='noopener noreferrer' className={styles.btn}>{text}</a>
}