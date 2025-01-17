import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Timelineitem from './components/Timelineitem'
import './Processsection.css'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Processsection = () => {
  const timelineData = [
    {
      step: "STEP ONE",
      number: 1,
      heading: "Meeting",
      image: "/assets/meeting.webp",
      description: "We start by gathering all relevant details about your business, target audience, color themes, and your expectations. This thorough understanding ensures that we align our vision with your goals."
    },
    {
      step: "STEP TWO",
      number: 2,
      heading: "Brainstorming",
      image: "/assets/brainstorming.webp",
      description: "Based on the insights from our meeting, we engage in comprehensive brainstorming sessions. We consider fonts, design aesthetics, website structure, and user psychology to create a solid foundation for your website."
    },
    {
      step: "STEP THREE",
      number: 3,
      heading: "Design & Prototyping",
      image: "/assets/designing.webp",
      description: "In the design phase, we create modern, professional, and relevant designs. Our focus is on delivering a clean, aesthetically pleasing interface without unnecessary elements, ensuring a seamless user experience."
    },
    {
      step: "STEP FOUR",
      number: 4,
      heading: "Developing",
      image: "/assets/developing.webp",
      description: "Finally, we bring the designs to life. Our development team writes clean, efficient code to build a responsive, functional, and bug-free website that meets all your requirements and exceeds your expectations."
    }
  ];

  useGSAP(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".process-timeline",
          start: "top 80%",
          end: "top 75%",
          scrub: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        }
      });

    
      if (window.innerWidth >= 1024) {
        timeline.from(".timeline-progress-bar", {
          opacity: 0,
          height: "0%",
      });

      timelineData.forEach((item) => {
        gsap.from(`.ti-${item.number}`, {
          opacity: 0.4,
          duration: 0.1,
          scrollTrigger: {
            trigger: `.timeline-trigger-${item.number}`,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
          }
        });
      });
    }
  }, []);

  return (
    <section className="process-section" id="process">
      <div className="processsectionheading"><h2>OUR PROCESS</h2></div>
        <div className="process-timeline">
            <div className="timeline-progress">
                <div className="timeline-progress-bar"></div>
            </div>

            {timelineData.map((item, index) => (
                <Timelineitem 
                    key={index}
                    step={item.step}
                    number={item.number}
                    heading={item.heading}
                    image={item.image}
                    description={item.description}
                />
            ))}
        </div>
    </section>
  )
}

export default Processsection
