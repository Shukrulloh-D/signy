import { useCallback, useState } from 'react'
import type { ReactNode } from 'react'
import { DemoPopupContext } from '../../model/demo-popup-context'
import { DemoPopup } from '../demo-popup/demo-popup'

export function DemoPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <DemoPopupContext.Provider value={{ open }}>
      {children}
      {isOpen && <DemoPopup onClose={close} />}
    </DemoPopupContext.Provider>
  )
}
