import { POPULAR } from '@/entities/faq'
import { Accordion } from '@/shared/ui/accordion'
import './home-faq.css'

export function HomeFaq() {
  return (
    <section className="section section-blue">
      <div className="container">
        <h2 className="title">Популярные вопросы и ответы на них</h2>
        <div className="home-faq">
          <Accordion items={POPULAR} />
        </div>
      </div>
    </section>
  )
}
