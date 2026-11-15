import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './button.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'fill' | 'outline'
  to?: string
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export function Button({ children, variant = 'fill', to, href, type = 'button', disabled, onClick }: ButtonProps) {
  const className = 'button button-' + variant

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
