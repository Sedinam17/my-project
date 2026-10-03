import { Link } from 'react-router-dom'
import ProductCatalog from '../components/ProductCatalog.jsx'

function Bonnets() {
  return (
    <main>
      <section className="section products-section">
        <div className="container">
          <p className="section-label">Our collection</p>
          <h1 className="section-title">Bonnets</h1>
          <p className="section-description">
            Browse our bonnets, prices, and available colors.
          </p>

          <ProductCatalog category="Bonnets" />

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

export default Bonnets