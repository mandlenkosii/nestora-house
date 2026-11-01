import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, min = 1, max = 20, size = 'md', label = 'Quantity' }) {
  const h = size === 'sm' ? 'h-9' : 'h-[50px]'
  return (
    <div className={`inline-flex items-center border border-charcoal/25 ${h}`} role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-full w-10 items-center justify-center text-charcoal transition-colors hover:bg-ivory disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>
      <span className="w-8 text-center text-[14px] tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-full w-10 items-center justify-center text-charcoal transition-colors hover:bg-ivory disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
    </div>
  )
}
