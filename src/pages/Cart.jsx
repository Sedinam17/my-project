import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

function Cart() {
  const { items, updateQuantity, removeFromCart } = useCart()
  const hasUnknownPrice = items.some((item) => Number.isNaN(Number.parseFloat(item.price)))
  const subtotal = items.reduce((total, item) => {
    const price = Number.parseFloat(item.price)
    return Number.isNaN(price) ? total : total + price * item.quantity
  }, 0)

  return (
    <main>
      <section className="section products-section cart-section">
        <div className="container">
          <p className="section-label">YOUR SELECTION</p>
          <h1 className="section-title">Shopping cart</h1>

          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <Link className="add-to-cart-button" to="/collection">Browse the collection</Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-info">
                      <h2>{item.name}</h2>
                      <p>{item.price}</p>
                    </div>
                    <label className="quantity-control cart-quantity">
                      <span>Qty</span>
                      <input
                        aria-label={`Quantity of ${item.name} in cart`}
                        type="number"
                        min="1"
                        step="1"
                        value={item.quantity}
                        onChange={(event) => {
                          const quantity = Number.parseInt(event.target.value, 10)
                          if (!Number.isNaN(quantity) && quantity > 0) {
                            updateQuantity(item.id, quantity)
                          }
                        }}
                      />
                    </label>
                    <button
                      className="remove-cart-item"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </article>
                ))}
              </div>
              <div className="cart-summary">
                <p>
                  <span>Subtotal</span>
                  <strong>
                    {hasUnknownPrice ? 'Contact us to confirm total' : `${subtotal} cedis`}
                  </strong>
                </p>
                <Link className="add-to-cart-button" to="/checkout">
                  Continue to checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default Cart