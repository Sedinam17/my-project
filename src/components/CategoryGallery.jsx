import { Link } from 'react-router-dom'
import bonnetImage from '../assets/images/bonnets/bonnet.jpeg'
import scrunchiesImage from '../assets/images/scrunchies/scrunchies.jpg'
import clipIMage from '../assets/images/clips/clip.jpeg'
import bowImage from '../assets/images/bows/bows.jpg'
import bandImage from '../assets/images/bands/bands.jpg'

const categories = [
  {
    name: 'Bonnets',
    to: '/bonnets',
    image: bonnetImage,
    imageAlt: 'Satin bonnets in a range of colors',
  },
  {
    name: 'Scrunchies',
    to: '/scrunchies',
    image: scrunchiesImage,
    imageAlt: '',
  },
  { name: 'Clips', to: '/clips', image: clipIMage, imageAlt: '' },
  { name: 'Bows', to: '/bows', image: bowImage, imageAlt: '' },
  { name: 'Bands', to: '/bands', image: bandImage, imageAlt: '' },
  { name: 'Ties', to: '/ties', image: null, imageAlt: '' },
]

export default function CategoryGallery() {
  return (
    <section className="category-section" id="categories" aria-labelledby="category-title">
      <div className="category-section-heading">
        <p className="section-label">EXPLORE THE COLLECTION</p>
        <h2 id="category-title">Our categories</h2>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link className="category-card" to={category.to} key={category.name}>
            <div className={`category-image${category.image ? '' : ` category-image-${category.name.toLowerCase()}`}`}>
              {category.image ? (
                <img src={category.image} alt={category.imageAlt} />
              ) : (
                <span aria-hidden="true">{category.name} collection</span>
              )}
            </div>
            <span className="category-name">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}