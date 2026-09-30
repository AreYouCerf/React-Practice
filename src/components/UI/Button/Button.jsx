import styles from './Button.module.css'

export default function Button({ children, type = 'button', className = '', style = {}, ...props }) {
  return (
    <button type={type} className={`${styles.button} ${className}`} style={style} {...props}>
      {children}
    </button>
  )
}