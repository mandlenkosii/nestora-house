import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Image from '../common/Image'
import SectionHeading from '../common/SectionHeading'
import { TextLink } from '../common/Button'
import { bespokeCard, collections } from '../../data/collections'

function CategoryCard({ to, name, tagline, image, className, sizes }) {
  return (
    <Link to={to} className={`group relative block overflow-hidden ${className}`}>
      <Image id={image} alt={`${name} collection`} sizes={sizes} className="absolute inset-0" imgClassName="img-zoom" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/5 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-ivory sm:p-8">
        <div>
          <h3 className="font-serif text-3xl sm:text-[2.2rem]">{name}</h3>
          <p className="mt-1 text-[13px] text-ivory/80">{tagline}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/60 transition-colors duration-300 group-hover:bg-ivory group-hover:text-charcoal">
          <ArrowUpRight size={18} strokeWidth={1.4} />
        </span>
      </div>
    </Link>
  )
}

const layout = [
  'h-[420px] sm:h-[520px] lg:col-span-7 lg:h-[600px]',
  'h-[420px] sm:h-[520px] lg:col-span-5 lg:h-[600px]',
  'h-[380px] lg:col-span-4 lg:h-[460px]',
  'h-[380px] lg:col-span-4 lg:h-[460px]',
  'h-[380px] lg:col-span-4 lg:h-[460px]',
]

export default function ShopByCollection() {
  return (
    <section className="container-wide pb-24 lg:pb-36">
      <SectionHeading
        eyebrow="Shop by collection"
        title="Furniture for every room"
        action={<TextLink to="/shop">Shop all furniture</TextLink>}
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        {collections.map((c, i) => (
          <CategoryCard
            key={c.slug}
            to={`/collections/${c.slug}`}
            name={c.name}
            tagline={c.tagline}
            image={c.image}
            className={`${layout[i]} ${i === 4 ? 'sm:col-span-2 lg:col-span-4' : ''}`}
            sizes={i < 2 ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
          />
        ))}
        <CategoryCard
          to={bespokeCard.to}
          name={bespokeCard.name}
          tagline={bespokeCard.tagline}
          image={bespokeCard.image}
          className="h-[380px] sm:col-span-2 lg:col-span-12 lg:h-[360px]"
        />
      </div>
    </section>
  )
}
