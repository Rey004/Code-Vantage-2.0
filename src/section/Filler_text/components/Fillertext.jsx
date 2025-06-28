import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Fillertext = () => {
  useGSAP(() => {
    if (window.innerWidth > 1024) {
      const splitTypes = document.querySelectorAll('.filler-text div')

      splitTypes.forEach((char) => {
          const text = new SplitType(char, { types: 'chars'})

          gsap.fromTo(text.chars, 
              {
                  opacity: 0.2
              },
              {
                  opacity:1,
                  duration: 2.5,
                  ease: "power2.out",
                  stagger: 0.05,
                  scrollTrigger: {
                      trigger: char,
                      start: 'top 80%',
                      end: 'top 20%',
                      scrub: 1.5,
                      toggleActions: 'play play reverse reverse'
                  }
          })
      })
    }
  })

  return (
    <div className="filler-text">
        <img className='filler-bracketblue' src="\assets\Bracket Blue.webp" alt="" />
        <img className='filler-starabove' src="\assets\Star.webp" alt="" />
            <div style={{padding: "32px 48px", zIndex: "2", position: "relative"}}>
            Elevating the web<br />
            experience with<br />
            next-gen design
            </div>
        <img className='filler-starbelow' src="\assets\Star.webp" alt="" />
        <img className='filler-bracketpurple' src="\assets\Bracket Purple.webp" alt="" />
    </div>
  )
}

export default Fillertext;