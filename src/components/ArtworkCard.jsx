/* galleryStudio/src/components/ArtworkCard.jsx */

function ArtworkCard({ artwork, onObserve }) {
  return (
    <article
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
          onClick={() => onObserve(artwork)}
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
            onClick={() => onObserve(artwork)}
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
          >
            Own This Piece
          </a>
        </div>

      </div>
    </article>
  )
}

export default ArtworkCard