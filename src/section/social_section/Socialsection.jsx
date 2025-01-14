import React, { useEffect, useRef, memo } from 'react'
import './socialsection.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { debounce } from 'lodash'

gsap.registerPlugin(ScrollTrigger)

const Socialsection = memo(() => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Split text into words and characters
    const text = new SplitType(headingRef.current, { 
      types: 'words,chars',
      wordClass: 'word',
      charClass: 'char'
    });
    
    const chars = text.chars;

    // Set initial state
    // gsap.set(chars, {
    //   opacity: 0
    // });

        // Determine start points based on viewport width
    const startPointText = window.innerWidth < 768 ? 'top 100%' : 'top 80%';
    const startPointSocial = window.innerWidth < 768 ? 'top 100%' : 'top 60%';

    // Create timeline for text reveal
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.social-section',
        start: startPointText, // Adjusted start position for better mobile support
        // toggleActions: 'play none none reverse'
      }
    });

    // Animate characters with random stagger
    textTl.to(chars, {
      opacity: 1,
      duration: 0.8,
      stagger: {
        amount: 0.5,
        from: "random",
        ease: "power2.inOut"
      }
    });

    // Set initial states
    // gsap.set(['.social-orbits', '.social'], {
    //   y: 100,
    //   opacity: 0
    // });

    // gsap.set(['.linkedin', '.instagram'], {
    //   y: 50,
    //   opacity: 0
    // });

    // Create timeline
    const socialTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.social-section',
        start: startPointSocial, // Adjusted start position for better mobile support
        // toggleActions: 'play none none reverse'
      }
    });

    // Animate elements
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

    // Add continuous floating animation
    gsap.to(['.social-orbits', '.social'], {
      y: '-=20',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.linkedin', {
      y: '-=10',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.instagram', {
      y: '-=10',
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5
    });

    const updateScrollTrigger = debounce(() => {
      ScrollTrigger.refresh();
    }, 200);

    window.addEventListener('resize', updateScrollTrigger);

    return () => {
      text.revert();
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', updateScrollTrigger);
    };
  }, []);

  return (
    <section className='social-section'>
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