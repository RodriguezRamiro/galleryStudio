/* galleryStudio/src/App.jsx */


import { useState } from 'react'

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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isDark, setIsDark] = useState(false)

  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0)

  const [selectedArtwork, setSelectedArtwork] = useState('')

  function openViewer(index) {
    setCurrentArtworkIndex(index)
    setIsViewerOpen(true)
}

function closeViewer() {
    setIsViewerOpen(false)
}

function nextArtwork() {
    setCurrentArtworkIndex(
        (currentArtworkIndex + 1) % ArtworkData.length
        )
    }

function previousArtwork() {
    setCurrentArtworkIndex(
        (
            currentArtworkIndex -
            1 +
            ArtworkData.length
            ) % ArtworkData.length
        )
    }

    function handleArtworkChange(artwork) {
         setSelectedArtwork(artwork.title)
        }


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
            onObserve={() => {}} />

        <Collection
            onObserve={() => {}} />

        <Atelier />

        <Practice/>

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
