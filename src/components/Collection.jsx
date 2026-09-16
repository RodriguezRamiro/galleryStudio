/* galleryStudio/src/components/Collection. */


import artworks from '../data/artworksData.js'
import ArtworkCard from './ArtworkCard.jsx'

function Collection({ onObserve }) {
  const collection = [...artworks]
    .reverse()
    .slice(1)

  return (
    <section
      id="collection"
      className="collection"
      aria-labelledby="collection-title"
    >
      <div className="container">

        <header className="section-header">

          <p className="eyebrow">
            The Collection
          </p>

          <h2 id="collection-title">
            Works
          </h2>

        </header>

        <div className="collection-grid">

          {collection.map((artwork) => (
            <ArtworkCard
              key={artwork.catalog}
              artwork={artwork}
              onObserve={onObserve}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Collection