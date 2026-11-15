import { Icon } from '@/shared/ui/icon'
import type { Video } from '../../model/video'
import './video-card.css'

interface VideoCardProps {
  video: Video
  onSelect: (video: Video) => void
}

export function VideoCard({ video, onSelect }: VideoCardProps) {
  return (
    <button className="video-card" onClick={() => onSelect(video)}>
      <span className="video-card-preview">
        <img src={video.preview} alt="" loading="lazy" />
        <span className="video-card-play">
          <Icon name="play" size={18} />
        </span>
      </span>
      <span className="video-card-title">{video.title}</span>
      <span className="video-card-date">{video.date}</span>
    </button>
  )
}
