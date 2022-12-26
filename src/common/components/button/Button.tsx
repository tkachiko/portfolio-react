import styles from './Button.module.scss'
import {FC} from 'react'

type PropsType = {
  text: string
}

export const Button: FC<PropsType> = ({text}) => {
  return <a href={''} className={styles.btn}>{text}</a>
}