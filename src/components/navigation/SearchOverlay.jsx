import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchProducts } from '../../data/products'
import { getCollection } from '../../data/collections'
import { formatPrice } from '../../utils/format'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import Image from '../common/Image'

const suggestions = ['Sofa', 'Oak', 'Bouclé', 'Travertine', 'Dining chair', 'Mirror']

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    setQuery('')
    const t = setTimeout(() => inputRef.current?.focus(), 50)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const results = useMemo(() => (query.trim().length > 1 ? searchProducts(query) : []), [query])

  const submit = (e) => {
    e.preventDefault()
    if (query.trim()) navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search">
      <div className="absolute inset-0 animate-fade-in bg-charcoal/40" onClick={onClose} aria-hidden="true" />
      <div className="relative max-h-[90vh] animate-fade-in overflow-y-auto bg-ivory-light">
        <div className="container-wide py-8 sm:py-12">
          <form onSubmit={submit} className="flex items-center gap-4 border-b border-charcoal/30 pb-4">
            <Search size={22} strokeWidth={1.3} className="text-taupe" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sofas, beds, oak, travertine…"
              aria-label="Search products"
              className="w-full bg-transparent font-serif text-2xl text-charcoal placeholder:text-taupe/50 focus:outline-none sm:text-4xl"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-taupe hover:text-charcoal"
              aria-label="Close search"
            >
              <X size={22} strokeWidth={1.3} />
            </button>
          </form>

          {query.trim().length < 2 ? (
            <div className="mt-8">
              <p className="eyebrow">Popular searches</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="border border-charcoal/20 px-4 py-2 text-[13px] text-charcoal transition-colors hover:border-charcoal"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <p className="eyebrow" aria-live="polite">
                {results.length} {results.length === 1 ? 'result' : 'results'}
              </p>
              {results.length === 0 ? (
                <p className="mt-4 text-taupe">
                  Nothing matched “{query}”. Try a material or room — or{' '}
                  <Link to="/bespoke" className="text-charcoal underline underline-offset-4">
                    let us make it for you
                  </Link>
                  .
                </p>
              ) : (
                <>
                  <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
                    {results.slice(0, 6).map((p) => (
                      <li key={p.id}>
                        <Link to={`/product/${p.slug}`} className="group block">
                          <Image
                            id={p.images[0]}
                            alt={p.name}
                            width={400}
                            responsive={false}
                            className="aspect-[4/5]"
                            imgClassName="img-zoom"
                          />
                          <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-taupe">
                            {getCollection(p.category)?.shortName}
                          </p>
                          <p className="mt-1 font-serif text-lg leading-tight">{p.name}</p>
                          <p className="mt-1 text-[13px] text-taupe">{formatPrice(p.price)}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={submit}
                    className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] underline underline-offset-8"
                  >
                    View all {results.length} results
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
