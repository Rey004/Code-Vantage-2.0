import { useState } from 'react'
import Navbar from './components/Navbar'
import Portfoliosection from './section/portfolio_section/Portfoliosection'
import Herosection from './section/hero_section/Herosection'
import Aboutsection from './section/about_section/Aboutsection'
import './globals.css'

function App() {

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Aboutsection/>
      <Portfoliosection/>
    </>
  )
}

export default App
