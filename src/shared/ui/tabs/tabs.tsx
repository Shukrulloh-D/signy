import './tabs.css'

interface TabsProps {
  items: string[]
  active: string
  onChange: (item: string) => void
}

export function Tabs({ items, active, onChange }: TabsProps) {
  return (
    <div className="tabs">
      {items.map((item) => (
        <button
          key={item}
          className={item === active ? 'tab tab-active' : 'tab'}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
