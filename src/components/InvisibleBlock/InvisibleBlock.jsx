import { useState } from "react"
import styles from './InvisibleBlock.module.css'
import Card from '../UI/Card/Card.jsx'
import Button from '../UI/Button/Button.jsx'

export default function InvisibleBlock() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <section>
      <Card>
        {isVisible && (<div className={styles.hiddenBlock}>Невидимка</div>)}
        <Button onClick={() => setIsVisible(isVisible => !isVisible)}>
          {isVisible ? 'Скрыть содержимое' : 'Показать содержимое'}</Button>
      </Card>
    </section>
  )
}