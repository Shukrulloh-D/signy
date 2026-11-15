import { useState } from 'react'
import { Icon } from '@/shared/ui/icon'
import './video-player.css'

interface VideoPlayerProps {
  youtubeId: string
  preview: string
  title: string
}

export function VideoPlayer({ youtubeId, preview, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)

  // в iframe попадает только настоящий id ролика (11 символов)
  const isSafeId = /^[\w-]{11}$/.test(youtubeId)

  if (playing && isSafeId) {
    return (
      <div className="video-player">
        <iframe
          src={'https://www.youtube-nocookie.com/embed/' + youtubeId + '?autoplay=1&rel=0'}
          title={title}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    )
  }

  return (
    <button className="video-player" onClick={() => setPlaying(true)} aria-label={'Смотреть видео: ' + title}>
      <img src={preview} alt="" />
      <span className="video-player-play">
        <Icon name="play" size={22} />
      </span>
    </button>
  )
}
