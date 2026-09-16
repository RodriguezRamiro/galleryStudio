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

        <Atelier />

        <Practice/>

        <Journal />

    </main>
    </>
  )
}

export default App
