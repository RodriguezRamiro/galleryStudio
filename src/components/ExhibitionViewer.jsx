/* galleryStudio/src/components/ExhibitionViewer.jsx */


import { useEffect, useRef } from 'react'

function ExhibitionViewer({
  artworks,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  onArtworkChange
}) {
  const closeButtonRef = useRef(null)
  const lastFocusedElement = useRef(null)

  const artwork = artworks[currentIndex]

  /*
   * Remember the element that opened the viewer
   * and move focus into the viewer.
   */
  useEffect(() => {
    if (!isOpen) {
      return
    }

    lastFocusedElement.current = document.activeElement

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  /*
   * Restore focus when the viewer closes.
   */
  useEffect(() => {
    if (isOpen) {
      return
    }

    if (
      lastFocusedElement.current &&
      typeof lastFocusedElement.current.focus === 'function'
    ) {
      lastFocusedElement.current.focus()
      lastFocusedElement.current = null
    }
  }, [isOpen])

  /*
   * Keyboard controls.
   */
  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrevious()
      }

      if (event.key === 'Tab') {
        const focusableElements =
          document.querySelectorAll(
            '.exhibition-viewer button:not([disabled]), .exhibition-viewer a[href]'
          )

        if (!focusableElements.length) {
          return
        }

        const firstElement = focusableElements[0]
        const lastElement =
          focusableElements[focusableElements.length - 1]

        if (
          event.shiftKey &&
          document.activeElement === firstElement
        ) {
          event.preventDefault()
          lastElement.focus()
        } else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    isOpen,
    onClose,
    onNext,
    onPrevious
  ])

  /*
   * Notify the parent whenever the selected
   * artwork changes.
   */
  useEffect(() => {
    if (!isOpen || !artwork) {
      return
    }

    onArtworkChange?.(artwork)
  }, [
    isOpen,
    artwork,
    onArtworkChange
  ])

  /*
   * Don't render the viewer while closed.
   */
  if (!isOpen || !artwork) {
    return null
  }

  return (
    <div
      className="exhibition-viewer active"
      role="dialog"
      aria-modal="true"
      aria-hidden="false"
      aria-labelledby="viewer-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >

      <button
        ref={closeButtonRef}
        className="viewer-close"
        type="button"
        aria-label="Close artwork viewer"
        onClick={onClose}
      >
        ×
      </button>

      <button
        className="viewer-prev"
        type="button"
        aria-label="Previous artwork"
        onClick={onPrevious}
      >
        ←
      </button>

      <figure className="viewer-artwork">

        <img
          src={artwork.image}
          alt={`${artwork.title} - symbolic oil painting`}
        />

        <figcaption>

          <h2
            className="viewer-title"
            id="viewer-title"
          >
            {artwork.title}
          </h2>

          <p className="viewer-medium">
            {artwork.medium} · {artwork.year}
          </p>

          <p className="viewer-description">
            {artwork.description}
          </p>

          <div className="viewer-inquiry">

            <a
              href={artwork.purchaseUrl || '#'}
              className="text-link purchase-link viewer-purchase"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase →
            </a>

            <a
              href="#inquiry"
              className="text-link inquiry-link"
              onClick={onClose}
            >
              Own This Piece
            </a>

          </div>

        </figcaption>

      </figure>

      <button
        className="viewer-next"
        type="button"
        aria-label="Next artwork"
        onClick={onNext}
      >
        →
      </button>

    </div>
  )
}

export default ExhibitionViewer
