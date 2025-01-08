import { useState } from 'react'
import Navbar from './components/Navbar'
import Portfoliosection from './sections/portfolio_section/Portfoliosection'
import Herosection from './section/hero_section/Herosection'

function App() {

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Portfoliosection/>
    </>
  )
}

export default App
