/* galleryStudio/src/App.jsx */


import { useState } from 'react'
import Header from './components/Header.jsx'
import Arrival from './components/Arrival.jsx'
import Exhibition from './components/Exhibition.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import Collection from './components/Collection.jsx'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

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

    </main>
    </>
  )
}

export default App
