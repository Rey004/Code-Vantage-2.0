import React, { useRef, memo } from 'react'
import './socialsection.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Socialsection = memo(() => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth > 1024) {
      // Split text setup remains same
      const text = new SplitType(headingRef.current, { 
        types: 'words,chars',
        wordClass: 'word',
        charClass: 'char'
      });
      
      const chars = text.chars;

      // Set initial states
      gsap.set(chars, { opacity: 0 });
      gsap.set(['.social-orbits', '.social'], { y: 100, opacity: 0 });
      gsap.set(['.linkedin', '.instagram'], { y: 50, opacity: 0 });

      // Text animation
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.social-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      textTl.to(chars, {
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 0.5,
          from: "random",
          ease: "power2.inOut"
        }
      });

      // Social elements reveal animation
      const socialTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.social-section',
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      });

      socialTl
        .to('.social-orbits', {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        })
        .to('.social', {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.5')
        .to(['.linkedin', '.instagram'], {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        }, '-=0.5');

      return () => text.revert();
    }
  });

  return (
    <section className='social-section' ref={containerRef}>
      <div className="socialglow1"></div>
      <div className="socialglow2"></div>
      <div className="social-container">
        <h1 ref={headingRef}>Follow our journey</h1>
        <div className="social-links">
            <img className='social-orbits' src={'/assets/social-orbits.webp'} alt="" />
            <img className='social' src={'/assets/Social.webp'} alt="" />
            <a className="linkedin" href='https://www.linkedin.com/company/code-vantage-in/' target='_blank'>
                <img className='linkedin-button' src={'/assets/Modern-Button-Linkedin.webp'} alt="" />
                <img className='linkedin-icon' src={'/assets/Linkedin-Icon.webp'} alt="" />
            </a>
            <a className="instagram" href='https://www.instagram.com/codevantage.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>
                <img className='instagram-button' src={'/assets/Modern-Button-Instagram.webp'} alt="" />
                <img className='instagram-icon' src={'/assets/Insta-Icon.webp'} alt="" />
            </a>
        </div>
      </div>
    </section>
  )
})

export default Socialsection