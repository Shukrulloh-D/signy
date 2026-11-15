import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ARTICLES, ArticleCard } from '@/entities/article'
import { Subscribe } from '@/features/subscribe'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Pagination } from '@/shared/ui/pagination'
import { Tabs } from '@/shared/ui/tabs'
import { SeoText } from '../seo-text/seo-text'
import './blog-page.css'

const CATEGORIES = ['Все', 'Новости', 'Обучение', 'Законы']
const PER_PAGE = 9

export function BlogPage() {
  const [category, setCategory] = useState('Все')
  const [page, setPage] = useState(1)

  const featured = ARTICLES[0]
  const list = category === 'Все' ? ARTICLES : ARTICLES.filter((article) => article.category === category)
  const totalPages = Math.ceil(list.length / PER_PAGE)
  const visible = list.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  function changeCategory(value: string) {
    setCategory(value)
    setPage(1)
  }

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Signy', to: '/' }, { label: 'Блог' }]} />
        <h1 className="page-title">Интересно пишем про</h1>

        <article className="blog-featured">
          <img className="blog-featured-image" src={featured.image} alt="" />
          <div className="blog-featured-text">
            <p className="blog-featured-date">{featured.date}</p>
            <h2 className="blog-featured-title">{featured.title}</h2>
            <ul className="blog-featured-tags">
              {featured.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p>
              Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в
              формировании существенных финансовых и административных условий. Не следует, однако забывать, что
              дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.
            </p>
            <Link to={'/blog/' + featured.slug} className="blog-featured-link">
              Читать
            </Link>
          </div>
        </article>

        <div className="blog-tabs">
          <Tabs items={CATEGORIES} active={category} onChange={changeCategory} />
        </div>

        <div className="blog-grid">
          {visible.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="blog-pagination">
          <Pagination page={page} total={totalPages} onChange={setPage} />
        </div>
      </div>

      <Subscribe />
      <SeoText />
    </>
  )
}
