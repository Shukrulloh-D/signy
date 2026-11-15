import './pagination.css'

interface PaginationProps {
  page: number
  total: number
  onChange: (page: number) => void
}

function format(number: number): string {
  return String(number).padStart(2, '0')
}

export function Pagination({ page, total, onChange }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, index) => index + 1)

  return (
    <nav className="pagination" aria-label="Страницы">
      {page > 1 && (
        <button className="pagination-item" onClick={() => onChange(page - 1)}>
          Назад
        </button>
      )}
      {pages.map((number) => (
        <button
          key={number}
          className={number === page ? 'pagination-item pagination-active' : 'pagination-item'}
          aria-current={number === page}
          onClick={() => onChange(number)}
        >
          {format(number)}
        </button>
      ))}
      {page < total && (
        <button className="pagination-item" onClick={() => onChange(page + 1)}>
          Дальше
        </button>
      )}
    </nav>
  )
}
