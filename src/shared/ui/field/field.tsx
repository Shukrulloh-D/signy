import { useId } from 'react'
import './field.css'

interface FieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'email' | 'tel'
  multiline?: boolean
  error?: string
  valid?: boolean
}

export function Field({ label, value, onChange, placeholder, type = 'text', multiline, error, valid }: FieldProps) {
  const id = useId()

  let className = 'field'
  if (error) className += ' field-error'
  if (valid) className += ' field-valid'

  return (
    <div className={className}>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          className="field-input field-textarea"
          value={value}
          placeholder={placeholder}
          maxLength={1000}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          className="field-input"
          type={type}
          value={value}
          placeholder={placeholder}
          maxLength={100}
          aria-invalid={Boolean(error)}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error && <p className="field-message">{error}</p>}
    </div>
  )
}
