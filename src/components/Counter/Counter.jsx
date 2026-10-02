import { useState } from 'react'
import styles from './Counter.module.css'
import Card from '../UI/Card/Card.jsx'
import Button from '../UI/Button/Button.jsx'

const step = 1

export default function Counter() {
  const [count, setCount] = useState(0)
  const decrease = () => {
    setCount((previousCount) => Math.max(0, previousCount - step))
  }
  const increase = () => {
    setCount((previousCount) => previousCount + step)
  }
  return (
    <section>
      <Card>
        <div className={styles.counter}>{count}</div>
        <div className={styles.buttons}>
          <Button onClick={decrease} disabled={count === 0}>-{step}</Button>
          <Button onClick={increase}>+{step}</Button>
        </div>
      </Card>
    </section>
  )
}