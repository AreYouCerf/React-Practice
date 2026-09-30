import { useState } from "react"
import './InvisibleBlock.css'

export default function InvisibleBlock() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <section className='theThirdTask'>
      {isVisible && (<div className='hidden'>Невидимка</div>)}
      <button type='button' className='contentButton' onClick={() => setIsVisible(isVisible => !isVisible)}>
        {isVisible ? 'Скрыть содержимое' : 'Показать содержимое'}</button>
    </section>
  )
}