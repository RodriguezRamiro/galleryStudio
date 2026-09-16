/* galleryStudio/src/components/FeaturedWork.jsx */


import artworks from '../data/artworksData.js'

function FeaturedWork({ onObserve }) {
  const featured = artworks[artworks.length - 1]

  if (!featured) {
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
          data-catalog={featured.catalog}
        >

          <figure className="artwork-image">

            <img
              src={featured.image}
              alt={`${featured.title} - symbolic oil painting`}
              loading="lazy"
            />

          </figure>

          <div className="artwork-details">

            <p className="catalog-number">
              {featured.catalog}
            </p>

            <h2 id="featured-title">
              {featured.title}
            </h2>

            <p className="artwork-meta">

              <span className="medium">
                {featured.medium}
              </span>

              <span className="year">
                {featured.year}
              </span>

            </p>

            <p className="dimensions">
              {featured.dimensions}
            </p>

            <aside className="artist-statement">

              <h3>
                Artist Statement
              </h3>

              <p>
                {featured.description}
              </p>

            </aside>

            <button
              type="button"
              className="text-link observe-work"
              onClick={() => onObserve(featured)}
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