import styles from './Avatar.module.css'

type PropsAvatar = {
  hasBorder?: boolean;
  src: string
}

export function Avatar({hasBorder = true, src}: PropsAvatar) {
  return (
    <img 
         className={hasBorder ? styles.avatarHasBorder : styles.avatar}
         src={src}/>
  )
}