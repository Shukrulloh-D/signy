export type Category = 'Новости' | 'Обучение' | 'Законы'

export interface Article {
  slug: string
  title: string
  date: string
  category: Category
  tags: string[]
  text: string
  image: string
}

const TITLES = [
  'Как подписать договор онлайн за пять минут',
  'Электронная подпись: что нужно знать бизнесу',
  'Бумажный документооборот против цифрового',
  'Пять ошибок при настройке подписания',
  'Что изменилось в законе об электронных документах',
  'Интеграция Signy с учётными системами',
]

const CATEGORIES: Category[] = ['Новости', 'Обучение', 'Законы']

const TEXT = 'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности'

// временные данные: 36 статей, чтобы работала пагинация (4 страницы по 9)
export const ARTICLES: Article[] = Array.from({ length: 36 }, (_, index) => ({
  slug: 'article-' + (index + 1),
  title: TITLES[index % TITLES.length],
  date: '05.03.2020',
  category: CATEGORIES[index % CATEGORIES.length],
  tags: ['Про продукт', 'Теги'],
  text: TEXT,
  image: '/images/blog/' + ((index % 3) + 1) + '.jpg',
}))

export function findArticle(slug: string | undefined): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug)
}
