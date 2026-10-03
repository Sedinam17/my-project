import { products } from '../data/products.js'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'

function ProductCatalog({ category, imagePlaceholders = 0 }) {
  const listedProducts = products
    .filter((product) => !category || product.category === category)
    .sort((a, b) => {
      const categoryOrder = a.category.localeCompare(b.category)
      if (categoryOrder !== 0) return categoryOrder

      const priceA = Number.parseFloat(a.price)
      const priceB = Number.parseFloat(b.price)
      return (Number.isNaN(priceA) ? Infinity : priceA) -
        (Number.isNaN(priceB) ? Infinity : priceB)
    })

  return (
    <div className="products">
      {listedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {Array.from({ length: imagePlaceholders }, (_, index) => (
        <article className="product-card image-placeholder-card" key={`image-placeholder-${index}`}>
          <div
            className="product-image-placeholder"
            role="img"
            aria-label={`${category} product image placeholder ${index + 1}`}
          >
            <span>Image {String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="product-content">
            <p className="product-number">IMAGE SLOT {String(index + 1).padStart(2, '0')}</p>
            <p className="product-description">Add a product photo and details here.</p>
          </div>
        </article>
      ))}
      <Link className="product-link" to="/collection">
        View all products
      </Link>
    </div>
  )
}

export default ProductCatalog