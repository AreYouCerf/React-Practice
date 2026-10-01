import Greetings from './components/Greetings/Greetings.jsx'
import Counter from './components/Counter/Counter.jsx'
import InvisibleBlock from './components/InvisibleBlock/InvisibleBlock.jsx'
import Wars from './components/Wars/Wars.jsx'
import styles from './App.module.css'

function App() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <Greetings />
        <Counter />
        <InvisibleBlock />
        <Wars />
      </div>
    </>
  )
}

export default App