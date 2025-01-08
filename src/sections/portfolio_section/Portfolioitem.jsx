import React, { useEffect, useRef } from 'react';
import './portfolioitem.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolioitem = ({ name, link, image }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const element = itemRef.current;

    // Only apply animations for desktop (width >= 1024px)
    if (window.innerWidth >= 1024) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'top center',
          toggleActions: 'play none none reverse',
        },
        y: 300,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    } else {
      // Reset any GSAP styles for mobile
      gsap.set(element, {
        clearProps: "all"
      });
    }

    return () => {
      // Cleanup
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <a className='portfolio-item' href={link} ref={itemRef}>
      <div className="portfolio-identity" style={{ backgroundImage: `url(${image})` }}>
        {name}
      </div>
    </a>
  );
};

export default Portfolioitem;
