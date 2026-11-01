import PageHero from '../components/common/PageHero'
import Image from '../components/common/Image'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'
import TradeEnquiryForm from '../components/forms/TradeEnquiryForm'
import { images } from '../data/images'
import { site } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

const sectors = [
  {
    name: 'Hotels',
    text: 'Suites, lobbies and lounges furnished for comfort and heavy daily use.',
    image: images.tradeHotel,
  },
  {
    name: 'Guesthouses',
    text: 'Warm, characterful rooms that guests remember — and review.',
    image: images.tradeGuesthouse,
  },
  {
    name: 'Restaurants',
    text: 'Dining chairs, banquettes and tables built for service.',
    image: images.tradeRestaurant,
  },
  {
    name: 'Offices',
    text: 'Reception, breakout and boardroom furniture with a residential feel.',
    image: images.tradeOffice,
  },
]

const services = [
  [
    'Bulk orders',
    'Consistent quality across large quantities, with scheduled, phased deliveries to suit your programme.',
  ],
  [
    'Custom specifications',
    'Adjusted dimensions, contract-grade fabrics, fire-retardant foams and brand-specific finishes.',
  ],
  [
    'Design partnerships',
    'We work alongside interior designers, architects and developers from concept to installation.',
  ],
  ['Dedicated support', 'A single point of contact for samples, drawings, quotations and after-care.'],
]

const audiences = ['Hotels', 'Guesthouses', 'Interior designers', 'Restaurants', 'Offices', 'Property developers']

export default function Trade() {
  usePageTitle('Trade & Commercial')
  return (
    <>
      <PageHero
        image={images.tradeHero}
        alt="A warm, timber-panelled hotel suite"
        eyebrow="Trade & commercial"
        title="Furniture solutions for exceptional spaces."
        description="Considered furniture, specified and made for hospitality, workplace and residential development projects across South Africa."
        height="lg"
      >
        <Button to="/trade#enquire" variant="light" arrow className="mt-10">
          Start an enquiry
        </Button>
      </PageHero>

      <section className="container-wide grid gap-14 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <p className="eyebrow">Who we work with</p>
          <h2 className="display-md mt-6">A partner for every stage of your project.</h2>
          <p className="mt-6 text-[16px] leading-relaxed text-taupe">
            From a boutique guesthouse refresh to furnishing a full residential development, we bring the same attention
            to detail — and the flexibility to adapt our pieces to your brief, budget and timeline.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {audiences.map((a) => (
              <li key={a} className="border border-charcoal/20 px-4 py-2 text-[13px]">
                {a}
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-px bg-charcoal/15 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {services.map(([title, text]) => (
            <li key={title} className="bg-ivory-light p-8">
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-taupe">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ivory/60 py-24 lg:py-32">
        <div className="container-wide">
          <SectionHeading eyebrow="Sectors" title="Spaces we furnish" />
          <ul className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <li key={s.name}>
                <Image
                  id={s.image}
                  alt={`Furniture for ${s.name.toLowerCase()}`}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-[3/4]"
                />
                <h3 className="mt-5 font-serif text-2xl">{s.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-taupe">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-24 container-wide grid gap-16 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-4">
          <p className="eyebrow">Trade enquiry</p>
          <h2 className="display-md mt-6">Tell us about your project.</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-taupe">
            Share a few details and our trade team will be in touch to discuss specifications, samples, pricing and lead
            times.
          </p>
          <p className="mt-8 text-[13px] text-taupe">
            Trade email: <span className="text-charcoal">{site.contact.tradeEmail}</span>
          </p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <TradeEnquiryForm />
        </div>
      </section>
    </>
  )
}
