import styles from './Array.module.css'

const wars = [
  { id: 'NapoleonWars', title: 'Наполеоновские войны', years: '1799-1815' },
  { id: 'RussianCivil', title: 'Гражданская война в России', years: '1917-1923' },
  { id: 'DunganRevolt', title: 'Дунганское восстание', years: '1862' },
  { id: 'AnLushanRebellion', title: 'Восстание Ай Лушаня', years: '8 век нашей эры' },
  { id: 'WorldWarI', title: 'Первая мировая война', years: '1914-1918' },
  { id: 'TamerlaneWars', title: 'Войны Тамерлана', years: '14 век' },
  { id: 'TaipingRebellion', title: 'Восстание тайпинов', years: '1850-1864' },
  { id: 'ManchuDynasty', title: 'Захват Китая маньчжурской династией', years: '1616-1662' },
  { id: 'MongolWars', title: 'Войны Монгольской империи', years: '13-15 века' },
  { id: 'WorldWarII', title: 'Вторая мировая война', years: '1939-1945' },
]

export default function Wars() {
  return (
    <ul className={styles.list}>
      {wars.map((war) => (
        <li key={war.id}>{war.title} ({war.years})</li>
      ))}
    </ul>
  )
}