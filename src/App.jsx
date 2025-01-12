import React, { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar'
import Herosection from './section/hero_section/Herosection'
import Aboutsection from './section/about_section/Aboutsection'
import Servicesection from './section/services_section/Servicesection'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './globals.css'

const Fillertextsection = lazy(() => import('./section/Filler_text/Fillertextsection'))
const Portfoliosection = lazy(() => import('./section/portfolio_section/Portfoliosection'))
const Socialsection = lazy(() => import('./section/social_section/Socialsection'))
const Faqsection = lazy(() => import('./section/faq_section/Faqsection'))

function App() {
  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';
  }, []);

  return (
    <>
      <Loader/>
      <Navbar />
      <main>
      <Herosection />
      <Aboutsection />
      <Servicesection/>
      <Suspense fallback={<div></div>}>
        <Fillertextsection />
        <Portfoliosection />
        <Socialsection />
        <Faqsection />
      </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App