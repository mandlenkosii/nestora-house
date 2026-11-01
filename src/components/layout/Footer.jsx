import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import { collections } from '../../data/collections'
import { site } from '../../data/site'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Shop all', to: '/shop' },
      ...collections.map((c) => ({ label: c.name, to: `/collections/${c.slug}` })),
    ],
  },
  {
    title: 'Bespoke & Trade',
    links: [
      { label: 'Bespoke furniture', to: '/bespoke' },
      { label: 'Request a quotation', to: '/bespoke#quote' },
      { label: 'Trade & commercial', to: '/trade' },
      { label: 'Our projects', to: '/projects' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Contact us', to: '/contact' },
      { label: 'Delivery & returns', to: '/info/delivery' },
      { label: 'Care guide', to: '/info/care' },
      { label: 'Our story', to: '/our-story' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-wide grid gap-14 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-8 max-w-sm text-[14px] leading-relaxed text-ivory/65">{site.intro}</p>
          <p className="mt-6 font-serif text-xl italic text-sand">{site.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-sand">{col.title}</h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="link-underline text-[14px] text-ivory/75 transition-colors hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-sand">Get in touch</h3>
          <ul className="mt-6 space-y-3 text-[14px] text-ivory/75">
            <li>{site.contact.email}</li>
            <li>{site.contact.phone}</li>
            <li>{site.contact.address}</li>
          </ul>
          <h3 className="mt-10 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-sand">Follow</h3>
          <ul className="mt-5 flex gap-6 text-[13px] text-ivory/75">
            {site.socials.map((s) => (
              <li key={s.label} title="Social profile coming soon">
                {s.label}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-ivory/40">Contact details and social profiles are placeholders.</p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-wide flex flex-col gap-4 py-7 text-[12px] text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nestora House. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <Link to="/info/privacy" className="hover:text-ivory">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/info/terms" className="hover:text-ivory">
                Terms &amp; conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
