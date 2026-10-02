import styles from './Button.module.css'

export default function Button({ children, type = 'button', className = '', ...props }) {
  return (
    <button type={type} className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  )
}