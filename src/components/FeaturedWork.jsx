/* galleryStudio/src/components/FeaturedWork.jsx */


import artworks from '../data/artworksData.js'


function FeaturedWork({ artwork, onObserve }) {
  if (!artwork) {
    return null
  }

  return (
    <section
      className="featured-work"
      aria-labelledby="featured-title"
    >
      <div className="container">

        <article
          className="featured-piece artwork-entry"
          data-catalog={artwork.catalog}
        >

          <figure className="artwork-image">

            <img
              src={artwork.image}
              alt={`${artwork.title} - symbolic oil painting`}
              loading="lazy"
            />

          </figure>

          <div className="artwork-details">

            <p className="catalog-number">
              {artwork.catalog}
            </p>

            <h2 id="featured-title">
              {artwork.title}
            </h2>

            <p className="artwork-meta">

              <span className="medium">
                {artwork.medium}
              </span>

              <span className="year">
                {artwork.year}
              </span>

            </p>

            <p className="dimensions">
              {artwork.dimensions}
            </p>

            <aside className="artist-statement">

              <h3>
                Artist Statement
              </h3>

              <p>
                {artwork.description}
              </p>

            </aside>

            <button
              type="button"
              className="text-link observe-work"
              onClick={onObserve}
            >
              Observe →
            </button>

          </div>

        </article>

      </div>
    </section>
  )
}

export default FeaturedWork