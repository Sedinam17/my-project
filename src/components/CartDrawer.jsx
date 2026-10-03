import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

function formatPrice(price) {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    minimumFractionDigits: 2,
  }).format(price)
}

function CartDrawer({ onClose }) {
  const { items, itemCount, removeFromCart } = useCart()
  const subtotal = items.reduce((total, item) => {
    const price = Number.parseFloat(item.price)
    return Number.isNaN(price) ? total : total + price * item.quantity
  }, 0)
  const hasUnpricedItems = items.some((item) => Number.isNaN(Number.parseFloat(item.price)))

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="cart-drawer-layer">
      <button
        className="cart-drawer-backdrop"
        type="button"
        aria-label="Close shopping cart"
        onClick={() => onClose(false)}
      />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title">
        <div className="cart-drawer-heading">
          <h2 id="cart-drawer-title">Your cart <span>({itemCount})</span></h2>
          <button className="cart-drawer-close" type="button" onClick={() => onClose(false)} aria-label="Close cart">
            &times;
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer-empty">
            <p>Your cart is empty.</p>
            <Link to="/collection" onClick={() => onClose(false)}>Explore the collection</Link>
          </div>
        ) : (
          <>
            <div className="cart-drawer-items">
              {items.map((item) => {
                const price = Number.parseFloat(item.price)

                return (
                  <article className="cart-drawer-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-drawer-item-copy">
                      <h3>{item.name}</h3>
                      <p>
                        {item.quantity} &times;{' '}
                        {Number.isNaN(price) ? 'Price pending' : formatPrice(price)}
                      </p>
                    </div>
                    <button
                      className="cart-drawer-remove"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      &times;
                    </button>
                  </article>
                )
              })}
            </div>

            <div className="cart-drawer-subtotal">
              <strong>SUBTOTAL:</strong>
              <span>{formatPrice(subtotal)}</span>
            </div>
            {hasUnpricedItems && (
              <p className="cart-drawer-note">Subtotal excludes items with unlisted prices.</p>
            )}

            <div className="cart-drawer-actions">
              <Link to="/cart" onClick={() => onClose(false)}>View Cart</Link>
              <Link to="/checkout" onClick={() => onClose(false)}>Checkout</Link>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer