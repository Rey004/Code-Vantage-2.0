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
    
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      // Simple path animation
      const pathElements = document.querySelectorAll('.hero-side-decor path:not([mask])');
      const circleElements = document.querySelectorAll('.hero-side-decor circle');

      if (pathElements.length === 0 && circleElements.length === 0) return;

      // Initial setup
      gsap.set(pathElements, { 
        strokeDasharray: (i, el) => el.getTotalLength(),
        strokeDashoffset: (i, el) => -el.getTotalLength(),
        opacity: 0
      });

      gsap.set(circleElements, { 
        scale: 0,
        opacity: 0
      });

      // Simple timeline
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.to(pathElements, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1
      })
      .to(circleElements, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.2)"
      }, "-=0.5");

      return () => tl.kill();
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
