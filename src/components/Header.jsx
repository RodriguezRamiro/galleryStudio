/* galleryStudio/src/components/Header.jsx */


import { useEffect } from 'react'

function Header({
  isMenuOpen,
  setIsMenuOpen,
  isDark,
  setIsDark
}) {

  /*
   * Header scroll behavior
   */
  useEffect(() => {

    function handleScroll() {

      const header =
        document.querySelector('.site-header')

      if (!header) {
        return
      }

      header.classList.toggle(
        'scrolled',
        window.scrollY > 60
      )
    }

    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }

  }, [])


  /*
   * Close mobile navigation when
   * pressing Escape.
   */
  useEffect(() => {

    function handleKeyDown(event) {

      if (
        event.key === 'Escape' &&
        isMenuOpen
      ) {
        setIsMenuOpen(false)
      }

    }

    document.addEventListener(
      'keydown',
      handleKeyDown
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }

  }, [
    isMenuOpen,
    setIsMenuOpen
  ])


  function toggleNavigation() {
    setIsMenuOpen(
      current => !current
    )
  }


  function closeNavigation() {
    setIsMenuOpen(false)
  }


  function toggleTheme() {
    setIsDark(
      current => !current
    )
  }


  return (
    <header className="site-header">

      <nav
        className="navigation container"
        aria-label="Primary Navigation"
      >

        <a
          href="#"
          className="logo"
          onClick={closeNavigation}
        >
          Craftmancer Studios
        </a>


        <ul
          className={`nav-links ${
            isMenuOpen ? 'open' : ''
          }`}
          id="primary-navigation"
        >

          <li>
            <a
              href="#collection"
              onClick={closeNavigation}
            >
              Collection
            </a>
          </li>

          <li>
            <a
              href="#atelier"
              onClick={closeNavigation}
            >
              Atelier
            </a>
          </li>

          <li>
            <a
              href="#journal"
              onClick={closeNavigation}
            >
              Journal
            </a>
          </li>

          <li>
            <a
              href="#inquiry"
              onClick={closeNavigation}
            >
              Inquiry
            </a>
          </li>

        </ul>


        <div className="navigation-actions">

          <button
            className={`menu-toggle ${
              isMenuOpen ? 'active open' : ''
            }`}
            type="button"
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={toggleNavigation}
          >
            <span aria-hidden="true">
              ☰
            </span>
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