import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Collection from './pages/Collection'
import ProductDetail from './pages/ProductDetail'
import Bespoke from './pages/Bespoke'
import OurStory from './pages/OurStory'
import Projects from './pages/Projects'
import Trade from './pages/Trade'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import InfoPage from './pages/InfoPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/* living-room, bedroom, dining, tables, accessories */}
        <Route path="collections/:slug" element={<Collection />} />
        <Route path="product/:slug" element={<ProductDetail />} />
        <Route path="bespoke" element={<Bespoke />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="projects" element={<Projects />} />
        <Route path="trade" element={<Trade />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="info/:slug" element={<InfoPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
