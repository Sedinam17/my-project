export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>ADORN YOUR <span>GLOW</span></h1>
          <h2>Everything you need to elevate your everyday beauty &amp; style.</h2>
          <p className="hero-description">
            Discover pieces selected to complement your glow.
          </p>
          <div className="hero-buttons">
            <a href="#categories" className="btn primary">
              Explore Collection
            </a>
          </div>
        </div>

        <figure className="hero-image">
          <img
            src="/chat-hero.jpg"
            alt="Woman wearing a purple satin bonnet"
          />
        </figure>
      </div>
      <a className="hero-discover" href="#categories">
        <span aria-hidden="true">↓</span>
        DISCOVER YOUR FAVORITES
      </a>
    </section>
  )
}