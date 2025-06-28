export const optimizeGSAP = () => {
  if (typeof window !== 'undefined' && window.gsap) {
    window.gsap.config({
      force3D: true,
      nullTargetWarn: false,
      trialWarn: false
    });
  }
};

export const isLowEndDevice = () => {
  const isSlowConnection = navigator.connection && 
    (navigator.connection.effectiveType === 'slow-2g' || 
     navigator.connection.effectiveType === '2g');
  
  const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
  
  const isOldDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return isSlowConnection || isLowMemory || isOldDevice;
};

export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         window.innerWidth <= 768;
};

export const preloadCriticalImages = (imagePaths) => {
  if (typeof window !== 'undefined') {
    imagePaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      document.head.appendChild(link);
    });
  }
};

export const optimizeAnimations = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  return !prefersReducedMotion;
};

export const getCriticalImages = () => {
  return [
    '/assets/Icon Logo.webp',
    '/assets/hero-star.webp',
    '/assets/Text Logo.webp'
  ];
};
