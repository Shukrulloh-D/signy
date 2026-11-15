import { Link } from 'react-router-dom'
import type { Article } from '../../model/article'
import './article-card.css'

interface ArticleCardProps {
  article: Article
  compact?: boolean
}

export function ArticleCard({ article, compact }: ArticleCardProps) {
  const link = '/blog/' + article.slug

  return (
    <article className="article-card">
      <Link to={link} className="article-card-image" tabIndex={-1} aria-hidden="true">
        <img src={article.image} alt="" loading="lazy" />
      </Link>
      <p className="article-card-date">{article.date}</p>
      <h3 className="article-card-title">
        <Link to={link}>{article.title}</Link>
      </h3>
      {!compact && (
        <>
          <ul className="article-card-tags">
            {article.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className="article-card-text">{article.text}</p>
        </>
      )}
    </article>
  )
}
