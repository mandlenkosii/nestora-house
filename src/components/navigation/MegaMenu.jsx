import { Link } from 'react-router-dom'
import { collections } from '../../data/collections'
import { images } from '../../data/images'
import Image from '../common/Image'
import { TextLink } from '../common/Button'

export default function MegaMenu({ open, onClose }) {
  return (
    <div
      className={`absolute inset-x-0 top-full hidden border-t border-charcoal/10 bg-ivory-light transition-all duration-300 lg:block ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <div className="container-wide grid grid-cols-12 gap-10 py-12">
        <div className="col-span-8 grid grid-cols-5 gap-8">
          {collections.map((c) => (
            <div key={c.slug}>
              <Link
                to={`/collections/${c.slug}`}
                className="font-serif text-xl text-charcoal transition-colors hover:text-taupe"
                tabIndex={open ? 0 : -1}
              >
                {c.name}
              </Link>
              <ul className="mt-4 space-y-2.5">
                {c.types.map((t) => (
                  <li key={t}>
                    <Link
                      to={`/collections/${c.slug}?type=${encodeURIComponent(t)}`}
                      className="text-[13px] text-taupe transition-colors hover:text-charcoal"
                      tabIndex={open ? 0 : -1}
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-5 mt-2 flex gap-10 border-t border-charcoal/10 pt-6">
            <TextLink to="/shop">Shop all furniture</TextLink>
            <TextLink to="/projects">Our projects</TextLink>
            <TextLink to="/trade">Trade &amp; commercial</TextLink>
          </div>
        </div>
        <Link to="/bespoke" className="group col-span-4 block" tabIndex={open ? 0 : -1}>
          <Image
            id={images.bespokeJoinery}
            alt="Custom timber joinery"
            width={700}
            responsive={false}
            className="aspect-[16/10]"
            imgClassName="img-zoom"
          />
          <p className="eyebrow mt-4">Bespoke service</p>
          <p className="mt-1 font-serif text-2xl">Made around your vision</p>
        </Link>
      </div>
    </div>
  )
}
