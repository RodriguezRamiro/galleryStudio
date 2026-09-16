/* galleryStudio/src/App.jsx */


import { useCallback, useEffect, useState } from 'react'

import Header from './components/Header.jsx'
import Arrival from './components/Arrival.jsx'
import Exhibition from './components/Exhibition.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import Collection from './components/Collection.jsx'
import Atelier from './components/Atelier.jsx'
import Practice from './components/Practice.jsx'
import Journal from './components/Journal.jsx'
import Inquiry from './components/Inquiry.jsx'
import Footer from './components/Footer.jsx'
import ExhibitionViewer from './components/ExhibitionViewer.jsx'

import ArtworkData from './data/artworksData.js'
import useSmoothScroll from './hooks/useSmoothScroll.js'
import useScrollReveal from './hooks/useScrollReveal.js'

function App() {

    useSmoothScroll()
    useScrollReveal()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isDark, setIsDark] = useState(() => {
    const savedTheme =
      localStorage.getItem('atelier-theme')

    return savedTheme === 'dark'
  })

  const [isViewerOpen, setIsViewerOpen] =
    useState(false)

  const [currentArtworkIndex, setCurrentArtworkIndex] =
    useState(0)

  const [selectedArtwork, setSelectedArtwork] =
    useState('')


  /*
   * Theme
   */

  useEffect(() => {

    document.documentElement.dataset.theme =
      isDark ? 'dark' : 'light'

    localStorage.setItem(
      'atelier-theme',
      isDark ? 'dark' : 'light'
    )

  }, [isDark])


  /*
   * Viewer
   */

  const openViewer = useCallback((index) => {
    setCurrentArtworkIndex(index)
    setIsViewerOpen(true)
  }, [])


  const closeViewer = useCallback(() => {
    setIsViewerOpen(false)
  }, [])


  const nextArtwork = useCallback(() => {

    setCurrentArtworkIndex(
      currentIndex =>
        (currentIndex + 1) %
        ArtworkData.length
    )

  }, [])


  const previousArtwork = useCallback(() => {

    setCurrentArtworkIndex(
      currentIndex =>
        (
          currentIndex -
          1 +
          ArtworkData.length
        ) %
        ArtworkData.length
    )

  }, [])


  const handleArtworkChange =
    useCallback((artwork) => {

      setSelectedArtwork(
        artwork.title
      )

    }, [])


  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main>

        <Arrival />

        <Exhibition />

        <FeaturedWork
          artwork={
            ArtworkData[
              ArtworkData.length - 1
            ]
          }
          onObserve={() =>
            openViewer(
              ArtworkData.length - 1
            )
          }
        />

        <Collection
          artworks={ArtworkData}
          onObserve={openViewer}
        />

        <Atelier />

        <Practice />

        <Journal />

        <Inquiry
          selectedArtwork={selectedArtwork}
        />

      </main>

      <Footer />

      <ExhibitionViewer
        artworks={ArtworkData}
        currentIndex={currentArtworkIndex}
        isOpen={isViewerOpen}
        onClose={closeViewer}
        onNext={nextArtwork}
        onPrevious={previousArtwork}
        onArtworkChange={handleArtworkChange}
      />

    </>
  )
}

export default App