import { useState, useEffect } from 'react'

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(() => new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  const formattedTime = currentTime.toLocaleTimeString('ru-RU')
  return <span>{formattedTime}</span>
}