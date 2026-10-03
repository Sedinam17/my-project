import { Link } from 'react-router-dom'
import ProductCatalog from './ProductCatalog.jsx'

export default function CategoryPage({ category }) {
  return (
    <main>
      <section className="section products-section">
        <div className="container">
          <p className="section-label">OUR COLLECTION</p>
          <h1 className="section-title">{category}</h1>
          <p className="section-description">
            Browse our {category.toLowerCase()} and discover your favorites.
          </p>

          <ProductCatalog category={category} imagePlaceholders={5} />

          <div style={{ marginTop: '24px' }}>
            <Link to="/" className="product-link">
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}