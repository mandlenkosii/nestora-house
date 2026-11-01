import { formatPrice } from '../../utils/format'

export function ColourSelector({ colours, selected, onSelect }) {
  return (
    <fieldset>
      <legend className="text-[12px] uppercase tracking-[0.16em] text-taupe">
        Colour: <span className="normal-case tracking-normal text-charcoal">{selected}</span>
      </legend>
      <div className="mt-3 flex flex-wrap gap-3">
        {colours.map((c) => {
          const isActive = c.name === selected
          return (
            <button
              key={c.name}
              type="button"
              onClick={() => onSelect(c)}
              aria-pressed={isActive}
              aria-label={c.name}
              title={c.name}
              className={`rounded-full p-[3px] transition-all ${isActive ? 'ring-1 ring-charcoal' : 'ring-1 ring-transparent hover:ring-charcoal/30'}`}
            >
              <span
                className="block h-8 w-8 rounded-full border border-charcoal/10"
                style={{ backgroundColor: c.hex }}
              />
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function MaterialSelector({ materials, selected, onSelect }) {
  if (materials.length < 2) {
    return (
      <p className="text-[12px] uppercase tracking-[0.16em] text-taupe">
        Material: <span className="normal-case tracking-normal text-charcoal">{materials[0].name}</span>
      </p>
    )
  }
  return (
    <fieldset>
      <legend className="text-[12px] uppercase tracking-[0.16em] text-taupe">
        Material / option: <span className="normal-case tracking-normal text-charcoal">{selected}</span>
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {materials.map((m) => {
          const isActive = m.name === selected
          return (
            <button
              key={m.name}
              type="button"
              onClick={() => onSelect(m)}
              aria-pressed={isActive}
              className={`border px-4 py-2.5 text-[13px] transition-colors ${isActive ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/20 hover:border-charcoal'}`}
            >
              {m.name}
              {m.priceDelta !== 0 && (
                <span className={`ml-2 text-[12px] ${isActive ? 'text-ivory/70' : 'text-taupe'}`}>
                  {m.priceDelta > 0 ? '+' : ''}
                  {formatPrice(m.priceDelta)}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
