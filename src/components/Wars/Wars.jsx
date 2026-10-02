import Card from '../UI/Card/Card.jsx'
import Input from '../UI/Input/Input.jsx'
import Button from '../UI/Button/Button.jsx'
import WarList from '../Wars/WarList/WarList.jsx'
import styles from './Wars.module.css'

export default function Wars() {
  return (
    <section>
      <Card>
        <h2 className={styles.armedClashes}>Самые кровопролитные войны в истории нашей эры</h2>
        <Input type='search' placeholder='Введите данные для поиска...' aria-label='Введите данные для поиска' />
        <p className={styles.countElements}>Поисковый запрос отсутствует</p>
        <Button>Сортировать по названию</Button>
        <WarList />
        <Input type='text' placeholder='Введите название для добавления в список...' aria-label='Введите название для добавления в список' />
        <Input type='text' placeholder='Введите даты для добавления в список...' aria-label='Введите даты для добавления в список' />
        <Button>Добавить</Button>
      </Card>
    </section>
  )
}