import './App.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">

      {/* =========================
          NAVIGATION
          ========================= */}
      <nav className="navbar">

        <a href="#home" className="logo">
          YOUR<span>LOGO</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* =========================
          MAIN WEBSITE CONTENT
          ========================= */}

      <main>

        <Hero />

        <Projects />

        <About />

        <Contact />

      </main>


      {/* =========================
          FOOTER
          ========================= */}

      <Footer />

    </div>
  )
}

export default App