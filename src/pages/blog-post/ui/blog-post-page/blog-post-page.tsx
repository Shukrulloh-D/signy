import { Link, useParams } from 'react-router-dom'
import { ARTICLES, findArticle } from '@/entities/article'
import { Subscribe } from '@/features/subscribe'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Button } from '@/shared/ui/button'
import './blog-post-page.css'

const TEXT =
  'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. One of the best ways to get the luxury of the rich and famous to fit your budget is to charter a yacht. Yacht charter companies specialize in creating custom sailing vacations that redefine travel.'

const SHARE = [
  { name: 'X', url: 'https://twitter.com/intent/tweet?url=' },
  { name: 'in', url: 'https://www.linkedin.com/sharing/share-offsite/?url=' },
  { name: 'f', url: 'https://www.facebook.com/sharer/sharer.php?u=' },
]

export function BlogPostPage() {
  const { slug } = useParams()
  const article = findArticle(slug)

  if (!article) {
    return (
      <div className="container blog-post-missing">
        <h1 className="page-title">Статья не найдена</h1>
        <Button to="/blog">К списку статей</Button>
      </div>
    )
  }

  const index = ARTICLES.indexOf(article)
  const previous = ARTICLES[index - 1]
  const next = ARTICLES[index + 1]
  const pageUrl = encodeURIComponent(window.location.href)

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Signy', to: '/' }, { label: 'Блог', to: '/blog' }, { label: article.title }]} />
        <h1 className="page-title">{article.title}</h1>
        <p className="blog-post-date">{article.date}</p>
        <ul className="blog-post-tags">
          {article.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="blog-post-body">
          <p>{TEXT}</p>
          <h2>Planning Your Luxury Trip</h2>
          <p>{TEXT}</p>
          <img src="/images/post-1.png" alt="" loading="lazy" />
          <p>{TEXT}</p>
          <p>{TEXT}</p>
          <img src="/images/blog/post-2.png" alt="" loading="lazy" />
          <p>{TEXT}</p>
          <p>{TEXT}</p>
        </div>

        <div className="blog-post-share">
          <p>Поделиться:</p>
          <ul>
            {SHARE.map((item) => (
              <li key={item.name}>
                <a href={item.url + pageUrl} target="_blank" rel="noopener noreferrer" aria-label={'Поделиться: ' + item.name}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="blog-post-nav" aria-label="Другие статьи">
          {previous ? (
            <Link to={'/blog/' + previous.slug}>
              <b>{previous.title}</b>
              <span>Предыдущая статья</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={'/blog/' + next.slug} className="blog-post-next">
              <b>{next.title}</b>
              <span>Следующая статья</span>
            </Link>
          )}
        </nav>
      </div>

      <Subscribe />
    </>
  )
}
