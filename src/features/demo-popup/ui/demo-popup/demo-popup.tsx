import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/shared/ui/button'
import { Field } from '@/shared/ui/field'
import { Icon } from '@/shared/ui/icon'
import { Modal } from '@/shared/ui/modal'
import { cleanPhone, isEmail, isPhone, validateContact } from '@/shared/lib/validate'
import type { ContactErrors, ContactValues } from '@/shared/lib/validate'
import './demo-popup.css'

interface DemoPopupProps {
  onClose: () => void
}

export function DemoPopup({ onClose }: DemoPopupProps) {
  const [values, setValues] = useState<ContactValues>({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [done, setDone] = useState(false)

  function change(field: keyof ContactValues, value: string) {
    const clean = field === 'phone' ? cleanPhone(value) : value
    setValues({ ...values, [field]: clean })
    setErrors({ ...errors, [field]: undefined })
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const found = validateContact(values)
    setErrors(found)

    if (Object.keys(found).length === 0) {
      setDone(true)
    }
  }

  if (done) {
    return (
      <Modal label="Демо версия" onClose={onClose}>
        <h2 className="modal-title">Демо версия</h2>
        <p className="modal-text">Заявка отправлена и наши менеджеры свяжутся с тобой в ближайшее время</p>
        <div className="demo-popup-done">
          <Icon name="envelope" size={120} />
        </div>
      </Modal>
    )
  }

  return (
    <Modal label="Демо версия" onClose={onClose}>
      <h2 className="modal-title">Демо версия</h2>
      <p className="modal-text">Заполни форму и наши менеджеры свяжутся с тобой</p>
      <form className="demo-popup-form" onSubmit={submit} noValidate>
        <Field label="Имя*:" placeholder="Иван" value={values.name} error={errors.name} onChange={(v) => change('name', v)} />
        <Field
          label="Электронная почта*:"
          type="email"
          placeholder="ivan@mail.com"
          value={values.email}
          error={errors.email}
          valid={isEmail(values.email)}
          onChange={(v) => change('email', v)}
        />
        <Field
          label="Телефон*:"
          type="tel"
          placeholder="+38 000 000 00 00"
          value={values.phone}
          error={errors.phone}
          valid={isPhone(values.phone)}
          onChange={(v) => change('phone', v)}
        />
        <Button type="submit">Отправить</Button>
      </form>
    </Modal>
  )
}
