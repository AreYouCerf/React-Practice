import { useState } from 'react'
import styles from './InvisibleBlock.module.css'
import Card from '../UI/Card/Card.jsx'
import Button from '../UI/Button/Button.jsx'

export default function InvisibleBlock() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <section aria-live='polite'>
      <Card>
        {isVisible && (<div id='hidden-block' className={styles.hiddenBlock}>Невидимка</div>)}
        <Button
          onClick={() => setIsVisible(prev => !prev)}
          aria-expanded={isVisible}
          aria-controls='Скрытый блок'>
          {isVisible ? 'Скрыть содержимое' : 'Показать содержимое'}</Button>
      </Card>
    </section>
  )
}