import { useMemo, useState } from 'react'
import { searchProducts } from '../data/products'

export const priceBands = [
  { id: 'under-5k', label: 'Under R5,000', min: 0, max: 4999 },
  { id: '5k-10k', label: 'R5,000 – R10,000', min: 5000, max: 10000 },
  { id: '10k-20k', label: 'R10,000 – R20,000', min: 10001, max: 20000 },
  { id: 'over-20k', label: 'Over R20,000', min: 20001, max: Infinity },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'newest', label: 'New arrivals' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'name', label: 'Name: A – Z' },
]

const sorters = {
  featured: (a, b) => Number(b.featured) - Number(a.featured) || Number(b.bestseller) - Number(a.bestseller),
  newest: (a, b) => Number(b.isNew) - Number(a.isNew),
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
}

/** Search, type filter, price filter and sorting for a list of products. */
export function useProductFilters(products, initial = {}) {
  const [query, setQuery] = useState(initial.query ?? '')
  const [types, setTypes] = useState(initial.types ?? [])
  const [bands, setBands] = useState([])
  const [sort, setSort] = useState('featured')

  const toggle = (setter) => (value) =>
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))

  const results = useMemo(() => {
    let list = searchProducts(query, products)
    if (types.length) list = list.filter((p) => types.includes(p.type))
    if (bands.length) {
      const ranges = priceBands.filter((b) => bands.includes(b.id))
      list = list.filter((p) => ranges.some((r) => p.price >= r.min && p.price <= r.max))
    }
    return [...list].sort(sorters[sort])
  }, [products, query, types, bands, sort])

  const activeCount = types.length + bands.length + (query.trim() ? 1 : 0)

  const clear = () => {
    setQuery('')
    setTypes([])
    setBands([])
  }

  return {
    query,
    setQuery,
    types,
    toggleType: toggle(setTypes),
    bands,
    toggleBand: toggle(setBands),
    sort,
    setSort,
    results,
    activeCount,
    clear,
  }
}
