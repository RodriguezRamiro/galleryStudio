/* galleryStudio/src/components/ExhibitionViewer.jsx */

import { useEffect, useRef, useState } from 'react'

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

  const [showInquiry, setShowInquiry] = useState(false)

  const artwork = artworks[currentIndex]

  /*
   * Viewer lifecycle
   *
   * Runs whenever the viewer opens or closes.
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
   * 30-second inquiry timer.
   *
   * The timer resets whenever:
   *
   * - the viewer opens
   * - the selected artwork changes
   */
  useEffect(() => {
    if (!isOpen || !artwork) {
      setShowInquiry(false)
      return
    }

    setShowInquiry(false)

    const timer = window.setTimeout(() => {
      setShowInquiry(true)
    }, 30000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isOpen, currentIndex, artwork])

  /*
   * Tell App which artwork is currently being viewed.
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

      /*
       * Focus trap.
       */
      if (event.key === 'Tab') {

        const focusableElements =
          document.querySelectorAll(
            '.exhibition-viewer button:not([disabled]), .exhibition-viewer a[href]'
          )

        if (!focusableElements.length) {
          return
        }

        const firstElement =
          focusableElements[0]

        const lastElement =
          focusableElements[
            focusableElements.length - 1
          ]

        if (
          event.shiftKey &&
          document.activeElement === firstElement
        ) {
          event.preventDefault()
          lastElement.focus()
        }

        else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault()
          firstElement.focus()
        }
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
    isOpen,
    onClose,
    onNext,
    onPrevious
  ])

  /*
   * Don't render anything when closed.
   */
  if (!isOpen || !artwork) {
    return null
  }

  function handleInquiryClick() {
    onClose()

    requestAnimationFrame(() => {
      document
        .querySelector('#inquiry')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
    })
  }

  return (
    <div
      className="exhibition-viewer active"
      role="dialog"
      aria-modal="true"
      aria-hidden="false"
      aria-labelledby="viewer-title"
      onClick={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
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

          <div
            className={`viewer-inquiry ${
              showInquiry ? 'visible' : ''
            }`}
          >

            <a
              href={
                artwork.purchaseUrl || '#'
              }
              className="text-link purchase-link viewer-purchase"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase →
            </a>

            <button
              type="button"
              className="text-link inquiry-link"
              onClick={handleInquiryClick}
            >
              Own This Piece
            </button>

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