import { useState } from 'react'
import { useCart } from '../context/useCart.js'

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <article className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-content">
        <span className="product-number">{String(product.id).padStart(2, '0')}</span>
        <h3>{product.name}</h3>
        <div className="product-details">
          <div className="product-detail">
            <span>Price</span>
            <strong>{product.price}</strong>
          </div>
          <div className="product-detail">
            <span>Available colors</span>
            <strong>{product.colors}</strong>
          </div>
        </div>
        <div className="product-purchase">
          <label className="quantity-control">
            <span>Qty</span>
            <input
              aria-label={`Quantity of ${product.name}`}
              type="number"
              min="1"
              step="1"
              value={quantity}
              onChange={(event) => {
                const nextQuantity = Number.parseInt(event.target.value, 10)
                setQuantity(Number.isNaN(nextQuantity) ? 1 : Math.max(1, nextQuantity))
              }}
            />
          </label>
          <button className="add-to-cart-button" type="button" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard