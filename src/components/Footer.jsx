/* galleryStudio/src/components/Footer.jsx */


function Footer() {
  return (
    <footer className="site-footer">

      <div className="container footer-inner">

        <div className="footer-main">

          <h2 className="footer-logo">
            Craftmancer Studios
          </h2>

          <p className="footer-copy">
            Selected works available by private inquiry
          </p>

        </div>

        <div className="footer-contact">

          <a
            href="mailto:craftmancer@gmail.com"
            className="footer-email"
          >
            <i className="fa-regular fa-envelope"></i>
            craftmancer@gmail.com
          </a>

          <a
            href="https://instagram.com/craftmancerstudios"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
            Instagram
          </a>

        </div>

        <div className="footer-signature">

          <p className="engineering">
            IVI Creative Engineering
          </p>

          <p className="edition">
            Curated • 2026
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer