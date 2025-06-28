import { useState } from 'react';
import Servicecard from './components/Servicecard';
import MobileServiceSection from './components/MobileServiceSection';
import './Servicesection.css';

const CARD_DATA = [
  { 
    id: 1, 
    title: 'Web Development', 
    content: "Our web development services focus on creating unique, responsive, and highly functional websites. Whether it's a WordPress, Webflow, Shopify, or custom-coded platform, we ensure your site stands out and performs excellently in search engines.",
    image: '/assets/web-development-service.webp'
  },
  { 
    id: 2, 
    title: 'UI/UX Design', 
    content: 'We craft eye-catching and unique designs using Figma, tailored to represent your brand perfectly. Our design process ensures your website is not only visually appealing but also provides an intuitive user experience.',
    image: '/assets/web-design-service.webp'
  },
  { 
    id: 3, 
    title: 'App Development', 
    content: 'We develop mobile applications for iOS and Android platforms, creating user-friendly and feature-rich apps that engage your audience and drive business growth.',
    image: '/assets/web-development-service.webp'
  }
];

const Servicesection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(0);
  };

  return (
    <section className='servicesection' id='services'>
      <h2 className="servicesectionheading">WHAT WE PROVIDE</h2>
      <div className="services-section-container">
        {CARD_DATA.map((card, index) => (
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
      <MobileServiceSection cardData={CARD_DATA} />
    </section>
  );
}

export default Servicesection;
