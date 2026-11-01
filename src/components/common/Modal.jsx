import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

/** Simple accessible dialog used for placeholder notices (checkout, accounts). */
export default function Modal({ open, onClose, title, children }) {
  const ref = useRef(null)
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    ref.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-5">
      <div
        className="absolute inset-0 animate-fade-in bg-charcoal/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-md animate-fade-up bg-ivory-light p-8 shadow-2xl outline-none sm:p-10"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-taupe hover:text-charcoal"
          aria-label="Close dialog"
        >
          <X size={18} strokeWidth={1.5} />
        </button>
        <h2 id="modal-title" className="font-serif text-3xl">
          {title}
        </h2>
        <div className="mt-4 text-[15px] leading-relaxed text-taupe">{children}</div>
      </div>
    </div>
  )
}
