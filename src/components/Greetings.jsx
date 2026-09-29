import './Greetings.css'
import { useState, useEffect } from 'react'

export default function Greetings() {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  const greetingText = (date) => {
    const hours = date.getHours()
    if (hours >= 5 && hours < 11) return 'Доброго утра!'
    if (hours >= 11 && hours < 17) return 'Доброго дня!'
    if (hours >= 17 && hours < 23) return 'Доброго вечера!'
    return 'Доброй ночи!'
  }
  const formattedTime = currentTime.toLocaleTimeString('ru-RU')
  return (
    <section className='theFirstTask'>
      <div className='greeting'>
        <p>{greetingText(currentTime)}</p>
        <p>Текущее время: {formattedTime}</p>
      </div>
    </section>
  )
}