import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/shared/ui/button'
import { Field } from '@/shared/ui/field'
import { cleanPhone, isEmail, isPhone, validateContact } from '@/shared/lib/validate'
import type { ContactErrors, ContactValues } from '@/shared/lib/validate'
import './question-form.css'

interface QuestionValues extends ContactValues {
  message: string
}

interface QuestionFormProps {
  messageLabel: string
}

const EMPTY: QuestionValues = { name: '', email: '', phone: '', message: '' }

export function QuestionForm({ messageLabel }: QuestionFormProps) {
  const [values, setValues] = useState<QuestionValues>(EMPTY)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sent, setSent] = useState(false)

  function change(field: keyof QuestionValues, value: string) {
    const clean = field === 'phone' ? cleanPhone(value) : value
    setValues({ ...values, [field]: clean })
    setErrors({ ...errors, [field]: undefined })
    setSent(false)
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const found = validateContact(values)
    setErrors(found)

    if (Object.keys(found).length === 0) {
      setSent(true)
      setValues(EMPTY)
    }
  }

  return (
    <form className="question-form" onSubmit={submit} noValidate>
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
      <Field
        label={messageLabel}
        placeholder="введите тут"
        multiline
        value={values.message}
        onChange={(v) => change('message', v)}
      />
      <Button type="submit">Отправить</Button>
      {sent && (
        <p className="question-form-success" role="status">
          Спасибо! Мы свяжемся с тобой в ближайшее время.
        </p>
      )}
    </form>
  )
}
