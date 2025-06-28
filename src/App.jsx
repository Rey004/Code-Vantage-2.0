import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Herosection from './section/hero_section/Herosection'
import Aboutsection from './section/about_section/Aboutsection'
import Servicesection from './section/services_section/Servicesection'
import Fillertextsection from './section/Filler_text/Fillertextsection'
import Portfoliosection from './section/portfolio_section/Portfoliosection'
import Socialsection from './section/social_section/Socialsection'
import Faqsection from './section/faq_section/Faqsection'
import Processsection from './section/process_section/Processsection'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { 
  optimizeGSAP, 
  optimizeAnimations, 
  preloadCriticalImages, 
  getCriticalImages 
} from './utils/performanceOptimizations'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  useEffect(() => {
    optimizeGSAP();
    optimizeAnimations();
        preloadCriticalImages(getCriticalImages());

    if (process.env.NODE_ENV === 'development') {
      console.log('Performance optimizations applied');
    }
  }, []);

  return (
    <>
      <Loader/>
      <Navbar />
      <main>
      <Herosection />
      <Aboutsection />
      <Servicesection/>
      <Fillertextsection />
      <Portfoliosection />
      <Processsection />
      <Socialsection />
      <Faqsection />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App