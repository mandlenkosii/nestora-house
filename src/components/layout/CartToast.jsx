import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/format'
import Image from '../common/Image'

/** Confirmation shown briefly after an item is added to the bag. */
export default function CartToast() {
  const { lastAdded, dismissLastAdded } = useCart()

  useEffect(() => {
    if (!lastAdded) return
    const t = setTimeout(dismissLastAdded, 4500)
    return () => clearTimeout(t)
  }, [lastAdded, dismissLastAdded])

  if (!lastAdded) return null

  return (
    <div
      key={lastAdded.at}
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 left-4 z-[55] animate-fade-up bg-ivory-light p-5 shadow-[0_20px_60px_-15px_rgba(41,39,33,0.35)] sm:left-auto sm:w-[380px]"
    >
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em]">
          <Check size={14} strokeWidth={2} /> Added to your bag
        </p>
        <button onClick={dismissLastAdded} className="-mr-1 p-1 text-taupe hover:text-charcoal" aria-label="Dismiss">
          <X size={16} strokeWidth={1.5} />
        </button>
      </div>
      <div className="mt-4 flex gap-4">
        <Image id={lastAdded.image} alt="" width={160} responsive={false} className="h-20 w-16 shrink-0" />
        <div className="min-w-0 text-[13px]">
          <p className="font-serif text-lg leading-tight">{lastAdded.name}</p>
          <p className="mt-1 truncate text-taupe">
            {lastAdded.colour} · {lastAdded.material}
          </p>
          <p className="mt-1">{formatPrice(lastAdded.unitPrice)}</p>
        </div>
      </div>
      <Link
        to="/cart"
        onClick={dismissLastAdded}
        className="mt-5 block bg-charcoal py-3 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-taupe"
      >
        View bag &amp; checkout
      </Link>
    </div>
  )
}
