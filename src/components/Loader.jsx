import React, { useEffect } from 'react'
import './loader.css'

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector('.loader-main');

    const handleLoad = () => {
      if (loader) {
        loader.classList.add('slide-up');
      }
    };

    window.addEventListener('load', handleLoad);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className='loader-main'>
      <div className="loader-container">
        <img src='/assets/loader-gif.webp' alt='Loading...' className='loader-gif' />
        <div className="loader"></div>
        <div className="loader-gradient"></div>
        <img src="/assets/Star.webp" alt="" className="loader-star1" />
        <img src="/assets/Star.webp" alt="" className="loader-star2" />
        <img src="/assets/Bracket Blue.webp" alt="" className="loader-bracket1" />
        <img src="/assets/Bracket Purple.webp" alt="" className="loader-bracket2" />
      </div>
    </div>
  )
}

export default Loader