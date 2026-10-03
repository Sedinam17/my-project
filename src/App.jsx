import './App.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Bonnets from './pages/Bonnets'
import Scrunchies from './pages/Scrunchies'
import Clips from './pages/Clips.jsx'
import Bows from './pages/Bows.jsx'
import Bands from './pages/Bands.jsx'
import Ties from './pages/Ties.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { useCart } from './context/useCart.js'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function App() {
  const { itemCount } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="app">
      <ScrollToTop />

      <nav className="navbar">
        <Link to="/" className="logo">
          ADORN<span>AURA</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        <button
          type="button"
          className="cart-link"
          aria-label={`Shopping cart, ${itemCount} items`}
          aria-expanded={isCartOpen}
          aria-controls="cart-drawer-title"
          onClick={() => setIsCartOpen(true)}
        >
          <span>Cart</span>
          <span className="cart-count">{itemCount}</span>
        </button>
      </nav>

      {isCartOpen && <CartDrawer onClose={setIsCartOpen} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/bonnets" element={<Bonnets />} />
        <Route path="/scrunchies" element={<Scrunchies />} />
        <Route path="/clips" element={<Clips />} />
        <Route path="/bows" element={<Bows />} />
        <Route path="/bands" element={<Bands />} />
        <Route path="/ties" element={<Ties />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 1000,
          padding: '12px 16px',
          border: 'none',
          borderRadius: '999px',
          background: '#2d1d1a',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
        }}
      >
        Back to top
      </button>
    </div>
  )
}

export default App