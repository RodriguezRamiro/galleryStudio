/* galleryStudio/src/App.jsx */

import { useState } from 'react'
import Header from './components/Header.jsx'

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
        <h1>Craftmancer Studios</h1>
        <p>Digital Exhibition</p>
      </main>
    </>
  )
}

export default App

