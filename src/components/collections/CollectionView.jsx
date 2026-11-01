import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import FilterPanel from './FilterPanel'
import ProductGrid from '../products/ProductGrid'
import Button from '../common/Button'
import { sortOptions, useProductFilters } from '../../hooks/useProductFilters'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { pluralise } from '../../utils/format'

/**
 * Reusable product listing: toolbar, sidebar/drawer filters, active filter
 * chips, product grid and empty state. Used by Shop All and every collection.
 */
export default function CollectionView({
  products,
  typeGroups,
  initialQuery = '',
  initialTypes = [],
  searchLabel = 'Search this collection',
}) {
  // Initial values come from the URL (?q=, ?type=); pages remount this view via `key` when they change.
  const filters = useProductFilters(products, { query: initialQuery, types: initialTypes })
  const [drawerOpen, setDrawerOpen] = useState(false)
  useLockBodyScroll(drawerOpen)

  const chips = [
    ...(filters.query.trim() ? [{ label: `“${filters.query.trim()}”`, remove: () => filters.setQuery('') }] : []),
    ...filters.types.map((t) => ({ label: t, remove: () => filters.toggleType(t) })),
  ]

  return (
    <div className="container-wide py-10 lg:py-14">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 border-b border-charcoal/10 pb-5">
        <p className="text-[13px] text-taupe" aria-live="polite">
          {pluralise(filters.results.length, 'piece')}
          {filters.results.length !== products.length && <span> of {products.length}</span>}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 border border-charcoal/25 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] lg:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter {filters.activeCount > 0 && `(${filters.activeCount})`}
          </button>
          <label className="flex items-center gap-3 text-[13px]">
            <span className="hidden text-taupe sm:inline">Sort by</span>
            <select
              value={filters.sort}
              onChange={(e) => filters.setSort(e.target.value)}
              className="cursor-pointer border border-charcoal/25 bg-transparent py-2.5 pl-3 pr-8 text-[13px] focus:border-charcoal focus:outline-none"
              aria-label="Sort products"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {chips.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {chips.map((c) => (
            <button
              key={c.label}
              onClick={c.remove}
              className="inline-flex items-center gap-2 bg-ivory px-3 py-1.5 text-[12px] transition-colors hover:bg-sand/40"
              aria-label={`Remove filter ${c.label}`}
            >
              {c.label}
              <X size={12} strokeWidth={1.5} />
            </button>
          ))}
          <button
            onClick={filters.clear}
            className="ml-2 text-[12px] text-taupe underline underline-offset-4 hover:text-charcoal"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="mt-10 grid gap-12 lg:grid-cols-[240px_1fr] xl:gap-16">
        <aside className="hidden lg:block" aria-label="Filters">
          <div className="sticky top-28">
            <FilterPanel filters={filters} typeGroups={typeGroups} allProducts={products} searchLabel={searchLabel} />
          </div>
        </aside>

        <div>
          {filters.results.length > 0 ? (
            <ProductGrid products={filters.results} columns={3} />
          ) : (
            <div className="flex flex-col items-center bg-ivory px-6 py-20 text-center">
              <p className="font-serif text-3xl">No pieces match your selection</p>
              <p className="mt-3 max-w-md text-taupe">
                Try removing a filter — or, if you have something specific in mind, we can design and make it for you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={filters.clear}>
                  Clear filters
                </Button>
                <Button to="/bespoke">Explore bespoke</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${drawerOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-charcoal/40 transition-opacity ${drawerOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filters"
          className={`absolute inset-x-0 bottom-0 flex max-h-[88vh] flex-col bg-ivory-light transition-transform duration-500 ease-soft ${drawerOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
            <p className="font-serif text-2xl">Filter</p>
            <button onClick={() => setDrawerOpen(false)} className="-mr-2 p-2" aria-label="Close filters">
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <FilterPanel filters={filters} typeGroups={typeGroups} allProducts={products} searchLabel={searchLabel} />
          </div>
          <div className="border-t border-charcoal/10 p-5">
            <Button className="w-full" onClick={() => setDrawerOpen(false)}>
              Show {pluralise(filters.results.length, 'piece')}
            </Button>
          </div>
        </div>
      </div>

      <p className="mt-20 text-center text-[13px] text-taupe">
        Can’t find quite the right piece?{' '}
        <Link to="/bespoke" className="text-charcoal underline underline-offset-4">
          Commission it in your size, fabric and finish.
        </Link>
      </p>
    </div>
  )
}
