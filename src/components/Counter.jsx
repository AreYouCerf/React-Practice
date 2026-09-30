import { useState } from "react"
import styles from './styles/Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  const step = 1
  const decrease = () => {
    setCount((previousCount) => Math.max(0, previousCount - step))
  }
  const increase = () => {
    setCount((previousCount) => previousCount + step)
  }
  return (
    <section className={styles.theSecondTask}>
      <div className={styles.counter}>{count}</div>
      <div className={styles.buttons}>
        <button type='button' className={styles.buttonMinus} onClick={decrease} disabled={count === 0}>-{step}</button>
        <button type='button' className={styles.buttonPlus} onClick={increase}>+{step}</button>
      </div>
    </section>
  )
}