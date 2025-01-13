import React, { useEffect, useRef } from 'react';
import './portfolioitem.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolioitem = ({ name, link, image }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const element = itemRef.current;

    const applyAnimation = () => {
      if (window.innerWidth >= 1024) {
        gsap.fromTo(element, 
          {
            y: 50,
            opacity: 0
          },
          {
            scrollTrigger: {
              trigger: '.portfolio-section',
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.5 // Slight delay to match with title animation
          }
        );
      } else {
        // Reset any GSAP styles for mobile
        gsap.set(element, {
          clearProps: "all"
        });
      }
    };

    applyAnimation();

    const handleResize = () => {
      ScrollTrigger.refresh();
      applyAnimation();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
