import React, { useEffect } from 'react'
import Fillersidedecorleft from './components/Fillersidedecorleft';
import Fillersidedecorright from './components/Fillersidedecorright';
import Fillertext from './components/Fillertext';
import './Fillertext.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Fillertextsection = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      // Initial setup
      gsap.set('.filler-side-decor path:not([mask])', { 
        strokeDasharray: (i, el) => el.getTotalLength(),
        strokeDashoffset: (i, el) => -el.getTotalLength(),
        opacity: 0
      });

      gsap.set('.filler-side-decor circle', { 
        scale: 0,
        opacity: 0 
      });

      const svgTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.filler-text-div',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });

      svgTl
        .to('.filler-side-decor path:not([mask])', {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          stagger: {
            each: 0.2,
            from: "center"
          }
        })
        .to('.filler-side-decor circle', {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        })
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="filler-text-div">
      <div className="fillerglow1"></div>
      <div className="fillerglow2"></div>
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
