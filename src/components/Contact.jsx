export default function Contact() {
  return (
    <section id="contact" className="section contact">

      <div className="container">

        <p className="section-label">
          ORDER & CONTACT
        </p>

        <h2 className="section-title">
          Get in touch
        </h2>

        <p className="section-description">
          Found something you love? Message us to ask about availability,
          colors, ordering and delivery.
        </p>


        <div className="contact-content">

          <div className="contact-card">
            <h3>
              WhatsApp
            </h3>
            <p>
              Chat with Adorn Aura at +233 53 254 9717.
            </p>
            <a
              href="https://wa.me/233532549717"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="contact-card">
            <h3>
              Snapchat
            </h3>
            <p>
              Follow or message us at jackline_konyoh.
            </p>
            <a
              href="https://www.snapchat.com/add/jackline_konyoh"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              Find us on Snapchat
            </a>
          </div>
        </div>


        <div className="order-note">

          <p>
            <strong>
              Before placing an order:
            </strong>
          </p>

          <p>
            Please confirm the product's availability,
            preferred color and size before completing
            your order.
          </p>

        </div>

      </div>

    </section>
  )
}