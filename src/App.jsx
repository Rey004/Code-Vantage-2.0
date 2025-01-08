import { useState } from 'react'
import Navbar from './components/Navbar'
import Portfoliosection from './section/portfolio_section/Portfoliosection'
import Herosection from './section/hero_section/Herosection'
import Aboutsection from './section/about_section/Aboutsection'
import Faqsection from './section/faq_section/Faqsection'
import Socialsection from './section/social_section/Socialsection'
import './globals.css'

function App() {

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Aboutsection/>
      <Portfoliosection/>
      <Socialsection/>
      <Faqsection/>
    </>
  )
}

export default App
