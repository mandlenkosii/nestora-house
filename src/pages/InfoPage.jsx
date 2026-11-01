import { useParams } from 'react-router-dom'
import DemoNotice from '../components/common/DemoNotice'
import { TextLink } from '../components/common/Button'
import { usePageTitle } from '../hooks/usePageTitle'
import NotFound from './NotFound'

/**
 * Placeholder customer-information pages linked from the footer.
 * Final legal and policy wording must be supplied by Nestora House.
 */
const pages = {
  delivery: {
    title: 'Delivery & returns',
    body: [
      'We deliver across South Africa. In-stock pieces are typically delivered within 7–10 working days; made-to-order pieces within the lead time shown on each product.',
      'Our two-person delivery teams will place your furniture in the room of your choice and remove packaging.',
      'Made-to-order and bespoke pieces are produced specifically for you and cannot be returned unless faulty. Your rights under the Consumer Protection Act are not affected.',
    ],
  },
  care: {
    title: 'Care guide',
    body: [
      'Upholstery: plump and rotate cushions weekly, vacuum with a soft brush and blot spills immediately.',
      'Timber: dust with a soft dry cloth, use coasters and keep away from direct heat. Re-oil oiled finishes once or twice a year.',
      'Stone: natural stone is porous — wipe spills promptly, avoid acidic cleaners and reseal annually.',
    ],
  },
  privacy: {
    title: 'Privacy policy',
    body: [
      'This is a placeholder. The final privacy policy — including how personal information is collected, used and protected in line with the Protection of Personal Information Act (POPIA) — will be published before launch.',
    ],
  },
  terms: {
    title: 'Terms & conditions',
    body: ['This is a placeholder. Full terms and conditions of sale and website use will be published before launch.'],
  },
}

export default function InfoPage() {
  const { slug } = useParams()
  const page = pages[slug]
  usePageTitle(page?.title)
  if (!page) return <NotFound />

  return (
    <section className="container-wide max-w-3xl py-20 lg:py-28">
      <p className="eyebrow">Customer information</p>
      <h1 className="display-lg mt-6">{page.title}</h1>
      <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-taupe">
        {page.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <DemoNotice className="mt-10">Placeholder content — final wording to be confirmed by Nestora House.</DemoNotice>
      <TextLink to="/contact" className="mt-10">
        Questions? Contact us
      </TextLink>
    </section>
  )
}
