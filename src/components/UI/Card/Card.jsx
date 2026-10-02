import styles from './Card.module.css'

export default function Card({ children, className = '', style = {}, ...props }) {
  return (
    <div className={`${styles.card} ${className}`} style={style} {...props}>
      {children}
    </div>
  )
}