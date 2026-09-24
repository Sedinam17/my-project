import './App.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
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

        <div className="logo">
          Seddy<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>
<Hero />
<About />
<Skills />
<Projects />
<Contact />
<Footer />
    </div>
  )
}
      

export default App