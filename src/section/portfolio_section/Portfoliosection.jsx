import React, { useEffect } from 'react'
import "./portfoliosection.css"
import Button from "../../components/Button"
import Portfolioitem from './Portfolioitem'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { debounce, throttle } from 'lodash';

gsap.registerPlugin(ScrollTrigger);

const Portfoliosection = () => {
  useEffect(() => {
    const handleAnimations = () => {
      if (window.innerWidth > 1024) {
        const content = document.querySelector('.portfolio-content, .portfolio-content-mobile');
        
        const handleWheel = throttle((e) => {
          window.scrollBy({
            top: e.deltaY,
            behavior: 'smooth'
          });
        }, 200);

        // Separate timeline for dial animation
        const dialTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.portfolio-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        // Set initial state for dial
        gsap.set('.dial', {
          opacity: 0,
          scale: 0.8
        });

        // Set initial states for SVG elements
        const svgTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.portfolio-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        svgTl
        gsap.set('.portfolio-svg path:not([mask])', { 
          strokeDasharray: function(i, el) {
            return el.getTotalLength();
          },
          strokeDashoffset: function(i, el) {
            return -el.getTotalLength();
          }
        });

        gsap.set('.portfolio-svg circle', { 
          scale: 0,
        });

        gsap.set('.portfolio-svg path[mask]', { 
          opacity: 0
        });

        gsap.set(['.portfolio-title-text', '.portfolio-title-description'], {
          y: 50,
          opacity: 0
        });

        // Main timeline for title animations
        const titleT1 = gsap.timeline({
          scrollTrigger: {
            trigger: '.portfolio-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        titleT1
          .to('.portfolio-svg path:not([mask])', {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2
          })
          .to('.portfolio-svg circle', {
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
          }, "-=0.5")
          .to('.portfolio-svg path[mask]', {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: {
              amount: 0.5,
              from: "start"
            }
          }, "-=0.5")
          .to('.portfolio-title-text', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
          }, "-=1.5")
          .to('.portfolio-title-description', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
          }, "-=1.2");

        // Dial animation
        dialTl
          .to('.dial', {
            opacity: 0.15,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
          })
          .to('.dial', {
            y: 20,
            rotation: 10,
            duration: 5,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
          }, "-=0.5");
      } else {
        gsap.killTweensOf('.portfolio-svg path, .portfolio-svg circle, .portfolio-title-text, .portfolio-title-description, .dial');
        gsap.set('.portfolio-svg path, .portfolio-svg circle, .portfolio-title-text, .portfolio-title-description, .dial', { clearProps: 'all' });
      }
    };

    handleAnimations();

    const handleResize = debounce(() => {
      handleAnimations();
      ScrollTrigger.refresh();
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <sec className='portfolio-section'>
        <div className='portfolio-container'>
        <div className="portfolioglow1"></div>
        <div className="portfolioglow2"></div>
            {/* DESKTOP PORTFOLIO TITLE */}
            <div className='portfolio-title'>
            <svg className='portfolio-svg' width="391" height="152" viewBox="0 0 391 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="128" cy="127.5" r="5" transform="rotate(90 128 127.5)" fill="#D9D9D9" fillOpacity="0.3"/>
                <path d="M123.5 127L51.5 127C46.5294 127 42.5 122.971 42.5 118V118L42.5 9.5C42.5 4.80558 38.6944 1 34 1V1L-43 1" stroke="white" strokeOpacity="0.25"/>
                
                {/* PORTFOLIO text */}
                <path d="M150.696 116.868H165.032C168.104 116.868 170.088 117.764 171.528 119.204C173.032 120.708 173.928 122.788 173.928 124.964C173.928 126.884 173.224 128.708 172.04 130.148C170.568 131.908 168.36 133.06 165.032 133.06H155.08V138.5H149.288V118.212C149.288 117.316 149.768 116.868 150.696 116.868ZM155.08 127.748H165.16C166.44 127.748 167.176 127.364 167.656 126.724C167.976 126.308 168.168 125.796 168.168 125.188C168.168 124.548 167.976 124.004 167.624 123.556C167.144 122.98 166.408 122.596 165.16 122.596H155.496C155.24 122.596 155.08 122.724 155.08 123.044V127.748ZM191.808 138.5H187.264C183.392 138.5 180.544 137.156 178.56 134.98C176.832 133.092 175.776 130.532 175.776 127.684C175.776 124.548 177.12 121.7 179.264 119.716C181.184 117.956 183.776 116.868 187.264 116.868H191.808C195.296 116.868 197.888 117.956 199.808 119.716C201.952 121.7 203.296 124.548 203.296 127.684C203.296 130.532 202.24 133.092 200.512 134.98C198.528 137.156 195.68 138.5 191.808 138.5ZM191.808 122.596H187.264C185.312 122.596 184.096 123.14 183.168 124.004C182.176 124.932 181.568 126.276 181.568 127.716C181.568 129.028 182.08 130.244 182.912 131.14C183.84 132.164 185.216 132.804 187.264 132.804H191.808C193.856 132.804 195.232 132.164 196.16 131.14C196.992 130.244 197.504 129.028 197.504 127.716C197.504 126.276 196.896 124.932 195.904 124.004C194.976 123.14 193.76 122.596 191.808 122.596ZM211.861 130.82V138.5H206.069V118.212C206.069 117.316 206.549 116.868 207.509 116.868H222.869C225.525 116.868 227.221 117.668 228.405 118.916C229.461 120.036 230.133 121.54 230.133 123.172C230.133 124.9 229.621 126.532 228.085 127.652C229.525 128.516 230.165 129.668 230.165 132.132V136.452C230.165 137.38 230.197 137.892 230.261 138.5H224.405C224.341 138.02 224.309 137.54 224.309 137.06V132.74C224.309 131.364 223.637 130.82 221.941 130.82H211.861ZM211.861 125.892H222.101C222.901 125.892 223.381 125.604 223.733 125.188C223.989 124.868 224.149 124.484 224.149 124.068C224.149 123.62 223.989 123.172 223.669 122.852C223.349 122.5 222.837 122.276 222.101 122.276H212.341C212.021 122.276 211.861 122.468 211.861 122.756V125.892ZM232.046 116.868H256.846V122.596H247.374V138.5H241.55V122.596H232.046V116.868ZM263.003 116.868H281.851V122.596H265.787C265.179 122.596 264.891 122.916 264.891 123.556V125.892H281.755V131.268H264.891V138.5H259.099V120.836C259.099 118.148 260.411 116.868 263.003 116.868ZM299.965 138.5H295.421C291.549 138.5 288.701 137.156 286.717 134.98C284.989 133.092 283.933 130.532 283.933 127.684C283.933 124.548 285.277 121.7 287.421 119.716C289.341 117.956 291.933 116.868 295.421 116.868H299.965C303.453 116.868 306.045 117.956 307.965 119.716C310.109 121.7 311.453 124.548 311.453 127.684C311.453 130.532 310.397 133.092 308.669 134.98C306.685 137.156 303.837 138.5 299.965 138.5ZM299.965 122.596H295.421C293.469 122.596 292.253 123.14 291.325 124.004C290.333 124.932 289.725 126.276 289.725 127.716C289.725 129.028 290.237 130.244 291.069 131.14C291.997 132.164 293.373 132.804 295.421 132.804H299.965C302.013 132.804 303.389 132.164 304.317 131.14C305.149 130.244 305.661 129.028 305.661 127.716C305.661 126.276 305.053 124.932 304.061 124.004C303.133 123.14 301.917 122.596 299.965 122.596ZM336.755 138.5H321.043C315.731 138.5 314.003 136.164 314.003 131.46V116.868H319.827V130.916C319.827 132.484 320.243 132.964 321.747 132.964H336.755V138.5ZM339.038 116.868H344.862V138.5H339.038V116.868ZM363.652 138.5H359.108C355.236 138.5 352.388 137.156 350.404 134.98C348.676 133.092 347.62 130.532 347.62 127.684C347.62 124.548 348.964 121.7 351.108 119.716C353.028 117.956 355.62 116.868 359.108 116.868H363.652C367.14 116.868 369.732 117.956 371.652 119.716C373.796 121.7 375.14 124.548 375.14 127.684C375.14 130.532 374.084 133.092 372.356 134.98C370.372 137.156 367.524 138.5 363.652 138.5ZM363.652 122.596H359.108C357.156 122.596 355.94 123.14 355.012 124.004C354.02 124.932 353.412 126.276 353.412 127.716C353.412 129.028 353.924 130.244 354.756 131.14C355.684 132.164 357.06 132.804 359.108 132.804H363.652C365.7 132.804 367.076 132.164 368.004 131.14C368.836 130.244 369.348 129.028 369.348 127.716C369.348 126.276 368.74 124.932 367.748 124.004C366.82 123.14 365.604 122.596 363.652 122.596ZM383.652" 
                  stroke="white" strokeOpacity="0.25" strokeWidth="1" fill="none"/>
            </svg>
                <h1 className='portfolio-title-text'>Some of our work</h1>
                <p className='portfolio-title-description'>We believe in creating a unique and memorable experience for our clients, you can see some glimpse of it.</p>
                <img className='dial' src="/assets/Dial.webp" alt="" />
            </div>

            {/* DESKTOP PORTFOLIO CONTENT */}
            <div className='portfolio-content'>
                 <Portfolioitem name="Freak Lifestyle" link="https://freaklifestyle.com" image="/assets/Freak-Lifestyle.webp" />
                 <Portfolioitem name="Rey Ventures" link="https://rey004.github.io/Rey-Ventures/" image="/assets/Rey-Ventures.webp" />
            </div>

            {/* MOBILE PORTFOLIO TITLE */}
            <div className='portfolio-title-mobile'>
                <svg className='portfolio-svg' width="391" height="152" viewBox="0 0 391 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="128" cy="127.5" r="5" transform="rotate(90 128 127.5)" fill="#D9D9D9" fillOpacity="0.3"/>
                    <path d="M123.5 127L51.5 127C46.5294 127 42.5 122.971 42.5 118V118L42.5 9.5C42.5 4.80558 38.6944 1 34 1V1L-43 1" stroke="white" strokeOpacity="0.25"/>
                    
                    {/* PORTFOLIO text */}
                    <path d="M150.696 116.868H165.032C168.104 116.868 170.088 117.764 171.528 119.204C173.032 120.708 173.928 122.788 173.928 124.964C173.928 126.884 173.224 128.708 172.04 130.148C170.568 131.908 168.36 133.06 165.032 133.06H155.08V138.5H149.288V118.212C149.288 117.316 149.768 116.868 150.696 116.868ZM155.08 127.748H165.16C166.44 127.748 167.176 127.364 167.656 126.724C167.976 126.308 168.168 125.796 168.168 125.188C168.168 124.548 167.976 124.004 167.624 123.556C167.144 122.98 166.408 122.596 165.16 122.596H155.496C155.24 122.596 155.08 122.724 155.08 123.044V127.748ZM191.808 138.5H187.264C183.392 138.5 180.544 137.156 178.56 134.98C176.832 133.092 175.776 130.532 175.776 127.684C175.776 124.548 177.12 121.7 179.264 119.716C181.184 117.956 183.776 116.868 187.264 116.868H191.808C195.296 116.868 197.888 117.956 199.808 119.716C201.952 121.7 203.296 124.548 203.296 127.684C203.296 130.532 202.24 133.092 200.512 134.98C198.528 137.156 195.68 138.5 191.808 138.5ZM191.808 122.596H187.264C185.312 122.596 184.096 123.14 183.168 124.004C182.176 124.932 181.568 126.276 181.568 127.716C181.568 129.028 182.08 130.244 182.912 131.14C183.84 132.164 185.216 132.804 187.264 132.804H191.808C193.856 132.804 195.232 132.164 196.16 131.14C196.992 130.244 197.504 129.028 197.504 127.716C197.504 126.276 196.896 124.932 195.904 124.004C194.976 123.14 193.76 122.596 191.808 122.596ZM211.861 130.82V138.5H206.069V118.212C206.069 117.316 206.549 116.868 207.509 116.868H222.869C225.525 116.868 227.221 117.668 228.405 118.916C229.461 120.036 230.133 121.54 230.133 123.172C230.133 124.9 229.621 126.532 228.085 127.652C229.525 128.516 230.165 129.668 230.165 132.132V136.452C230.165 137.38 230.197 137.892 230.261 138.5H224.405C224.341 138.02 224.309 137.54 224.309 137.06V132.74C224.309 131.364 223.637 130.82 221.941 130.82H211.861ZM211.861 125.892H222.101C222.901 125.892 223.381 125.604 223.733 125.188C223.989 124.868 224.149 124.484 224.149 124.068C224.149 123.62 223.989 123.172 223.669 122.852C223.349 122.5 222.837 122.276 222.101 122.276H212.341C212.021 122.276 211.861 122.468 211.861 122.756V125.892ZM232.046 116.868H256.846V122.596H247.374V138.5H241.55V122.596H232.046V116.868ZM263.003 116.868H281.851V122.596H265.787C265.179 122.596 264.891 122.916 264.891 123.556V125.892H281.755V131.268H264.891V138.5H259.099V120.836C259.099 118.148 260.411 116.868 263.003 116.868ZM299.965 138.5H295.421C291.549 138.5 288.701 137.156 286.717 134.98C284.989 133.092 283.933 130.532 283.933 127.684C283.933 124.548 285.277 121.7 287.421 119.716C289.341 117.956 291.933 116.868 295.421 116.868H299.965C303.453 116.868 306.045 117.956 307.965 119.716C310.109 121.7 311.453 124.548 311.453 127.684C311.453 130.532 310.397 133.092 308.669 134.98C306.685 137.156 303.837 138.5 299.965 138.5ZM299.965 122.596H295.421C293.469 122.596 292.253 123.14 291.325 124.004C290.333 124.932 289.725 126.276 289.725 127.716C289.725 129.028 290.237 130.244 291.069 131.14C291.997 132.164 293.373 132.804 295.421 132.804H299.965C302.013 132.804 303.389 132.164 304.317 131.14C305.149 130.244 305.661 129.028 305.661 127.716C305.661 126.276 305.053 124.932 304.061 124.004C303.133 123.14 301.917 122.596 299.965 122.596ZM336.755 138.5H321.043C315.731 138.5 314.003 136.164 314.003 131.46V116.868H319.827V130.916C319.827 132.484 320.243 132.964 321.747 132.964H336.755V138.5ZM339.038 116.868H344.862V138.5H339.038V116.868ZM363.652 138.5H359.108C355.236 138.5 352.388 137.156 350.404 134.98C348.676 133.092 347.62 130.532 347.62 127.684C347.62 124.548 348.964 121.7 351.108 119.716C353.028 117.956 355.62 116.868 359.108 116.868H363.652C367.14 116.868 369.732 117.956 371.652 119.716C373.796 121.7 375.14 124.548 375.14 127.684C375.14 130.532 374.084 133.092 372.356 134.98C370.372 137.156 367.524 138.5 363.652 138.5ZM363.652 122.596H359.108C357.156 122.596 355.94 123.14 355.012 124.004C354.02 124.932 353.412 126.276 353.412 127.716C353.412 129.028 353.924 130.244 354.756 131.14C355.684 132.164 357.06 132.804 359.108 132.804H363.652C365.7 132.804 367.076 132.164 368.004 131.14C368.836 130.244 369.348 129.028 369.348 127.716C369.348 126.276 368.74 124.932 367.748 124.004C366.82 123.14 365.604 122.596 363.652 122.596ZM383.652" 
                      stroke="white" strokeOpacity="0.25" strokeWidth="1" fill="none"/>
                </svg>
                <h1 className='portfolio-title-text'>Some of our work</h1>
                <p className='portfolio-title-description'>We believe in creating a unique and memorable experience for our clients, you can see some glimpse of it.</p>
                <img className='dial' src="/assets/Dial.webp" alt="" />
            </div>

            {/* MOBILE PORTFOLIO CONTENT */}
            <div className='portfolio-content-mobile'>
                 <Portfolioitem name="Freak Lifestyle" link="https://freaklifestyle.com" image="/assets/Freak-Lifestyle.webp" />
                 <Portfolioitem name="Rey Ventures" link="https://rey004.github.io/Rey-Ventures/" image="/assets/Rey-Ventures.webp" />
            </div>
        </div>
    </sec>
  )
}

export default Portfoliosection
