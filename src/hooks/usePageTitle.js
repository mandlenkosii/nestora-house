import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Nestora House` : 'Nestora House — Designed for living'
  }, [title])
}
