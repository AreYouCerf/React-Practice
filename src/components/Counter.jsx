import { useState } from "react"
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  const decrease = () => {
    setCount((previousCount) => Math.max(0, previousCount - 100000))
  }
  const increase = () => {
    setCount((previousCount) => previousCount + 100000)
  }
  return (
    <section className='theSecondTask'>
      <div className='counter'>{count}</div>
      <div className='buttons'>
        <button type='button' className='buttonMinus' onClick={decrease} disabled={count === 0}>-100000</button>
        <button type='button' className='buttonPlus' onClick={increase}>+100000</button>
      </div>
    </section>
  )
}