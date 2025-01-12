import React, { useEffect } from 'react'
import Herotext from './components/Herotext'
import Herostar from './components/Herostar'
import Herosidedecorleft from './components/Herosidedecorleft'
import Herosidedecorright from './components/Herosidedecorright'
import Linedivider from './components/Linedivider'
import './Herosection.css'
import { debounce, throttle } from 'lodash'

const Herosection = () => {
  useEffect(() => {
    const handleResize = debounce(() => {
      console.log('Resize event debounced');
      // Add your resize logic here
    }, 200);

    const handleScroll = throttle(() => {
      console.log('Scroll event throttled');
      // Add your scroll logic here
    }, 200);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id="hero" style={{ marginTop: "10vh", overflowX: "hidden", width: "100%" }}>
        <Herotext textType="solid"/>
        <Herostar />
        <Herotext textType="stroke"/>
        <Herosidedecorright />
        <Herosidedecorleft />
        {/* Example of embedding a Spline model */}
        <iframe src="https://my.spline.design/your-model-url" frameBorder="0" width="100%" height="100%" style={{border: 'none'}}></iframe>
      </section>
      <Linedivider />
    </>
  )
}

export default Herosection
