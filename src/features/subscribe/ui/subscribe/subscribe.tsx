import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { isEmail } from '@/shared/lib/validate'
import './subscribe.css'

export function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sentTo, setSentTo] = useState('')

  function submit(event: FormEvent) {
    event.preventDefault()

    if (!isEmail(email)) {
      setError('Введи правильный адрес почты')
      return
    }

    setSentTo(email.trim())
    setEmail('')
  }

  return (
    <section className="subscribe">
      <div className="container">
        <h2 className="title">Подпишись на наши новости!</h2>
        <p className="subscribe-text">Введи свой электронный адрес и будь в курсе всех обновлений</p>
        <form className="subscribe-form" onSubmit={submit} noValidate>
          <input
            className={error ? 'subscribe-input subscribe-input-error' : 'subscribe-input'}
            type="email"
            value={email}
            maxLength={100}
            aria-label="Электронная почта"
            placeholder="ivan@mail.com"
            onChange={(event) => {
              setEmail(event.target.value)
              setError('')
            }}
          />
          <Button type="submit">Отправить</Button>
        </form>
        {error && <p className="subscribe-error">{error}</p>}
      </div>

      {sentTo && (
        <Modal label="Подписка оформлена" onClose={() => setSentTo('')}>
          <h2 className="modal-title">Отлично!</h2>
          <p className="modal-text">
            На адрес <b>{sentTo}</b> теперь будут приходить самые важные новости
          </p>
        </Modal>
      )}
    </section>
  )
}
