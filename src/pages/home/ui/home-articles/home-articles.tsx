import { ARTICLES, ArticleCard } from '@/entities/article'
import './home-articles.css'

export function HomeArticles() {
  return (
    <section className="section section-mint">
      <div className="container">
        <h2 className="title">Интересно пишем про</h2>
        <div className="home-articles">
          {ARTICLES.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
