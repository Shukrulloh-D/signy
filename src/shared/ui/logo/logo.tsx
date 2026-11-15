import { Link } from 'react-router-dom'
import './logo.css'

interface LogoProps {
  light?: boolean
}

export function Logo({ light }: LogoProps) {
  return (
    <Link to="/" className={light ? 'logo logo-light' : 'logo'} aria-label="Signy — на главную">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#1064e5" />
        <path d="m9 16.5 4.5 4.5L23 11" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Signy</span>
    </Link>
  )
}
