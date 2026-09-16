/* galleryStudio/src/components/Atelier.jsx */


function Atelier() {
  return (
    <section
      id="atelier"
      className="atelier"
      aria-labelledby="atelier-title"
    >
      <div className="container split-layout">

        <figure>
          <img
            src="/assets/images/AterilerDemo.jpeg"
            alt="Artist studio with natural light"
            loading="lazy"
          />
        </figure>

        <div>
          <p className="eyebrow">
            The Atelier
          </p>

          <h2 id="atelier-title">
            Where light meets chiaroscuro symbolism.
          </h2>

          <p>
            Craftmancer Studios explores the relationship
            between human experience, classical technique,
            and visual storytelling.

            Each composition begins with observation,
            patience, and intention.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Atelier