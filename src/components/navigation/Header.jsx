import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, User } from 'lucide-react'
import Logo from '../common/Logo'
import Modal from '../common/Modal'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'
import SearchOverlay from './SearchOverlay'
import { mainNav } from '../../data/site'
import { useCart } from '../../context/CartContext'

export default function Header() {
  const { count } = useCart()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close any open menus on navigation.
  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname, location.search])

  const iconBtn = 'relative p-2 text-charcoal transition-colors hover:text-taupe'

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-ivory-light/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_0_rgba(41,39,33,0.08)]' : 'border-b border-charcoal/10'}`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div
          className={`container-wide flex items-center justify-between transition-[height] duration-300 ${scrolled ? 'h-[68px]' : 'h-[84px]'}`}
        >
          <div className="flex items-center gap-2 lg:hidden">
            <button className={`${iconBtn} -ml-2`} onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={22} strokeWidth={1.4} />
            </button>
            <button className={iconBtn} onClick={() => setSearchOpen(true)} aria-label="Search products">
              <Search size={20} strokeWidth={1.4} />
            </button>
          </div>

          <Logo className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0" />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {mainNav.map((item) => (
                <li key={item.to} onMouseEnter={() => setMegaOpen(Boolean(item.mega))}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    aria-haspopup={item.mega ? 'true' : undefined}
                    aria-expanded={item.mega ? megaOpen : undefined}
                    onFocus={() => setMegaOpen(Boolean(item.mega))}
                    className={({ isActive }) =>
                      `link-underline py-2 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors ${isActive ? 'text-charcoal' : 'text-charcoal/75 hover:text-charcoal'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className={`${iconBtn} hidden lg:inline-flex`}
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
            >
              <Search size={20} strokeWidth={1.4} />
            </button>
            <button
              className={`${iconBtn} hidden sm:inline-flex`}
              onClick={() => setAccountOpen(true)}
              aria-label="Account"
            >
              <User size={20} strokeWidth={1.4} />
            </button>
            <Link
              to="/cart"
              className={`${iconBtn} -mr-2`}
              aria-label={`Shopping bag, ${count} ${count === 1 ? 'item' : 'items'}`}
            >
              <ShoppingBag size={20} strokeWidth={1.4} />
              {count > 0 && (
                <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-charcoal px-1 text-[10px] font-medium text-ivory">
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </Link>
          </div>
        </div>

        <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
      </header>

      {/* Overlays live outside <header>: its backdrop-filter would otherwise trap position:fixed children. */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onAccount={() => setAccountOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <Modal open={accountOpen} onClose={() => setAccountOpen(false)} title="Accounts are coming soon">
        <p>
          Customer accounts — with order history, saved addresses and wish lists — are planned for a future release. For
          now, your shopping bag is saved on this device.
        </p>
      </Modal>
    </>
  )
}
