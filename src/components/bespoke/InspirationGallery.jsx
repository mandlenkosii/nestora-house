import Image from '../common/Image'
import { images } from '../../data/images'

const items = [
  {
    id: images.inspireSofa,
    label: 'Custom sofas',
    note: 'Scaled to your room, in your choice of fabric',
    className: 'lg:col-span-7 lg:row-span-2 h-[360px] lg:h-full',
  },
  {
    id: images.inspireBed,
    label: 'Beds & headboards',
    note: 'Upholstered or solid timber',
    className: 'lg:col-span-5 h-[300px] lg:h-[340px]',
  },
  {
    id: images.inspireChair,
    label: 'Chairs',
    note: 'Dining, accent and occasional',
    className: 'lg:col-span-5 h-[300px] lg:h-[340px]',
  },
  {
    id: images.inspireDining,
    label: 'Dining tables',
    note: 'Made to seat exactly who you need',
    className: 'lg:col-span-5 h-[300px] lg:h-[400px]',
  },
  {
    id: images.inspireSofaTwo,
    label: 'Sectionals',
    note: 'Corner, modular and curved configurations',
    className: 'lg:col-span-7 h-[300px] lg:h-[400px]',
  },
]

export default function InspirationGallery() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
      {items.map((item, i) => (
        <li
          key={item.label}
          className={`group relative overflow-hidden ${item.className} ${i === 0 ? 'sm:col-span-2' : ''}`}
        >
          <Image
            id={item.id}
            alt={`Bespoke inspiration: ${item.label.toLowerCase()}`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute inset-0"
            imgClassName="img-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 p-6 text-ivory">
            <p className="font-serif text-2xl">{item.label}</p>
            <p className="mt-1 text-[13px] text-ivory/80">{item.note}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
