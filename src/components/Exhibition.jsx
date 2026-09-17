/* galleryStudio/src/components/Exhibition.jsx */


function Exhibition() {
  return (
    <section
      className="exhibition"
      aria-labelledby="exhibition-title"
    >
      <div className="container">

        <header className="section-header">

          <p className="eyebrow">
            Current Exhibition
          </p>

          <h2 id="exhibition-title">
            Rubedo
          </h2>

          <p>
            An exploration of memory, erosion,
            permanence, and the human relationship
            with passing moments.
          </p>

        </header>

        <dl className="exhibition-details">

          <div>
            <dt>
              Collection
            </dt>

            <dd>
              Chiaroscuro | Light | Meaning
            </dd>
          </div>

          <div>
            <dt>
              Medium
            </dt>

            <dd>
              Oil on Canvas
            </dd>
          </div>

          <div>
            <dt>
              Year
            </dt>

            <dd>
              2026
            </dd>
          </div>

        </dl>

      </div>
    </section>
  )
}

export default Exhibition