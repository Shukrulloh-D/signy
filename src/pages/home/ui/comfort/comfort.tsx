import { useDemoPopup } from '@/features/demo-popup'
import { Button } from '@/shared/ui/button'
import './comfort.css'

const COMFORT = [
  'Создавай документы по твоим личным привычным шаблонам. Это индивидуально!',
  'Настраивай порядок подписания документа, если вас несколько человек. Это ответственно!',
  'Загружай XML файл с собственным шаблоном готового документа. Это удобно!',
  'Работай в супер простом и понятном интерфейсе без сложностей. Это приятно!',
]

const PRODUCT = [
  'Web версия без установки программного обеспечения',
  'Возможность бесплатно и безлимитно обрабатывать входящие документы',
  'Простота интеграции с 1С и другими сервисами',
  'Поддержка ввода через Mobile ID',
]

export function Comfort() {
  const { open } = useDemoPopup()

  return (
    <section className="section section-mint">
      <div className="container comfort">
        <div className="comfort-text">
          <h2 className="comfort-title">Комфорт в работе</h2>
          <ul className="comfort-list">
            {COMFORT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button variant="outline" to="/video">
            Узнать больше
          </Button>
        </div>
        <img className="comfort-image" src="/images/screen-1.png" alt="Интерфейс Signy" loading="lazy" />

        <img className="comfort-image" src="/images/screen-2.png" alt="Интерфейс Signy" loading="lazy" />
        <div className="comfort-text">
          <h2 className="comfort-title">Наш продукт это:</h2>
          <ul className="comfort-list">
            {PRODUCT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button onClick={open}>Зарегистрироваться</Button>
        </div>
      </div>
    </section>
  )
}
