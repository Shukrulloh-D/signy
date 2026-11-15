import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Icon } from '@/shared/ui/icon'
import './dropdown.css'

interface DropdownProps {
  label: string
  children: ReactNode
}

export function Dropdown({ label, children }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function handleClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <div className="dropdown" ref={rootRef}>
      <button className="dropdown-button" aria-expanded={open} onClick={() => setOpen(!open)}>
        {label}
        <Icon name={open ? 'chevron-up' : 'chevron-down'} size={12} />
      </button>
      {open && (
        <ul className="dropdown-list" onClick={() => setOpen(false)}>
          {children}
        </ul>
      )}
    </div>
  )
}
