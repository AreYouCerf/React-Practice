import { useState } from "react"
import styles from './styles/InvisibleBlock.module.css'

export default function InvisibleBlock() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <section className={styles.theThirdTask}>
      {isVisible && (<div className={styles.hidden}>Невидимка</div>)}
      <button type='button' className={styles.contentButton} onClick={() => setIsVisible(isVisible => !isVisible)}>
        {isVisible ? 'Скрыть содержимое' : 'Показать содержимое'}</button>
    </section>
  )
}