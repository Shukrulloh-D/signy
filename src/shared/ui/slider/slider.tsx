import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import './slider.css'

interface SliderProps {
  slides: ReactNode[]
  autoplay?: number
}

export function Slider({ slides, autoplay = 0 }: SliderProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!autoplay || paused || reduceMotion) return

    const timer = setInterval(() => setIndex((current) => (current + 1) % slides.length), autoplay)
    return () => clearInterval(timer)
  }, [autoplay, paused, slides.length])

  return (
    <div className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="slider-slides">
        {slides.map((slide, i) => (
          <div key={i} className={i === index ? 'slider-slide slider-slide-active' : 'slider-slide'}>
            {slide}
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'slider-dot slider-dot-active' : 'slider-dot'}
            aria-label={'Слайд ' + (i + 1)}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
