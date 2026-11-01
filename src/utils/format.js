const zar = new Intl.NumberFormat('en-ZA', { maximumFractionDigits: 0 })

/** Formats whole rands as "R28 500" — South African currency style. */
export function formatPrice(value) {
  const sign = value < 0 ? '−' : ''
  return `${sign}R${zar.format(Math.abs(value))}`
}

export function formatDimensions({ width, depth, height }) {
  return `W ${width} × D ${depth} × H ${height} cm`
}

export function pluralise(count, word, plural = `${word}s`) {
  return `${count} ${count === 1 ? word : plural}`
}
