import { VideoPlayer } from '@/shared/ui/video-player'
import './video-intro.css'

export function VideoIntro() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Познакомимся вживую?</h2>
        <div className="video-intro">
          <VideoPlayer youtubeId="M7lc1UVf-VE" preview="/images/video-intro.jpg" title="Знакомство с Signy" />
        </div>
      </div>
    </section>
  )
}
