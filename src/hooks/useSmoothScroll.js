/* galleryStudio/src/hooks/useSmoothScroll.js */


import { useEffect } from 'react'

function useSmoothScroll() {

  useEffect(() => {

    function handleClick(event) {

      const anchor =
        event.target.closest(
          'a[href^="#"]'
        )

      if (!anchor) {
        return
      }

      const href =
        anchor.getAttribute('href')

      if (
        !href ||
        href === '#'
      ) {
        return
      }

      const target =
        document.querySelector(href)

      if (!target) {
        return
      }

      event.preventDefault()

      target.scrollIntoView({
        behavior:
          window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches
            ? 'auto'
            : 'smooth',

        block: 'start'
      })

    }

    document.addEventListener(
      'click',
      handleClick
    )

    return () => {
      document.removeEventListener(
        'click',
        handleClick
      )
    }

  }, [])
}

export default useSmoothScroll