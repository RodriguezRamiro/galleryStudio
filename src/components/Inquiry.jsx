/* galleryStudio/src/components/Inquiry.jsx */


function Inquiry({ selectedArtwork = '' }) {
  return (
    <section
      id="inquiry"
      className="inquiry"
      aria-labelledby="inquiry-title"
    >
      <div className="container">

        <header className="section-header">

          <p className="eyebrow">
            Continue the Experience
          </p>

          <h2 id="inquiry-title">
            If a piece has stayed with you,
            or you'd like to discuss a commission,
            I'd be delighted to hear from you.
          </h2>

        </header>

        <form
          className="contact-form"
          action="https://formspree.io/f/xdabpana"
          method="POST"
        >

          <input
            type="hidden"
            name="_subject"
            value="New Inquiry — Craftmancer Studios"
          />

          <input
            type="hidden"
            name="_language"
            value="en"
          />

          <div className="form-row">

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
              />

            </div>

          </div>

          <div className="form-row">

            <div className="form-group">

              <label htmlFor="inquiry-type">
                Inquiry Type
              </label>

              <select
                id="inquiry-type"
                name="Inquiry Type"
                required
              >
                <option value="">
                  Select an inquiry
                </option>

                <option value="Commission Request">
                  Commission Request
                </option>

                <option value="Gallery Exhibition">
                  Gallery Exhibition
                </option>

                <option value="Collaboration">
                  Collaboration
                </option>

                <option value="General Inquiry">
                  General Inquiry
                </option>
              </select>

            </div>

            <div className="form-group">

              <label htmlFor="organization">
                Gallery / Organization
              </label>

              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Optional"
              />

            </div>

          </div>

          <div className="form-group">

            <label htmlFor="artwork">
              Artwork of Interest
            </label>

            <input
              type="text"
              id="artwork"
              name="artwork"
              placeholder="Example"
              value={selectedArtwork}
              readOnly
            />

          </div>

          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="7"
              placeholder="If a piece speaks to you, or if you'd like to discuss a commission, I'd be glad to hear from you."
              required
            />

          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            Send Inquiry
          </button>

        </form>

      </div>
    </section>
  )
}

export default Inquiry
