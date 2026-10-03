import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">ABOUT US</p>
            <h2 className="section-title">About Adorn Aura</h2>
            <h3>We believe the little details can make you feel beautiful.</h3>
            <p>
              Adorn Aura brings together beautiful accessories designed to
              complement your everyday look and let your personal style shine.
            </p>
            <Link className="btn primary about-collection-link" to="/collection">
              Explore Our Collection
            </Link>
          </div>
          <div className="about-art" aria-label="Adorn your glow">
            <span className="about-art-kicker">ADORN AURA</span>
            <p>ADORN<br />YOUR<br /><span>GLOW</span></p>
            <span className="about-art-spark" aria-hidden="true">✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}