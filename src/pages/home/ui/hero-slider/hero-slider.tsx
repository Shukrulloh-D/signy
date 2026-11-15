import { useDemoPopup } from '@/features/demo-popup'
import { Button } from '@/shared/ui/button'
import { Slider } from '@/shared/ui/slider'
import './hero-slider.css'

const SLIDES = [
  {
    title: 'Быстрая регистрация',
    text: 'Мы сделали возможно самую простую регистрацию. Регистрируйся, получай полный доступ к сервису и 1000 подписей документов в подарок!',
  },
  {
    title: 'Загрузи документ',
    text: 'Загружай в систему любой документ, который надо подписать: договор, акт выполненных работ, да что угодно',
  },
  {
    title: 'Подпиши и отправь',
    text: 'Подписывай своей электронно-цифровой подписью и за долю секунды отправь партнёру или компании. Он подпишет в ответ и всё! Готово!',
  },
]

export function HeroSlider() {
  const { open } = useDemoPopup()

  const slides = SLIDES.map((slide, index) => (
    <div key={slide.title} className="hero-slide container">
      <div className="hero-text">
        <h1 className="hero-title">Цифровой документооборот в три этапа:</h1>
        <ol className="hero-steps">
          {SLIDES.map((_, step) => (
            <li key={step} className={step === index ? 'hero-step hero-step-active' : 'hero-step'}>
              {step + 1}
            </li>
          ))}
        </ol>
        <h2 className="hero-subtitle">{slide.title}</h2>
        <p className="hero-description">{slide.text}</p>
        <Button onClick={open}>Попробовать бесплатно</Button>
      </div>
      <img className="hero-image" src={'/images/hero-' + (index + 1) + '.png'} alt="" />
    </div>
  ))

  return (
    <section className="hero">
      <Slider slides={slides} autoplay={6000} />
    </section>
  )
}
