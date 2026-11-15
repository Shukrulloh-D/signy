import { BrowserRouter } from 'react-router-dom'
import { DemoPopupProvider } from '@/features/demo-popup'
import { AppRouter } from './router'

export function App() {
  return (
    <BrowserRouter>
      <DemoPopupProvider>
        <AppRouter />
      </DemoPopupProvider>
    </BrowserRouter>
  )
}
