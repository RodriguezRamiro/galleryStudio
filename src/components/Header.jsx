/* galleryStudio/src/components/Header.jsx */


function Header({ isMenuOpen, setIsMenuOpen, isDark, setIsDark }) {
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function toggleTheme() {
    setIsDark(!isDark)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <nav
        className="navigation container"
        aria-label="Primary Navigation"
      >
        <a
          href="#"
          className="logo"
          onClick={closeMenu}
        >
          Craftmancer Studios
        </a>

        <ul
          className={`nav-links ${isMenuOpen ? 'open' : ''}`}
          id="primary-navigation"
        >
          <li>
            <a href="#collection" onClick={closeMenu}>
              Collection
            </a>
          </li>

          <li>
            <a href="#atelier" onClick={closeMenu}>
              Atelier
            </a>
          </li>

          <li>
            <a href="#journal" onClick={closeMenu}>
              Journal
            </a>
          </li>

          <li>
            <a href="#inquiry" onClick={closeMenu}>
              Inquiry
            </a>
          </li>
        </ul>

        <div className="navigation-actions">

          <button
            className={`menu-toggle ${isMenuOpen ? 'active open' : ''}`}
            type="button"
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={toggleMenu}
          >
            <span aria-hidden="true">☰</span>
          </button>

          <button
            className="theme-toggle"
            type="button"
            aria-label={
              isDark
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            onClick={toggleTheme}
          >
            {isDark ? '☀' : '🌙'}
          </button>

        </div>
      </nav>
    </header>
  )
}

export default Header