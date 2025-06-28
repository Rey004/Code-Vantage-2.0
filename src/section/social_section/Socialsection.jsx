import { useRef, memo } from 'react'
import './socialsection.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Socialsection = memo(() => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth <= 1024) return;

    // Simple setup
    gsap.set(headingRef.current, { opacity: 0, y: 30 });
    gsap.set(['.social-orbits', '.social'], { y: 50, opacity: 0 });
    gsap.set(['.linkedin', '.instagram'], { y: 30, opacity: 0 });

    // Simple timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.social-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to(['.social-orbits', '.social'], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2
    }, '-=0.4')
    .to(['.linkedin', '.instagram'], {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    }, '-=0.4');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: containerRef });

  return (
    <section className='social-section' ref={containerRef}>
      <div className="socialglow1"></div>
      <div className="socialglow2"></div>
      <div className="social-container">
        <h1 ref={headingRef}>Follow our journey</h1>
        <div className="social-links">
            <img className='social-orbits' src={'/assets/social-orbits.webp'} alt="" loading="lazy" />
            <img className='social' src={'/assets/Social.webp'} alt="" loading="lazy" />
            <a className="linkedin" href='https://www.linkedin.com/company/code-vantage-in/' target='_blank' rel="noopener noreferrer">
                <img className='linkedin-button' src={'/assets/Modern-Button-Linkedin.webp'} alt="" loading="lazy" />
                <img className='linkedin-icon' src={'/assets/Linkedin-Icon.webp'} alt="" loading="lazy" />
            </a>
            <a className="instagram" href='https://www.instagram.com/codevantage.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel="noopener noreferrer">
                <img className='instagram-button' src={'/assets/Modern-Button-Instagram.webp'} alt="" loading="lazy" />
                <img className='instagram-icon' src={'/assets/Insta-Icon.webp'} alt="" loading="lazy" />
            </a>
        </div>
      </div>
    </section>
  )
})

Socialsection.displayName = 'Socialsection';

export default Socialsection