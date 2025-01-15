import React, { useEffect } from 'react';
import './Herostar.css';

const Herostar = () => {
  useEffect(() => {
    // Function to load the Spline viewer script
    const loadSplineViewer = () => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.56/build/spline-viewer.js';
      document.body.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    };

    loadSplineViewer();

    // Function to remove unnecessary iframes added by Spline
    const removeUnnecessaryIframes = () => {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        if (iframe.src.includes('spline.design')) {
          iframe.remove();
        }
      });
    };

    removeUnnecessaryIframes();
  }, []);



  // Function to remove watermark from a spline viewer
  function removeWatermark(splineViewer) {
    const shadowRoot = splineViewer.shadowRoot;
    if (shadowRoot) {
      const logoElement = shadowRoot.querySelector("#logo");
      if (logoElement) {
        logoElement.remove();
      }
    }
  }

  // Create a MutationObserver to watch for changes
  const observer = new MutationObserver((mutations) => {
    const splineViewers = document.querySelectorAll("spline-viewer");
    splineViewers.forEach(removeWatermark);
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Also run on initial load
  window.onload = function() {
    const splineViewers = document.querySelectorAll("spline-viewer");
    splineViewers.forEach(removeWatermark);
  };

  

  return (
    <div className="hero-star">
      <spline-viewer style={{position: "absolute"}} url="https://prod.spline.design/xxPn4nIw3-vfVA14/scene.splinecode"></spline-viewer>
      <img src="/assets/hero-star.gif" alt="" className="hero-image"/>
    </div>
  );
}

export default Herostar;