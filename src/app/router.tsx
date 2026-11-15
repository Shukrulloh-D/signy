import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '@/pages/about'
import { BlogPage } from '@/pages/blog'
import { BlogPostPage } from '@/pages/blog-post'
import { ContactsPage } from '@/pages/contacts'
import { FaqPage } from '@/pages/faq'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { VideoPage } from '@/pages/video'
import { Layout } from './layout/layout'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
