import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from '../common/Image'

/** Main image with thumbnails (desktop) and arrows/dots (mobile). Controlled by the parent. */
export default function ProductGallery({ images, name, active, onChange }) {
  const count = images.length
  const go = (delta) => onChange((active + delta + count) % count)

  return (
    <div className="flex flex-col-reverse gap-4 lg:flex-row">
      {count > 1 && (
        <ul className="hidden gap-3 lg:flex lg:w-20 lg:flex-col" aria-label="Product images">
          {images.map((id, i) => (
            <li key={id}>
              <button
                onClick={() => onChange(i)}
                aria-label={`Show image ${i + 1} of ${count}`}
                aria-current={i === active}
                className={`block w-full transition-opacity ${i === active ? 'opacity-100 outline outline-1 outline-offset-2 outline-charcoal' : 'opacity-60 hover:opacity-100'}`}
              >
                <Image id={id} alt="" width={200} responsive={false} className="aspect-[4/5]" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="relative flex-1">
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory sm:aspect-[5/5] lg:aspect-[4/5]">
          {images.map((id, i) => (
            <Image
              key={id}
              id={id}
              alt={`${name} — image ${i + 1} of ${count}`}
              width={1400}
              sizes="(min-width: 1024px) 55vw, 100vw"
              priority={i === 0}
              className={`absolute inset-0 transition-opacity duration-700 ${i === active ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            />
          ))}
        </div>

        {count > 1 && (
          <>
            <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between lg:hidden">
              <button onClick={() => go(-1)} className="bg-ivory-light/90 p-2.5" aria-label="Previous image">
                <ChevronLeft size={18} strokeWidth={1.4} />
              </button>
              <button onClick={() => go(1)} className="bg-ivory-light/90 p-2.5" aria-label="Next image">
                <ChevronRight size={18} strokeWidth={1.4} />
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-2 lg:hidden" aria-hidden="true">
              {images.map((id, i) => (
                <span
                  key={id}
                  className={`h-[3px] transition-all ${i === active ? 'w-8 bg-charcoal' : 'w-4 bg-charcoal/25'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
