import { useState } from "react"
import './InvisibleBlock.css'

export default function InvisibleBlock() {
  const [Visible, setVisible] = useState(false)
  return (
    <section className='theThirdTask'>
      {Visible && (<div className='hidden'>Невидимка</div>)}
      <button type='button' className='contentButton' onClick={() => setVisible(!Visible)}>
        {Visible ? 'Скрыть содержимое' : 'Показать содержимое'}</button>
    </section>
  )
}