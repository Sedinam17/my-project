import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

function formatPrice(price) {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    minimumFractionDigits: 2,
  }).format(price)
}

function Checkout() {
  const { items } = useCart()
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const subtotal = items.reduce((total, item) => {
    const price = Number.parseFloat(item.price)
    return Number.isNaN(price) ? total : total + price * item.quantity
  }, 0)
  const hasUnpricedItems = items.some((item) => Number.isNaN(Number.parseFloat(item.price)))

  if (items.length === 0) {
    return (
      <main className="checkout-section">
        <div className="checkout-container checkout-empty">
          <h1>Checkout</h1>
          <p>Your cart is empty.</p>
          <Link className="add-to-cart-button" to="/collection">Explore the collection</Link>
        </div>
      </main>
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="checkout-section">
      <div className="checkout-container">
        <h1 className="checkout-title">CHECKOUT</h1>

        <form className="checkout-layout" onSubmit={handleSubmit}>
          <div className="checkout-details">
            <section className="checkout-panel" aria-labelledby="billing-title">
              <h2 id="billing-title">Billing details</h2>
              <div className="checkout-fields">
                <label className="checkout-field">
                  <span>First name <b>*</b></span>
                  <input name="firstName" autoComplete="given-name" placeholder="First name" required />
                </label>
                <label className="checkout-field">
                  <span>Last name <b>*</b></span>
                  <input name="lastName" autoComplete="family-name" placeholder="Last name" required />
                </label>
                <label className="checkout-field">
                  <span>Town / City <b>*</b></span>
                  <input name="city" autoComplete="address-level2" placeholder="Town or city" required />
                </label>
                <label className="checkout-field">
                  <span>Region <b>*</b></span>
                  <input name="region" autoComplete="address-level1" placeholder="Region" required />
                </label>
                <label className="checkout-field">
                  <span>Phone <b>*</b></span>
                  <input name="phone" type="tel" autoComplete="tel" placeholder="+233 123 456 789" required />
                </label>
                <label className="checkout-field checkout-field-wide">
                  <span>Email address <b>*</b></span>
                  <input name="email" type="email" autoComplete="email" placeholder="example@gmail.com" required />
                </label>
              </div>
            </section>

            <label className="checkout-shipping-toggle">
              <input
                type="checkbox"
                checked={shipToDifferentAddress}
                onChange={(event) => setShipToDifferentAddress(event.target.checked)}
              />
              <span>Ship to a different address?</span>
            </label>

            {shipToDifferentAddress && (
              <section className="checkout-panel checkout-shipping-panel" aria-labelledby="shipping-title">
                <h2 id="shipping-title">Shipping details</h2>
                <div className="checkout-fields">
                  <label className="checkout-field">
                    <span>First name <b>*</b></span>
                    <input name="shippingFirstName" placeholder="First name" required />
                  </label>
                  <label className="checkout-field">
                    <span>Last name <b>*</b></span>
                    <input name="shippingLastName" placeholder="Last name" required />
                  </label>
                  <label className="checkout-field checkout-field-wide">
                    <span>Street address (optional) <b>*</b></span>
                    <input name="shippingStreet" placeholder="House number and street name" />
                  </label>
                  <label className="checkout-field">
                    <span>Receiver's phone </span>
                    <input name="shippingPhone" type="tel" autoComplete="tel" placeholder="+233 123 456 789"  required />
                  </label>
                  <label className="checkout-field">
                    <span>Town / City <b>*</b></span>
                    <input name="shippingCity" placeholder="Town or city" required />
                  </label>
                  <label className="checkout-field">
                    <span>Region <b>*</b></span>
                    <input name="shippingRegion" placeholder="Region" required />
                  </label>
                </div>
              </section>
            )}

            <label className="checkout-notes">
              <span>Order notes (optional)</span>
              <textarea name="notes" placeholder="Notes about your order, e.g. special notes for delivery." />
            </label>
          </div>

          <aside className="checkout-summary-column">
            <section className="checkout-panel checkout-order" aria-labelledby="order-title">
              <h2 id="order-title">Your order</h2>
              <div className="checkout-order-head">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="checkout-order-items">
                {items.map((item) => {
                  const price = Number.parseFloat(item.price)
                  return (
                    <div className="checkout-order-item" key={item.id}>
                      <span>{item.name} <b>&times; {item.quantity}</b></span>
                      <span>{Number.isNaN(price) ? 'Price pending' : formatPrice(price * item.quantity)}</span>
                    </div>
                  )
                })}
              </div>
              <div className="checkout-total-row">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              {hasUnpricedItems && (
                <p className="checkout-price-note">Subtotal excludes items with unlisted prices.</p>
              )}
              <div className="checkout-total-row checkout-delivery-row">
                <span>Delivery</span>
                <span>To be confirmed</span>
              </div>
              <div className="checkout-total-row checkout-grand-total">
                <span>Total before delivery</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
            </section>

            <section className="checkout-panel checkout-payment" aria-labelledby="payment-title">
              <h2 id="payment-title">Payment</h2>
              <p>Payment options and delivery charges will be confirmed before your order is completed.</p>
              <label className="checkout-terms">
                <input type="checkbox" name="terms" required />
                <span>I agree to the order details and store terms <b>*</b></span>
              </label>
              <button className="checkout-submit" type="submit">Place order</button>
              {submitted && (
                <p className="checkout-feedback" role="status">
                  The checkout form is complete, but online order submission and payment are not connected yet.
                </p>
              )}
            </section>
          </aside>
        </form>
      </div>
    </main>
  )
}

export default Checkout