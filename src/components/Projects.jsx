const products = [
  {
    id: 1,
    name: 'Product Name',
    price: 'Price to be added',
    stock: 'Stock quantity',
    colors: 'Available colors',
    sizes: 'Available sizes',
    description: 'Product description will be added here.',
    image: null,
  },

  {
    id: 2,
    name: 'Product Name',
    price: 'Price to be added',
    stock: 'Stock quantity',
    colors: 'Available colors',
    sizes: 'Available sizes',
    description: 'Product description will be added here.',
    image: null,
  },

  {
    id: 3,
    name: 'Product Name',
    price: 'Price to be added',
    stock: 'Stock quantity',
    colors: 'Available colors',
    sizes: 'Available sizes',
    description: 'Product description will be added here.',
    image: null,
  },
]


export default function Projects() {
  return (
    <section id="products" className="section products-section">

      <div className="container">

        <p className="section-label">
          MOST PURCHASED
        </p>

        <h2 className="section-title">
          Our popular collection
        </h2>

        <p className="section-description">
          Explore some of our most purchased products.
          Product availability, colors, sizes and prices
          will be updated as products are added.
        </p>


        <div className="products">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              {/* Product Image */}

              <div className="product-image">

                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                ) : (
                  <span>
                    Product Image
                  </span>
                )}

              </div>


              {/* Product Information */}

              <div className="product-content">

                <p className="product-number">
                  {String(product.id).padStart(2, '0')}
                </p>

                <h3>
                  {product.name}
                </h3>

                <p className="product-description">
                  {product.description}
                </p>


                <div className="product-details">

                  <div className="product-detail">
                    <span>Price</span>
                    <strong>{product.price}</strong>
                  </div>

                  <div className="product-detail">
                    <span>Stock</span>
                    <strong>{product.stock}</strong>
                  </div>

                  <div className="product-detail">
                    <span>Colors</span>
                    <strong>{product.colors}</strong>
                  </div>

                  <div className="product-detail">
                    <span>Sizes</span>
                    <strong>{product.sizes}</strong>
                  </div>

                </div>


                <a
                  href="#contact"
                  className="product-link"
                >
                  Make an Order →
                </a>

              </div>

            </div>

          ))}

        </div>


        <div className="collection-note">

          <p>
            Looking for something specific?
          </p>

          <a href="#contact">
            Contact us about our collection →
          </a>

        </div>

      </div>

    </section>
  )
}