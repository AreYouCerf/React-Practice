import styles from './Card.module.css'

export default function Card({ children, className = '', style = {} }) {
  return (
    <section className={`${styles.card} ${className}`} style={style}>
      {children}
    </section>
  )
}