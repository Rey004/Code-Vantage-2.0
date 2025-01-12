import React, { useState, useEffect, useRef } from 'react'
import Servicecard from './components/Servicecard'
import MobileServiceSection from './components/MobileServiceSection'
import './Servicesection.css'

const cardData = [
  { 
    id: 1, 
    title: 'Web Development', 
    content: "Our web development services focus on creating unique, responsive, and highly functional websites. Whether it's a WordPress, Webflow, Shopify, or custom-coded platform, we ensure your site stands out and performs excellently in search engines.",
    image: '/assets/web-development-service.webp'
  },
  { 
    id: 2, 
    title: 'Web Design', 
    content: 'We craft eye-catching and unique designs using Figma, tailored to represent your brand perfectly. Our design process ensures your website is not only visually appealing but also provides an intuitive user experience.',
    image: '/assets/web-design-service.webp'
  }
];

const Servicesection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const clearTransitionTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleCardHover = (index) => {
    clearTransitionTimeout();
    setActiveCard(index);
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handleCardLeave = () => {
    clearTransitionTimeout();
    setActiveCard(0);
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTransitionTimeout();
      setIsTransitioning(false);
    };
  }, []);

  return (
    <>
      <section className='servicesection'>
        <h2 className="servicesectionheading">SERVICES</h2>
        <div className="services-section-container">
          {cardData.map((card, index) => (
            <Servicecard
              key={card.id}
              title={card.title}
              content={card.content}
              image={card.image}
              isActive={index === activeCard}
              onHover={() => handleCardHover(index)}
              onLeave={handleCardLeave}
            />
          ))}
        </div>
      </section>
      <MobileServiceSection cardData={cardData} />
    </>
  );
}

export default Servicesection
