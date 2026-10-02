import { useState, useEffect } from 'react'

export default function useNow(updateInterval = 1000) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, updateInterval)
    return () => clearInterval(timer)
  }, [updateInterval])
  return now
}