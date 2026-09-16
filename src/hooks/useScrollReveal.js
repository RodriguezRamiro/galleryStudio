/* galleryStudio/src/hooks/useScrollReveal.js */


import { useEffect } from 'react'

function useScrollReveal() {

  useEffect(() => {

    const elements =
      document.querySelectorAll(
        'section, .featured-piece, .artwork-card, .journal article'
      )

    if (!elements.length) {
      return
    }


    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches


    if (reducedMotion) {

      elements.forEach(element => {
        element.classList.add('visible')
      })

      return
    }


    if (
      typeof IntersectionObserver ===
      'undefined'
    ) {

      elements.forEach(element => {
        element.classList.add('visible')
      })

      return
    }


    elements.forEach(element => {
      element.classList.add('reveal')
    })


    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) {
              return
            }

            entry.target.classList.add(
              'visible'
            )

            observer.unobserve(
              entry.target
            )

          })

        },
        {
          threshold: 0.15,
          rootMargin:
            '0px 0px -80px 0px'
        }
      )


    elements.forEach(element => {
      observer.observe(element)
    })


    return () => {
      observer.disconnect()
    }

  }, [])
}

export default useScrollReveal