import { Subscribe } from '@/features/subscribe'
import { Partners } from '@/widgets/partners'
import { Benefits } from '../benefits/benefits'
import { Comfort } from '../comfort/comfort'
import { HeroSlider } from '../hero-slider/hero-slider'
import { HomeArticles } from '../home-articles/home-articles'
import { HomeFaq } from '../home-faq/home-faq'
import { Plans } from '../plans/plans'
import { Stats } from '../stats/stats'
import { VideoIntro } from '../video-intro/video-intro'

export function HomePage() {
  return (
    <>
      <HeroSlider />
      <Benefits />
      <Comfort />
      <Plans />
      <Stats />
      <Partners />
      <HomeArticles />
      <VideoIntro />
      <HomeFaq />
      <Subscribe />
    </>
  )
}
