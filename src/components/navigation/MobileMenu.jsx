import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import Logo from '../common/Logo'
import { collections } from '../../data/collections'
import { mainNav, secondaryNav, site } from '../../data/site'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

export default function MobileMenu({ open, onClose, onAccount }) {
  const [shopOpen, setShopOpen] = useState(false)
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div className={`fixed inset-0 z-[60] lg:hidden ${open ? 'visible' : 'invisible'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-charcoal/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-y-0 left-0 flex w-[88%] max-w-[420px] flex-col bg-ivory-light transition-transform duration-500 ease-soft ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-[84px] items-center justify-between border-b border-charcoal/10 px-6">
          <Logo />
          <button onClick={onClose} className="-mr-2 p-2" aria-label="Close menu">
            <X size={22} strokeWidth={1.4} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile">
          <ul>
            <li className="border-b border-charcoal/10">
              <button
                onClick={() => setShopOpen((v) => !v)}
                aria-expanded={shopOpen}
                className="flex w-full items-center justify-between py-4 font-serif text-[1.7rem]"
              >
                Shop
                <ChevronDown
                  size={20}
                  strokeWidth={1.3}
                  className={`transition-transform duration-300 ${shopOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-400 ${shopOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <ul className="overflow-hidden">
                  <li>
                    <Link to="/shop" className="block py-2.5 text-[15px] text-taupe" tabIndex={shopOpen ? 0 : -1}>
                      Shop all
                    </Link>
                  </li>
                  {collections.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/collections/${c.slug}`}
                        className="block py-2.5 text-[15px] text-taupe"
                        tabIndex={shopOpen ? 0 : -1}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  <li className="h-3" />
                </ul>
              </div>
            </li>
            {[...mainNav.filter((i) => !i.mega), ...secondaryNav].map((item) => (
              <li key={item.to} className="border-b border-charcoal/10">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `block py-4 font-serif text-[1.7rem] ${isActive ? 'text-taupe' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-charcoal/10 bg-ivory px-6 py-6 text-[13px] text-taupe">
          <button onClick={onAccount} className="block uppercase tracking-[0.18em] text-charcoal">
            Account
          </button>
          <p>{site.announcement}</p>
        </div>
      </aside>
    </div>
  )
}
