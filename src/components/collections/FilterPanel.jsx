import { Check, Search } from 'lucide-react'
import { priceBands } from '../../hooks/useProductFilters'

function CheckOption({ checked, onChange, label, count }) {
  return (
    <label className="group flex cursor-pointer items-center gap-3 py-1.5 text-[14px]">
      <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sand ${checked ? 'border-charcoal bg-charcoal' : 'border-charcoal/30 group-hover:border-charcoal'}`}
        aria-hidden="true"
      >
        {checked && <Check size={11} strokeWidth={2.5} className="text-ivory" />}
      </span>
      <span className={checked ? 'text-charcoal' : 'text-charcoal/75 group-hover:text-charcoal'}>{label}</span>
      {count !== undefined && <span className="ml-auto text-[12px] text-taupe">{count}</span>}
    </label>
  )
}

function Group({ title, children }) {
  return (
    <div className="border-b border-charcoal/10 py-6 first:pt-0">
      <h3 className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-taupe">{title}</h3>
      {children}
    </div>
  )
}

/**
 * Filter controls shared by the desktop sidebar and the mobile drawer.
 * `typeGroups` is a list of { label, types } so Shop All can group by collection.
 */
export default function FilterPanel({ filters, typeGroups, allProducts, searchLabel }) {
  const countFor = (type) => allProducts.filter((p) => p.type === type).length
  const countForBand = (band) => allProducts.filter((p) => p.price >= band.min && p.price <= band.max).length

  return (
    <div>
      <Group title="Search">
        <div className="relative">
          <Search
            size={15}
            strokeWidth={1.5}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-taupe"
            aria-hidden="true"
          />
          <input
            type="search"
            value={filters.query}
            onChange={(e) => filters.setQuery(e.target.value)}
            placeholder={searchLabel}
            aria-label={searchLabel}
            className="field-input pl-6"
          />
        </div>
      </Group>

      {typeGroups.map((group) => (
        <Group key={group.label} title={group.label}>
          {group.types.map((t) => (
            <CheckOption
              key={t}
              label={t}
              count={countFor(t)}
              checked={filters.types.includes(t)}
              onChange={() => filters.toggleType(t)}
            />
          ))}
        </Group>
      ))}

      <Group title="Price">
        {priceBands.map((b) => (
          <CheckOption
            key={b.id}
            label={b.label}
            count={countForBand(b)}
            checked={filters.bands.includes(b.id)}
            onChange={() => filters.toggleBand(b.id)}
          />
        ))}
      </Group>

      {filters.activeCount > 0 && (
        <button
          onClick={filters.clear}
          className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal underline underline-offset-8"
        >
          Clear all filters ({filters.activeCount})
        </button>
      )}
    </div>
  )
}
