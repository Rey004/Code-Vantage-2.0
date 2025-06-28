import { useEffect, useState, useRef } from 'react';
import './Herostar.css';
import { isLowEndDevice, isMobileDevice } from '../../../utils/performanceOptimizations';

const Herostar = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [showSpline, setShowSpline] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const splineViewerRef = useRef(null);
  const observerRef = useRef(null);

  const shouldUseSpline = !isMobileDevice() && !isLowEndDevice();

  useEffect(() => {
    if (!shouldUseSpline) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          setIsInView(isVisible);
          
          if (isVisible && !shouldLoadSpline) {
            setShouldLoadSpline(true);
          }

          if (isSplineLoaded) {
            setShowSpline(isVisible);
          }
        });
      },
      { 
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    const heroStar = document.querySelector('.hero-star');
    if (heroStar) {
      observerRef.current.observe(heroStar);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [shouldLoadSpline, shouldUseSpline, isSplineLoaded]);

  useEffect(() => {
    if (!shouldLoadSpline || !shouldUseSpline) return;

    const loadSplineViewer = async () => {
      if (window.SPLINE_LOADER_LOADED) {
        setIsSplineLoaded(true);
        return;
      }

      try {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.56/build/spline-viewer.js';
        script.onload = () => {
          window.SPLINE_LOADER_LOADED = true;
          setIsSplineLoaded(true);
        };
        script.onerror = () => {
          console.warn('Failed to load Spline viewer, using fallback image');
          setIsSplineLoaded(false);
        };
        document.head.appendChild(script);
      } catch (error) {
        console.warn('Error loading Spline:', error);
        setIsSplineLoaded(false);
      }
    };

    loadSplineViewer();
  }, [shouldLoadSpline, shouldUseSpline]);

  useEffect(() => {
    if (!isSplineLoaded || !splineViewerRef.current) return;

    const splineViewer = splineViewerRef.current;

    const handleSplineLoad = () => {
      if (isInView) {
        setShowSpline(true);
      }
      removeWatermark(splineViewer);
    };

    const removeWatermark = (splineViewer) => {
      try {
        const shadowRoot = splineViewer.shadowRoot;
        if (shadowRoot) {
          const logoElement = shadowRoot.querySelector("#logo");
          if (logoElement) {
            logoElement.remove();
          }
        }
      } catch (error) {
        console.warn('Could not remove watermark:', error);
      }
    };

    splineViewer.addEventListener('load', handleSplineLoad);

    const timeout = setTimeout(() => {
      if (isInView) {
        setShowSpline(true);
      }
      removeWatermark(splineViewer);
    }, 2000);

    return () => {
      splineViewer.removeEventListener('load', handleSplineLoad);
      clearTimeout(timeout);
    };
  }, [isSplineLoaded, isInView]);

  return (
    <div className="hero-star">
      {shouldUseSpline && shouldLoadSpline && isSplineLoaded && (
        <spline-viewer 
          ref={splineViewerRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: showSpline && isInView ? 1 : 0,
            visibility: showSpline && isInView ? 'visible' : 'hidden',
            transition: "opacity 0.3s ease, visibility 0.3s ease"
          }} 
          url="https://prod.spline.design/xxPn4nIw3-vfVA14/scene.splinecode"
          loading="lazy"
        />
      )}
      {(!shouldUseSpline || !isInView || !showSpline) && (
        <img 
          src="/assets/hero-star.webp" 
          alt="Hero star" 
          className="hero-image"
          loading="lazy"
          decoding="async"
          style={{
            opacity: (!shouldUseSpline || !showSpline || !isInView) ? 1 : 0,
            transition: "opacity 0.3s ease"
          }}
        />
      )}
    </div>
  );
}

export default Herostar;