import { Slider } from '@/shared/ui/slider'
import './partners.css'

const PARTNERS = [
  'УкрОбронПром',
  'Новая Почта',
  'N-iX',
  'Хлеб',
  'Партнёр 5',
  'Партнёр 6',
  'Партнёр 7',
  'Партнёр 8',
].map((name, index) => ({ name, image: '/images/partners/' + (index + 1) + '.png' }))

// по 4 логотипа на слайд
const PAGES = [PARTNERS.slice(0, 4), PARTNERS.slice(4, 8)]

export function Partners() {
  const slides = PAGES.map((page) => (
    <ul key={page[0].name} className="partners-list container">
      {page.map((partner) => (
        <li key={partner.name}>
          <img src={partner.image} alt={partner.name} loading="lazy" />
        </li>
      ))}
    </ul>
  ))

  return (
    <section className="section">
      <h2 className="title">Друзья Signy</h2>
      <Slider slides={slides} />
    </section>
  )
}
