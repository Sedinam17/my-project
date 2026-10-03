import { FaSnapchatGhost, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            ADORN<span>AURA</span>
          </a>

          <p>
            Enhancing your appearance with products
            selected with you in mind.
          </p>

          <div className="footer-socials" aria-label="Contact Adorn Aura">
            <a
              className="footer-social-link footer-whatsapp"
              href="https://wa.me/233532549717"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Adorn Aura on WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
            <a
              className="footer-social-link footer-snapchat"
              href="https://www.snapchat.com/add/jackline_konyoh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Adorn Aura on Snapchat"
              title="Snapchat"
            >
              <FaSnapchatGhost aria-hidden="true" />
            </a>
          </div>

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