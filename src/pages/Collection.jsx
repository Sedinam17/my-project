import { Link } from 'react-router-dom'
import ProductCatalog from '../components/ProductCatalog.jsx'

function Collection() {
  return (
    <main>
      <section className="section products-section">
        <div className="container">
          <p className="section-label">Adorn Aura</p>
          <h1 className="section-title">Our Collection</h1>
          <p className="section-description">
            Browse our products, prices, and available colors.
          </p>

          <ProductCatalog />

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

export default Collection