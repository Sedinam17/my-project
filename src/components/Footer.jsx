export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            YOUR<span>LOGO</span>
          </a>

          <p>
            Enhancing your appearance with products
            selected with you in mind.
          </p>

        </div>


        <div className="footer-links">

          <div className="footer-column">

            <h3>
              Explore
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#products">
              Collection
            </a>

            <a href="#about">
              About Us
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <div className="footer-column">

            <h3>
              Products
            </h3>

            <a href="#products">
              Product Categories
            </a>

            <a href="#products">
              Most Purchased
            </a>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026. All rights reserved.
        </p>

      </div>

    </footer>
  )
}