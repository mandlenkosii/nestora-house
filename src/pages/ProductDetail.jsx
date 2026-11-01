import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Ruler, ShieldCheck, Truck } from 'lucide-react'
import Breadcrumbs from '../components/common/Breadcrumbs'
import Button, { TextLink } from '../components/common/Button'
import ProductGallery from '../components/products/ProductGallery'
import ProductGrid from '../components/products/ProductGrid'
import QuantitySelector from '../components/products/QuantitySelector'
import { ColourSelector, MaterialSelector } from '../components/products/VariantSelectors'
import { ProductBadge } from '../components/products/ProductCard'
import { getProductBySlug, getRelatedProducts, productCare } from '../data/products'
import { getCollection } from '../data/collections'
import { useCart } from '../context/CartContext'
import { formatDimensions, formatPrice } from '../utils/format'
import { usePageTitle } from '../hooks/usePageTitle'
import NotFound from './NotFound'

function Accordion({ title, children, defaultOpen = false }) {
  return (
    <details className="group border-b border-charcoal/15" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-serif text-xl [&::-webkit-details-marker]:hidden">
        {title}
        <span
          className="text-2xl font-light text-taupe transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div className="pb-6 text-[14px] leading-relaxed text-taupe">{children}</div>
    </details>
  )
}

function ProductView({ product }) {
  const { addItem } = useCart()
  const collection = getCollection(product.category)
  const care = productCare[product.category]

  const [colour, setColour] = useState(product.colours[0])
  const [material, setMaterial] = useState(product.materials[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const unitPrice = product.price + material.priceDelta
  const { width, depth, height, seatHeight, note } = product.dimensions

  const selectColour = (c) => {
    setColour(c)
    if (typeof c.image === 'number') setActiveImage(c.image)
    else if (activeImage !== 0 && product.colours.some((x) => typeof x.image === 'number')) setActiveImage(0)
  }

  const add = () =>
    addItem(product, {
      colour: colour.name,
      material: material.name,
      quantity,
      unitPrice,
      image: product.images[typeof colour.image === 'number' ? colour.image : 0],
    })

  const specs = [
    ['Category', product.type.replace(/s$/, '')],
    ['Dimensions', formatDimensions(product.dimensions)],
    ...(seatHeight ? [['Seat height', `${seatHeight} cm`]] : []),
    ['Materials', product.materials.map((m) => m.name).join(', ')],
    ['Colours', product.colours.map((c) => c.name).join(', ')],
    ['Availability', product.availability],
    ['Product code', product.id.toUpperCase()],
  ]

  return (
    <>
      <div className="container-wide pt-6 lg:pt-8">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: collection.name, to: `/collections/${collection.slug}` },
            { label: product.name },
          ]}
        />
      </div>

      <section className="container-wide grid gap-10 pb-20 pt-6 lg:grid-cols-12 lg:gap-14 lg:pt-8">
        <div className="lg:col-span-7">
          <div className="lg:sticky lg:top-28">
            <ProductGallery
              images={product.images}
              name={product.name}
              active={activeImage}
              onChange={setActiveImage}
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <p className="eyebrow">
              {collection.name} · {product.type.replace(/s$/, '')}
            </p>
            <ProductBadge product={product} className="border border-charcoal/15" />
          </div>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">{product.name}</h1>
          <p className="mt-5 text-xl" aria-live="polite">
            {formatPrice(unitPrice)}
            {material.priceDelta !== 0 && <span className="ml-3 text-[13px] text-taupe">as configured</span>}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-taupe">{product.description}</p>

          <div className="mt-10 space-y-8 border-t border-charcoal/15 pt-8">
            <ColourSelector colours={product.colours} selected={colour.name} onSelect={selectColour} />
            <MaterialSelector materials={product.materials} selected={material.name} onSelect={setMaterial} />
            <p className="flex items-center gap-3 text-[13px] text-taupe">
              <Ruler size={16} strokeWidth={1.3} aria-hidden="true" />
              {formatDimensions(product.dimensions)}
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <QuantitySelector value={quantity} onChange={setQuantity} />
            <Button onClick={add} className="flex-1">
              Add to bag — {formatPrice(unitPrice * quantity)}
            </Button>
          </div>

          <ul className="mt-8 space-y-4 bg-ivory p-6 text-[13px]">
            <li className="flex gap-4">
              <Truck size={18} strokeWidth={1.3} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-charcoal">{product.availability}</span>
                <span className="text-taupe">
                  Delivered and placed in your room of choice across South Africa. Delivery fees are calculated at
                  checkout.
                </span>
              </span>
            </li>
            <li className="flex gap-4">
              <ShieldCheck size={18} strokeWidth={1.3} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-taupe">
                Fabric and finish samples available on request. Need a different size? Ask about a bespoke version.
              </span>
            </li>
          </ul>

          <dl className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10 text-[13px]">
            {specs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[120px_1fr] gap-4 py-3">
                <dt className="text-taupe">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <TextLink to="/bespoke" className="mt-8">
            Customise this piece
          </TextLink>
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-ivory/50">
        <div className="container-wide grid gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">The details</p>
            <h2 className="display-md mt-5">Made to be lived with.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion title="Product description" defaultOpen>
              <p>{product.description}</p>
              <p className="mt-3">
                Available in {product.colours.map((c) => c.name).join(', ')}, with{' '}
                {product.materials.map((m) => m.name.toLowerCase()).join(' or ')} options.
              </p>
            </Accordion>
            <Accordion title="Materials & craftsmanship">
              <p>{care.craftsmanship}</p>
            </Accordion>
            <Accordion title="Dimensions & care">
              <p>
                {formatDimensions(product.dimensions)}
                {seatHeight && ` · Seat height ${seatHeight} cm`}. Overall width {width} cm, depth {depth} cm, height{' '}
                {height} cm.
                {note && ` ${note}.`}
              </p>
              <p className="mt-3">{care.care}</p>
            </Accordion>
            <Accordion title="Delivery & returns">
              <p>
                We deliver across South Africa with a two-person team who will place your furniture in the room of your
                choice. Made-to-order and bespoke pieces are produced specifically for you and cannot be returned unless
                faulty. Full delivery and returns terms will be confirmed before launch.
              </p>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="container-wide py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="display-md">You may also like</h2>
          <TextLink to={`/collections/${collection.slug}`} className="hidden sm:inline-flex">
            Shop {collection.name}
          </TextLink>
        </div>
        <div className="mt-12">
          <ProductGrid products={getRelatedProducts(product, 4)} />
        </div>
      </section>
    </>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  usePageTitle(product?.name)
  if (!product) return <NotFound />
  // key resets selections when navigating between products
  return <ProductView key={product.id} product={product} />
}
