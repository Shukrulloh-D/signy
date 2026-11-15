import { GROUPS } from '@/entities/faq'
import { QuestionForm } from '@/features/question-form'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { FaqGroup } from '../faq-group/faq-group'
import './faq-page.css'

export function FaqPage() {
  return (
    <>
      <div className="container faq-page">
        <Breadcrumbs items={[{ label: 'Signy', to: '/' }, { label: 'Популярные вопросы' }]} />
        <h1 className="page-title">Популярные вопросы и ответы на них</h1>
        {GROUPS.map((group, index) => (
          <FaqGroup key={group.title} group={group} startOpen={index === 0} />
        ))}
      </div>

      <section className="section section-mint faq-ask">
        <div className="container">
          <h2 className="title">Нет ответа на интересующий вопрос?</h2>
          <p className="faq-ask-text">Заполни форму и наши менеджеры свяжутся с тобой</p>
          <QuestionForm messageLabel="Твой вопрос:" />
        </div>
      </section>
    </>
  )
}
