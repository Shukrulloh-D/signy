import { Icon } from '@/shared/ui/icon'
import './benefits.css'

const BENEFITS = [
  { icon: 'clock', title: 'Моментально', text: 'Нулевые задержки. 1 секунда на подписание' },
  { icon: 'globe', title: 'Глобально', text: 'Сервис доступен на всех устройствах и по всему миру' },
  { icon: 'coin', title: 'Экономно', text: 'В 20 раз дешевле, чем почта и курьерская доставка' },
]

export function Benefits() {
  return (
    <section className="benefits container">
      {BENEFITS.map((item) => (
        <div key={item.title} className="benefit">
          <span className="benefit-icon">
            <Icon name={item.icon} size={36} />
          </span>
          <div>
            <h3 className="benefit-title">{item.title}</h3>
            <p className="benefit-text">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
