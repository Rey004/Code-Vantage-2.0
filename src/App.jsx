import { useState } from 'react'
import Navbar from './components/Navbar'
import Herosection from './section/hero_section/Herosection'
import Aboutsection from './section/about_section/Aboutsection'

function App() {

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Aboutsection/>
    </>
  )
}

export default App
