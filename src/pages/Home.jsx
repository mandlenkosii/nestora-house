import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import ShopByCollection from '../components/home/ShopByCollection'
import FeaturedCollection from '../components/home/FeaturedCollection'
import BespokeFeature from '../components/home/BespokeFeature'
import Philosophy from '../components/home/Philosophy'
import ProjectsPreview from '../components/home/ProjectsPreview'
import CommercialFeature from '../components/home/CommercialFeature'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <Intro />
      <ShopByCollection />
      <FeaturedCollection />
      <BespokeFeature />
      <Philosophy />
      <ProjectsPreview />
      <CommercialFeature />
      <Testimonials />
      <Newsletter />
    </>
  )
}
