import { Button } from '@/shared/ui/button'
import './not-found-page.css'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <img className="not-found-image" src="/images/404.png" alt="404" />
      <p className="not-found-text">
        Мы честно старались найти, но этой страницы по всей видимости не существует.
      </p>
      <Button variant="outline" to="/">
        На главную
      </Button>
    </section>
  )
}
