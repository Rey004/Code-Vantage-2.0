import React from 'react'
import Navbar from './components/Navbar'
import Portfoliosection from './section/portfolio_section/Portfoliosection'
import Herosection from './section/hero_section/Herosection'
import Aboutsection from './section/about_section/Aboutsection'
import Fillertextsection from './section/Filler_text/Fillertextsection'
import Faqsection from './section/faq_section/Faqsection'
import Servicesection from './section/services_section/Servicesection'
import './globals.css'

function App() {

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Aboutsection/>
      <Portfoliosection/>
      <Fillertextsection/>
      <Servicesection/>
      <Faqsection/>
    </>
  )
}

export default App
