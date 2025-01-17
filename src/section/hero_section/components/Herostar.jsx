import React, { useEffect } from 'react';
import './Herostar.css';

const Herostar = () => {
  useEffect(() => {
    const loadSplineViewer = () => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.56/build/spline-viewer.js';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadSplineViewer();
  }, []);

  function removeWatermark(splineViewer) {
    const shadowRoot = splineViewer.shadowRoot;
    if (shadowRoot) {
      const logoElement = shadowRoot.querySelector("#logo");
      if (logoElement) {
        logoElement.remove();
      }
    }
  }

  window.onload = function() {
    const splineViewers = document.querySelectorAll("spline-viewer");
    splineViewers.forEach(removeWatermark);
  };

  return (
    <div className="hero-star">
      <spline-viewer style={{position: "absolute"}} url="https://prod.spline.design/xxPn4nIw3-vfVA14/scene.splinecode"></spline-viewer>
      <img src="/assets/hero-star.webp" alt="" className="hero-image"/>
    </div>
  );
}

export default Herostar;