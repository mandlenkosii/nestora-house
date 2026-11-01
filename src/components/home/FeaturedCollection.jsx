import SectionHeading from '../common/SectionHeading'
import { TextLink } from '../common/Button'
import ProductGrid from '../products/ProductGrid'
import { getFeaturedProducts } from '../../data/products'

export default function FeaturedCollection() {
  return (
    <section className="bg-ivory/60 py-24 lg:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="The featured collection"
          title="Considered pieces. Timeless appeal."
          description="A selection of our most-loved designs — each one made to bring quiet comfort and lasting character to your home."
          action={<TextLink to="/shop">View all pieces</TextLink>}
        />
        <div className="mt-14">
          <ProductGrid products={getFeaturedProducts(8)} />
        </div>
      </div>
    </section>
  )
}
