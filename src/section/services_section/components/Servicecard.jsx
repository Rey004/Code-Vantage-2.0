import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import "./Servicecard.css"

const Servicecard = (props) => {
  const cardRef = useRef();
  const imageRef = useRef();
  const verticalTitleRef = useRef();
  const horizontalContentRef = useRef();

  useGSAP(() => {
    gsap.killTweensOf([
      cardRef.current,
      imageRef.current,
      verticalTitleRef.current,
      horizontalContentRef.current,
      horizontalContentRef.current.children
    ]);

    if (props.isActive) {
      // First hide vertical title
      gsap.to(verticalTitleRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(verticalTitleRef.current, { visibility: 'hidden' });
        }
      });

      // Animate image for active state
      gsap.to(imageRef.current, {
        duration: 0.3,
        ease: 'power2.inOut',
      });

      gsap.to(cardRef.current, {
        flex: 3,
        duration: 0.2,
        ease: 'power2.out',
      });

      // First make content visible, then animate
      gsap.set(horizontalContentRef.current, { 
        display: 'flex',
        x: 50
      });
      
      gsap.to(horizontalContentRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.2,
        delay: 0.2,
        ease: 'power2.out'
      });
      
      // Animate children elements separately
      gsap.from(horizontalContentRef.current.children, {
        x: 30,
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
        stagger: 0.1,
        ease: 'power2.out'
      });
    } else {
      // Show vertical title first
      gsap.set(verticalTitleRef.current, { visibility: 'visible' });
      gsap.to(verticalTitleRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Animate image for inactive state
      gsap.to(imageRef.current, {
        duration: 0.3,
        ease: 'power2.inOut',
      });

      // Update exit animation
      gsap.to(horizontalContentRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(horizontalContentRef.current, { 
            display: 'none',
          });
        }
      });
      gsap.to(cardRef.current, {
        flex: 1,
        duration: 0.3,
        delay: 0.05,
        ease: 'power2.in',
      });
      gsap.to(verticalTitleRef.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.3,
        ease: 'power2.in',
      });
    }

    // Cleanup function
    return () => {
      gsap.killTweensOf([
        cardRef.current,
        imageRef.current,
        verticalTitleRef.current,
        horizontalContentRef.current,
        horizontalContentRef.current.children
      ]);
    };
  }, { dependencies: [props.isActive] });

  return (
    <div
      ref={cardRef}
      className={`card ${props.isActive ? 'active' : ''}`}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onLeave}
    >
      <div ref={imageRef} className="card-image">
        <img src={props.image} alt={props.title} />
      </div>
      <h2 ref={verticalTitleRef} className="card-title-vertical">{props.title}</h2>
      <div ref={horizontalContentRef} className="card-content">
        <h2 className="card-title-horizontal">{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div className="servicecardgradient"></div>
    </div>
  );
};

export default Servicecard
