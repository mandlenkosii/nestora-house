import { Info } from 'lucide-react'

/** Small, honest label for demonstration-only content and features. */
export default function DemoNotice({ children, light = false, className = '' }) {
  return (
    <p
      className={`flex items-start gap-2 text-[12px] leading-relaxed ${light ? 'text-ivory/60' : 'text-taupe'} ${className}`}
    >
      <Info size={14} strokeWidth={1.5} className="mt-[2px] shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
