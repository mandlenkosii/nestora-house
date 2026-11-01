import Image from '../common/Image'
import Button from '../common/Button'
import { images } from '../../data/images'

const sectors = ['Hotels', 'Guesthouses', 'Offices', 'Restaurants', 'Property developers', 'Interior designers']

export default function CommercialFeature() {
  return (
    <section className="container-wide grid items-center gap-14 py-24 lg:grid-cols-12 lg:gap-16 lg:py-36">
      <div className="lg:order-2 lg:col-span-7">
        <Image
          id={images.tradeHero}
          alt="A warm, timber-panelled hotel suite with a king bed and garden views"
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="aspect-[4/3]"
        />
      </div>
      <div className="lg:order-1 lg:col-span-5">
        <p className="eyebrow">Trade &amp; commercial</p>
        <h2 className="display-lg mt-6">Beautiful spaces begin with the right pieces.</h2>
        <p className="mt-8 text-[16px] leading-relaxed text-taupe">
          We partner with hospitality groups, workplaces and design studios to furnish spaces that need to look
          exceptional and perform every day — from a single suite to a full development.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 border-t border-charcoal/15">
          {sectors.map((s) => (
            <li key={s} className="border-b border-charcoal/15 py-3.5 font-serif text-xl">
              {s}
            </li>
          ))}
        </ul>
        <Button to="/trade" arrow className="mt-10">
          Make a trade enquiry
        </Button>
      </div>
    </section>
  )
}
