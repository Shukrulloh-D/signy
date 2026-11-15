import { Link } from 'react-router-dom'
import { useDemoPopup } from '@/features/demo-popup'
import { Logo } from '@/shared/ui/logo'
import { SITE, phoneHref } from '@/shared/config/site'
import './footer.css'

export function Footer() {
  const { open: openDemo } = useDemoPopup()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo light />
          <p className="footer-copy">© 2020 Signy</p>
        </div>

        <ul className="footer-links">
          <li>
            <Link to="/about">Про нас</Link>
          </li>
          <li>
            <Link to="/#plans">Цены</Link>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <Link to="/blog">Блог</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <a href={SITE.appUrl} target="_blank" rel="noopener noreferrer">
              Вход
            </a>
          </li>
          <li>
            <button onClick={openDemo}>Регистрация</button>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <a href={'mailto:' + SITE.email}>{SITE.email}</a>
          </li>
          <li>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
        </ul>

        <address className="footer-address">
          <p>{SITE.address}</p>
          {SITE.phones.map((phone) => (
            <a key={phone} href={phoneHref(phone)}>
              {phone}
            </a>
          ))}
        </address>
      </div>

      <div className="container footer-bottom">
        <span>Договор оферты</span>
        <span>Безопасность сервиса</span>
      </div>
    </footer>
  )
}
