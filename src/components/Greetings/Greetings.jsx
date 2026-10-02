import { useState } from 'react'
import Clock from '../UI/Clock/Clock.jsx'
import styles from './Greetings.module.css'

const greetingText = () => {
  const hours = new Date().getHours()
  if (hours >= 5 && hours < 11) return 'Доброго утра!'
  if (hours >= 11 && hours < 17) return 'Доброго дня!'
  if (hours >= 17 && hours < 23) return 'Доброго вечера!'
  return 'Доброй ночи!'
}

export default function Greetings() {
  const [greeting] = useState(greetingText())
  return (
    <header className={styles.greetings}>
      <div className={styles.greeting}>
        <p>{greeting}</p>
        <p>Текущее время: <Clock /></p>
      </div>
    </header>
  )
}