import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import "./Servicecard.css"

const Servicecard = (props) => {
  const cardRef = useRef();
  const imageRef = useRef();
  const verticalTitleRef = useRef();
  const horizontalContentRef = useRef();

  useGSAP(() => {
    // Kill any existing animations
    gsap.killTweensOf([cardRef.current, imageRef.current, verticalTitleRef.current, horizontalContentRef.current]);

    if (props.isActive) {
      // Simplified active state animation
      gsap.set(verticalTitleRef.current, { visibility: 'hidden', opacity: 0 });
      gsap.set(horizontalContentRef.current, { display: 'flex', opacity: 1 });
      
      gsap.to(cardRef.current, {
        flex: 3,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      // Simplified inactive state
      gsap.set(verticalTitleRef.current, { visibility: 'visible', opacity: 1 });
      gsap.set(horizontalContentRef.current, { display: 'none', opacity: 0 });
      
      gsap.to(cardRef.current, {
        flex: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    return () => {
      gsap.killTweensOf([cardRef.current, imageRef.current, verticalTitleRef.current, horizontalContentRef.current]);
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
        <img 
          src={props.image} 
          alt={props.title}
          loading="lazy"
          decoding="async"
        />
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

Servicecard.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Servicecard;
