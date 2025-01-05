import React, { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import './Herostar.css'

const Herostar = () => {
  const [firstLoaded, setFirstLoaded] = useState(false)
  const [secondLoaded, setSecondLoaded] = useState(false)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function removeWatermark() {
      const watermarks = document.querySelectorAll('a[href*="spline.design"]');
      watermarks.forEach(watermark => watermark.remove());
    }

    setTimeout(removeWatermark, 1000);

    const observer = new MutationObserver(removeWatermark);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [])

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth
      if (width > 1200) setScale(1)
      else if (width > 768) setScale(0.7)
      else if (width > 480) setScale(0.5)
      else if (width > 320) setScale(0.4)
      else setScale(0.3)
    }

    // Set initial scale
    updateScale()

    // Update scale on resize
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div className="hero-star">
      <div className={`spline-container ${firstLoaded ? 'loaded' : 'hidden'}`}>
        <Spline 
          scene="https://prod.spline.design/9BfOwhdn4yScJCLg/scene.splinecode"
          onLoad={() => setFirstLoaded(true)}
          style={{
            position: "absolute",
            width: '100%',
            height: '100%',
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        />
      </div>
      <div className={`spline-container ${secondLoaded ? 'loaded' : 'hidden'}`}>
        <Spline 
          scene="https://prod.spline.design/EIVk0Xc3S3qLh3En/scene.splinecode"
          onLoad={() => setSecondLoaded(true)}
          style={{
            position: "absolute",
            width: '100%',
            height: '100%',
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        />
      </div>
    </div>
  )
}

export default Herostar
