export function isFilled(value: string): boolean {
  return value.trim().length > 0
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}

export function isPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 13
}

// в телефон пропускаем только цифры и знаки + ( ) -
export function cleanPhone(value: string): string {
  return value.replace(/[^\d+\s()-]/g, '')
}

export interface ContactValues {
  name: string
  email: string
  phone: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  if (!isFilled(values.name)) errors.name = 'Введи своё имя'
  if (!isEmail(values.email)) errors.email = 'Введи правильный адрес почты'
  if (!isPhone(values.phone)) errors.phone = 'Введи правильный номер телефона'

  return errors
}
