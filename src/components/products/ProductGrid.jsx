import ProductCard from './ProductCard'

export default function ProductGrid({ products, columns = 4 }) {
  const cols = {
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }
  return (
    <ul
      className={`grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 ${cols[columns]} lg:gap-x-8 lg:gap-y-16`}
    >
      {products.map((p) => (
        <li key={p.id}>
          <ProductCard product={p} sizes={columns === 3 ? '(min-width: 1024px) 28vw, 50vw' : undefined} />
        </li>
      ))}
    </ul>
  )
}
