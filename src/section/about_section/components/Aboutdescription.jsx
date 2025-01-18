import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Aboutdescription = () => {
  useGSAP(() => {
    if (window.innerWidth > 1024) {
      const splitTypes = document.querySelectorAll('.about-description')

      splitTypes.forEach((char,i) => {
          const text = new SplitType(char, { types: 'words'})

          gsap.fromTo(text.words, 
              {
                  opacity: 0.3
              },
              {
                  opacity:1,
                  duration: 4,
                  stagger: 0.1,
                  scrollTrigger: {
                      trigger: char,
                      start: 'top 80%',
                      end: 'top 20%',
                      scrub: true,
                      toggleActions: 'play play reverse reverse'
                  }
          })
      })
    }
  })

  return (
    <div className="about-description">
                    <ol>
                        <li> We create <span className="about-light-blue">visually unique</span> websites with intuitive <span className="about-light-blue">user interfaces</span> to ensure a memorable user experience.</li>
                        <li>Our websites are built to load <span className="about-purple">quickly</span> and run <span className="about-purple">efficiently</span>, providing a seamless browsing experience.</li>
                        <li>We prioritize <span className="about-yellow">SEO</span> to enhance your website's visibility and <span className="about-yellow">ranking</span> on search engines, driving more organic traffic.</li>
                        <li>We deliver exceptional results and a <span className="about-orange">professional</span> process, offering more <span className="about-orange">value</span> than we charge.</li>
                    </ol>
    </div>
  )
}

export default Aboutdescription
