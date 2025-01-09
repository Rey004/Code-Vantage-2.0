import React, { useEffect } from 'react'
import Fillersidedecorleft from './components/Fillersidedecorleft';
import Fillersidedecorright from './components/Fillersidedecorright';
import Fillertext from './components/Fillertext';
import './Fillertext.css';
import { debounce, throttle } from 'lodash';

const Fillertextsection = () => {
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
    <div className="filler-text-div" style={{ overflowX: "hidden", width: "100%" }}>
      <div className="filler-side-decor-left">
        <Fillersidedecorleft />
      </div>
      <Fillertext />
      <div className="filler-side-decor-right">
        <Fillersidedecorright />
      </div>
    </div>
  )
}

export default Fillertextsection
