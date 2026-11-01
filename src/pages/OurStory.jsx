import PageHero from '../components/common/PageHero'
import Image from '../components/common/Image'
import Button from '../components/common/Button'
import { images } from '../data/images'
import { usePageTitle } from '../hooks/usePageTitle'

const chapters = [
  {
    eyebrow: 'Our story',
    title: 'A new house, built on an old idea.',
    body: [
      'Nestora House began with a simple belief: that the furniture we live with every day should be beautiful, comfortable and made to last. Not just for a season, but for the long, ordinary, wonderful years of a life at home.',
      'We are an emerging South African furniture brand, bringing together considered design, honest materials and a personal, made-to-order approach.',
    ],
    image: images.storyPhilosophy,
    alt: 'An open-plan living and dining space flowing out to a garden terrace',
  },
  {
    eyebrow: 'Our philosophy',
    title: 'Less, but better.',
    body: [
      'We would rather make fewer things, well. Each Nestora piece is designed to earn its place in your home — through comfort, through usefulness and through a quiet kind of beauty that never shouts.',
    ],
    image: images.storyDesign,
    alt: 'A bright, timber-framed living room with natural light',
  },
  {
    eyebrow: 'Our design approach',
    title: 'Designed from the inside out.',
    body: [
      'We start with how a piece will be used: how deep a seat should be for a long conversation, how high a table needs to be for a relaxed dinner, how a headboard should feel when you lean back with a book.',
      'Only then do we refine proportion, line and detail — keeping forms simple so they settle into many different homes and styles.',
    ],
    image: images.inspireLiving,
    alt: 'A calm living room with a soft sofa and natural textures',
  },
  {
    eyebrow: 'Our commitment to craftsmanship',
    title: 'The details you feel, not just see.',
    body: [
      'Good furniture is made by skilled hands. We work with experienced craftspeople who care about joinery, upholstery tension, the alignment of a seam and the smoothness of an edge.',
      'Every piece is checked by hand before it leaves the workshop.',
    ],
    image: images.workshopTools,
    alt: 'Woodworking hand tools arranged on a workshop wall',
  },
  {
    eyebrow: 'Our approach to materials',
    title: 'Honest materials that age gracefully.',
    body: [
      'We favour natural, durable materials: solid timbers, natural stone, linen, wool and full-grain leather. Materials that develop character over time, rather than wearing out.',
      'Where possible, we choose responsibly sourced timber and local suppliers — and we are open about what goes into every piece.',
    ],
    image: images.storyMaterials,
    alt: 'A ceramic vase with a plant beside natural timber',
  },
]

export default function OurStory() {
  usePageTitle('Our Story')
  return (
    <>
      <PageHero
        image={images.storyHero}
        alt="A light, open-plan contemporary home with soft neutral furnishings"
        eyebrow="Our story"
        title="Creating spaces that feel like home."
        description="Nestora House is a contemporary furniture and interior lifestyle brand, designing pieces for the way South Africans really live."
        height="lg"
      />

      <div className="py-12 lg:py-20">
        {chapters.map((c, i) => (
          <section
            key={c.title}
            className="container-wide grid items-center gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20"
          >
            <div className={`lg:col-span-6 ${i % 2 ? 'lg:order-2 lg:col-start-7' : ''}`}>
              <Image
                id={c.image}
                alt={c.alt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/5] sm:aspect-[5/4]"
              />
            </div>
            <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-1' : 'lg:col-start-8'}`}>
              <p className="eyebrow">{c.eyebrow}</p>
              <h2 className="display-md mt-6">{c.title}</h2>
              <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-taupe">
                {c.body.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="relative overflow-hidden bg-charcoal text-ivory">
        <Image id={images.storyVision} alt="" className="absolute inset-0 opacity-30" />
        <div className="container-wide relative py-28 text-center lg:py-40">
          <p className="eyebrow text-sand">Our vision</p>
          <h2 className="display-lg mx-auto mt-6 max-w-4xl">
            To become South Africa’s most trusted name for considered, beautifully made furniture.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-relaxed text-ivory/75">
            We want to help people create homes that feel calm, personal and lasting — and to build a brand that grows
            with the people and places it furnishes.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/shop" variant="light">
              Explore the collection
            </Button>
            <Button to="/bespoke" variant="ghostLight">
              Start a bespoke piece
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
