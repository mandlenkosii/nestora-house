import { Outlet } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar'
import Header from '../navigation/Header'
import Footer from './Footer'
import CartToast from './CartToast'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CartToast />
    </>
  )
}
