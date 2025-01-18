import React from 'react'
import Herotext from './components/Herotext'
import Herostar from './components/Herostar'
import Herosidedecorleft from './components/Herosidedecorleft'
import Herosidedecorright from './components/Herosidedecorright'
import Linedivider from './components/Linedivider'
import './Herosection.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Herosection = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      // Initial setup
      gsap.set('.hero-side-decor path:not([mask])', { 
        strokeDasharray: (i, el) => el.getTotalLength(),
        strokeDashoffset: (i, el) => -el.getTotalLength(),
        opacity: 0
      });

      gsap.set('.hero-side-decor circle', { 
        scale: 0,
        opacity: 0 
      });
      
      gsap.set('.hero-side-decor path[mask]', { 
        opacity: 0,
        scale: 0.8
      });

      // Enhanced animation sequence
      gsap.timeline({
        defaults: { ease: "power3.out" }
      })
        .to('.hero-side-decor path:not([mask])', {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.2,
          stagger: {
            each: 0.15,
            from: "center"
          }
        })
        .to('.hero-side-decor circle', {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        }, "-=0.8")
        .to('.hero-side-decor path[mask]', {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
          stagger: {
            amount: 0.3,
            from: "start"
          }
        }, "<0.2");
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <section id="hero" style={{ paddingTop: "10vh", width: "100%" }}>
        <div className="heroglow1"></div>
        <div className="heroglow2"></div>
        <div className="heroglow3"></div>
        <Herotext textType="solid"/>
        <Herostar />
        <Herotext textType="stroke"/>
        <Herosidedecorright />
        <Herosidedecorleft />
      </section>
      <Linedivider />
    </>
  )
}

export default Herosection
