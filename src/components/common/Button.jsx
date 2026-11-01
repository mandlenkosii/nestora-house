import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-charcoal text-ivory hover:bg-taupe border border-charcoal hover:border-taupe',
  outline: 'border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-ivory',
  light: 'bg-ivory-light text-charcoal hover:bg-white border border-ivory-light',
  ghostLight: 'border border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal',
  sand: 'bg-sand text-charcoal hover:bg-ivory border border-sand hover:border-ivory',
}

const base =
  'inline-flex items-center justify-center gap-3 px-7 py-[15px] text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand'

/** Renders a router Link when `to` is set, otherwise a <button>. */
export default function Button({ to, variant = 'primary', arrow = false, className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }
  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  )
}

/** Understated text link with an arrow, used for editorial calls to action. */
export function TextLink({ to, light = false, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] ${light ? 'text-ivory' : 'text-charcoal'} ${className}`}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight
        size={14}
        strokeWidth={1.5}
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  )
}
