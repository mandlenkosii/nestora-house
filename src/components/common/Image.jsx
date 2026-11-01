import { useState } from 'react'
import { img, srcSet } from '../../data/images'

/**
 * Image with lazy loading, responsive srcSet, a soft fade-in and a neutral
 * fallback if a photograph ever fails to load (so layouts never show a broken icon).
 */
export default function Image({
  id,
  alt,
  width = 1200,
  sizes = '100vw',
  className = '',
  imgClassName = '',
  priority = false,
  responsive = true,
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  // Callers may position the wrapper themselves (e.g. absolute overlays); default to relative.
  const position = /\babsolute\b/.test(className) ? '' : 'relative'

  return (
    <div className={`${position} overflow-hidden bg-ivory ${className}`}>
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-lg tracking-[0.3em] text-taupe/60">NESTORA</span>
        </div>
      ) : (
        <img
          src={img(id, width)}
          srcSet={responsive ? srcSet(id) : undefined}
          sizes={responsive ? sizes : undefined}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        />
      )}
    </div>
  )
}
