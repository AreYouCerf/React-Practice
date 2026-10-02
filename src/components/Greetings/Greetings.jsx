import styles from './Greetings.module.css'
import useNow from './useNow.jsx'

const greetingText = (date) => {
  const hours = date.getHours()
  if (hours >= 5 && hours < 11) return 'Доброго утра!'
  if (hours >= 11 && hours < 17) return 'Доброго дня!'
  if (hours >= 17 && hours < 23) return 'Доброго вечера!'
  return 'Доброй ночи!'
}

export default function Greetings() {
  const currentTime = useNow(1000)
  const formattedTime = currentTime.toLocaleTimeString('ru-RU')
  return (
    <section className={styles.greetings}>
      <div className={styles.greeting}>
        <p>{greetingText(currentTime)}</p>
        <p>Текущее время: {formattedTime}</p>
      </div>
    </section>
  )
}