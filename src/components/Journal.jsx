/* galleryStudio/src/components/Journal.jsx */


function Journal() {
  return (
    <section
      id="journal"
      className="journal"
      aria-labelledby="journal-title"
    >
      <div className="container">

        <header className="section-header">

          <p className="eyebrow">
            Journal
          </p>

          <h2 id="journal-title">
            Studio Notes
          </h2>

        </header>

        <div className="journal-grid">

          <article>
            <h3>
              On Light
            </h3>

            <p>
              Exploring contrast, atmosphere,
              and visual perception.
            </p>
          </article>

          <article>
            <h3>
              On Silence
            </h3>

            <p>
              The relationship between absence
              and meaning.
            </p>
          </article>

          <article>
            <h3>
              On Composition
            </h3>

            <p>
              The structure behind symbolic imagery.
            </p>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Journal
