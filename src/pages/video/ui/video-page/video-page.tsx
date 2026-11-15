import { useState } from 'react'
import { ARTICLES, ArticleCard } from '@/entities/article'
import { VIDEOS, VideoCard } from '@/entities/video'
import type { Video } from '@/entities/video'
import { Subscribe } from '@/features/subscribe'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { VideoPlayer } from '@/shared/ui/video-player'
import './video-page.css'

export function VideoPage() {
  const [current, setCurrent] = useState<Video>(VIDEOS[0])

  function select(video: Video) {
    setCurrent(video)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Signy', to: '/' }, { label: 'Видео инструкции' }]} />
        <h1 className="page-title">Видео инструкции</h1>
        <h2 className="video-page-subtitle">{current.title}</h2>
        <p className="video-page-date">{current.date}</p>

        <VideoPlayer key={current.id} youtubeId={current.youtubeId} preview={current.preview} title={current.title} />

        <div className="video-page-grid">
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} onSelect={select} />
          ))}
        </div>

        <h2 className="video-page-more">Может быть интересно:</h2>
        <div className="video-page-articles">
          {ARTICLES.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>

      <Subscribe />
    </>
  )
}
