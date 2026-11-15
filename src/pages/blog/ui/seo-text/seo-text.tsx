import { useState } from 'react'
import { Icon } from '@/shared/ui/icon'
import './seo-text.css'

const PARAGRAPHS = [
  'Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требует от нас анализа существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры позволяет оценить значимость направлений прогрессивного развития.',
]

const MORE = [
  { title: 'Повседневная практика показывает', text: 'Равным образом консультация с широким активом влечёт за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.' },
  { title: 'Реализация намеченных плановых заданий', text: 'Значимость этих проблем настолько очевидна, что новая модель организационной деятельности способствует подготовки и реализации новых предложений.' },
]

export function SeoText() {
  const [open, setOpen] = useState(true)

  return (
    <section className="seo-text container">
      <h2 className="seo-text-title">SEO текст</h2>
      {PARAGRAPHS.map((text) => (
        <p key={text}>{text}</p>
      ))}
      {open &&
        MORE.map((block) => (
          <div key={block.title}>
            <h3 className="seo-text-subtitle">{block.title}</h3>
            <p>{block.text}</p>
          </div>
        ))}
      <button className="seo-text-toggle" onClick={() => setOpen(!open)}>
        {open ? 'Свернуть' : 'Развернуть'}
        <Icon name={open ? 'chevron-up' : 'chevron-down'} size={12} />
      </button>
    </section>
  )
}
