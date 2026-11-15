import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDemoPopup } from '@/features/demo-popup'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'
import { Logo } from '@/shared/ui/logo'
import { ABOUT_LINKS } from '@/shared/config/nav'
import { SITE, phoneHref } from '@/shared/config/site'
import { Dropdown } from '../dropdown/dropdown'
import { MobileMenu } from '../mobile-menu/mobile-menu'
import './header.css'

export function Header() {
  const { open: openDemo } = useDemoPopup()
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('Рус')

  function changeLang(value: string) {
    setLang(value)
    document.documentElement.lang = value === 'Укр' ? 'uk' : 'ru'
  }

  function register() {
    setMenuOpen(false)
    openDemo()
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />

        <nav className="header-nav" aria-label="Основная навигация">
          <Dropdown label={SITE.phones[0]}>
            {SITE.phones.map((phone) => (
              <li key={phone}>
                <a href={phoneHref(phone)}>{phone}</a>
              </li>
            ))}
          </Dropdown>
          <Dropdown label="Про нас">
            {ABOUT_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </Dropdown>
          <Link to="/#plans" className="header-link">
            Цены
          </Link>
          <Link to="/contacts" className="header-link">
            Контакты
          </Link>
          <Button variant="outline" href={SITE.appUrl}>
            Вход
          </Button>
          <Button onClick={openDemo}>Регистрация</Button>
          <Dropdown label={lang}>
            <li>
              <button onClick={() => changeLang('Укр')}>Укр</button>
            </li>
            <li>
              <button onClick={() => changeLang('Рус')}>Рус</button>
            </li>
          </Dropdown>
        </nav>

        <button className="header-burger" onClick={() => setMenuOpen(true)} aria-label="Открыть меню">
          <Icon name="burger" size={26} />
        </button>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} onRegister={register} />}
    </header>
  )
}
