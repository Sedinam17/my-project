import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function Projects() {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <p className="section-label">MOST PURCHASED</p>

        <h2 className="section-title">Our popular collection</h2>

        <p className="section-description">
          Explore some of our most purchased products. Product availability,
          colors, and prices will be updated as products are added.
        </p>

        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="collection-note">
          <p>Looking for something specific?</p>

          <a href="#contact">Contact us about our collection →</a>
        </div>
      </div>
    </section>
  )
}