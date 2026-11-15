import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'
import { Logo } from '@/shared/ui/logo'
import { ABOUT_LINKS } from '@/shared/config/nav'
import { SITE, phoneHref } from '@/shared/config/site'
import './mobile-menu.css'

interface MobileMenuProps {
  onClose: () => void
  onRegister: () => void
}

export function MobileMenu({ onClose, onRegister }: MobileMenuProps) {
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="mobile-menu" onClick={onClose}>
      <aside className="mobile-menu-panel" onClick={(event) => event.stopPropagation()}>
        <div className="mobile-menu-top">
          <Logo />
          <button onClick={onClose} aria-label="Закрыть меню" className="mobile-menu-close">
            <Icon name="close" size={22} />
          </button>
        </div>

        <details className="mobile-menu-group">
          <summary>{SITE.phones[0]}</summary>
          <ul>
            {SITE.phones.map((phone) => (
              <li key={phone}>
                <a href={phoneHref(phone)}>{phone}</a>
              </li>
            ))}
          </ul>
        </details>

        <details className="mobile-menu-group">
          <summary>Про нас</summary>
          <ul>
            {ABOUT_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={onClose}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <Link to="/#plans" className="mobile-menu-link" onClick={onClose}>
          Цены
        </Link>
        <Link to="/contacts" className="mobile-menu-link" onClick={onClose}>
          Контакты
        </Link>

        <div className="mobile-menu-buttons">
          <Button variant="outline" href={SITE.appUrl}>
            Вход
          </Button>
          <Button onClick={onRegister}>Регистрация</Button>
        </div>
      </aside>
    </div>
  )
}
