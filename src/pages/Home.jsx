import Hero from '../components/Hero'
import CategoryGallery from '../components/CategoryGallery.jsx'
import About from '../components/About'
import Projects  from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <main>
            <Hero />
            <CategoryGallery />
            <Projects />
            <About />
            <Contact />
        </main>
    )
}