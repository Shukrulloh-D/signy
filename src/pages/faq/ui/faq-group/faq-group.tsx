import { useState } from 'react'
import type { FaqGroup as Group } from '@/entities/faq'
import { Accordion } from '@/shared/ui/accordion'
import { Icon } from '@/shared/ui/icon'
import './faq-group.css'

interface FaqGroupProps {
  group: Group
  startOpen?: boolean
}

export function FaqGroup({ group, startOpen }: FaqGroupProps) {
  const [open, setOpen] = useState(Boolean(startOpen))

  return (
    <div className="faq-group">
      <button className="faq-group-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        {group.title}
        <Icon name={open ? 'minus' : 'plus'} size={12} />
      </button>
      {open ? <Accordion items={group.questions} /> : <p className="faq-group-count">Ответов на вопросы {group.count}</p>}
    </div>
  )
}
