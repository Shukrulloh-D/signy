import { createContext, useContext } from 'react'

interface DemoPopupValue {
  open: () => void
}

export const DemoPopupContext = createContext<DemoPopupValue | null>(null)

export function useDemoPopup(): DemoPopupValue {
  const value = useContext(DemoPopupContext)

  if (!value) {
    throw new Error('useDemoPopup нужно вызывать внутри DemoPopupProvider')
  }

  return value
}
