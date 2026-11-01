import Image from './Image'

/** Full-bleed photographic banner used by collection and content pages. */
export default function PageHero({ image, alt, eyebrow, title, description, children, height = 'md' }) {
  const heights = {
    sm: 'min-h-[360px] h-[48vh]',
    md: 'min-h-[440px] h-[62vh]',
    lg: 'min-h-[520px] h-[82vh]',
  }
  return (
    <section className={`relative flex items-end ${heights[height]} max-h-[860px]`}>
      <Image id={image} alt={alt} priority className="absolute inset-0" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/25 to-charcoal/5"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-charcoal/50 via-charcoal/15 to-transparent sm:block"
        aria-hidden="true"
      />
      <div className="container-wide relative pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-2xl animate-fade-up text-ivory">
          {eyebrow && <p className="eyebrow mb-5 text-ivory/80">{eyebrow}</p>}
          <h1 className="display-lg">{title}</h1>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-[17px]">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
