import { Link } from 'react-router-dom'

/** Text wordmark — replace with an SVG asset once the final logo exists. */
export default function Logo({ light = false, className = '' }) {
  return (
    <Link
      to="/"
      aria-label="Nestora House — home"
      className={`group inline-flex flex-col items-start leading-none ${light ? 'text-ivory' : 'text-charcoal'} ${className}`}
    >
      <span className="font-serif text-[1.55rem] font-medium tracking-[0.26em] sm:text-[1.7rem]">NESTORA</span>
      <span className="mt-1 flex w-full items-center gap-2 text-[9px] font-medium tracking-[0.5em]">
        <span className={`h-px flex-1 ${light ? 'bg-ivory/50' : 'bg-charcoal/40'}`} />
        HOUSE
        <span className={`h-px flex-1 ${light ? 'bg-ivory/50' : 'bg-charcoal/40'}`} />
      </span>
    </Link>
  )
}
