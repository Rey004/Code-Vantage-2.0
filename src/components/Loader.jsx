import { useEffect } from 'react'
import './loader.css'

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector('.loader-main');

    const handleLoad = () => {
      if (loader) {
        loader.classList.add('slide-up');
        // Remove from DOM after animation
        setTimeout(() => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
          }
        }, 500);
      }
    };

    // Use shorter timeout for better UX
    const timeoutId = setTimeout(handleLoad, 1000);
    window.addEventListener('load', handleLoad);

    // Cleanup function to remove the event listener
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className='loader-main'>
      <div className="loader-container">
        <img src='/assets/loader-gif.webp' alt='Loading...' className='loader-gif' loading="eager" />
        <div className="loader"></div>
        <div className="loader-gradient"></div>
        <img src="/assets/Star.webp" alt="" className="loader-star1" loading="eager" />
        <img src="/assets/Star.webp" alt="" className="loader-star2" loading="eager" />
        <img src="/assets/Bracket Blue.webp" alt="" className="loader-bracket1" loading="eager" />
        <img src="/assets/Bracket Purple.webp" alt="" className="loader-bracket2" loading="eager" />
      </div>
    </div>
  )
}

export default Loader