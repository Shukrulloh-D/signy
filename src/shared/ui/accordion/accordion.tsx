import { useState } from 'react'
import { Icon } from '@/shared/ui/icon'
import './accordion.css'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <ul className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <li key={item.question} className="accordion-item">
            <button className="accordion-question" aria-expanded={isOpen} onClick={() => toggle(index)}>
              <span className="accordion-icon">
                <Icon name={isOpen ? 'minus' : 'plus'} size={14} />
              </span>
              <span className={isOpen ? 'accordion-text accordion-text-open' : 'accordion-text'}>{item.question}</span>
            </button>
            {isOpen && <p className="accordion-answer">{item.answer}</p>}
          </li>
        )
      })}
    </ul>
  )
}
