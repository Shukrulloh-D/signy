import { useDemoPopup } from '@/features/demo-popup'
import { Button } from '@/shared/ui/button'
import './plans.css'

const PLANS = [
  { name: 'Demo', documents: '10 документов', price: '0', unit: 'грн/месяц', button: 'Зарегистрироваться' },
  { name: 'Business', documents: '1 000 документов', price: '1 000', unit: 'грн/год', button: 'Заказать' },
  { name: 'Pro', documents: '10 000 документов', price: '9 000', unit: 'грн/год', button: 'Заказать' },
  { name: 'Individual', documents: 'Необходимое количество документов', price: '', unit: '', button: 'Связаться с нами' },
]

export function Plans() {
  const { open } = useDemoPopup()

  return (
    <section id="plans" className="section">
      <div className="container">
        <h2 className="title">Пакеты цифровых подписей</h2>
        <div className="plans">
          {PLANS.map((plan) => (
            <div key={plan.name} className="plan">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-documents">{plan.documents}</p>
              <p className="plan-price">
                {plan.price && <b>{plan.price}</b>} <span>{plan.unit}</span>
              </p>
              {plan.name === 'Individual' ? (
                <Button to="/contacts">{plan.button}</Button>
              ) : (
                <Button onClick={open}>{plan.button}</Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
