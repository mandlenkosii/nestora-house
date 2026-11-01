import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, X } from 'lucide-react'
import Button, { TextLink } from '../components/common/Button'
import Image from '../components/common/Image'
import Modal from '../components/common/Modal'
import QuantitySelector from '../components/products/QuantitySelector'
import ProductGrid from '../components/products/ProductGrid'
import { useCart } from '../context/CartContext'
import { getFeaturedProducts } from '../data/products'
import { formatPrice, pluralise } from '../utils/format'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Cart() {
  usePageTitle('Your Bag')
  const { items, count, subtotal, updateQuantity, removeItem, clearCart } = useCart()
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  if (items.length === 0) {
    return (
      <>
        <section className="container-wide flex flex-col items-center py-28 text-center lg:py-36">
          <ShoppingBag size={36} strokeWidth={1} className="text-taupe" />
          <h1 className="display-lg mt-8">Your bag is empty.</h1>
          <p className="mt-5 max-w-md text-taupe">
            Discover sofas, beds, tables and finishing pieces designed for everyday living — or start a bespoke piece
            made just for you.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/shop" arrow>
              Continue shopping
            </Button>
            <Button to="/bespoke" variant="outline">
              Explore bespoke
            </Button>
          </div>
        </section>
        <section className="container-wide border-t border-charcoal/10 py-20">
          <h2 className="display-md">Most-loved pieces</h2>
          <div className="mt-10">
            <ProductGrid products={getFeaturedProducts(4)} />
          </div>
        </section>
      </>
    )
  }

  return (
    <section className="container-wide py-14 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-charcoal/15 pb-6">
        <h1 className="display-lg">Your bag</h1>
        <p className="text-[13px] text-taupe">{pluralise(count, 'item')}</p>
      </div>

      <div className="mt-4 grid gap-14 lg:grid-cols-12">
        <ul className="divide-y divide-charcoal/10 lg:col-span-8">
          {items.map((item) => (
            <li key={item.key} className="flex gap-5 py-7 sm:gap-8">
              <Link to={`/product/${item.slug}`} className="shrink-0">
                <Image
                  id={item.image}
                  alt={item.name}
                  width={400}
                  responsive={false}
                  className="aspect-[4/5] w-24 sm:w-36"
                />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">{item.type.replace(/s$/, '')}</p>
                    <Link
                      to={`/product/${item.slug}`}
                      className="mt-1 block font-serif text-xl leading-tight hover:text-taupe sm:text-2xl"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <p className="shrink-0 text-[15px]">{formatPrice(item.unitPrice * item.quantity)}</p>
                </div>
                <dl className="mt-3 space-y-0.5 text-[13px] text-taupe">
                  <div className="flex gap-2">
                    <dt>Colour:</dt>
                    <dd className="text-charcoal">{item.colour}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt>Material:</dt>
                    <dd className="text-charcoal">{item.material}</dd>
                  </div>
                  {item.quantity > 1 && (
                    <div className="flex gap-2">
                      <dt>Each:</dt>
                      <dd>{formatPrice(item.unitPrice)}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                  <QuantitySelector
                    size="sm"
                    min={1}
                    value={item.quantity}
                    onChange={(q) => updateQuantity(item.key, q)}
                    label={`Quantity for ${item.name}`}
                  />
                  <button
                    onClick={() => removeItem(item.key)}
                    className="inline-flex items-center gap-1.5 text-[12px] text-taupe underline-offset-4 hover:text-charcoal hover:underline"
                  >
                    <X size={14} strokeWidth={1.5} /> Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="lg:col-span-4">
          <div className="bg-ivory p-7 sm:p-9 lg:sticky lg:top-28">
            <h2 className="font-serif text-2xl">Order summary</h2>
            <dl className="mt-6 space-y-3 text-[14px]">
              <div className="flex justify-between">
                <dt className="text-taupe">Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-taupe">Delivery</dt>
                <dd className="text-taupe">Calculated at checkout</dd>
              </div>
              <div className="flex justify-between border-t border-charcoal/15 pt-4 text-[16px]">
                <dt>Estimated total</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
            </dl>
            <p className="mt-2 text-[12px] text-taupe">Prices include VAT.</p>
            <Button className="mt-8 w-full" onClick={() => setCheckoutOpen(true)}>
              Proceed to checkout
            </Button>
            <TextLink to="/shop" className="mt-6">
              Continue shopping
            </TextLink>
            <button
              onClick={clearCart}
              className="mt-6 block text-[12px] text-taupe underline underline-offset-4 hover:text-charcoal"
            >
              Empty bag
            </button>
          </div>
        </aside>
      </div>

      <Modal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} title="Checkout is coming soon">
        <p>
          Secure online checkout and payments are not yet available on this demonstration site. Your bag of{' '}
          {pluralise(count, 'item')} ({formatPrice(subtotal)}) is saved on this device.
        </p>
        <p className="mt-3">
          To order now, please{' '}
          <Link
            to="/contact"
            className="text-charcoal underline underline-offset-4"
            onClick={() => setCheckoutOpen(false)}
          >
            contact our team
          </Link>
          .
        </p>
      </Modal>
    </section>
  )
}
