/* galleryStudio/src/components/Collection. */


import artworks from '../data/artworksData.js'
import ArtworkCard from './ArtworkCard.jsx'


function Collection({ artworks, onObserve }) {
  if (!artworks?.length) {
    return null
  }

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

          {artworks
            .slice(0, -1)
            .reverse()
            .map((artwork, index) => {

              const artworkIndex =
                artworks.length - 2 - index

              return (
                <article
                  key={artwork.catalog}
                  className="artwork-card artwork-entry"
                  data-catalog={artwork.catalog}
                >

                  <figure>

                    <span className="catalog-number">
                      {artwork.catalog}
                    </span>

                    <img
                      src={artwork.image}
                      alt={`${artwork.title} - symbolic oil painting`}
                      loading="lazy"
                      onClick={() =>
                        onObserve(artworkIndex)
                      }
                    />

                  </figure>

                  <div className="artwork-caption">

                    <h3>
                      {artwork.title}
                    </h3>

                    <p className="medium">
                      {artwork.medium}
                    </p>

                    <p className="year">
                      {artwork.year}
                    </p>

                    <p className="dimensions">
                      {artwork.dimensions}
                    </p>

                    <div className="artwork-actions">

                      <button
                        type="button"
                        className="text-link observe-work"
                        onClick={() =>
                          onObserve(artworkIndex)
                        }
                      >
                        Observe →
                      </button>

                      <a
                        href={artwork.purchaseUrl}
                        className="text-link purchase-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Purchase →
                      </a>

                    </div>

                    <div className="viewer-inquiry">

                      <a
                        href="#inquiry"
                        className="text-link inquiry-link"
                        onClick={() =>
                          onObserve(artworkIndex)
                        }
                      >
                        Own This Piece
                      </a>

                    </div>

                  </div>

                </article>
              )
            })}

        </div>

      </div>
    </section>
  )
}

export default Collection