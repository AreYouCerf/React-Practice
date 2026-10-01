import Card from '../UI/Card/Card.jsx'
import Input from '../UI/Input/Input.jsx'
import Button from '../UI/Button/Button.jsx'
import Array from '../UI/Array/Array.jsx'
import styles from './Wars.module.css'

export default function Wars() {
  return (
    <section>
      <Card>
        <span className={styles.armedClashes}>Самые кровопролитные войны в истории нашей эры</span>
        <Input placeholder='Поиск...'></Input>
        <span className={styles.countElements}>Поисковый запрос отсутствует</span>
        <Button>Сортировать по названию</Button>
        <Array />
        <Input placeholder='Введите название...'></Input>
        <Input placeholder='Введите даты...'></Input>
        <Button>Добавить</Button>
      </Card>
    </section>
  )
}