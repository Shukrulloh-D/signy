import { QuestionForm } from '@/features/question-form'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Icon } from '@/shared/ui/icon'
import { SITE, phoneHref } from '@/shared/config/site'
import './contacts-page.css'

export function ContactsPage() {
  return (
    <div className="container contacts-page">
      <Breadcrumbs items={[{ label: 'Signy', to: '/' }, { label: 'Контакты' }]} />

      <div className="contacts-top">
        <div>
          <h1 className="page-title">Наши контакты</h1>
          <p className="contacts-text">
            Мы всегда рады ответить на ваши вопросы и развивать эффективное сотрудничество по всем вопросам, связанным
            с электронным документооборотом.
          </p>
          <ul className="contacts-list">
            <li>
              <Icon name="phone" size={14} />
              <div>
                {SITE.phones.map((phone) => (
                  <a key={phone} href={phoneHref(phone)}>
                    {phone}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <Icon name="mail" size={14} />
              <a href={'mailto:' + SITE.email}>{SITE.email}</a>
            </li>
            <li>
              <Icon name="pin" size={14} />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <iframe
          className="contacts-map"
          title="Карта: офис Signy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=30.60,50.38,30.66,50.41&layer=mapnik"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      <h2 className="contacts-subtitle">...или напишите нам:</h2>
      <QuestionForm messageLabel="Сообщение:" />
    </div>
  )
}
