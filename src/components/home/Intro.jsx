import Image from '../common/Image'
import { TextLink } from '../common/Button'
import { images } from '../../data/images'

export default function Intro() {
  return (
    <section className="container-wide grid items-center gap-14 py-24 lg:grid-cols-12 lg:gap-10 lg:py-36">
      <div className="lg:col-span-5 lg:pr-8">
        <p className="eyebrow">Welcome to Nestora House</p>
        <h2 className="display-lg mt-6">A more considered way to furnish.</h2>
        <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-taupe">
          <p>
            Nestora House is a contemporary furniture and interior lifestyle brand. We design pieces that feel calm,
            look timeless and are made to be used — every day, for years to come.
          </p>
          <p>
            Alongside our ready-to-deliver collection, we make bespoke furniture to your exact space, fabric and finish,
            for homes, hospitality and commercial interiors across South Africa.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <TextLink to="/our-story">Our story</TextLink>
          <TextLink to="/projects">See our projects</TextLink>
        </div>
      </div>

      <div className="relative lg:col-span-7">
        <Image
          id={images.intro}
          alt="A serene living room in warm neutrals with a linen sofa, ceramic lamp and soft abstract artworks"
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="aspect-[4/3] lg:ml-auto lg:w-[88%]"
        />
        <Image
          id={images.philosophy}
          alt="Close detail of a cream upholstered sofa with textured cushions"
          width={700}
          responsive={false}
          className="absolute -bottom-10 left-0 hidden aspect-[3/4] w-[32%] border-[10px] border-ivory-light shadow-xl sm:block"
        />
      </div>
    </section>
  )
}
