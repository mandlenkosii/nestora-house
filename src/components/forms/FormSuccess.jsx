import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import DemoNotice from '../common/DemoNotice'

/** Polished confirmation state shown in place of a submitted form. */
export default function FormSuccess({ title, children, reference, onReset, resetLabel = 'Send another enquiry' }) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current?.focus()
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      className="animate-fade-up bg-ivory px-7 py-12 text-center outline-none sm:px-12 sm:py-16"
    >
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-charcoal/30">
        <Check size={22} strokeWidth={1.3} />
      </span>
      <h3 className="mt-6 font-serif text-3xl sm:text-4xl">{title}</h3>
      <div className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-taupe">{children}</div>
      {reference && (
        <p className="mt-6 text-[12px] uppercase tracking-[0.18em] text-taupe">
          Reference <span className="text-charcoal">{reference}</span>
        </p>
      )}
      {onReset && (
        <button
          onClick={onReset}
          className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] underline underline-offset-8"
        >
          {resetLabel}
        </button>
      )}
      <DemoNotice className="mx-auto mt-10 max-w-sm justify-center">
        Demonstration only — this submission is stored in your browser session and has not been sent.
      </DemoNotice>
    </div>
  )
}
