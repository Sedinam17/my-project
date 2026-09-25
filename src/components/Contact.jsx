export default function Contact() {
  return (
    <section id="contact" className="section contact">

      <div className="container">

        <p className="section-label">
          ORDER & CONTACT
        </p>

        <h2 className="section-title">
          Ready to place an order?
        </h2>

        <p className="section-description">
          Found something you like? Contact the business owner
          to confirm availability, place your order and get
          information about payment and delivery.
        </p>


        <div className="contact-content">

          <div className="contact-card">

            <h3>
              Contact Information
            </h3>

            <p>
              Business contact details will be added here.
            </p>

            <a
              href="#"
              className="contact-link"
            >
              Contact the Owner
            </a>

          </div>


          <div className="contact-card">

            <h3>
              Payment Information
            </h3>

            <p>
              Available payment methods will be added here
              once they are provided by the business owner.
            </p>

            <a
              href="#"
              className="contact-link"
            >
              Ask About Payment
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