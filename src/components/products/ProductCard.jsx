import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import Image from '../common/Image'
import { useCart } from '../../context/CartContext'
import { getCollection } from '../../data/collections'
import { formatPrice } from '../../utils/format'

export function ProductBadge({ product, className = '' }) {
  const label = product.isNew ? 'New' : product.bestseller ? 'Bestseller' : null
  if (!label) return null
  return (
    <span
      className={`bg-ivory-light/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-charcoal ${className}`}
    >
      {label}
    </span>
  )
}

export default function ProductCard({ product, sizes = '(min-width: 1024px) 25vw, 50vw' }) {
  const { addItem } = useCart()
  const href = `/product/${product.slug}`
  const [primary, secondary] = product.images

  return (
    <article className="group relative">
      <div className="relative">
        <Link to={href} className="block" tabIndex={-1} aria-hidden="true">
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
            <Image id={primary} alt="" width={800} sizes={sizes} className="absolute inset-0" imgClassName="img-zoom" />
            {secondary && (
              <Image
                id={secondary}
                alt=""
                width={800}
                sizes={sizes}
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            )}
          </div>
        </Link>
        <ProductBadge product={product} className="absolute left-3 top-3" />

        <div className="absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
          <Link
            to={href}
            className="hidden flex-1 items-center justify-center bg-ivory-light/95 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-white lg:flex"
          >
            View product
          </Link>
          <button
            onClick={() => addItem(product)}
            className="ml-auto flex h-10 w-10 items-center justify-center bg-charcoal text-ivory transition-colors hover:bg-taupe lg:h-auto lg:w-auto lg:px-4"
            aria-label={`Add ${product.name} to bag`}
            title="Add to bag"
          >
            <Plus size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <Link to={href} className="mt-4 block">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
          {getCollection(product.category)?.shortName} · {product.type.replace(/s$/, '')}
        </p>
        <h3 className="mt-1.5 font-serif text-[1.35rem] leading-snug transition-colors group-hover:text-taupe">
          {product.name}
        </h3>
        <p className="mt-1 text-[14px] text-charcoal/80">{formatPrice(product.price)}</p>
      </Link>
    </article>
  )
}
