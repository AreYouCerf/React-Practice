import styles from './Input.module.css'

export default function Input({ placeholder = '', className = '', ...props }) {
  return (
    <input className={`${styles.styledInput} ${className}`}
      placeholder={placeholder} {...props} />
  )
}