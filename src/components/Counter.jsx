import { useState } from "react"
import './Counter.css'

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
    <section className='theSecondTask'>
      <div className='counter'>{count}</div>
      <div className='buttons'>
        <button type='button' className='buttonMinus' onClick={decrease} disabled={count === 0}>-{step}</button>
        <button type='button' className='buttonPlus' onClick={increase}>+{step}</button>
      </div>
    </section>
  )
}